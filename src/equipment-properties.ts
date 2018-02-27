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
  shortDescription?: string;
  longDescription?: string;
  category?: EquipmentTypes;
  heightOfControls?: Length;
  cabinWidth?: Length;
  cabinLength?: Length;
  door?: Door;
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
  // Alternative description that is screen-reader compatible and replaces abbreviations / symbols with words
  longDescription: {
    type: String,
    optional: true
  },
  // Alternative description that uses less screen estate, more abbreviations and Unicode symbols like `→`
  shortDescription: {
    type: String,
    optional: true
  },
  heightOfControls: {
    type: LengthSchema,
    optional: true,
    accessibility: {
      componentHint: 'Unit'
    }
  },
  door: {
    type: DoorSchema,
    optional: true,
    label: t`Door`,
    accessibility: {
      questionBlockBegin: t`Would you like to add information about the door of this equipment?`
    }
  },
  cabinWidth: {
    type: LengthSchema,
    optional: true,
    accessibility: {
      componentHint: 'Unit'
    }
  },
  cabinLength: {
    type: LengthSchema,
    optional: true,
    accessibility: {
      componentHint: 'Unit'
    }
  },
  doorWidth: {
    type: LengthSchema,
    optional: true,
    accessibility: {
      componentHint: 'Unit'
    }
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
