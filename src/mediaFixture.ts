import { Complete } from './Complete.js';
import { Media } from './Media.js';

const mediaFixture: Complete<Media> = {
  type: 'document',
  name: { en: 'menu' },
  isBraille: true,
  isAudio: true,
  isTactile: true,
  isLargePrint: true,
  hasContrastingBackground: true,
  hasDedicatedScreenForSubtitles: true,
  hasSubtitles: true,
  hasAudioDescription: true,
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
  interactions: {
    read: {
      perception: {
        visual: 'required',
        flashingHazard: false,
        fontSize: '>6mm',
      },
      action: {
        touch: 'required',
        keyboard: 'optional',
      },
    },
  },
};
export default mediaFixture;
