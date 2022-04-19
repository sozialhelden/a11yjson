import { t } from 'ttag';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';

export interface GrabBars {
  /**
   * `true` if there is a folding handle on left side (from the perspective of somebody using the
   * toilet), `false` if not, `undefined` if condition is unknown.
   */
  onUsersLeftSide?: boolean;
  /**
   * `true` if there is a folding handle on right side (from the perspective of somebody using the
   * toilet), `false` if not, `undefined` if condition is unknown.
   */
  onUsersRightSide?: boolean;
  /**
   * Indicates how high the grab bars are (top edge, measured from the floor).
   */
  topHeightFromFloor?: Length;
  /**
   * Indicates how far the bars are apart.
   */
  distanceBetweenBars?: Length;
  /**
   * `true` if the grab bars can be folded, `false` if not, `undefined` if condition is unknown.
   */
  foldable?: boolean;
}

export const getGrabBarsSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  onUsersLeftSide: {
    type: Boolean,
    optional: true,
  },
  onUsersRightSide: {
    type: Boolean,
    optional: true,
  },
  ...getPrefixedQuantitySchemaDefinition('topHeightFromFloor', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('distanceBetweenBars', LengthSchemaDefinition),
  foldable: {
    type: Boolean,
    optional: true,
  },
});
