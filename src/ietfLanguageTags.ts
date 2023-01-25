import { SchemaKeyDefinition } from '@sozialhelden/simpl-schema';
import { getTag } from '@sozialhelden/ietf-language-tags/dist/index.js';

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
    if (typeof value !== 'string') {
      return 'expectedType';
    }
    const parsedTag = getTag(value);
    if (
      parsedTag === undefined
      || (parsedTag.language === undefined && parsedTag.extlang === undefined)
    ) {
      return 'unknownLanguageTag';
    }

    if (typeof parsedTag.language === 'string') {
      return 'unknownLanguageTag';
    }

    return undefined;
  },
};

export default IETFLanguageCodeSchemaKeyDefinition;
