import { WifiAccessibility, WifiAccessibilitySchema } from '../src/WifiAccessibility';
import { FormatVersion } from '../src/Version';

export const toiletMinimumFixture: WifiAccessibility = {};

const toiletWithOptionalsFixture: WifiAccessibility = {
  isOpenToEveryone: true,
  isOpenToVisitors: true,
  isOpenToStaff: true,
  hasFixedPassword: true,
  needsGuestPass: true,
  hasCaptivePortal: true,
  isCaptivePortalAccessible: true,
  ssid: 'A witty wifi name',
  password: 'a clever password',
  descriptionWhereToGetLoginData: {
    en: 'Get a guest pass at the cash register.'
  }
};

const allValidFixtures = Object.freeze([toiletMinimumFixture, toiletWithOptionalsFixture]);

const invalidWifiAccessibilityFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidWifiAccessibilityFixture]);

describe('WifiAccessibilitySchema', () => {
  it('schema is tagged', () => {
    expect(WifiAccessibilitySchema.__schemaType).toBe('WifiAccessibility');
    expect(WifiAccessibilitySchema.__schemaVersion).toBe(FormatVersion);
  });
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = WifiAccessibilitySchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = WifiAccessibilitySchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
