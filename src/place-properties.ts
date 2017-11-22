import SimpleSchema from 'simpl-schema';
import { Accessibility, AccessibilitySchema } from './accessibility';
import { PlaceId, PlaceIdSchema } from './place-id';

export interface PlaceProperties {
  name: string;
  address: string;
  description?: string;
  phoneNumber?: string;
  infoPageUrl: string;
  originalId: string; // QUESTION: is this deprecated in favor of ids?
  ids?: Array<PlaceId>;
  category: string;
  originalData?: any;
  accessibility?: Accessibility;
  // accessibility-cloud fields
  sourceId: string;
  sourceImportId?: string; // only valid for import
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
  infoPageUrl: {
    type: SimpleSchema.RegEx.Url
  },
  ids: {
    type: Array
  },
  'ids.$': {
    type: PlaceIdSchema
  },
  originalId: {
    type: String
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
  }
});
