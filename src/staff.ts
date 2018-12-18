import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';
import {
  IetfLanguageTagOrSignLanguageCode,
  ietfLanguageTagsAndSignLanguageCodes
} from './ietf-language-tags';

/**
 * The Staff interface describes the presence of staff and their qualifications.
 */
export interface Staff {
  /**
   * Does the staff has means to see visitors from the inside, either via a window or
   * some camera system.
   */
  canSeeVisitorsFromInside?: boolean;
  spokenLanguages?: ArrayLike<IetfLanguageTagOrSignLanguageCode>;

  /**
   * Is there an assistant for the duration of the visit that is free of charge?
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
