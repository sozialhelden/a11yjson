import { SchemaDefinition } from 'simpl-schema/dist/esm/types';
import { t } from 'ttag';
import IETFLanguageCodeSchemaKeyDefinition, { IETFLanguageTag } from './ietfLanguageTags';

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
    label: t`Can staff see visitors from inside?`,
    optional: true,
  },
  isTrainedInSigning: {
    type: Boolean,
    label: t`Signing training`,
    optional: true,
  },
  hasFreeAssistantForVisitors: {
    type: Boolean,
    label: t`Visitor Assistant`,
    optional: true,
  },
  spokenLanguages: {
    label: t`Which languages do the staff speak (including sign language variants)?`,
    type: Array,
    defaultValue: [],
    optional: true,
  },
  'spokenLanguages.$': IETFLanguageCodeSchemaKeyDefinition,
});
