import { PlaceInfoSchema } from '../src/place-info';
import { validPointGeometryFixture } from './geometry.test';
import { placePropertiesMinimumFixture } from './place-properties.test';

const placeMinimumFixture = {
  properties: placePropertiesMinimumFixture,
  geometry: validPointGeometryFixture
};

const placeWithOptionalsFixture = {
  formatVersion: '1',
  properties: placePropertiesMinimumFixture,
  geometry: validPointGeometryFixture
};

const allValidFixtures = Object.freeze([
  placeMinimumFixture,
  placeWithOptionalsFixture
]);

const invalidPlaceFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([{}, invalidPlaceFixture]);

describe('PlaceInfoSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = PlaceInfoSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = PlaceInfoSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
