import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './SimpleSchemaExtensions';

import { Room, RoomSchema } from './Room';
import { Mirror, MirrorSchema } from './Mirror';
import { WashBasin, WashBasinSchema } from './WashBasin';
import { Entrance, EntranceSchema } from './Entrance';
import { Length, LengthSchema, quantityDefinition } from './Units';
import { Toilet, ToiletSchema } from './Toilet';
import { Shower, ShowerSchema } from './Shower';

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
  mirror?: Mirror;
  /**
   * How wide is the space inside that is usable for turning?
   */
  turningSpaceInside?: Length;
  /**
   * `true` if there support rails on the walls
   */
  hasSupportRails?: boolean;

  /**
   * `true` if the restroom has a changing table for babies, `false` if not.
   */
  hasChangingTableForBabies?: boolean;

  /**
   * `true` if the restroom has a changing table for adults, `false` if not.
   */
  hasChangingTableForAdults?: boolean;

  /**
   * `true` if the restroom has a ceiling hoist, `false` if not.
   */
  hasCeilingHoist?: boolean;

  /**
   * Object describing a toilet inside the restroom, if existing.
   */
  toilet?: Toilet;

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
  washBasin?: WashBasin;
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
      type: MirrorSchema,
      optional: true,
      accessibility: {}
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
    hasChangingTableForBabies: {
      type: Boolean,
      optional: true,
      accessibility: {
        question: t`Does the restroom have a changing table for babies?`
      }
    },
    hasChangingTableForAdults: {
      type: Boolean,
      optional: true,
      accessibility: {
        question: t`Does the restroom have a changing table for adults?`
      }
    },
    hasCeilingHoist: {
      type: Boolean,
      optional: true,
      accessibility: {
        question: t`Does the restroom have a ceiling hoist?`
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
      type: WashBasinSchema,
      optional: true,
      accessibility: {
        question: t`Would you like to add information about the wash basin?`
      }
    }
  },
  RoomSchema
);
