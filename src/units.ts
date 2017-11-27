import Qty from 'js-quantities';
import SimpleSchema from 'simpl-schema';

// TODO make this file more generic

SimpleSchema.setDefaultMessages({
  messages: {
    en: {
      invalid_unit: 'Invalid Unit'
    }
  }
});

const LengthUnitKind = 'length';

/**
 * Builds a custom validation function that ensures that the value of the field
 * is a unit of the kind passed to `validateUnit`
 *
 * If the validation fails, a new `invalid_unit` error message is raised.
 *
 * @param {string} kind One of js-quantities unit kinds, e.g. length, mass, etc.
 * @returns {ValidationFunction} A custom SimpleSchema Validation function
 */
const validateUnit = function(kind: string): ValidationFunction {
  return function(this: ValidationFunctionSelf<string>) {
    const qty = Qty.parse(this.value);
    if (!qty || qty.scalar !== 1 || qty.kind() !== kind) {
      return 'invalid_unit';
    }

    return undefined;
  };
};

export interface Quantity {
  operator?: '<' | '<=' | '==' | '>=' | '>';
  value: number; // the value in the specified unit
  unit: string; // one of the length units in js-quantities
  rawValue: string; // raw, imported value, eg. '90 .. 120cm'
  accuracy?: number; // ± in given units, uniform error
}

export const LengthQuantitySchema = new SimpleSchema({
  operator: {
    type: String,
    allowedValues: ['<', '<=', '==', '>=', '>'],
    optional: true
  },
  value: {
    type: Number
  },
  unit: {
    type: String,
    custom: validateUnit(LengthUnitKind),
    defaultValue: 'meter'
  },
  accuracy: {
    type: Number,
    optional: true
  },
  rawValue: String
});

export const LengthSchema = SimpleSchema.oneOf(String, LengthQuantitySchema);

export type Length = Quantity | string;
