import { Length, LengthSchema } from './units';
import SimpleSchema from 'simpl-schema';

// QUESTION: This should rather be EquipmentControlsAccessibility?
export interface EquipmentAccessibility {
  height: Length;
  languages: Array<string>;
  isRaised: boolean;
  isBraille: boolean;
  hasSpeech: boolean;
  isHighContrast: boolean;
  hasLargePrint: boolean;
  isVoiceActivated: boolean;
  hasHeadPhoneJack: boolean;
  isEasyToUnderstand: boolean;
}

export const EquipmentAccessibilitySchema = new SimpleSchema({
  height: {
    type: LengthSchema
  },
  languages: {
    type: Array,
    defaultValue: []
  },
  'languages.$': {
    type: String
  },
  isRaised: {
    type: Boolean,
    defaultValue: false
  },
  isBraille: {
    type: Boolean,
    defaultValue: false
  },
  hasSpeech: {
    type: Boolean,
    defaultValue: false
  },
  isHighContrast: {
    type: Boolean,
    defaultValue: false
  },
  hasLargePrint: {
    type: Boolean,
    defaultValue: false
  },
  isVoiceActivated: {
    type: Boolean,
    defaultValue: false
  },
  hasHeadPhoneJack: {
    type: Boolean,
    defaultValue: false
  },
  isEasyToUnderstand: {
    type: Boolean,
    defaultValue: false
  }
});
