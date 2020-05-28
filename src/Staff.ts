import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';
import {
  IetfLanguageTagOrSignLanguageCode,
  ietfLanguageTagsAndSignLanguageCodes
} from './ietfLanguageTags';

/**
 * Describes the presence of staff and their qualifications and/or provided services.
 */
export interface Staff {
  /**
   * `true` if the staff has means to see visitors from the inside at all times when the place is
   * open (for example a window or CCTV system), `false` if not, `undefined` if unknown.
   */
  canSeeVisitorsFromInside?: boolean;
  /**
   * `true` if staff is available upon request
   */
  hasAccessibilityAssistantForEnquiries?: boolean;
  /**
   * Which educational credentials have been awarded to the staff? 
   * This can be a diploma, certification, qualification, or badge.  
   * 
   * [Prefer using URLs supporting Linked Data.](https://schema.org/EducationalOccupationalCredential)
   */
  educationalCredentialsAwarded?: ArrayLike<String>;
  /**
   * Languages that the staff speaks, including sign language variants.
   */
  spokenLanguages?: ArrayLike<IetfLanguageTagOrSignLanguageCode>;

  /**
   * `true` if there is an assistant for the duration of the visit that is free of charge, `false`
   * if not, `undefined` if unknown.
   */
  hasFreeAssistantForVisitors?: boolean; // QUESTION: free versus paid? Why is there no hasPaidAssistantForVisitors? Unlikely?
}

/**
 * The StaffSchema allows easy validation, cleaning and checking of Staff objects.
 */
export const StaffSchema = new SimpleSchema({
  canSeeVisitorsFromInside: {
    type: Boolean,
    label: t`See From Inside`,
    accessibility: {
      question: t`Can the staff see visitors arriving?`,
      description: t`e.g. via a greeter or reception, a window or a always-monitored camera system`
    },
    optional: true
  },
  isTrainedInSigning: {
    type: Boolean,
    label: t`Signing training`,
    accessibility: {
      question: t`Is the staff trained in local sign languages?`
    },
    optional: true
  },
  hasAccessibilityAssistantForEnquiries: {
    // TODO clarify with be.accessible what access enquiries are
    type: Boolean,
    label: t`assistant for access enquiries`,
    accessibility: {
      question: t`Can the staff assist with access enquiries?`
    },
    optional: true
  },
  hasFreeAssistantForVisitors: {
    type: Boolean,
    label: t`Visitor Assistant`,
    accessibility: {
      question: t`Is there a free assistant for visitors?`
    },
    optional: true
  },
  spokenLanguages: {
    type: Array,
    defaultValue: [],
    optional: true,
    accessibility: {
      question: t`Which languages do the staff speak (including sign language variants)?`
    }
  },
  'spokenLanguages.$': {
    type: String,
    label: t`Language`,
    allowedValues: ietfLanguageTagsAndSignLanguageCodes
  },
  educationalCredentialsAwarded: {
    type: Array,
    label: t`URLs of educational credentials awarded`,
    optional: true,
    accessibility: {
      question: t`Which educational credentials have been awarded to the staff? This can be a diploma, certification, qualification, or badge.`
    }
  },
  'educationalCredentialsAwarded.$': {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    label: t`URL of educational credentials awarded`,
  }
});
