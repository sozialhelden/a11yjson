import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { AllowedAreaTypes, AreaTypes } from './area-types';
import { Accessibility, AccessibilitySchema } from './accessibility';
import { ExternalId, ExternalIdSchemaDefinition } from './external-id';

export interface PlaceProperties {
  // properties
  name: string;
  address?: string; // TODO this can also be an object see 22BnzkzXfzuznupvb
  // QUESTION what is expected in description?
  description?: string;
  phoneNumber?: string;
  category: string;
  accessibility?: Accessibility;

  // QUESTION merge with category/ies?
  areaTypes?: ArrayLike<AreaTypes>;
  buildingName?: string;
  buildingNumber?: number;
  floorLevel?: number;
  roomName?: string;
  roomNumber?: number;

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
    accessibility: {
      question: t`What is the name of this place?`
    }
  },
  category: {
    type: String,
    accessibility: {
      question: t`What kind of place is this?`
    }
  },
  address: {
    type: String, // TODO this can also be an object see 22BnzkzXfzuznupvb
    optional: true,
    accessibility: {
      question: t`What is the address of this place?`
    }
  },
  description: {
    type: String,
    optional: true,
    accessibility: {
      question: t`How would you describe this place?`
    }
  },
  phoneNumber: {
    type: String,
    optional: true,
    accessibility: {
      question: t`What is the phone number of this place?`,
      description: t`The phone number of this place, with international country code`,
      example: t`e.g. +1-555-555-90-210`
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
  buildingName: {
    type: String,
    optional: true,
    accessibility: {
      question: t`What is the name of the building?`,
      example: t`e.g. main exposition hall`
    }
  },
  buildingNumber: {
    type: Number,
    optional: true,
    accessibility: {
      question: t`What is the number of the building?`,
      example: t`e.g. 15`
    }
  },
  floorLevel: {
    type: Number,
    optional: true,
    accessibility: {
      description: t`The number of the floor in british convention (ground floor is 0)`,
      question: t`What is the number of the floor?`,
      extendedInformationUrl: 'https://en.wikipedia.org/wiki/Storey',
      example: t`e.g. 4`
    }
  },
  roomName: {
    type: String,
    optional: true,
    accessibility: {
      question: t`What is the name of the room?`,
      example: t`e.g. meeting room 'Rome'`
    }
  },
  roomNumber: {
    type: Number,
    optional: true,
    accessibility: {
      question: t`What is the number of the room?`,
      example: t`e.g. 1.1.25`
    }
  },
  accessibility: {
    type: AccessibilitySchema,
    optional: true,
    accessibility: {
      question: t`Okay $USER, are you ready to map the accessibility of $PLACE?`
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
