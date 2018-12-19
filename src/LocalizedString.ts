import { IetfLanguageTag } from './ietfLanguageTags';

/**
 * Localized strings can either be just `String`s, or be `Object`s with IETF language tags
 * as property names and localized strings as property values.
 */

export type LocalizedString =
  | string
  | {
      [key: string]: string;
    };

export const LocalizedStringSchema = {
  type: Object,
  blackbox: true,
  optional: true
};
