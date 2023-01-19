import { Media } from './Media';
import { Complete } from './Complete';

export const mediaFixture: Complete<Media> = {
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
};
export default mediaFixture;
