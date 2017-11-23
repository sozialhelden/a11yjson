import SimpleSchema from 'simpl-schema';

import { Length, LengthSchema } from './units';

export interface Door {
  turningSpaceInFront?: Length;
  doorOpensToOutside?: boolean;
  isAutomaticOrAlwaysOpen?: boolean;
  width?: Length;
  hasClearMarkingOnGlassDoor?: boolean;
  isEasyToHoldOpen?: boolean;
  hasErgonomicDoorHandle?: boolean;
  isRevolving?: boolean;
  needsRadarKey?: boolean;
  needsEuroKey?: boolean;
}

export const DoorSchema = new SimpleSchema({
  turningSpaceInFront: {
    type: LengthSchema,
    optional: true
  },
  doorOpensToOutside: {
    type: Boolean,
    optional: true
  },
  isAutomaticOrAlwaysOpen: {
    type: Boolean,
    optional: true
  },
  width: {
    type: LengthSchema,
    optional: true
  },
  hasClearMarkingOnGlassDoor: {
    type: Boolean,
    optional: true
  },
  isEasyToHoldOpen: {
    type: Boolean,
    optional: true
  },
  hasErgonomicDoorHandle: {
    type: Boolean,
    optional: true
  },
  isRevolving: {
    type: Boolean,
    optional: true
  },
  needsRadarKey: {
    type: Boolean,
    optional: true
  },
  needsEuroKey: {
    type: Boolean,
    optional: true
  }
});
