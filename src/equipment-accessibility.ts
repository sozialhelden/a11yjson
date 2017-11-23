import { Length, LengthSchema } from './units';
import SimpleSchema from 'simpl-schema';

// QUESTION: This should rather be EquipmentControlsAccessibility?
export interface EquipmentAccessibility {
  height?: Length;
  languages?: Array<string>;
  isRaised?: boolean;
  isBraille?: boolean;
  hasSpeech?: boolean;
  isHighContrast?: boolean;
  hasLargePrint?: boolean;
  isVoiceActivated?: boolean;
  hasHeadPhoneJack?: boolean;
  isEasyToUnderstand?: boolean;
}

export const EquipmentAccessibilitySchema = new SimpleSchema({
  height: {
    type: LengthSchema,
    optional: true
  },
  languages: {
    type: Array,
    defaultValue: [],
    optional: true
  },
  'languages.$': {
    type: String
  },
  isRaised: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  isBraille: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  hasSpeech: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  isHighContrast: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  hasLargePrint: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  isVoiceActivated: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  hasHeadPhoneJack: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  isEasyToUnderstand: {
    type: Boolean,
    defaultValue: false,
    optional: true
  }
});
