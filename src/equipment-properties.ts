import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { Door, DoorSchema } from './door';
import { Length, LengthSchema } from './units';
import { ExternalId, ExternalIdSchemaDefinition } from './external-id';
import {
  IetfLanguageTag,
  IetfLanguageTagOrSignLanguageCode,
  ietfLanguageTagsAndSignLanguageCodes
} from './ietf-language-tags';
import { LocalizedStringSchema, LocalizedString } from './localized-string';

export type EquipmentTypes =
  | 'bed'
  | 'wardrobe'
  | 'elevator'
  | 'escalator'
  | 'hoist'
  | 'stairLift'
  | 'switch'
  | 'sitemap'
  | 'vendingMachine'
  | 'intercom'
  | 'powerOutlet';

export const AllowedEquipmentTypes = Object.freeze([
  'bed',
  'wardrobe',
  'elevator',
  'escalator',
  'hoist',
  'stairLift',
  'switch',
  'sitemap',
  'vendingMachine',
  'intercom',
  'powerOutlet'
]) as ReadonlyArray<EquipmentTypes>;

export interface EquipmentProperties {
  description?: LocalizedString;
  shortDescription?: LocalizedString;
  longDescription?: LocalizedString;
  category?: EquipmentTypes;
  heightOfControls?: Length;
  cabinWidth?: Length;
  cabinLength?: Length;
  door?: Door;
  hasDoorsInBothDirections?: boolean;
  languages?: ArrayLike<IetfLanguageTagOrSignLanguageCode>;
  isIndoors?: boolean;
  hasRaisedText?: boolean;
  hasBrailleText?: boolean;
  hasSpeech?: boolean;
  isHighContrast?: boolean;
  hasLargePrint?: boolean;
  isVoiceActivated?: boolean;
  hasHeadPhoneJack?: boolean;
  isEasyToUnderstand?: boolean;

  manufacturerName?: LocalizedString;
  /// Intentionally not localizable to allow matching with other data, e.g. from manufacturer's own APIs.
  manufacturerSerialNumber?: string;
  servicePhoneNumber?: LocalizedString;
  serviceWebsiteUrl?: LocalizedString;

  // Live status updates
  isWorking?: boolean;
  outOfOrderReason?: LocalizedString;
  alternativeRouteInstructions?: LocalizedString;
  stateExplanation?: LocalizedString;
  stateLastUpdate?: Date;
  plannedCompletionDate?: Date;

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
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      description: t`Describes where the equipment is located. If only one description string is technically possible to maintain, it should not contain any abbreviations to allow being read aloud by screen readers or voice assistants`,
      example: t`For elevators: ‘Between ticket counter and Central Line platforms’, ‘From basement upwards towards Main Street exit’`
    }
  },
  // Alternative description that is screen-reader compatible and replaces abbreviations / symbols with words
  longDescription: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      description: t`Contains the same information as description, but in a longer form which can be read out by a screen reader or voice assistant.
        Words should be written out fully (e.g. ‘direction’ instead of ‘dir.‘, ‘ground’ instead of ‘G‘, ‘platform’ instead of ‘pl.’). The field should not contain any symbols (e.g. \`->\`, \`<->\`, or \`→\`).
        Suitable for people who have a visual impairment or use a screen reader or voice assistant (e.g. Amazon’s Alexa).
        If only one description field can be used for technical reasons, then the written-out form should be given preference, because a short form can be generated from the long form more easily than the other way around.
        Can be used by web developers as content for the \`aria-label\`-attribute, for example.`
    }
  },
  // Alternative description that uses less screen estate, more abbreviations and Unicode symbols like `→`
  shortDescription: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      description: t`Contains the same information as description, but in a shorter form, to save space on the screen. May contain Unicode characters such as ⟷ or ↘︎ as well as abbreviations (e.g. ‘pl.’ instead of ‘platform’, ‘dir.’ instead of ‘direction’).`
    }
  },
  heightOfControls: {
    type: LengthSchema,
    optional: true,
    accessibility: {
      componentHint: 'Unit',
      question: t`How high are the lowest working controls for this equipment?`
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
  hasDoorsInBothDirections: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`If this is an elevator, does it have doors in both directions?`
    }
  },
  cabinWidth: {
    type: LengthSchema,
    optional: true,
    accessibility: {
      componentHint: 'Unit',
      question: t`How wide is the cabin (as seen from the entrance)?`
    }
  },
  cabinLength: {
    type: LengthSchema,
    optional: true,
    accessibility: {
      componentHint: 'Unit',
      question: t`How long/deep is the cabin (as seen from the entrance)?`
    }
  },
  languages: {
    type: Array,
    defaultValue: [],
    optional: true
  },
  'languages.$': {
    type: String,
    label: t`Language`,
    allowedValues: ietfLanguageTagsAndSignLanguageCodes
  },
  hasRaisedText: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  hasBrailleText: {
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
  isIndoors: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is this equipment indoors?`
    }
  },
  alternativeRouteInstructions: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`Is there an alternative route to this equipment?`
    }
  },
  isWorking: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the equipment currently in operation?`,
      accessibility: {
        machineData: true
      }
    }
  },
  outOfOrderReason: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`If the equipment is not in operation, why?`,
      example: 'Vandalism, construction work, …',
      machineData: true
    }
  },
  stateLastUpdate: {
    type: Date,
    optional: true,
    accessibility: {
      machineData: true,
      description: t`Last update of the operational status`
    }
  },
  plannedCompletionDate: {
    type: Date,
    optional: true,
    accessibility: {
      question: t`If the equipment is not in operation, when is it going to be again?`
    }
  },
  manufacturerName: {
    type: LocalizedStringSchema,
    optional: true
  },
  manufacturerSerialNumber: {
    type: String,
    optional: true
  },
  servicePhoneNumber: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`Which phone number should be called to notify if the equipment is out of service?`,
      description: t`Service phone number under which the facility management can be reached, with international country code`,
      example: t`e.g. +1-555-555-90-210`,
      componentHint: 'PhoneNumber'
    }
  },
  serviceWebsiteUrl: {
    type: LocalizedStringSchema,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    accessibility: {
      question: t`On which website address can you find updates about the operational status?`
    }
  },
  sourceId: {
    type: String,
    optional: true,
    accessibility: {
      machineData: true,
      description: t`Reference to the data source where this information comes from (accessibility.cloud ID)`
    }
  },
  sourceImportId: {
    type: String,
    optional: true,
    accessibility: {
      machineData: true,
      description: t`Reference to the data import where this information comes from (accessibility.cloud ID)`
    }
  },
  originalPlaceInfoId: {
    type: String,
    optional: true,
    accessibility: {
      machineData: true,
      description: t`Original ID of the place that this equipment belongs to (unique in the original data set)`
    }
  },
  disruptionSourceImportId: {
    type: String,
    optional: true,
    accessibility: {
      machineData: true,
      description: t`Reference to data source for operational status live updates (accessibility.cloud ID)`
    }
  },
  originalData: {
    type: String,
    optional: true,
    accessibility: {
      machineData: true,
      description: t`Data record that came from the original data source (for debugging)`
    }
  },
  placeInfoId: {
    type: String,
    optional: true,
    accessibility: {
      machineData: true,
      description: t`Reference to the place that this equipment belongs to (accessibility.cloud ID)`
    }
  }
});
