import { getTag, parseLanguageTag } from '@sozialhelden/ietf-language-tags';
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
    const parsedTag = getTag(value);
    if (parsedTag === undefined || parsedTag.language === undefined) {
      return 'unknownLanguageTag';
    }

    if (typeof parsedTag.language === 'string') {
      return 'unknownLanguageTag';
    }

    console.log('parsedTag', parsedTag);

    return undefined;
  },
};

export default IETFLanguageCodeSchemaKeyDefinition;
