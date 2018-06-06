import { Door, DoorSchema } from '../src/door';

export const doorMinimumFixture: Door = {};

const doorWithOptionalsFixture: Door = {
  turningSpaceInFront: '<90cm',
  doorOpensToOutside: true,
  isAutomaticOrAlwaysOpen: true,
  width: '>250cm',
  hasClearMarkingOnGlassDoor: true,
  isEasyToHoldOpen: true,
  hasErgonomicDoorHandle: true,
  isRevolving: true,
  needsRadarKey: true,
  needsEuroKey: true
};

const allValidFixtures = Object.freeze([doorMinimumFixture, doorWithOptionalsFixture]);

const invalidDoorFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidDoorFixture]);

describe('DoorSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = DoorSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = DoorSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
