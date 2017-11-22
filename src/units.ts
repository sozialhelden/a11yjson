import Qty from 'js-quantities'
import SimpleSchema from 'simpl-schema'

// TODO make this more generic

SimpleSchema.setDefaultMessages({
  messages: {
    en: {
      invalid_unit: 'Invalid Unit'
    }
  }
})

const LengthUnitKind = 'length'

/**
 * Builds a custom validation function that ensures that the value of the field
 * is a unit of the kind passed to `validateUnit`
 *
 * If the validation fails, a new `invalid_unit` error message is raised.
 *
 * @param {string} kind One of js-quantities unit kinds, e.g. length, mass, etc.
 * @returns {ValidationFunction} A custom SimplSchema Validation function
 */
const validateUnit = function(kind: string): ValidationFunction {
  return function(this: ValidationFunctionSelf<string>) {
    const qty = Qty.parse(this.value)
    if (!qty || qty.scalar !== 1 || qty.kind() !== kind) {
      return 'invalid_unit'
    }

    return undefined
  }
}

export interface QuantityRange {
  from: number // the start value in the specified unit, less than to
  to: number // the end value in the specified unit, greater than from
  unit: string // one of the length units in js-quantities
  accuracy?: number // ± in given units, uniform error
  rawValue: string // raw, imported value, eg. '90 .. 120cm'
}

export interface Quantity {
  value: number // the value in the specified unit
  unit: string // one of the length units in js-quantities
  rawValue: string // raw, imported value, eg. '90 .. 120cm'
  accuracy?: number // ± in given units, uniform error
}

export interface EstimatedQuantity {
  operator?: '<' | '<=' | '==' | '>=' | '>'
  value: number // the value in the specified unit
  unit: string // one of the length units in js-quantities
  rawValue: string // raw, imported value, eg. '<20 cm'
  accuracy?: number // ± in given units, uniform error
}

export const LengthQuantitySchema = new SimpleSchema({
  value: {
    type: Number
  },
  unit: {
    type: String,
    custom: validateUnit(LengthUnitKind)
  },
  accuracy: {
    type: Number,
    optional: true
  },
  rawValue: String
})

export const LengthQuantityRangeSchema = new SimpleSchema({
  from: {
    type: Number
  },
  to: {
    type: Number
  },
  unit: {
    type: String,
    custom: validateUnit(LengthUnitKind)
  },
  accuracy: {
    type: Number,
    optional: true
  },
  rawValue: String
})

export const LengthEstimatedQuantitySchema = new SimpleSchema({
  operator: {
    type: String,
    allowedValues: ['<', '<=', '==', '>=', '>']
  },
  value: {
    type: Number
  },
  unit: {
    type: String,
    custom: validateUnit(LengthUnitKind)
  },
  accuracy: {
    type: Number,
    optional: true
  },
  rawValue: String
})

// BUG: cannot have more than one Schema Instance in oneOf see https://github.com/aldeed/simple-schema-js/issues/112
export const LengthSchema = SimpleSchema.oneOf(
  String,
  // LengthQuantityRangeSchema,
  LengthQuantitySchema
  // LengthEstimatedQuantitySchema,
)

export type Length = EstimatedQuantity | QuantityRange | Quantity | string
