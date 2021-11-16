import {
  AllowedEquipmentTypes,
  EquipmentProperties,
  EquipmentPropertiesSchema,
  EquipmentTypes
} from '../src/EquipmentProperties';
import { doorMinimumFixture } from './Door.test';

export const equipmentPropertiesMinimumFixture: EquipmentProperties = {};

const equipmentPropertiesFixture: EquipmentProperties = {
  description: 'string',
  longDescription: 'long string',
  shortDescription: 's.',
  category: 'elevator',
  door: doorMinimumFixture,
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

  sourceId: 'string',
  sourceImportId: 'string',
  disruptionSourceImportId: 'string',
  placeInfoId: 'string',

  placeSourceId: 'string',
  originalPlaceInfoId: 'string',
  originalData: 'string',
  originalId: 'string',
  sameAs: ["https://www.wikidata.org/wiki/Q688541"]
};

const allValidFixtures = Object.freeze([
  equipmentPropertiesMinimumFixture,
  equipmentPropertiesFixture
]);

const invalidEquipmentPropertiesFixture = {
  height: [],
  languages: 'foo'
};

const allInvalidFixtures = Object.freeze([invalidEquipmentPropertiesFixture]);

describe('EquipmentPropertiesSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = EquipmentPropertiesSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = EquipmentPropertiesSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
