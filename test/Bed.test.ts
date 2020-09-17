import { Bed, BedSchema } from '../src/Bed';
import { FormatVersion } from '../src/Version';

export const bedMinimumFixture: Bed = {};

export const bedWithOptionalsFixture: Bed = {
  isWheelchairAccessible: true,
  hasEasyAccessFromBothSides: true,
  hasAccessibleLightSwitch: true
};

const allValidFixtures = Object.freeze([bedMinimumFixture, bedWithOptionalsFixture]);

const invalidBedFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidBedFixture]);

describe('BedSchema Schema', () => {
  it('schema is tagged', () => {
    expect(BedSchema.__schemaType).toBe('Bed');
    expect(BedSchema.__schemaVersion).toBe(FormatVersion);
  });
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = BedSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = BedSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
