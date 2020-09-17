import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';
import './SimpleSchemaExtensions';
import { Length, LengthSchema, quantityDefinition } from './Units';
import { LocalizedStringSchema, LocalizedString } from './LocalizedString';

/**
 * Describes a EmergencyDevice unit provided at this place, for example an audibleFireAlarm
 */
export interface EmergencyDevice {
  /**
   * Type of the EmergencyDevice unit
   */
  type: 'escapeChair' | 'alarm' | 'visualFireAlarm' | 'audibleFireAlarm';

  /**
   * Does the emergency device emit an audible signal?
   */
  isAudio?: boolean;

  /**
   * Does the emergency device emit a visual signal?
   */
  isVisual?: boolean;
}

export const EmergencyDeviceSchema = new SimpleSchema({
  type: {
    type: String,
    label: t`Kind of emergency device`,
    allowedValues: ['escapeChair', 'visualFireAlarm', 'audibleFireAlarm', 'alarm'],
    accessibility: {
      question: t`What kind of emergency device is described?`,
      options: [
        { value: 'escapeChair', label: t`Escape Chair` },
        { value: 'visualFireAlarm', label: t`visualFireAlarm` },
        { value: 'audibleFireAlarm', label: t`audibleFireAlarm` },
        { value: 'alarm', label: t`alarm` }
      ]
    }
  },
  isAudio: {
    type: Boolean,
    label: t`Audio`,
    optional: true,
    accessibility: {
      question: t`Does the emergency device emit an audible signal?`
    }
  },
  isVisual: {
    type: Boolean,
    label: t`Visual`,
    optional: true,
    accessibility: {
      question: t`Does the emergency device emit a visual signal?`
    }
  }
});
