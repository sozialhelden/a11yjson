import {
  determineUnitKind,
  LengthQuantitySchema,
  LengthSchema,
  quantityDefinition,
  validateUnit
} from '../src/Units';
import SimpleSchema from 'simpl-schema';

const lengthStringFixture = '10cm';

const lengthQuantityFixture = { value: 10, unit: 'meter', rawValue: '10m' };
const lengthQuantityWithAccuracyFixture = {
  value: 10,
  unit: 'kilometer',
  accuracy: 2,
  rawValue: '10km'
};

const lengthEstimatedQuantityFixture = {
  value: 10,
  unit: 'meter',
  rawValue: '< 10m',
  operator: '<'
};
const lengthEstimatedQuantityWithAccuracyFixture = {
  value: 10,
  unit: 'kilometer',
  accuracy: 2,
  rawValue: '>= 10km',
  operator: '>='
};

const allValidFixtures = Object.freeze([
  lengthStringFixture,
  lengthQuantityFixture,
  lengthQuantityWithAccuracyFixture,
  lengthEstimatedQuantityFixture,
  lengthEstimatedQuantityWithAccuracyFixture
]);

const lengthInvalidUnitQuantityFixture = {
  value: 10,
  unit: 'breadcrumbs',
  rawValue: '10breadcrumb'
};

const lengthInvalidOperatorEstimatedQuantityFixture = {
  value: 10,
  unit: 'meter',
  rawValue: '~ 10m',
  operator: '~'
};

const allInvalidFixtures = Object.freeze([
  undefined,
  {},
  lengthInvalidUnitQuantityFixture,
  lengthInvalidOperatorEstimatedQuantityFixture
]);

const SchemaWithLengthField = new SimpleSchema({ field: LengthSchema });

describe('Length Schema', () => {
  it('schema unit is added', () => {
    const preferredUnit = LengthQuantitySchema.getDefinition('unit', ['accessibility'])
      .accessibility.preferredUnit;
    expect(preferredUnit).toEqual('length');
  });
  it('validateUnit', () => {
    const validationFunction = validateUnit('length');
    expect(validationFunction.call({ value: '2m' } as any)).toEqual('invalid_unit');
    expect(validationFunction.call({ value: 'dB' } as any)).toEqual('invalid_unit');
    expect(validationFunction.call({ value: '1m' } as any)).toBeUndefined();
    expect(validationFunction.call({ value: 'centimeters' } as any)).toBeUndefined();
    expect(validationFunction.call({ value: '1 m' } as any)).toBeUndefined();
  });
  it('determineUnitKind', () => {
    expect(() => {
      determineUnitKind('foo' as any);
    }).toThrow('No simple schema passed to determineUnitKind');
    expect(() => {
      determineUnitKind(SchemaWithLengthField);
    }).toThrow('No key passed into determineUnitKind for non Quantity schema');

    expect(determineUnitKind(LengthQuantitySchema)).toEqual('length');
    expect(determineUnitKind(LengthQuantitySchema, 'invalid')).toEqual('length');
    expect(determineUnitKind(SchemaWithLengthField, 'field')).toEqual('length');

    expect(determineUnitKind(SchemaWithLengthField, 'invalid')).toEqual('unknown');
  });
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = SchemaWithLengthField.newContext();
      context.validate({ field: value });
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = SchemaWithLengthField.newContext();
      context.validate({ field: value });
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
  it('extending quantity extends accessibility', () => {
    const def = quantityDefinition(LengthSchema);
    expect(def.optional).toEqual(true);
    expect(def.type).toEqual(LengthSchema);
    expect(def.accessibility.componentHint).toEqual('Unit');
    expect(def.accessibility.inseparable).toEqual(true);
  });
  it('extending quantity extends accessibility', () => {
    const def = quantityDefinition(LengthSchema, false, { field: true });
    expect(def.optional).not.toBeDefined();
    expect(def.accessibility.field).toEqual(true);
  });
});
