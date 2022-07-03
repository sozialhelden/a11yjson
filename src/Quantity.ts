import * as Qty from 'js-quantities';

import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';

export enum UnitKind {
  Length = 'length',
  Other = 'other',
  Unitless = 'unitless',
  Speed = 'speed',
  Force = 'force',
}

/**
 * Builds a custom validation function that ensures that the value of the field is a unit of the
 * kind passed to `validateUnit`
 *
 * If the validation fails, a new `notAllowed` error message is raised.
 *
 * @param {string} kind One of js-quantities unit kinds, e.g. length, mass, etc.
 * @returns {ValidationFunction} A custom SimpleSchema Validation function
 */
export const validateUnit = function (kind: UnitKind): ValidationFunction {
  return function (this: ValidationFunctionSelf<string>) {
    try {
      const qty = Qty(this.value);
      if (!qty || qty.scalar !== 1 || qty.kind() !== kind) {
        return 'notAllowed';
      }
    } catch (e) {
      if (e instanceof Qty.Error) {
        return 'notAllowed';
      }
      throw e;
    }

    return undefined;
  };
};

/**
 * The allowed operators for comparison quantities
 */
export type Operator = '<' | '<=' | '==' | '>=' | '>' | '=' | '~' | '~=' | '!=';

export const operators: Operator[] = ['<', '<=', '==', '>=', '>', '=', '~', '~=', '!='];

/**
 * Describes a quantity of a unit type.
 */
export interface Quantity {
  /** the operator, indicating the value is not an absolute value */
  operator?: Operator;
  /** the value in the specified unit */
  value: number;
  /** one of the length units in js-quantities */
  unit?: string;
  /** raw, imported value, eg. '90 .. 120cm' - only required when importing */
  rawValue?: string;
  /** ± in given units, uniform error */
  accuracy?: number;
}

/**
 * The BaseQuantitySchema allows easy validation, cleaning and checking of quantity objects. It does
 * not define a unit kind, and will not validate the unit.
 */
export const BaseQuantitySchemaDefinition = {
  operator: {
    type: String,
    allowedValues: ['<', '<=', '==', '>=', '>'],
    optional: true,
  },
  value: {
    type: Number,
  },
  unit: {
    type: String,
    optional: true,
  },
  accuracy: {
    type: Number,
    optional: true,
  },
  rawValue: {
    type: String,
    optional: true,
  },
};

// takes the BaseQuantitySchema and extends it with validation for the given unit type
const createQuantitySchemaDefinition = (
  kind: UnitKind,
  defaultUnit?: string,
): Record<string, SchemaDefinition> => ({
  ...BaseQuantitySchemaDefinition,
  ...(kind !== UnitKind.Unitless
    ? {
      unit: {
        type: String,
        custom: validateUnit(kind),
        defaultValue: defaultUnit,
      },
    }
    : {}),
});

/**
 * The LengthQuantitySchema allows easy validation, cleaning and checking of length quantity
 * objects. It validates the unit and will only accept length units, eg. meter, centimeter or inch.
 */
export const LengthSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Length, 'meter');
export const SpeedSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Speed, 'meter/second');
export const ForceSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Force, 'Newton');
export const VolumeSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Unitless, 'dB');
export const SlopeSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Unitless);

export type Length = Quantity | string;
export type Volume = Quantity | string;
export type Slope = Quantity | string;
export type Force = Quantity | string;
export type Speed = Quantity | string;

export function parseQuantity(unitString: string): Quantity | string {
  const matches = unitString.match(
    /^(>|<|<=|>=|=|==|~|~=|!=)? *([+-])? *(\d+(?:\.\d+)?)(?: *.. *([+-])? *(\d+(?:\.\d+)?))? *(.+)?$/,
  ) || [];

  const [, operator, valuePrefix1, value1, valuePrefix2, value2, unit] = matches;
  const valueAsNumber1 = parseFloat(value1);
  const valueAsNumber2 = parseFloat(value2);

  let interpretedValue1 = NaN;
  let interpretedValue2 = NaN;

  if (typeof value1 !== 'undefined') {
    interpretedValue1 = valuePrefix1 === '-' ? -valueAsNumber1 : valueAsNumber1;
  }
  if (typeof value2 !== 'undefined') {
    interpretedValue2 = valuePrefix2 === '-' ? -valueAsNumber2 : valueAsNumber2;
  }

  const isRange = typeof value2 !== 'undefined';
  const halfDifference = isRange ? 0.5 * (interpretedValue2 - interpretedValue1) : NaN;

  const result: Quantity = {
    value: isRange ? interpretedValue1 + halfDifference : interpretedValue1,
    unit,
    rawValue: unitString,
  };
  if (isRange) {
    result.accuracy = halfDifference;
  }
  if (operator && operators.includes(operator as Operator)) {
    result.operator = operator as Operator;
  }

  return result;
}

export function getPrefixedQuantitySchemaDefinition(
  prefix: string,
  definition: Record<string, SchemaDefinition>,
): Record<string, SchemaDefinition> {
  const extension: Partial<SchemaDefinition> = {
    autoValue() {
      if (this.isSet && typeof this.value === 'string') {
        return parseQuantity(this.value);
      }
      return undefined;
    },
  };
  return getPrefixedSchemaDefinition(prefix, definition, extension);
}
