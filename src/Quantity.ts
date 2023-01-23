import {
  SchemaDefinition, SchemaKeyDefinitionWithOneType, ValidatorContext, ValidatorFunction,
} from 'simpl-schema/dist/esm/types';
import * as Qty from 'js-quantities';
import { memoize } from 'lodash';

import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';

export enum UnitKind {
  Length = 'length',
  Other = 'other',
  Unitless = 'unitless',
  Speed = 'speed',
  Force = 'force',
  Time = 'time',
  Acceleration = 'acceleration',
  Mass = 'mass',
}

// https://stackoverflow.com/a/46759625/387719
function isConstructor(f: Function): boolean {
  try {
    Reflect.construct(String, [], f);
  } catch (e) {
    return false;
  }
  return true;
}

// Depending on the build environment and its configuration, the `Qty` constructor may be
// a function or a class. We need to handle both cases.
const QtyExport = (Qty as any).default || Qty;
const qtyIsConstructor = isConstructor(QtyExport);

/**
 * Builds a custom validation function that ensures that the value of the field is a unit of the
 * kind passed to `validateUnit`
 *
 * If the validation fails, a new `notAllowed` error message is raised.
 *
 * @param {string} kind One of js-quantities unit kinds, e.g. length, mass, etc.
 * @returns {ValidationFunction} A custom SimpleSchema Validation function
 */
export const validateUnit = function (kind: UnitKind): ValidatorFunction {
  return function generatedUnitValidationFunction(this: ValidatorContext) {
    try {
      const qty = qtyIsConstructor ? new QtyExport(this.value) : QtyExport(this.value);
      if (!qty || qty.scalar !== 1 || qty.kind() !== kind) {
        return 'notAllowed';
      }
    } catch (e) {
      if (e instanceof QtyExport.Error) {
        return 'notAllowed';
      }
      throw e;
    }

    return undefined;
  };
};

const memoizedValidateUnit = memoize(validateUnit);

/**
 * The allowed operators for comparison quantities
 */

export const Operators = ['<', '<=', '==', '>=', '>', '=', '~', '~=', '!='] as const;
export type Operator = typeof Operators[number];

/**
 * Describes a quantity of a unit type.
 */
export interface Quantity {
  /** the operator, indicating the value is not an absolute value */
  operator?: Operator;
  /** the value in the specified unit */
  value?: number;
  /** one of the length units in js-quantities */
  unit?: string;
  /** raw, imported value, eg. '90 .. 120cm' - only required when importing */
  rawValue?: string;
  /**
   * ± in given units, uniform error.
   *
   * @deprecated Please use the `precision` property instead.
   */
  accuracy?: number;
  /** ± in given units, uniform error */
  precision?: number;
  /** minimal value (inclusive) */
  min?: number;
  /** maximal value (inclusive) */
  max?: number;
}

/**
 * The BaseQuantitySchema allows easy validation, cleaning and checking of quantity objects. It does
 * not define a unit kind, and will not validate the unit.
 *
 * @hidden
 */
export const BaseQuantitySchemaDefinition = {
  operator: {
    type: String,
    allowedValues: ['<', '<=', '==', '>=', '>'],
    optional: true,
  },
  value: {
    type: Number,
    optional: true,
  },
  unit: {
    type: String,
    optional: true,
  },
  accuracy: {
    type: Number,
    optional: true,
  },
  precision: {
    type: Number,
    optional: true,
  },
  min: {
    type: Number,
    optional: true,
  },
  max: {
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
): SchemaDefinition => ({
  ...BaseQuantitySchemaDefinition,
  ...(kind !== UnitKind.Unitless
    ? {
      unit: {
        type: String,
        custom: memoizedValidateUnit(kind),
        defaultValue: defaultUnit,
      },
    }
    : {}),
});

/**
 * Validates a length quantity object and will only accept length units, eg. meter, centimeter or
 * inch.
 */
export const LengthSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Length, 'meter');

/**
 * Validates a speed quantity object and will only accept speed units, eg. meter/second, miles/hour
 * or similar.
 */
export const SpeedSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Speed, 'meter/second');

/**
 * Validates a acceleration quantity object and will only accept acceleration units, eg.
 * meter/second^2, miles/hour^2. Useful to describe the acceleration of a vehicle, or the
 * acceleration that a person is subjected to.
 */
export const AccelerationSchemaDefinition = createQuantitySchemaDefinition(
  UnitKind.Acceleration,
  'g',
);

/**
 * Validates a force quantity object and will only accept force units, eg. newton, or
 * kilogram*meter/second^2.
 */
export const ForceSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Force, 'Newton');

/**
 * Validates a timer interval object and will only accept time units, eg. seconds, minutes or hours.
 */
export const TimeIntervalSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Time, 's');

/**
 * Validates a mass quantity object and will only accept mass/weight units, eg. kilogram, gram or
 * pound.
 */
export const MassSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Mass, 's');

/**
 * Validates a sound volume quantity object and will only accept sound volume units, eg. decibel.
 */
export const VolumeSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Unitless, 'dB');

/**
 * Validates a frequency quantity object and will only accept frequency units, eg. hertz.
 */
export const HertzSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Unitless, 'Hz');

/**
 * Validates a slope quantity object and will only accept units to descrie a slope, eg. degrees.
 */
export const SlopeSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Unitless, 'deg');

/**
 * Validates a brightness descriptor and will only accept brightness units, eg. nits or lumens.
 */
export const BrightnessSchemaDefinition = createQuantitySchemaDefinition(UnitKind.Unitless, 'nits');

/**
 * Validates a temperature quantity object and will only accept temperature units, eg. degrees
 * celsius (`degC`), degrees Fahrenheit (`degF`) or kelvin (`K`).
 */
export const TemperatureSchemaDefinition = createQuantitySchemaDefinition(
  UnitKind.Unitless,
  'degC',
);

export type Length = Quantity | string;
export type Volume = Quantity | string;
export type Mass = Quantity | string;
export type Brightness = Quantity | string;
export type Slope = Quantity | string;
export type TimeInterval = Quantity | string;
export type Force = Quantity | string;
export type Speed = Quantity | string;
export type Acceleration = Quantity | string;
export type Hertz = Quantity | string;
export type Temperature = Quantity | string;

export function parseQuantity(unitString: string): Quantity | string {
  const matches = unitString.match(
    /^(>|<|<=|>=|=|==|~|~=|!=)? *([+-])? *(\d+(?:\.\d+)?)(?: *(\.\.\.?) *([+-])? *(\d+(?:\.\d+)?))? *(.+)?$/,
  ) || [];

  const [, operator, valuePrefix1, value1, dotOperator, valuePrefix2, value2, unit] = matches;
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

  const isAccuracyRange = typeof value2 !== 'undefined' && dotOperator === '..';
  const isRange = typeof value2 !== 'undefined' && dotOperator === '...';
  const halfDifference = isAccuracyRange ? 0.5 * (interpretedValue2 - interpretedValue1) : NaN;

  const result: Quantity = {
    ...(isRange
      ? { min: interpretedValue1, max: interpretedValue2 }
      : { value: isAccuracyRange ? interpretedValue1 + halfDifference : interpretedValue1 }),
    unit,
    rawValue: unitString,
  };
  if (isAccuracyRange) {
    result.accuracy = halfDifference;
    result.precision = halfDifference;
  }
  if (operator && Operators.includes(operator as Operator)) {
    result.operator = operator as Operator;
  }

  return result;
}

export function getPrefixedQuantitySchemaDefinition(
  prefix: string,
  definition: SchemaDefinition,
): SchemaDefinition {
  const extension: Partial<SchemaKeyDefinitionWithOneType> = {
    autoValue() {
      if (this.isSet && typeof this.value === 'string') {
        return parseQuantity(this.value);
      }
      return undefined;
    },
  };
  return getPrefixedSchemaDefinition(prefix, definition, extension);
}
