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
   * true` if the staff
   */
  hasAccessibilityAwarenessTraining?: boolean;
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
  hasAccessibilityAssistantForEnquiries: { // TODO clarify with be.accessible what access enquiries are 
    type: Boolean,
    label: t`assistant for access enquiries`,
    accessibility: {
      question: t`Can the staff assist with access enquiries?`
    },
    optional: true
  },
  hasAccessibilityAwarenessTraining: {
    type: Boolean,
    label: t`awareness training`,
    accessibility: {
      question: t`Is the staff trained in accessibility awareness?`
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
  }
});
