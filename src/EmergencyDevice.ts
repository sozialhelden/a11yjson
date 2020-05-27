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
  type: 'evacChair' | 'alarm' | 'visualFireAlarm' | 'audibleFireAlarm';

  /**
   * Does the emergency device emit an audible signal?
   */
  isAudio?: boolean;

  /**
  * Does the emergency device emit a visual signal?
   */
  isVisual?: boolean;

  /**
   * Is the emergency device visual
   */
  isAvailable?: boolean;
}

export const EmergencyDeviceSchema = new SimpleSchema({
  type: {
    type: String,
    label: t`Kind of emergency device`,
    allowedValues: ['evacChair', 'visualFireAlarm', 'audibleFireAlarm', 'alarm'],
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
      question: t`Is there an audio alarm present?`
    }
  },
  isVisual: {
    type: Boolean,
    label: t`Visual`,
    optional: true,
    accessibility: {
      question: t`Is there an visual alarm present?`
    }
  },
  isAvailable: {
    type: Boolean,
    label: t`Available`,
    optional: true,
    accessibility: {
      question: t`Is the emergency device available?`
    }
  }
});
