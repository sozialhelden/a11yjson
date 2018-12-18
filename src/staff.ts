import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

/**
 * The Staff interface describes the presence of staff and their qualifications.
 */
export interface Staff {
  /**
   * Does the staff has means to see visitors from the inside, either via a window or
   * some camera system.
   */
  canSeeVisitorsFromInside?: boolean;

  /**
   * ?
   */
  canAssistWithSpecialNeeds?: boolean; // QUESTION: what is the limitation of can? Is allowed? Physical capable? Wants to? What is special?

  /**
   * ?
   */
  isTrainedInSigning?: boolean; // QUESTION: there are plentz of sign languages around the world, which one is this
  /**
   * Is there an assistant for the duration of the visit that is free of charge?
   */
  hasFreeAssistantForVisitors?: boolean; // QUESTION: free versus paid? Why is there no hasPaidAssistantForVisitors? Unlikely?
  /**
   * Is the staff trained dealing with disabled visitors?
   */
  isTrainedInAccomodatingVisitorsWithDisabilities?: boolean; // QUESTION: what kind of training, what kind of disabilities?
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
      description: t`e.g. via a greeter or reception, a window or a camera system`
    },
    optional: true
  },
  canAssistWithSpecialNeeds: {
    type: Boolean,
    label: t`Special Needs Assistance`,
    accessibility: {
      question: t`Can the staff assist with special needs?`
    },
    optional: true
  },
  isTrainedInSigning: {
    type: Boolean,
    label: t`Signing training`,
    accessibility: {
      question: t`Is the staff trained in signing?`
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
  isTrainedInAccomodatingVisitorsWithDisabilities: {
    type: Boolean,
    label: t`Disabilities Training`,
    accessibility: {
      question: t`Is the staff trained in accomodating visitors with disabilities?`
    },
    optional: true
  }
});
