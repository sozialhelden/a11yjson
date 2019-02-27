import { Shower, ShowerSchema } from '../src/Shower';
import { FormatVersion } from '../src/Version';

export const showerMinimumFixture: Shower = {};

const showerWithOptionalsFixture: Shower = {
  step: '<2cm',
  isLevel: true, // needs review
  hasSupportRails: true,
  supportRailsHeight: '85 .. 107cm',
  supportRailsAreAboveAndBelowControls: true,
  hasShowerSeat: true,
  hasErgonomicHandle: true,
  showerSeatIsRemovable: true,
  showerSeatIsFolding: false
};

const allValidFixtures = Object.freeze([showerMinimumFixture, showerWithOptionalsFixture]);

const invalidShowerFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidShowerFixture]);

describe('ShowerSchema Schema', () => {
  it('schema is tagged', () => {
    expect(ShowerSchema.__schemaType).toBe('Shower');
    expect(ShowerSchema.__schemaVersion).toBe(FormatVersion);
  });
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = ShowerSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = ShowerSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
