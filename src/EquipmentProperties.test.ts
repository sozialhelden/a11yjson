import {
  EquipmentProperties,
  getEquipmentPropertiesSchemaDefinition,
} from './EquipmentProperties';
import { Complete } from './Complete';
import doorFixture from './Door.test';
import expectValidFixture from './lib/expectValidFixture';

const equipmentPropertiesFixture: Complete<EquipmentProperties> = {
  description: { en: 'string' },
  longDescription: { en: 'long string' },
  shortDescription: { en: 's.' },
  category: 'elevator',
  door: doorFixture,
  heightOfControls: '90 .. 120cm',
  cabinWidth: '100cm',
  cabinLength: '120cm',
  languages: ['en', 'de'],
  hasRaisedText: true,
  hasBrailleText: true,
  hasSpeech: true,
  isHighContrast: true,
  hasLargePrint: true,
  isVoiceActivated: true,
  needsHeadPhone: true,
  hasHeadPhoneJack: true,
  isEasyToUnderstand: true,
  isWorking: true,
  needsTouchScreenInput: true,
  hasTouchScreenInput: true,
  needsQRCodeScan: true,
  hasQRCode: true,
  needsHapticInput: true,
  hasHapticInput: true,
  needsVisualRecognition: true,
  hasDoorsInBothDirections: true,
  hasMirror: true,
  hasExternalFloorSelection: true,
  isSuitableForBicycles: true,
  isIndoors: true,
  manufacturerName: { 'de-DE': 'Sandler' },
  manufacturerSerialNumber: 'S-1234',
  sourceId: 'string',
  sourceImportId: 'string',
  disruptionSourceImportId: 'string',
  placeInfoId: 'string',
  servicePhoneNumber: '0123-123123',
  serviceWebsiteUrl: 'https://example.com',
  outOfOrderReason: { en: 'Because stuff' },
  alternativeRouteInstructions: { en: 'Use the staircase next door instead' },
  placeSourceId: 'string',
  originalPlaceInfoId: 'string',
  originalData: 'string',
  originalId: 'string',
  stateExplanation: { en: 'string' },
  stateLastUpdate: new Date(),
  plannedCompletionDate: new Date(),
  sameAs: ['https://www.wikidata.org/wiki/Q688541'],
  ids: {
    wikidata: 'Q688541',
    hafas: '12345',
  },
  accessMode: ['visual'],
  accessModeSufficient: ['visual'],
  accessibilityControl: ['fullSwitchControl'],
  accessibilityFeature: ['braille'],
  accessibilityHazard: ['noFlashingHazard'],
};

export default equipmentPropertiesFixture;

const definition = getEquipmentPropertiesSchemaDefinition();

describe('EquipmentProperties schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, equipmentPropertiesFixture);
  });
});
