import { t } from 'ttag';
import { createSchemaInstance } from './SimpleSchemaExtensions';
import { Length, LengthSchema, quantityDefinition } from './Units';

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

export const GrabBarsSchema = createSchemaInstance('GrabBars', {
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
    question: t`How high are the grab bars (top edge, measured from the floor)`
  }),
  distanceBetweenBars: quantityDefinition(LengthSchema, true, {
    question: t`How far are the bars apart?`
  }),
  foldable: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Can the grab bars be folded? If only one can be folded, answer 'No'.`
    }
  }
});
