import { IetfLanguageTag } from './ietf-language-tags';

// Localized strings can either be just of the string type, or be an object with ietf language tags
// as property names and localized strings as property values.

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
