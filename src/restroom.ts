import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './simpl-schema-extensions';

import { Room, RoomSchema } from './room';
import { Entrance, EntranceSchema } from './entrance';
import { Length, LengthSchema, quantityDefinition } from './units';
import { Toilet, ToiletSchema } from './toilet';
import { Shower, ShowerSchema } from './shower';

export interface Restroom extends Room {
  /// QUESTION wheelchair signage, pregnant, with kids, etc. maybe tags instead of booleans?
  signage?: {
    unisex: boolean;
    male: boolean;
    female: boolean;
  };
  /// QUESTION undefined vs. null - how do we indicate that there is no mirror?
  mirror?: {
    isLocatedInsideRestroom?: boolean;
    isAccessibleWhileSeated: boolean;
    heightFromGround: Length;
  };
  // TODO extract rating into own file with own schema
  // QUESTION how is this rated?
  ratingForWheelchair?: number;
  turningSpaceInside?: Length;
  hasSupportRails?: boolean;
  // QUESTION how is this evaluated, doesn't this also depend on the kind of wheelchair?
  // could be similar to mirror object
  shampooAccessibleWithWheelchair?: boolean;
  toilet?: Toilet;
  // QUESTION no definition of bathtub
  hasBathTub?: boolean;
  entrance?: Entrance;
  // QUESTION why have this field, could be included in shower object,
  hasShower?: boolean;
  // QUESTION is this equipment that can be broken/have disruptions?
  shower?: Shower;
  // QUESTION assumes that there is a drier and a soap
  // QUESTION bad, merging two objects in one
  heightOfSoapAndDrier?: Length;
  /// QUESTION undefined vs. null - how do we indicate that there is no washBasin?
  washBasin?: {
    isLocatedInsideRestroom?: boolean;
    /// QUESTION is this calculated from the sub-fields or can this go away?
    /// QUESTION is called isAccessibleWithWheelchair in room.ts
    accessibleWithWheelchair?: boolean;
    height?: Length;
    /// QUESTION undefined vs. null - how do we indicate that there is no space below
    spaceBelow?: {
      height?: Length;
      depth?: Length;
    };
  };
}

export const RestroomSchema = createSchemaInstance(
  'Restroom',
  {
    /// QUESTION wheelchair signage, pregnant, with kids, etc. maybe tags instead of booleans?
    signage: {
      type: Object,
      optional: true,
      accessibility: {}
    },
    'signage.unisex': {
      type: Boolean,
      optional: true,
      accessibility: {}
    },
    'signage.male': {
      type: Boolean,
      optional: true,
      accessibility: {}
    },
    'signage.female': {
      type: Boolean,
      optional: true,
      accessibility: {}
    },
    mirror: {
      type: Object,
      optional: true,
      accessibility: {}
    },
    'mirror.isLocatedInsideRestroom': {
      type: Boolean,
      optional: true,
      accessibility: {}
    },
    'mirror.isAccessibleWhileSeated': {
      type: Boolean,
      optional: true,
      accessibility: {}
    },
    'mirror.heightFromGround': quantityDefinition(LengthSchema),
    ratingForWheelchair: {
      type: Number,
      optional: true,
      min: 0,
      max: 1,
      accessibility: {
        question: t`How would you rate this entrance for wheelchair users?`,
        componentHint: 'AccessibilityRating'
      }
    },
    turningSpaceInside: quantityDefinition(LengthSchema),
    hasSupportRails: {
      type: Boolean,
      optional: true,
      accessibility: {}
    },
    shampooAccessibleWithWheelchair: {
      type: Boolean,
      optional: true,
      accessibility: {}
    },
    toilet: {
      type: ToiletSchema,
      label: t`Toilet`,
      optional: true,
      accessibility: {
        question: t`Let's take a look at the toilet.`
      }
    },
    hasBathTub: {
      type: Boolean,
      optional: true,
      accessibility: {}
    },
    entrance: {
      type: EntranceSchema,
      label: t`Entrance`,
      optional: true,
      accessibility: {
        question: t`Would you like to add information about the entrance to the restroom?`
      }
    },
    hasShower: {
      type: Boolean,
      optional: true,
      accessibility: {}
    },
    shower: {
      type: ShowerSchema,
      optional: true,
      accessibility: {}
    },
    heightOfSoapAndDrier: quantityDefinition(LengthSchema),
    washBasin: {
      type: Object,
      optional: true,
      accessibility: {}
    },
    'washBasin.isLocatedInsideRestroom': {
      type: Boolean,
      optional: true,
      accessibility: {}
    },
    'washBasin.accessibleWithWheelchair': {
      type: Boolean,
      optional: true,
      accessibility: {}
    },
    'washBasin.height': quantityDefinition(LengthSchema),
    'washBasin.spaceBelow': {
      type: Object,
      optional: true,
      accessibility: {}
    },
    'washBasin.spaceBelow.height': quantityDefinition(LengthSchema),
    'washBasin.spaceBelow.depth': quantityDefinition(LengthSchema)
  },
  RoomSchema
);
