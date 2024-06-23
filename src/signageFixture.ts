import { Signage } from './Signage.js';

const signageFixture: Signage = {
  description: { en: 'Building navigation system' },
  hasPictograms: true,
  hasBraille: true,
  hasRaisedLetters: true,
  hasAudio: true,
  hasVideo: true,
  hasTactileHandRails: true,
  hasTactileRoomNames: true,
  hasTactileNorthMarkers: true,
  hasTactileGuideStrips: true,
  hasTactilePaving: true,
  hasVirtualMap: true,
  hasTactileMap: true,
  hasSearch: true,
  hasNumbers: true,
  hasText: true,
  isHighContrast: true,
  highLegibility: true,
  fontHeight: { value: 1.5, unit: 'cm' },
  interactions: {
    locateYourself: { action: { touchscreen: 'optional', brailleText: 'optional' }, perception: { screen: 'optional' } },
    useSitemap: {
      action: { touchscreen: 'required' },
      perception: { screen: 'required' },
    },
  },
};
export default signageFixture;
