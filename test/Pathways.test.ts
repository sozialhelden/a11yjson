import { Pathways, PathwaysSchema } from '../src/Pathways';

export const pathwaysMinimumFixture: Pathways = {
  width: '<90cm'
};

const pathwaysWithOptionalsFixture: Pathways = {
  width: '>150cm',
  widthAtObstacles: '>90cm',
  maxLongitudinalSlope: 6,
  maxLateralSlope: 2.5
};

const allValidFixtures = Object.freeze([pathwaysMinimumFixture, pathwaysWithOptionalsFixture]);

const invalidPathwaysFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidPathwaysFixture]);

describe('PathwaysSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = PathwaysSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = PathwaysSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
