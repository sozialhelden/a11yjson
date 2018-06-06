import { Media, MediaSchema } from '../src/media';

export const mediaFormatMinimumFixture: Media = {
  type: 'document'
};

const mediaFormatWithOptionalsFixture: Media = {
  type: 'document',
  name: 'menu',
  isBraille: true,
  isAudio: true,
  isLargePrint: true,
  hasContrastingBackground: true,
  isEasyToUnderstand: true,
  hasDedicatedScreenForSubtitles: true,
  hasSubtitles: true,
  hasRealTimeCaptioning: true,
  hasPlainLanguageOption: true,
  languages: ['en', 'de'],
  turningSpaceInFront: '>140cm',
  isClearlyVisibleWhileSeated: true,
  isInformationReadableWhileSeated: true
};

const allValidFixtures = Object.freeze([
  mediaFormatMinimumFixture,
  mediaFormatWithOptionalsFixture
]);

const invalidMediaFormatFixture = {
  bar: []
};

const invalidTypeMediaFormatFixture = {
  type: 'sausage'
};

const allInvalidFixtures = Object.freeze([
  {},
  invalidMediaFormatFixture,
  invalidTypeMediaFormatFixture
]);

describe('MediaSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = MediaSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = MediaSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
