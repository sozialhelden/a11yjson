import {
  EquipmentProperties,
  getEquipmentPropertiesSchemaDefinition,
} from './EquipmentProperties';
import { Complete } from './Complete';
import doorFixture from './Door.test';
import expectValidFixture from './lib/expectValidFixture';
import intercomFixture from './Intercom.test';

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
  isWorking: true,
  hasVisualEmergencyAlarm: true,
  hasDoorsInBothDirections: true,
  hasDoorsAtRightAnglesToEachOther: false,
  hasMirror: true,
  hasExternalFloorSelection: true,
  isSuitableForBicycles: true,
  isIndoors: true,
  emergencyIntercom: intercomFixture,
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
  hasLandings: true,
  interactions: [
    {
      name: { en: 'On reaching a floor' },
      optional: true,
      perception: [{
        speech: true,
      }],
    },
    {
      name: { en: 'Selecting a floor' },
      required: true,
      action: [{
        pushButton: true,
        activationForce: '0.1N',
        activationTimeInterval: '0.2s',
        feedback: [{
          hapticClick: true,
          beep: true,
        }],
      }],
    },
    {
      name: { en: 'Elevator movement' },
      required: true,
      perception: [{
        vibration: true,
        acceleration: '1m/s^2',
      }],
    },
  ],
};

export default equipmentPropertiesFixture;

const definition = getEquipmentPropertiesSchemaDefinition();

describe('EquipmentProperties schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, equipmentPropertiesFixture);
  });
});
