import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import IETFLanguageCodeSchemaKeyDefinition, { IETFLanguageTag } from './ietfLanguageTags.js';

/**
 * Describes the presence of staff and their qualifications and/or provided services.
 */
export interface Staff {
  /**
   * `true` if the staff has means to see visitors from the inside at all times when the place is
   * open (for example a window or CCTV system), `false` if not.
   */
  canSeeVisitorsFromInside?: boolean;
  /**
   * Languages that the staff speaks, including sign language variants.
   *
   * Uses [IETF language codes](https://github.com/sozialhelden/ietf-language-tags).
   */
  languages?: IETFLanguageTag[];

  /**
   * @deprecated Use `languages` instead.
   */
  spokenLanguages?: IETFLanguageTag[];

  /**
   * `true` if there is an assistant for the duration of the visit that is free of charge, `false`
   * if not.
   */
  hasFreeAssistantForVisitors?: boolean;
}

/**
 * The StaffSchema allows easy validation, cleaning and checking of Staff objects.
 */
export const getStaffSchemaDefinition: () => SchemaDefinition = () => ({
  canSeeVisitorsFromInside: {
    type: Boolean,
    optional: true,
  },
  isTrainedInSigning: {
    type: Boolean,
    optional: true,
  },
  hasFreeAssistantForVisitors: {
    type: Boolean,
    optional: true,
  },
  languages: {
    type: Array,
    defaultValue: [],
    optional: true,
  },
  'languages.$': IETFLanguageCodeSchemaKeyDefinition,
  spokenLanguages: {
    type: Array,
    defaultValue: [],
    optional: true,
  },
  'spokenLanguages.$': IETFLanguageCodeSchemaKeyDefinition,
});
