import { Media, getMediaSchemaDefinition } from './Media';
import { Complete } from './Complete';
import expectInvalidFixture from './lib/expectInvalidFixture';
import expectValidFixture from './lib/expectValidFixture';

const mediaFixture: Complete<Media> = {
  type: 'document',
  name: { en: 'menu' },
  isBraille: true,
  isAudio: true,
  isLargePrint: true,
  hasContrastingBackground: true,
  hasDedicatedScreenForSubtitles: true,
  hasSubtitles: true,
  hasRealTimeCaptioning: true,
  hasPlainLanguageOption: true,
  languages: ['en', 'de'],
  turningSpaceInFront: '>140cm',
  sameAs: ['https://example.com/menu'],
  accessMode: ['visual'],
  accessModeSufficient: ['visual'],
  accessibilityControl: ['fullKeyboardControl'],
  accessibilityFeature: ['largePrint'],
  accessibilityHazard: ['noFlashingHazard'],
};

export default mediaFixture;

const definition = getMediaSchemaDefinition();

describe('Media schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, mediaFixture);
  });

  it('recognizes bad sameAs URLs', () => {
    expectInvalidFixture(definition, {
      type: 'document',
      sameAs: ['example.com'],
    }, [
      { type: 'regEx', name: 'sameAs.0' },
    ]);
  });

  it('recognizes bad language codes', () => {
    expectInvalidFixture(definition, {
      type: 'website',
      languages: ['invalid'],
    }, [
      { type: 'notAllowed', name: 'languages.0' },
    ]);
  });
});
