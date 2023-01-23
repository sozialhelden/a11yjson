import {
  getPrefixedQuantitySchemaDefinition,
  LengthSchemaDefinition,
  parseQuantity,
} from './Quantity';
import expectInvalidFixture from './lib/expectInvalidFixture';
import expectValidFixture from './lib/expectValidFixture';
import * as FasterSchema from 'faster-schema';

const definition = getPrefixedQuantitySchemaDefinition('field', LengthSchemaDefinition);
const schema = new FasterSchema(definition);

function expectValidUnitFixture(value: any) {
  expectValidFixture(definition, schema.clean({ field: value }));
}

function expectInvalidUnitFixture(
  value: any,
  expectedValidationErrors: { name: string; type: string }[] = [],
) {
  expectInvalidFixture(definition, schema.clean({ field: value }), expectedValidationErrors);
}

describe('QuantitativeValue', () => {
  it('accepts a simple quantity string', () => expectValidUnitFixture('10cm'));

  it('accepts a QuantitativeValue object', () => expectValidUnitFixture({ value: 10, unit: 'meter', rawValue: '10m' }));

  it('accepts an object without unit', () => expectValidUnitFixture({ value: 10, rawValue: '10' }));

  it('accepts a QuantitativeValue object with accuracy', () => expectValidUnitFixture({
    value: 10,
    unit: 'kilometer',
    precision: 2,
    rawValue: '10km',
  }));

  it('accepts a QuantitativeValue object with a constraint operator', () => expectValidUnitFixture({
    value: 10,
    unit: 'kilometer',
    precision: 2,
    rawValue: '>= 10km',
    operator: '>=',
  }));

  it('rejects a string with an invalid operator', () => expectInvalidUnitFixture('@ 10m'));

  it('rejects a QuantitativeValue object with an invalid operator', () => expectInvalidUnitFixture(
    {
      value: 10,
      unit: 'kilometer',
      precision: 2,
      rawValue: '@ 10km',
      operator: '@',
    },
    [{ name: 'field.operator', type: 'notAllowed' }],
  ));

  it('rejects a string with an invalid unit', () => expectInvalidUnitFixture('10 breadcrumbs', [{ name: 'field.unit', type: 'notAllowed' }]));
});

describe('parseQuantity', () => {
  it('parses a string with a unit', () => {
    const lengthString = '10cm';
    const quantity = {
      value: 10,
      unit: 'cm',
      rawValue: '10cm',
    };
    expect(parseQuantity(lengthString)).toEqual(quantity);
  });

  it('parses a string with a range', () => {
    const lengthString = '10 ... 20 cm';
    const quantity = {
      min: 10,
      max: 20,
      unit: 'cm',
      rawValue: '10 ... 20 cm',
    };
    expect(parseQuantity(lengthString)).toEqual(quantity);
  });

  it('recognizes deciBels', () => {
    const lengthString = '10dB';
    const quantity = {
      value: 10,
      unit: 'dB',
      rawValue: '10dB',
    };
    expect(parseQuantity(lengthString)).toEqual(quantity);
  });
});
