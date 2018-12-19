import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

export interface ExternalId {
  /// Organization who manages the equipment database, or name of the ID standard.
  provider: string;

  [key: string]: any;
}

SimpleSchema.setDefaultMessages({
  messages: {
    en: {
      missing_provider: 'Missing Provider Field',
      missing_id_fields: 'Missing Id Fields'
    }
  }
});

const ValidateExternalId = function(this: ValidationFunctionSelf<any>) {
  if (!this.value.provider) {
    return 'missing_provider';
  }
  if (Object.keys(this.value).length < 2) {
    return 'missing_id_fields';
  }

  return undefined;
};

export const ExternalIdSchemaDefinition: SchemaDefinition = {
  type: Object,
  blackbox: true,
  custom: ValidateExternalId
};
