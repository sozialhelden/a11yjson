import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { Length, LengthSchema, quantityDefinition } from './units';

export interface Door {
  turningSpaceInFront?: Length;
  doorOpensToOutside?: boolean;
  // QUESTION split in two values, automatic doors can be broken - link to equipment
  isAutomaticOrAlwaysOpen?: boolean;
  // QUESTION width should be a property of entrance, right now we have to say 'isAutomaticOrAlwaysOpen: true, width: >90cm'
  width?: Length;
  // QUESTION assumes glass door, needs two questions?
  hasClearMarkingOnGlassDoor?: boolean;
  // QUESTION what is easy?
  isEasyToHoldOpen?: boolean;
  // QUESTION what is ergonomic?
  hasErgonomicDoorHandle?: boolean;
  // QUESTION manual vs automatic
  isRevolving?: boolean;
  // QUESTION combine keys into separate object with upfront question
  needsRadarKey?: boolean;
  needsEuroKey?: boolean;
}

export const DoorSchema = new SimpleSchema({
  turningSpaceInFront: quantityDefinition(LengthSchema, true, {
    question: t`How much space for turning is there at the entrance?`
  }),
  doorOpensToOutside: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Does the door open to the outside?`
    }
  },
  isAutomaticOrAlwaysOpen: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is this an automatic door or is the door always open?`
    }
  },
  width: quantityDefinition(LengthSchema, true, {
    question: t`How wide is the door?`,
    description: t`This refers to the maximum size of an object that can pass.`
  }),
  hasClearMarkingOnGlassDoor: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Does the glass door have clear markings?`
    }
  },
  isEasyToHoldOpen: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is this an automatic door or is the door always open?`
    }
  },
  hasErgonomicDoorHandle: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Does this door have an ergonomic handle?`
    }
  },
  isRevolving: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is this a revolving door?`
    }
  },
  needsRadarKey: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Does this door require a radar key?`
    }
  },
  needsEuroKey: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Does this door require an euro key?`
    }
  }
});
