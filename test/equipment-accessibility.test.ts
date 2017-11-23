import {
  EquipmentAccessibility,
  EquipmentAccessibilitySchema
} from '../src/equipment-accessibility';

export const equipmentAccessibilityMinimumFixture: EquipmentAccessibility = {};

const equipmentAccessibilityFixture: EquipmentAccessibility = {
  height: '90 .. 120cm',
  languages: ['en', 'de'],
  isRaised: true,
  isBraille: true,
  hasSpeech: true,
  isHighContrast: true,
  hasLargePrint: true,
  isVoiceActivated: true,
  hasHeadPhoneJack: true,
  isEasyToUnderstand: true
};

const allValidFixtures = Object.freeze([
  equipmentAccessibilityMinimumFixture,
  equipmentAccessibilityFixture
]);

const invalidEquipmentAccessibilityFixture = {
  height: [],
  languages: 'foo'
};

const allInvalidFixtures = Object.freeze([
  invalidEquipmentAccessibilityFixture
]);

describe('EquipmentAccessibilitySchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = EquipmentAccessibilitySchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = EquipmentAccessibilitySchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
