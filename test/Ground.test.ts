import { Ground, GroundSchema } from '../src/Ground';

export const groundMinimumFixture: Ground = {};

const sidewalkWithOptionalsFixture: Ground = {
  sidewalkConditions: 0.4,
  isLevel: true,
  distanceToDroppedCurb: '<20m ±10',
  slopeAngle: 6,
  evenPavement: true,
  turningSpace: '<150cm'
};

const allValidFixtures = Object.freeze([groundMinimumFixture, sidewalkWithOptionalsFixture]);

const invalidGroundFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidGroundFixture]);

describe('GroundSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = GroundSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = GroundSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
