import { PlaceInfoSchema } from '../src/place-info';
import { validPointGeometryFixture } from './geometry.test';

const placeFixture = {
  geometry: validPointGeometryFixture
};

const allValidFixtures = Object.freeze([placeFixture]);

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
  // it('tests field as valid', () => {
  //   allValidFixtures.forEach(value => {
  //     const context = PlaceInfoSchema.newContext();
  //     context.validate(value);
  //     expect(context.validationErrors()).toHaveLength(0);
  //     expect(context.isValid()).toBeTruthy();
  //   });
  // });
});
