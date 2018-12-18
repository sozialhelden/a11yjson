import { Stairs, StairsSchema } from '../src/stairs';
import { FormatVersion } from '../src/version';

export const stairsMinimumFixture: Stairs = {};

const stairsWithOptionalsFixture: Stairs = {
  count: 123,
  nosing: {
    isHighContrast: false,
    isAntiSlip: true
  },
  name: 'mainStairs',
  stepHeight: '10cm',
  hasHandRail: true,
  hasTactileSafetyStrips: true
};

const allValidFixtures = Object.freeze([stairsMinimumFixture, stairsWithOptionalsFixture]);

const invalidStairsFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidStairsFixture]);

describe('StairsSchema Schema', () => {
  it('schema is tagged', () => {
    expect(StairsSchema.__schemaType).toBe('Stairs');
    expect(StairsSchema.__schemaVersion).toBe(FormatVersion);
  });
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = StairsSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = StairsSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
