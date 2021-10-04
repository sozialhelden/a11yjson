import { GrabBars, GrabBarsSchema } from '../src/GrabBars';

export const GrabBarsMinimumFixture: GrabBars = {};

const grabBarsWithOptionalsFixture: GrabBars = {
  onUsersLeftSide: true,
  onUsersRightSide: true,
  topHeightFromFloor: '80cm',
  distanceBetweenBars: '80cm',
  foldable: true
};

const allValidFixtures = Object.freeze([GrabBarsMinimumFixture, grabBarsWithOptionalsFixture]);

const invalidGrabBarsFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidGrabBarsFixture]);

describe('GrabBars Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = GrabBarsSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = GrabBarsSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
