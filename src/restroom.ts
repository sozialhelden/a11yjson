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
  /**
   * Visible icons on the restroom’s sign
   */
  signIcons?: Array<RestroomSignIcon>;
  /**
   * `true` if the restroom has a mirror, `false` if not, `undefined` if condition is unknown.
   */
  hasMirror?: boolean;
  /**
   * Describes a mirror, if existing.
   */
  mirror?: {
    /**
     * `true` if the mirror is located inside the restroom, `false` if not, `undefined` if
     * condition is unknown.
     */
    isLocatedInsideRestroom?: boolean;
    /**
     * `true` if the mirror is accessible while sitting in a wheelchair, `false` if not, `undefined`
     * if condition is unknown.
     */
    isAccessibleWhileSeated: boolean;
    /**
     * How far is the mirror's bottom from the ground?
     */
    heightFromGround: Length;
  };
  /**
   * How wide is the space inside that is usable for turning?
   */
  turningSpaceInside?: Length;
  /**
   * `true` if there support rails on the walls
   */
  hasSupportRails?: boolean;
  /**
   * Object describing a toilet inside the restroom, if existing.
   */
  toilet?: Toilet;

  // QUESTION no definition of bathtub

  /**
   * `true` if there is a bath tub in this room, `false` if not, `undefined` if condition is
   * unknown.
   */
  hasBathTub?: boolean;

  /**
   * Object describing the entrance to this restroom.
   */
  entrance?: Entrance;
  /**
   * `true` if the restroom has a shower, `false` if not, `undefined` if condition is unknown.
   */
  hasShower?: boolean;
  // QUESTION is this equipment that can be broken/have disruptions?
  /**
   * Object describing a shower inside this restroom, if existing.
   */
  shower?: Shower;
  /**
   * At which height from the floor is the soap?
   */
  heightOfSoap?: Length;
  /**
   * At which height from the floor is the drier or towel?
   */
  heightOfDrier?: Length;

  /**
   * Object describing a wash basin belonging to this restroom. It can be outside of the restroom.
   */
  washBasin?: {
    /**
     * `true` if the restroom's wash basin is inside the cabin, `false` if not, `undefined`
     * if condition is unknown.
     */
    isLocatedInsideRestroom?: boolean;

    /**
     * `true` if the wash basin is accessible with wheelchairs, `false` if not, `undefined`
     * if condition is unknown.
     */
    accessibleWithWheelchair?: boolean;

    /**
     * Defines at which height is the wash basin's top
     */
    height?: Length;

    // QUESTION undefined vs. null - how do we indicate that there is no space below

    /**
     * Object describing the space below the wash basin.
     */
    spaceBelow?: {
      /**
       * How high is the space below the wash basin?
       */
      height?: Length;
      /**
       * How deep is the space below the wash basin?
       */
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
    heightOfSoap: quantityDefinition(LengthSchema, true, {
      question: t`At which height from the floor is the soap?`
    }),
    heightOfDrier: quantityDefinition(LengthSchema, true, {
      question: t`At which height from the floor is the drier or towel?`
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
