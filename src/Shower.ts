import {
  Door, getDoorSchemaDefinition,
} from './Door';
import { getStairsSchemaDefinition, Stairs } from './Stairs';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';
import BooleanField from './BooleanField';
import { getGrabBarsSchemaDefinition, GrabBars } from './GrabBars';

/**
 * Describes a shower.
 */

export interface Shower {
  stairs?: Stairs;
  door?: Door;

  /**
   * `true` if the shower has support rails, `false` if not, `undefined` if condition is unknown.
   */
  hasSupportRails?: boolean;
  /**
   * At which height are the support rails? Measured from the top.
   */
  supportRailsHeight?: Length;
  /**
   * `true` if the shower has a seat, `false` if not, `undefined` if condition is unknown..
   */
  hasShowerSeat?: boolean;
  /**
   * `true` if the shower seat can be removed from the shower easily, `false` if not, `undefined`
   * if condition is unknown.
   */
  showerSeatIsRemovable?: boolean;
  /**
   * `true` if the shower seat can be folded, `false` if not, `undefined` if condition is unknown.
   */
  showerSeatIsFolding?: boolean;
  /**
   * Ergonomic handles inside the shower.
   */
  grabBars?: GrabBars;
}

export const getShowerSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  ...getPrefixedSchemaDefinition('stairs', getStairsSchemaDefinition()),
  ...getPrefixedSchemaDefinition('door', getDoorSchemaDefinition()),
  ...getPrefixedSchemaDefinition('grabBars', getGrabBarsSchemaDefinition()),
  ...getPrefixedQuantitySchemaDefinition('supportRailsHeight', LengthSchemaDefinition),
  hasSupportRails: BooleanField,
  hasShowerSeat: BooleanField,
  hasErgonomicHandle: BooleanField,
  showerSeatIsRemovable: BooleanField,
  showerSeatIsFolding: BooleanField,
});
