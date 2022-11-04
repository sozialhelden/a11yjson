import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import { GrabBars, getGrabBarsSchemaDefinition } from './GrabBars';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';
import { getRestroomDetailsSchemaDefinition, RestroomDetails } from './RestroomDetails';

/**
 * Describes a single toilet that can be inside a restroom or cabin.
 */
export interface Toilet {
  /**
   * Indicates the height of the toilet’s base.
   */
  heightOfBase?: Length;
  /**
   * How much space is on the left side of the toilet? (from the perspective of somebody using the
   * toilet)
   */
  spaceOnUsersLeftSide?: Length;
  /**
   * How much space is on the right side of the toilet? (from the perspective of somebody using the
   * toilet)
   */
  spaceOnUsersRightSide?: Length;
  /**
   * How much space is in front of the toilet?
   */
  spaceInFront?: Length;
  /**
   * Object describing the grab bars.
   */
  grabBars?: GrabBars;
  /**
   * Object containing additional detail about the room the toilet is in
   */
  restroomDetails?: RestroomDetails;
  
}

export const getToiletSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  hasGrabBars: {
    type: Boolean,
    optional: true,
  },
  ...getPrefixedQuantitySchemaDefinition('heightOfBase', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('spaceOnUsersLeftSide', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('spaceOnUsersRightSide', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('spaceInFront', LengthSchemaDefinition),
  ...getPrefixedSchemaDefinition('grabBars', getGrabBarsSchemaDefinition()),
  ...getRestroomDetailsSchemaDefinition(),
});
