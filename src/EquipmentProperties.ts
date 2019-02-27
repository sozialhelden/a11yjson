import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

import { Door, DoorSchema } from './Door';
import { Length, LengthSchema } from './Units';
import { ExternalId, ExternalIdSchema } from './ExternalId';
import {
  IetfLanguageTag,
  IetfLanguageTagOrSignLanguageCode,
  ietfLanguageTagsAndSignLanguageCodes
} from './ietfLanguageTags';
import { LocalizedStringSchema, LocalizedString } from './LocalizedString';

export type EquipmentTypes =
  | 'bed'
  | 'wardrobe'
  | 'elevator'
  | 'escalator'
  | 'movingWalkway'
  | 'ramp'
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
  'movingWalkway',
  'ramp',
  'hoist',
  'stairLift',
  'switch',
  'sitemap',
  'vendingMachine',
  'intercom',
  'powerOutlet'
]) as ReadonlyArray<EquipmentTypes>;

export interface EquipmentProperties {
  /**
   * Describes where the equipment is located. If only one description string is technically
   * possible to maintain, it MUST not contain any abbreviations to allow being readable aloud by
   * screen readers or voice assistants.
   *
   * @example ‘Between ticket counter and Central Line platforms’, ‘From basement upwards towards Main Street exit’
   */
  description?: LocalizedString;
  /**
   * Contains the same information as description, but in a longer form which can be read out by a
   * screen reader or voice assistant.
   *
   * Words MUST be written out fully (e.g. ‘direction’ instead of ‘dir.‘, ‘ground’ instead of ‘G‘,
   * ‘platform’ instead of ‘pl.’). The field MUST NOT contain any symbols (e.g. \`->\`, \`<->\`,
   * or \`→\`).
   *
   * This MUST be suitable for people who have a visual impairment or use a screen reader or voice
   * assistant (e.g. Amazon’s Alexa).
   *
   * If only one description field can be used for technical reasons, then the written-out form
   * MUST be given preference, because a short form can be generated from the long form more easily
   * than the other way around.
   *
   * This attribute SHOULD be used as \`aria-label\`-attribute in web content.
   */
  longDescription?: LocalizedString;

  /**
   * Contains the same information as description, but in a shorter form, to save space on the
   * screen. This CAN contain Unicode characters such as ⟷ or ↘︎ as well as abbreviations (e.g.
   * ‘pl.’ instead of ‘platform’, ‘dir.’ instead of ‘direction’).
   */
  shortDescription?: LocalizedString;

  /**
   * Type of the equipment or facility.
   */
  category?: EquipmentTypes;

  /**
   * Height of the lowest working controls that are needed to operate this equipment.
   * `undefined` if the equipment needs no controls.
   */
  heightOfControls?: Length;

  /**
   * Width of the cabin when facing the equipment’s entrance, or `undefined` if the equipment has no cabin. For a hoist, this refers to the hoist platform itself.
   */
  cabinWidth?: Length;

  /**
   * Length / depth of the cabin when facing the equipment’s entrance, or `undefined` if the equipment has no cabin. For a hoist, this refers to the hoist platform itself.
   */
  cabinLength?: Length;

  /**
   * Object describing the door to the equipment, or `undefined` if there is no door.
   */
  door?: Door;

  /**
   * `true` if the equipment has doors in two directions, so wheelchair, rollator, bike or pushchair users do not have to move backwards to exit.
   */
  hasDoorsInBothDirections?: boolean;

  /**
   * Languages of the equipment’s visible controls and/or voice output.
   */
  languages?: ArrayLike<IetfLanguageTagOrSignLanguageCode>;

  /**
   * `true` if the equipment is indoors, `false` if it’s fully or partially outdoors, or `undefined` if this is unknown.
   */
  isIndoors?: boolean;

  /**
   * `true` if the equipment’s controls or signs have raised letters, `false` if not, or `undefined` if this is unknown.
   */
  hasRaisedText?: boolean;

  /**
   * `true` if the equipment’s controls or signs are printed in braille letters, `false` if not, or `undefined` if this is unknown.
   */
  hasBrailleText?: boolean;

  /**
   * `true` if the equipment has speech output, `false` if not, or `undefined` if this is unknown.
   */
  hasSpeech?: boolean;

  /**
   * `true` if the equipment’s controls or signs have high contrast, `false` if not, or `undefined` if this is unknown.
   */
  isHighContrast?: boolean;

  /**
   * `true` if the equipment’s controls or signs do not use small fonts, `false` if they do, or `undefined` if this is unknown.
   */
  hasLargePrint?: boolean;

  /**
   * `true` if the equipment needs to be activated by voice, `false` if not, or `undefined` if this is unknown.
   */
  isVoiceActivated?: boolean;
  /**
   * `true` if the equipment has a headphone jack for speech output (common for ATMs), `false` if not, or `undefined` if this is unknown.
   */
  hasHeadPhoneJack?: boolean;

  /**
   * `true` if the equipment is easy to operate, `false` if people might face difficulties trying to understand how the equipment works, or `undefined` if this is unknown or irrelevant.
   */
  isEasyToUnderstand?: boolean;

  /**
   * Official name of the company that manufactured the equipment.
   */
  manufacturerName?: LocalizedString;

  /**
   * Manufacturer serial number of the equipment / facility.
   *
   * Intentionally not localizable to allow matching with other data, e.g. from manufacturer's own APIs.
   */
  manufacturerSerialNumber?: string;

  /**
   * Phone number where a service operator can be reached for help using this facility.
   */
  servicePhoneNumber?: LocalizedString;

  /**
   * URL pointing to a website that describes the equipnent or it's current operational status.
   */
  serviceWebsiteUrl?: LocalizedString;

  /**
   * Live status update.
   *
   * `true` if the equipment is in operation, `false` if not, or `undefined` if it is unknown. When
   * reading this attribute for showing it in a user interface, the user interface MUST show the
   * operational status as ‘unknown’ if the status could be out of date, for example if it is older
   * than 10 minutes.
   *
   * When displaying the operational status, user interfaces SHOULD show the date saved in
   * `stateLastUpdate` next to the operational status additionally for transparency.
   */
  isWorking?: boolean;

  /**
   * Live status update.
   *
   * Reason why the equipment is not in operation. MUST be `undefined` if the equipment is in
   * operation.
   *
   * @example ‘Construction work’, ‘Vandalism’, ’Because of renovations the elevator on the west side is expected to be unavailable until April 1’
   */
  outOfOrderReason?: LocalizedString;

  /**
   * Short alternative routing instructions for travelers when they cannot use this facility.
   *
   * The text MUST NOT have abbreviations to be readable aloud by a screen reader or voice
   * assistant.
   *
   * Software using this attribute MUST NOT assume that the equipment is out of operation if it the
   * attribute is defined.
   *
   * @example ‘Take the elevator near the Main Street entrance.’
   */
  alternativeRouteInstructions?: LocalizedString;

  /**
   * Live status update.
   *
   * Information about the current state. If `isWorking` is true, this can show information about
   * future planned maintenance or construction work rendering this facility unusable.
   *
   * The text MUST NOT have abbreviations to be readable aloud by a screen reader or voice
   * assistant.
   *
   * This field SHOULD only be used if a separation into individual disorder attributes
   * (`state`, `outOfOrderReason`) is not technically possible (e.g. when existing APIs can not
   * be further developed and users are only given one text field to describe the problem.)
   */
  stateExplanation?: LocalizedString;

  /**
   * Live status update.
   *
   * Date when the `isWorking` flag was updated by a realtime system.
   */
  stateLastUpdate?: Date;

  /**
   * Live status update.
   *
   * If `isWorking` is false, this is the planned date when the equipment will be in operation
   * again.
   *
   * MUST be `undefined` if the facility is currently in operation.
   */
  plannedCompletionDate?: Date;

  /**
   * Data source ID on accessibility.cloud
   */
  sourceId?: string;

  /**
   * Data import ID on accessibility.cloud
   */
  sourceImportId?: string;

  /**
   * Data source ID of a secondary source used for realtime status info on accessibility.cloud
   */
  disruptionSourceImportId?: string;

  /**
   * Place info ID that this equipment belongs to (on accessibility.cloud)
   */
  placeInfoId?: string;

  // references to external services
  /**
   * ID of the place that this equipment belongs to (in the original data source)
   */
  originalPlaceInfoId?: string;

  /**
   * Original source data for this equipment (for easier debugging)
   */
  originalData?: string;

  /**
   * ID of this equipment in the original data source. To simplify communication with the operator,
   * it’s a good idea to use the operator facility management system ID here.
   */
  originalId?: string;

  /**
   * IDs of this equipment in external data sources, for example in GTFS, IMDF or other sources.
   */
  ids?: ArrayLike<ExternalId>;
}

export const EquipmentPropertiesSchema = new SimpleSchema({
  ids: {
    type: Array,
    optional: true
  },
  'ids.$': ExternalIdSchema,
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
