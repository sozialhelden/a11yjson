/* eslint-disable import/no-relative-packages */
import {
  getPrefixedQuantitySchemaDefinition,
  LengthSchema,
  parseQuantity,
  UnitlessSchema,
} from './Quantity.js';
import expectInvalidFixture from './lib/expectInvalidFixture.js';
import expectValidFixture from './lib/expectValidFixture.js';
import { SimpleSchema } from '../node_modules/simpl-schema/dist/esm/SimpleSchema.js';
import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';

const definition = getPrefixedQuantitySchemaDefinition('field', LengthSchema);
const schema = new SimpleSchema(definition);

function expectValidQuantity(value: any, overwrittenDefinition?: SchemaDefinition) {
  expectValidFixture(overwrittenDefinition || definition, schema.clean({ field: value }));
}

function expectInvalidUnitFixture(
  value: any,
  expectedValidationErrors: { name: string; type: string }[] = [],
) {
  expectInvalidFixture(definition, schema.clean({ field: value }), expectedValidationErrors);
}

describe('QuantitativeValue', () => {
  it('accepts a simple quantity string', () => expectValidQuantity('10cm'));

  it('accepts a QuantitativeValue object', () => expectValidQuantity({ value: 10, unit: 'meter', rawValue: '10m' }));

  it('accepts an object without unit', () => expectValidQuantity({ value: 10, rawValue: '10' }, getPrefixedQuantitySchemaDefinition('field', UnitlessSchema)));

  it('accepts a QuantitativeValue object with accuracy', () => expectValidQuantity({
    value: 10,
    unit: 'kilometer',
    precision: 2,
    rawValue: '10km',
  }));

  it('accepts a QuantitativeValue object with a constraint operator', () => expectValidQuantity({
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
