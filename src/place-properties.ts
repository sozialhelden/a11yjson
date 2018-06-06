import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { AllowedAreaTypes, AreaTypes } from './area-types';
import { Accessibility, AccessibilitySchema } from './accessibility';
import { ExternalId, ExternalIdSchemaDefinition } from './external-id';
import { Address, AddressSchema } from './address';

export interface PlaceProperties {
  // properties
  /**
   * The name of this place
   */
  name?: string;
  /**
   * The address of this place.
   * `null` indicates that this place has no address, `undefined` or missing property indicates unknown.
   */
  address?: Address | null;
  description?: string; // QUESTION: what is expected in description?
  phoneNumber?: string;
  category: string;
  /**
   * The accessibility of this place.
   * `null` indicates that this place has no data, `undefined` or missing property indicates unknown.
   */
  accessibility?: Accessibility | null;

  areaTypes?: ArrayLike<AreaTypes>; // QUESTION: merge with category/ies?

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
  infoPageUrl?: string;
}

export const PlacePropertiesSchema = new SimpleSchema({
  name: {
    type: String,
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
    type: String,
    optional: true,
    accessibility: {
      question: t`How would you describe this place?`,
      componentHint: 'TextArea'
    }
  },
  phoneNumber: {
    type: String,
    optional: true,
    accessibility: {
      question: t`What is the phone number of this place?`,
      description: t`The phone number of this place, with international country code`,
      example: t`e.g. +1-555-555-90-210`,
      componentHint: 'PhoneNumber'
    }
  },
  areaTypes: {
    type: Array,
    optional: true,
    accessibility: {
      question: t`What type of place or structure is this?`
    }
  },
  'areaTypes.$': {
    type: String,
    allowedValues: AllowedAreaTypes.map(s => s)
  },
  accessibility: {
    type: AccessibilitySchema,
    optional: true,
    accessibility: {
      question: t`Okay, now let\`s map the accessibility.`
    }
  },
  // machine data fields
  infoPageUrl: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    accessibility: {
      machineData: true
    }
  },
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
