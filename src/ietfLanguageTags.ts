import { parseLanguageTag } from '@sozialhelden/ietf-language-tags';
import { SchemaKeyDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';

/**
 * Defines a spoken or written language in [IETF language tag format](https://github.com/sozialhelden/ietf-language-tags).
 */
export type IETFLanguageTag = string;

const IETFLanguageCodeSchemaKeyDefinition: SchemaKeyDefinition = {
  type: String,
  custom() {
    const { value } = this;
    if (value === undefined) {
      return undefined;
    }
    const parsedTag = parseLanguageTag(value, false);
    if (parsedTag === undefined) {
      return 'notAllowed';
    }

    return undefined;
  },
};

export default IETFLanguageCodeSchemaKeyDefinition;
