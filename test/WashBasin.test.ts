import { FormatVersion } from '../src/Version';
import { WashBasin, WashBasinSchema } from '../src/WashBasin';

export const invalidWashBasinFixture = {
  height: '>80cm',
  spaceBelowHeight: 3,
  spaceBelowDepth: '30cm'
};

const allInvalidFixtures = [invalidWashBasinFixture];

export const washBasinFixture: WashBasin = {
  isLocatedInsideRestroom: false,
  height: '>80cm',
  spaceBelowHeight: '> 67cm',
  spaceBelowDepth: '30cm'
};

const allValidFixtures = [washBasinFixture];

describe('WashBasin Schema', () => {
  it('schema is tagged', () => {
    expect(WashBasinSchema.__schemaType).toBe('WashBasin');
    expect(WashBasinSchema.__schemaVersion).toBe(FormatVersion);
  });
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = WashBasinSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = WashBasinSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
