import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
import { Room, getRoomSchemaDefinition } from './Room';
import { Mirror, getMirrorSchemaDefinition } from './Mirror';
import { WashBasin, getWashBasinSchemaDefinition } from './WashBasin';
import { Entrance, getEntranceSchemaDefinition } from './Entrance';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';
import { Toilet, getToiletSchemaDefinition } from './Toilet';
import { Shower, getShowerSchemaDefinition } from './Shower';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import { AccessType, AccessTypes } from './AccessType';
import { CurrencyValue, getCurrencyValueSchemaDefinition } from './CurrencyValue';
import { getStructuredAddressSchemaDefinition } from './Address';
import BooleanField from './BooleanField';

export const RestroomSignIcons = [
  'allGender',
  'female',
  'male',
  'personInWheelchair',
  'changingTable',
  'baby',
  'family',
  'urinal',
  'washBasin',
  'toiletBowl',
] as const;

export type RestroomSignIcon = typeof RestroomSignIcons[number];

/**
 * Describes a `Room` that contains one or more `Toilet`s or `Shower`s.
 */
export interface Restroom extends Room {
  /**
   * Visible icons on the restroom’s sign
   */
  signIcons?: RestroomSignIcon[];
  /**
   * `true` if the restroom has a mirror, `false` if not.
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
   * `true` if the restroom has an emergency pull string, `false` if not.
   */
  hasEmergencyPullstring?: boolean;

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
   * `true` if the restroom has a shower, `false` if not.
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

  /**
   * Defines who this restroom is for. See https://wiki.openstreetmap.org/wiki/Key:access for more information.
   */
  access?: AccessType[];

  /**
   * Defines how much you have to pay to use this restroom. There might be multiple fee amounts,
   * e.g. for different access types or usage times.
   */
  usageFee?: CurrencyValue[];
}

export const getRestroomSchemaDefinition: () => SchemaDefinition = () => ({
  ...getRoomSchemaDefinition(),
  signIcons: {
    type: Array,
    optional: true,
  },
  'signIcons.$': {
    type: String,
    allowedValues: (RestroomSignIcons as any) as any[],
  },
  hasMirror: BooleanField,
  hasSupportRails: BooleanField,
  hasChangingTableForBabies: BooleanField,
  hasChangingTableForAdults: BooleanField,
  hasCeilingHoist: BooleanField,
  hasEmergencyPullstring: BooleanField,
  hasShower: BooleanField,
  hasBathTub: BooleanField,
  ...getPrefixedSchemaDefinition('mirror', getMirrorSchemaDefinition()),
  ...getPrefixedQuantitySchemaDefinition('turningSpaceInside', LengthSchemaDefinition),
  ...getPrefixedSchemaDefinition('toilet', getToiletSchemaDefinition()),
  ...getPrefixedSchemaDefinition('entrance', getEntranceSchemaDefinition()),
  ...getPrefixedSchemaDefinition('shower', getShowerSchemaDefinition()),
  ...getPrefixedQuantitySchemaDefinition('heightOfSoap', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('heightOfDrier', LengthSchemaDefinition),
  ...getPrefixedSchemaDefinition('washBasin', getWashBasinSchemaDefinition()),
  ...getRoomSchemaDefinition(),
  access: {
    type: Array,
    optional: true,
  },
  'access.$': {
    type: String,
    allowedValues: (AccessTypes as any) as any[],
  },
  usageFee: {
    type: Array,
    optional: true,
  },
  ...getPrefixedSchemaDefinition('usageFee.$', getCurrencyValueSchemaDefinition()),
  ...getPrefixedSchemaDefinition('address', getStructuredAddressSchemaDefinition()),
});
