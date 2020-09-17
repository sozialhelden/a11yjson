import { Media, MediaSchema } from '../src/Media';

export const mediaMinimumFixture: Media = {
  type: 'document'
};

export const mediaWithOptionalsFixture: Media = {
  type: 'document',
  name: 'menu',
  isBraille: true,
  isAudio: true,
  isLargePrint: true,
  hasContrastingBackground: true,
  hasDedicatedScreenForSubtitles: true,
  hasSubtitles: true,
  hasRealTimeCaptioning: true,
  hasPlainLanguageOption: true,
  languages: ['en', 'de'],
  turningSpaceInFront: '>140cm'
};

const mediaInRoomCompendiumFixture: Media = {
  type: 'in-room-compendium',
  name: 'Room 42 Compendium',
  isBraille: true,
  isAudio: true
};

const allValidFixtures = Object.freeze([
  mediaMinimumFixture,
  mediaWithOptionalsFixture,
  mediaInRoomCompendiumFixture
]);

const invalidMediaFixture = {
  bar: []
};

const invalidTypeMediaFixture = {
  type: 'sausage'
};

const allInvalidFixtures = Object.freeze([{}, invalidMediaFixture, invalidTypeMediaFixture]);

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
