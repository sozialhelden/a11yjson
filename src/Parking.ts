/* eslint-disable import/no-relative-packages */
import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchema } from './Quantity.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';
import { getStructuredAddressSchemaDefinition } from './Address.js';
import BooleanField from './BooleanField.js';
import { getInteractableSchemaDefinition, Interactable } from './Interactable.js';

export const ParkingInteractions = [
  'park',
  'enterVehicle',
  'exitVehicle',
  'arrive',
] as const;
export type ParkingInteraction = typeof ParkingInteractions[number];
export const ParkingInteractionsSet = new Set(ParkingInteractions);

/**
 * Describes one or more wheelchair parking lots.
 */
export interface WheelchairParking extends Interactable<ParkingInteraction> {
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
   * @example <code>[{ en: 'Blue Badge' }, { en: 'Red badge' }, { en: 'Turqouise badge' }]</code>
   */
  neededParkingPermits?: LocalizedString[];
}

export const getWheelchairParkingSchemaDefinition: () => SchemaDefinition = () => ({
  ...getLocalizedStringSchemaDefinition('location'),
  ...getPrefixedQuantitySchemaDefinition('distanceToEntrance', LengthSchema),
  count: {
    type: Number,
    optional: true,
    min: 0,
  },
  isLocatedInside: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('width', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('length', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('maxVehicleHeight', LengthSchema),
  hasDedicatedSignage: BooleanField,
  neededParkingPermits: {
    type: Array,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('neededParkingPermits.$', {}),
  ...getInteractableSchemaDefinition(ParkingInteractions),
});

export interface Parking extends Interactable<ParkingInteraction> {
  count?: number;
  forWheelchairUsers?: WheelchairParking | null;
}

export const getParkingSchemaDefinition: () => SchemaDefinition = () => ({
  ...getPrefixedSchemaDefinition('forWheelchairUsers', getWheelchairParkingSchemaDefinition()),
  count: {
    type: 'SimpleSchema.Integer',
    optional: true,
    min: 0,
  },
  ...getPrefixedSchemaDefinition('address', getStructuredAddressSchemaDefinition()),
  ...getInteractableSchemaDefinition(ParkingInteractions),
});
