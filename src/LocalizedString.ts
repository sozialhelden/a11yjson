/**
 * Localized strings MUST be `Object`s with IETF language tags
 * as property names and localized strings as property values.
 *
 * A11yJSON does not endorse using strings directly - non-localizable strings have no defined
 * language, which means it's not possible to determine how a screen reader or voice assistant
 * should pronounce/speak them.
 */

import { parseLanguageTag } from '@sozialhelden/ietf-language-tags';

export type LocalizedString =
  | {
    [key: string]: string;
  };

export function getLocalizedStringSchemaDefinition(key: string, definition: Omit<SchemaDefinition, 'type'> & { type?: never, optional?: false } = {}): Record<string, SchemaDefinition> {
  return {
    [key]: {
      optional: true,
      blackbox: true,
      custom(): string | undefined {
        if (!this.isSet) {
          return undefined;
        }
        const { value } = this;
        if (typeof value !== 'object') {
          return 'expectedType';
        }
        if (Object.keys(value).length === 0) {
          return 'mustHaveAtLeastOneKey';
        }
        const tags = Object.keys(value);
        for (let i = 0; i < tags.length; i += 1) {
          const tagString = tags[i];
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          const tag = parseLanguageTag(tagString, true, () => {});
          if (!tag) {
            return 'invalidLanguageTag';
          }
        }
        return undefined;
      },
      ...definition,
      type: Object,
    },
    [`${key}.$`]: {
      type: String,
    },
  };
}
