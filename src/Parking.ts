import SimpleSchema from 'simpl-schema';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';

/**
 * Describes one or more wheelchair parking lots.
 */
export interface WheelchairParking {
  /**
   * Describes where the parking is located.
   */
  location?: LocalizedString;

  /**
   * How far away is the parking from the main entrance? If there is a separate wheelchair entrance,
   * the distance to this entrance MUST be used.
   */
  distanceToEntrance?: Length;

  /**
   * Defines many wheelchair accessible parking lots are provided
   */
  count?: number; // TODO use something for >10

  /**
   * `true` if the parking is inside a building or under a roof, `false` if not, `undefined` if
   * unknown.
   */
  isLocatedInside?: boolean;

  /**
   * Width constraint of the parking lots.
   */
  width?: Length;

  /**
   * Length constraint of the parking lots.
   */
  length?: Length;

  /**
   * Maximal allowed vehicle height for users of this parking.
   */
  maxVehicleHeight?: Length;

  /**
   * `true` if there is dedicated signage at all relevant turning points from the street to the
   * parking, `false` if not, `undefined` if this is unknown.
   */
  hasDedicatedSignage?: boolean;

  /**
   * List of permit names that allow using this parking.
   *
   * @example `['Blue Badge', 'Red badge', 'Turqouise badge']
   */
  neededParkingPermits?: ArrayLike<LocalizedString>;
}

export const getWheelchairParkingSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  ...getLocalizedStringSchemaDefinition('location'),
  ...getPrefixedQuantitySchemaDefinition('distanceToEntrance', LengthSchemaDefinition),
  count: {
    type: Number,
    optional: true,
    min: 0,
  },
  isLocatedInside: {
    type: Boolean,
    optional: true,
  },
  ...getPrefixedQuantitySchemaDefinition('width', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('length', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('maxVehicleHeight', LengthSchemaDefinition),
  hasDedicatedSignage: {
    type: Boolean,
    optional: true,
  },
  neededParkingPermits: {
    type: Array,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('neededParkingPermits.$', {}),
});

export interface Parking {
  count?: number;
  forWheelchairUsers?: WheelchairParking | null;
}

export const getParkingSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  ...getPrefixedSchemaDefinition('forWheelchairUsers', getWheelchairParkingSchemaDefinition()),
  count: {
    type: SimpleSchema.Integer,
    optional: true,
    min: 0,
  },
});
