import {
  AllowedEquipmentTypes,
  EquipmentProperties,
  EquipmentPropertiesSchema,
  EquipmentTypes
} from '../src/equipment-properties';
import { doorMinimumFixture } from './door.test';
import { validExternalIdWithExtendedDataFixture } from './external-id.test';

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
  isRaised: true,
  isBraille: true,
  hasSpeech: true,
  isHighContrast: true,
  hasLargePrint: true,
  isVoiceActivated: true,
  hasHeadPhoneJack: true,
  isEasyToUnderstand: true,
  isWorking: true,

  sourceId: 'string',
  sourceImportId: 'string',
  disruptionSourceImportId: 'string',
  placeInfoId: 'string',

  originalPlaceInfoId: 'string',
  originalData: 'string',
  originalId: 'string',
  ids: [validExternalIdWithExtendedDataFixture]
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
