import { PointGeometrySchema } from '../src/geometry';

export const validPointGeometryFixture = {
  type: 'Point',
  coordinates: [53.12, 14.02]
};

const allValidFixtures = Object.freeze([validPointGeometryFixture]);

const invalidPointGeometryOutOfBoundsFixture = {
  type: 'Point',
  coordinates: [220, 500]
};

const invalidPointGeometryMistypedData = {
  type: 'BoundingBox',
  coordinates: [53.12, 14.02]
};

const invalidPointGeometryTooManyFields = {
  type: 'Point',
  coordinates: [53.12, 14.02],
  foo: 'bar'
};

const allInvalidFixtures = Object.freeze([
  {},
  invalidPointGeometryOutOfBoundsFixture,
  invalidPointGeometryMistypedData,
  invalidPointGeometryTooManyFields
]);

describe('PointGeometrySchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = PointGeometrySchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = PointGeometrySchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
