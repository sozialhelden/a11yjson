import * as Qty from 'js-quantities';
import { extend } from 'lodash';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './SimpleSchemaExtensions';

// register a custom error for invalid unit parsing
SimpleSchema.setDefaultMessages({
  messages: {
    en: {
      invalid_unit: 'Invalid Unit'
    }
  }
});

/**
 * The unit kind for length units such as meter, centimeter or inch
 */
export const LengthUnitKind = 'length';
export const OtherUnitKind = 'other';

/**
 * Builds a custom validation function that ensures that the value of the field
 * is a unit of the kind passed to `validateUnit`
 *
 * If the validation fails, a new `invalid_unit` error message is raised.
 *
 * @param {string} kind One of js-quantities unit kinds, e.g. length, mass, etc.
 * @returns {ValidationFunction} A custom SimpleSchema Validation function
 */
export const validateUnit = function(kind: string): ValidationFunction {
  return function(this: ValidationFunctionSelf<string>) {
    try {
      const qty = new Qty(this.value);
      if (!qty || qty.scalar !== 1 || qty.kind() !== kind) {
        return 'invalid_unit';
      }
    } catch (e) {
      if (e instanceof Qty.Error) {
        return 'invalid_unit';
      } else {
        throw e;
      }
    }

    return undefined;
  };
};

/**
 * The allowed operators for comparison quantities
 */
export type Operator = '<' | '<=' | '==' | '>=' | '>';

/**
 * Describes a quantity of a unit type.
 */
export interface Quantity {
  /** the operator, indicating the value is not an absolute value */
  operator?: Operator;
  /** the value in the specified unit */
  value: number;
  /** one of the length units in js-quantities */
  unit: string;
  /** raw, imported value, eg. '90 .. 120cm' - only required when importing */
  rawValue?: string;
  /** ± in given units, uniform error */
  accuracy?: number;
}

/**
 * The BaseQuantitySchema allows easy validation, cleaning and checking of quantity objects.
 * It does not define a unit kind, and will not validate the unit.
 */
export const BaseQuantitySchema = new SimpleSchema({
  operator: {
    type: String,
    allowedValues: ['<', '<=', '==', '>=', '>'],
    optional: true
  },
  value: {
    type: Number
  },
  unit: {
    type: String
  },
  accuracy: {
    type: Number,
    optional: true
  },
  rawValue: {
    type: String,
    optional: true
  }
});

// takes the BaseQuantitySchema and extends it with validation for the given unit type
const makeQuantitySchema = (kind: string, defaultValue: string) => {
  return createSchemaInstance(
    'Quantity',
    {
      unit: {
        type: String,
        custom: validateUnit(kind),
        defaultValue,
        accessibility: {
          preferredUnit: kind
        }
      }
    },
    BaseQuantitySchema
  );
};

/**
 * Looks at a simple schema, and determines the unit used for a key.
 * If the SimpleSchema is a QuantitySchema will always look at the unit key.
 *
 * @param {SimpleSchema} schema the schema to determine the unit of
 * @param {string} key the key to the schema property to determine the unit of
 * @returns {string} 'unknown' or one of the js-quantities unit kinds (e.g. 'length')
 */
export const determineUnitKind = (schema: SimpleSchema, key?: string): string => {
  if (!SimpleSchema.isSimpleSchema(schema)) {
    throw new Error('No simple schema passed to determineUnitKind');
  }

  if ((schema as any).__schemaType === 'Quantity') {
    key = 'unit';
  } else {
    if (!key) {
      throw new Error('No key passed into determineUnitKind for non Quantity schema');
    }

    key = `${key}.unit`;
  }

  const definition = schema.getDefinition(key, ['accessibility']);
  if (!definition || !definition.accessibility || !definition.accessibility.preferredUnit) {
    return 'unknown';
  }

  return definition.accessibility.preferredUnit;
};

/**
 * The LengthQuantitySchema allows easy validation, cleaning and checking of length quantity objects.
 * It validates the unit and will only accept length units, eg. meter, centimeter or inch.
 */
export const LengthQuantitySchema = makeQuantitySchema(LengthUnitKind, 'meter');
export const VolumeQuantitySchema = makeQuantitySchema(OtherUnitKind, 'decibel');

export const LengthSchema = SimpleSchema.oneOf(LengthQuantitySchema, String);
export const VolumeSchema = SimpleSchema.oneOf(VolumeQuantitySchema, String);

export type Length = Quantity | string;
export type Volume = Quantity | string;

export function quantityDefinition(type: SchemaType, optional: boolean = true, accessibility?: {}) {
  const base: SchemaDefinition = {
    type: LengthSchema,
    accessibility: {
      inseparable: true,
      componentHint: 'Unit'
    }
  };

  if (optional === true) {
    base.optional = optional;
  }

  if (accessibility) {
    extend(base.accessibility, accessibility);
  }

  return base;
}
