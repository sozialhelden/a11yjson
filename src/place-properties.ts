import SimpleSchema from 'simpl-schema';
import { Accessibility, AccessibilitySchema } from './accessibility';
import { ExternalId, ExternalIdSchemaDefinition } from './external-id';

export interface PlaceProperties {
  // properties
  name: string;
  address: string; // TODO this can also be an object see 22BnzkzXfzuznupvb
  description?: string;
  phoneNumber?: string;
  infoPageUrl: string;
  category: string;
  accessibility?: Accessibility;

  // accessibility-cloud fields
  sourceId?: string;
  sourceImportId?: string; // only valid for import

  // references to external services
  originalId: string;
  ids?: Array<ExternalId>;
  originalData?: any;
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
    type: Array,
    optional: true
  },
  'ids.$': ExternalIdSchemaDefinition,
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
