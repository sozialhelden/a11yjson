import { LengthSchema } from '../src/units'
import SimpleSchema from 'simpl-schema'

const lengthStringFixture = '10cm'

const lengthQuantityFixture = { value: 10, unit: 'meter', rawValue: '10m' }
const lengthQuantityWithAccuracyFixture = {
  value: 10,
  unit: 'kilometer',
  accuracy: 2,
  rawValue: '10km'
}

// BUG: cannot have more than one Schema Instance in oneOf see https://github.com/aldeed/simple-schema-js/issues/112
// const lengthQuantityRangeFixture = {from: 10, to: 20, unit: 'meter', rawValue: '10m'};
// const lengthQuantityRangeWithAccuracyFixture = {from: 10, to: 20, unit: 'kilometer', accuracy: 2, rawValue: '10km'};

// const lengthEstimatedQuantityFixture = {from: 10, to: 20, unit: 'meter', rawValue: '10m'};
// const lengthEstimatedQuantityWithAccuracyFixture = {from: 10, to: 20, unit: 'kilometer', accuracy: 2, rawValue: '10km'};

const allValidFixtures = Object.freeze([
  lengthStringFixture,
  lengthQuantityFixture,
  lengthQuantityWithAccuracyFixture
  // lengthQuantityRangeFixture,
  // lengthQuantityRangeWithAccuracyFixture,
  // lengthEstimatedQuantityFixture,
  // lengthEstimatedQuantityWithAccuracyFixture,
])

const lengthInvalidUnitQuantityFixture = {
  value: 10,
  unit: 'breadcrumbs',
  rawValue: '10breadcrumb'
}

const allInvalidFixtures = Object.freeze([
  undefined,
  {},
  lengthInvalidUnitQuantityFixture
])

const SchemaWithLengthField = new SimpleSchema({ field: LengthSchema })

describe('Length Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = SchemaWithLengthField.newContext()
      context.validate({ field: value })
      expect(context.isValid()).toBeFalsy()
    })
  })
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = SchemaWithLengthField.newContext()
      context.validate({ field: value })
      expect(context.isValid()).toBeTruthy()
    })
  })
})
