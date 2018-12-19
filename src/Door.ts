import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

import { Length, LengthSchema, quantityDefinition } from './Units';

/**
 * Describes the door of a place's entrance or to one of its facilities (e.g. to a shower, or to an elevator)
 */
export interface Door {
  /**
   * Turning space in front of the door.
   */
  turningSpaceInFront?: Length;
  /**
   * `true` if the door opens to the outside, `false` if it opens to the inside, `undefined` if unknown.
   */
  doorOpensToOutside?: boolean;
  // QUESTION split in two values, automatic doors can be broken - link to equipment
  /**
   * `true` if the door is always open or automatic, `false` if it has to be opened manually, `undefined` if unknown.
   */
  isAutomaticOrAlwaysOpen?: boolean;
  // QUESTION width should be a property of entrance, right now we have to say 'isAutomaticOrAlwaysOpen: true, width: >90cm'
  /**
   * Width of the door.
   */
  width?: Length;
  // QUESTION assumes glass door, needs two questions?
  /**
   * `true` if the door is a glass door, but is marked, `false` if the door is an unmarked glass door, `undefined` if it is no glass door or it is unknown.
   */
  hasClearMarkingOnGlassDoor?: boolean;
  // QUESTION what is easy?
  /**
   * `true` if the door is easy to hold open (subjectively by the assessor), `false` if not, `undefined` if unknown.
   */
  isEasyToHoldOpen?: boolean;
  // QUESTION what is ergonomic?
  /**
   * `true` if the door's handle is easy to use (subjectively by the assessor), `false` if not, `undefined` if unknown.
   */
  hasErgonomicDoorHandle?: boolean;
  // QUESTION manual vs automatic
  /**
   * `true` if the door is revolving, `false` if not, `undefined` if unknown.
   */
  isRevolving?: boolean;
  /**
   * `true` if you need a [RADAR key](https://en.wikipedia.org/wiki/Disability_Rights_UK#National_Key_Scheme) to open the door, `false` if it's in the UK but you need no key, `undefined` if it is unknown or needs a different key.
   */
  needsRadarKey?: boolean;
  /**
   * `true` if you need a [Euro key](https://en.wikipedia.org/wiki/Euro_key) to open the door, `false` if it's in Europe outside UK and works without a key, `undefined` if it is unknown or needs a different key.
   */
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
