import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

export interface ExternalId {
  /// Organization who manages the equipment database, or name of the ID standard.
  provider: string;
  /// Schema name that the organization uses for this. Can be empty if the organization only has one central schema.
  schemaName?: string;
  /// The unique identifier within the schema.
  id: string;
}

export const ExternalIdSchema = new SimpleSchema({
  provider: String,
  id: String,
  schemaName: {
    type: String,
    optional: true
  }
});
