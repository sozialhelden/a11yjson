import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './simpl-schema-extensions';
import { Length, LengthSchema, quantityDefinition } from './units';

export interface Toilet {
  heightOfBase?: Length;
  spaceOnLeftSide?: Length;
  spaceOnRightSide?: Length;
  spaceInFront?: Length;
  /// QUESTION bad language should be foldingHandles
  foldableHandles?: {
    /// QUESTION when you are on the toilet or facing the toilet
    /// QUESTION do not split into two booleans if both cannot be true
    onLeftSide?: boolean;
    onRightSide?: boolean;
    height?: Length;
    /// QUESTION what is this?
    extensionOverToilet?: Length; // RFC: better label required
    distance?: Length;
  };
}

export const ToiletSchema = createSchemaInstance('Toilet', {
  heightOfBase: quantityDefinition(LengthSchema),
  spaceOnLeftSide: quantityDefinition(LengthSchema),
  spaceOnRightSide: quantityDefinition(LengthSchema),
  spaceInFront: quantityDefinition(LengthSchema),
  foldableHandles: {
    type: Object,
    optional: true
  },
  'foldableHandles.onLeftSide': {
    type: Boolean,
    optional: true
  },
  'foldableHandles.onRightSide': {
    type: Boolean,
    optional: true
  },
  'foldableHandles.height': quantityDefinition(LengthSchema),
  'foldableHandles.extensionOverToilet': quantityDefinition(LengthSchema),
  'foldableHandles.distance': quantityDefinition(LengthSchema)
});
