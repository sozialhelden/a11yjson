import { WheelchairPlaces, WheelchairPlacesSchema } from '../src/wheelchair-places';

export const wheelchairPlacesMinimumFixture: WheelchairPlaces = {
  count: 10
};

const wheelchairPlacesWithOptionalsFixture: WheelchairPlaces = {
  count: 200,
  hasSpaceForAssistant: true
};

const allValidFixtures = Object.freeze([
  wheelchairPlacesMinimumFixture,
  wheelchairPlacesWithOptionalsFixture
]);

const invalidNoCountWheelchairPlacesFixture = {};

const invalidWheelchairPlacesFixture = {
  bar: []
};

const invalidCountBelowMinWheelchairPlacesFixture = {
  count: -100
};

const invalidCountFloatWheelchairPlacesFixture = {
  count: 0.5
};

const allInvalidFixtures = Object.freeze([
  invalidNoCountWheelchairPlacesFixture,
  invalidWheelchairPlacesFixture,
  invalidCountBelowMinWheelchairPlacesFixture,
  invalidCountFloatWheelchairPlacesFixture
]);

describe('WheelchairPlacesSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = WheelchairPlacesSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = WheelchairPlacesSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
