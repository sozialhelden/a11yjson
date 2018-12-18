import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './simpl-schema-extensions';

import { Room, RoomSchema } from './room';
import { Entrance, EntranceSchema } from './entrance';
import { Length, LengthSchema, quantityDefinition } from './units';
import { Toilet, ToiletSchema } from './toilet';
import { Shower, ShowerSchema } from './shower';

const restroomSignIcons = [
  'allGender',
  'female',
  'male',
  'personInWheelchair',
  'changingTable',
  'baby',
  'family',
  'urinal',
  'washBasin',
  'toiletBowl'
];

export type RestroomSignIcon =
  | 'allGender'
  | 'female'
  | 'male'
  | 'personInWheelchair'
  | 'changingTable'
  | 'baby'
  | 'family'
  | 'urinal'
  | 'washBasin'
  | 'toiletBowl';

export interface Restroom extends Room {
  signIcons?: Array<RestroomSignIcon>;
  hasMirror?: boolean;
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
    signIcons: {
      type: Array,
      optional: true,
      accessibility: {
        description: t`Visible icons on the restroom’s sign`
      }
    },
    'signIcons.$': {
      type: String,
      allowedValues: restroomSignIcons
    },
    hasMirror: {
      type: Boolean,
      optional: true,
      accessibility: {
        question: t`Does the restroom have a mirror?`
      }
    },
    mirror: {
      type: Object,
      optional: true,
      accessibility: {}
    },
    'mirror.isLocatedInsideRestroom': {
      type: Boolean,
      optional: true,
      accessibility: {
        question: t`Is the mirror inside the restroom?`
      }
    },
    'mirror.isAccessibleWhileSeated': {
      type: Boolean,
      optional: true,
      accessibility: {
        question: t`Can the mirror be used when sitting in a wheelchair?`
      }
    },
    'mirror.heightFromGround': quantityDefinition(LengthSchema),
    ratingForWheelchair: {
      type: Number,
      optional: true,
      min: 0,
      max: 1,
      accessibility: {
        deprecated: true,
        question: t`How would you rate this restroom for wheelchair users?`,
        componentHint: 'AccessibilityRating'
      }
    },
    turningSpaceInside: quantityDefinition(LengthSchema, true, {
      question: t`How wide is the space inside that is usable for turning?`
    }),
    hasSupportRails: {
      type: Boolean,
      optional: true,
      accessibility: {
        question: t`Are there support rails on the walls?`
      }
    },
    toilet: {
      type: ToiletSchema,
      label: t`Toilet`,
      optional: true,
      accessibility: {
        question: t`Let’s take a look at the toilet.`
      }
    },
    hasBathTub: {
      type: Boolean,
      optional: true,
      accessibility: {
        question: t`Is there a bath tub in this room?`
      }
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
      accessibility: {
        question: t`Does the restroom have a shower?`
      }
    },
    shower: {
      type: ShowerSchema,
      optional: true,
      accessibility: {
        question: t`Would you like to add information about the shower?`
      }
    },
    heightOfSoapAndDrier: quantityDefinition(LengthSchema, true, {
      question: t`At which height from the floor are the soap and/or drier located?`
    }),
    washBasin: {
      type: Object,
      optional: true,
      accessibility: {
        question: t`Would you like to add information about the wash basin?`
      }
    },
    'washBasin.isLocatedInsideRestroom': {
      type: Boolean,
      optional: true,
      accessibility: {
        question: t`Is the wash basin located inside the restroom cabin?`
      }
    },
    'washBasin.height': quantityDefinition(LengthSchema, true, {
      question: t`At which height is the wash basin's top?`
    }),
    'washBasin.spaceBelow': {
      type: Object,
      optional: true,
      accessibility: {
        question: t`Let’s take a look at the space below the wash basin.`
      }
    },
    'washBasin.spaceBelow.height': quantityDefinition(LengthSchema, true, {
      question: t`How high is the space below the wash basin?`
    }),
    'washBasin.spaceBelow.depth': quantityDefinition(LengthSchema, true, {
      question: t`How deep is the space below the wash basin?`
    })
  },
  RoomSchema
);
