import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { Length, LengthSchema } from './units';
import { ExternalId, ExternalIdSchemaDefinition } from './external-id';

export type EquipmentTypes =
  | 'bed'
  | 'wardrobe'
  | 'elevator'
  | 'escalator'
  | 'switch'
  | 'sitemap'
  | 'vending-machine'
  | 'intercom'
  | 'power-outlet';

export const AllowedEquipmentTypes = Object.freeze([
  'bed',
  'wardrobe',
  'elevator',
  'escalator',
  'switch',
  'sitemap',
  'vending-machine',
  'intercom',
  'power-outlet'
]) as ReadonlyArray<EquipmentTypes>;

export interface EquipmentProperties {
  // properties
  description?: string;
  category?: EquipmentTypes;
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
  isWorking?: boolean;
  // QUESTION how to mark staff available e.g. lift-boy

  // accessibility-cloud reference fields
  sourceId?: string;
  sourceImportId?: string;
  disruptionSourceImportId?: string;
  placeInfoId?: string;

  // references to external services
  originalPlaceInfoId?: string;
  originalData?: string;
  originalId?: string;
  ids?: ArrayLike<ExternalId>;
}

export const EquipmentPropertiesSchema = new SimpleSchema({
  ids: {
    type: Array,
    optional: true
  },
  'ids.$': ExternalIdSchemaDefinition,
  originalId: {
    type: String,
    optional: true
  },
  category: {
    type: String,
    optional: true,
    allowedValues: AllowedEquipmentTypes.map(s => s)
  },
  description: {
    type: String,
    optional: true
  },
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
  },
  isWorking: {
    type: Boolean,
    optional: true
  },
  sourceId: {
    type: String,
    optional: true
  },
  sourceImportId: {
    type: String,
    optional: true
  },
  originalPlaceInfoId: {
    type: String,
    optional: true
  },
  disruptionSourceImportId: {
    type: String,
    optional: true
  },
  originalData: {
    type: String,
    optional: true
  },
  placeInfoId: {
    type: String,
    optional: true
  }
});
