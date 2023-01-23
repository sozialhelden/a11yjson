import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
import {
  Door, getDoorSchemaDefinition,
} from './Door';
import { getStairsSchemaDefinition, Stairs } from './Stairs';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import BooleanField from './BooleanField';
import { getGrabBarsSchemaDefinition, GrabBars } from './GrabBars';
import { getSeatSchemaDefinition, Seat } from './Seat';
import { getInteractableSchemaDefinition, Interactable } from './Interactable';

export const ShowerInteractions = [
  'transfer',
  'wash',
  'useShampoo',
  'useShowerGel',
  'useSoap',
  'useConditioner',
  'useShowerCurtain',
  'useShowerHead',
  'useSupport',
] as const;
export type ShowerInteraction = typeof ShowerInteractions[number];

/**
 * Describes a shower.
 */

export interface Shower extends Interactable<ShowerInteraction> {
  stairs?: Stairs;
  door?: Door;

  /**
   * `true` if the shower has support rails, `false` if not.
   */
  hasSupportRails?: boolean;
  /**
   * `true` if the shower has a seat, `false` if not..
   */
  hasShowerSeat?: boolean;
  /**
   * Ergonomic handles inside the shower.
   */
  grabBars?: GrabBars;
  /**
   * Describes the shower seat, if existing.
   */
  seat?: Seat;
}

export const getShowerSchemaDefinition: () => SchemaDefinition = () => ({
  ...getPrefixedSchemaDefinition('stairs', getStairsSchemaDefinition()),
  ...getPrefixedSchemaDefinition('door', getDoorSchemaDefinition()),
  ...getPrefixedSchemaDefinition('grabBars', getGrabBarsSchemaDefinition()),
  ...getPrefixedSchemaDefinition('seat', getSeatSchemaDefinition()),
  hasSupportRails: BooleanField,
  hasShowerSeat: BooleanField,
  hasErgonomicHandle: BooleanField,
  showerSeatIsRemovable: BooleanField,
  showerSeatIsFolding: BooleanField,
  ...getInteractableSchemaDefinition(ShowerInteractions),
});
