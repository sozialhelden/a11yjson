import {
  Door, getDoorSchemaDefinition,
} from './Door';
import { getStairsSchemaDefinition, Stairs } from './Stairs';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';

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
   * `true` if the shower has an ergonomic handle, `false` if not, `undefined` if condition is
   * unknown.
   */
  hasErgonomicHandle?: boolean;
}

export const getShowerSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  ...getPrefixedSchemaDefinition('stairs', getStairsSchemaDefinition()),
  ...getPrefixedSchemaDefinition('door', getDoorSchemaDefinition()),
  ...getPrefixedQuantitySchemaDefinition('supportRailsHeight', LengthSchemaDefinition),
  hasSupportRails: {
    type: Boolean,
    optional: true,
  },
  hasShowerSeat: {
    type: Boolean,
    optional: true,
  },
  hasErgonomicHandle: {
    type: Boolean,
    optional: true,
  },
  showerSeatIsRemovable: {
    type: Boolean,
    optional: true,
  },
  showerSeatIsFolding: {
    type: Boolean,
    optional: true,
  },
});
