import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

import { Accessibility, AccessibilitySchema } from './Accessibility';
import { ExternalId, ExternalIdSchemaDefinition } from './ExternalId';
import { Address, AddressSchema } from './Address';
import { LocalizedStringSchema, LocalizedString } from './LocalizedString';

export interface PlaceProperties {
  // properties
  /**
   * The official name of this place.
   */
  name?: LocalizedString;
  /**
   * The address of this place.
   * `null` indicates that this place has no address, `undefined` or missing property indicates
   * unknown.
   */
  address?: Address | null;

  /**
   * Text description containing helpful information for people with disabilities.
   */
  description?: LocalizedString;

  /**
   * Phone number to call a representant of the place's operator.
   */
  phoneNumber?: LocalizedString;

  /**
   * Category name of the place
   * @example ‘Restaurant’
   */
  category: string;

  /**
   * The accessibility of this place.
   * `null` indicates that this place has no data, `undefined` or missing property indicates unknown.
   */
  accessibility?: Accessibility | null;

  // - machine data fields -

  // -- wheelmap.pro fields --

  eventId?: string; // only valid for mapping event
  creatorId?: string; // only valid for mapping event

  // -- accessibility-cloud fields --

  parentPlaceId?: string;
  sourceId?: string;
  sourceImportId?: string; // only valid for import

  // -- references to external services --
  originalId?: string;
  ids?: Array<ExternalId>;
  originalData?: any;

  /**
   * URL of the original data source’s website describing this place.
   */
  infoPageUrl?: LocalizedString;

  /**
   * URL of the place’s own website.
   */
  placeWebsiteUrl?: LocalizedString;
}

export const PlacePropertiesSchema = new SimpleSchema({
  name: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`What is the name of this place?`
    }
  },
  category: {
    type: String,
    accessibility: {
      question: t`What type of place is this?`,
      componentHint: 'Category'
    }
  },
  address: {
    type: AddressSchema,
    optional: true,
    label: t`Address`,
    accessibility: {
      question: t`Would you like to add the address?`,
      componentHint: 'Address'
    }
  },
  description: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`How would you describe this place?`,
      componentHint: 'TextArea'
    }
  },
  phoneNumber: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`What is the phone number of this place?`,
      description: t`The phone number of this place, with international country code`,
      example: t`e.g. +1-555-555-90-210`,
      componentHint: 'PhoneNumber'
    }
  },
  accessibility: {
    type: AccessibilitySchema,
    optional: true,
    accessibility: {
      question: t`Okay, now let\`s map the accessibility.`,
      description: t`Describes the overall accessibility of a place.`
    }
  },
  infoPageUrl: {
    type: LocalizedStringSchema,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    accessibility: {
      description: t`URL of the original data source’s website describing this place`
    }
  },
  placeWebsiteUrl: {
    type: LocalizedStringSchema,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    accessibility: {
      description: t`URL of the place’s own website`
    }
  },
  // machine data fields
  ids: {
    type: Array,
    optional: true,
    accessibility: {
      machineData: true
    }
  },
  'ids.$': ExternalIdSchemaDefinition,
  originalId: {
    type: String,
    optional: true,
    accessibility: {
      machineData: true
    }
  },
  parentPlaceId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    accessibility: {
      machineData: true
    }
  },
  originalData: {
    type: String,
    optional: true,
    accessibility: {
      machineData: true
    }
  },
  eventId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    accessibility: {
      machineData: true
    }
  },
  creatorId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    accessibility: {
      machineData: true
    }
  },
  sourceId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    accessibility: {
      machineData: true
    }
  },
  sourceImportId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    accessibility: {
      machineData: true
    }
  }
});
