import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { AllowedAreaTypes, AreaTypes } from './area-types';
import { Accessibility, AccessibilitySchema } from './accessibility';
import { ExternalId, ExternalIdSchemaDefinition } from './external-id';
import { Address, AddressSchema } from './address';

export interface PlaceProperties {
  // properties
  name?: string;
  address?: Address;
  // QUESTION what is expected in description?
  description?: string;
  phoneNumber?: string;
  category: string;
  accessibility?: Accessibility;

  // QUESTION merge with category/ies?
  areaTypes?: ArrayLike<AreaTypes>;

  // machine data fields

  // wheelmap.pro fields
  eventId?: string; // only valid for mapping event
  creatorId?: string; // only valid for mapping event

  // accessibility-cloud fields
  parentPlaceId?: string;
  sourceId?: string;
  sourceImportId?: string; // only valid for import

  // references to external services
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
      question: t`What kind of place is this?`,
      componentHint: 'Category'
    }
  },
  address: {
    type: AddressSchema,
    optional: true,
    accessibility: {
      question: t`What is the address of this place?`,
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
      question: t`Ready to map the accessibility of this place?`
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
