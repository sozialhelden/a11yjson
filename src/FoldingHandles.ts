import { t } from 'ttag';
import { createSchemaInstance } from './SimpleSchemaExtensions';
import { Length, LengthSchema, quantityDefinition } from './Units';

export interface FoldingHandles {
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
   * Indicates how high the folding handles are (top edge, measured from the floor).
   */
  topHeightFromFloor?: Length;
  /**
   * Indicates how far the handles are apart.
   */
  distanceBetweenHandles?: Length;
}

export const FoldingHandlesSchema = createSchemaInstance('FoldingHandles', {
  onUsersLeftSide: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is there a folding handle on left side? (from the perspective of somebody using the toilet)`
    }
  },
  onUsersRightSide: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is there a folding handle on right side? (from the perspective of somebody using the toilet)`
    }
  },
  topHeightFromFloor: quantityDefinition(LengthSchema, true, {
    question: t`How high are the folding handles (top edge, measured from the floor)`
  }),
  distanceBetweenHandles: quantityDefinition(LengthSchema, true, {
    question: t`How far are the handles apart?`
  })
});
