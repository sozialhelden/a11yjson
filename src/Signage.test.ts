import expectValidFixture from './lib/expectValidFixture';
import { getSignageSchemaDefinition, Signage } from './Signage';

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
  sitemap: {
    properties: {
      description: { en: 'Sitemap at the main entrance' },
      interactions: {
        locateYourself: [{ action: [{ touchscreen: true }], perception: [{ screen: true }] }],
      },
    },
  },
  interactions: {
    locateYourself: [{ action: [{ touchscreen: true }], perception: [{ screen: true }] }],
  },
};

export default signageFixture;

const definition = getSignageSchemaDefinition();

describe('Signage schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, signageFixture);
  });
});
