import SimpleSchema from 'simpl-schema';
import { Accessibility, AccessibilitySchema } from './accessibility';
import { ExternalId, ExternalIdSchemaDefinition } from './external-id';
import { AllowedAreaTypes, AreaTypes } from './area-types';

export interface PlaceProperties {
  // properties
  name: string;
  address?: string; // TODO this can also be an object see 22BnzkzXfzuznupvb
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
    type: String
  },
  address: {
    type: String,
    optional: true
  },
  description: {
    type: String,
    optional: true
  },
  phoneNumber: {
    type: String,
    optional: true
  },
  areaTypes: {
    type: Array,
    optional: true
  },
  'areaTypes.$': {
    type: String,
    allowedValues: AllowedAreaTypes.map(s => s)
  },
  buildingName: {
    type: String,
    optional: true
  },
  buildingNumber: {
    type: Number,
    optional: true
  },
  floorLevel: {
    type: Number,
    optional: true
  },
  roomName: {
    type: String,
    optional: true
  },
  roomNumber: {
    type: Number,
    optional: true
  },
  infoPageUrl: {
    type: SimpleSchema.RegEx.Url,
    optional: true
  },
  ids: {
    type: Array,
    optional: true
  },
  'ids.$': ExternalIdSchemaDefinition,
  originalId: {
    type: String,
    optional: true
  },
  parentPlaceId: {
    type: String,
    optional: true
  },
  category: {
    type: String
  },
  originalData: {
    type: String,
    optional: true
  },
  accessibility: {
    type: AccessibilitySchema,
    optional: true
  },
  sourceId: {
    type: String,
    optional: true
  },
  sourceImportId: {
    type: String,
    optional: true
  }
});
