import { Signage } from './Signage';

export const signageFixture: Signage = {
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
    locateYourself: { action: { touchscreen: true }, perception: { screen: true } },
    useSitemap: {
      action: { touchscreen: true },
      perception: { screen: true },
    },
  },
};
export default signageFixture;
