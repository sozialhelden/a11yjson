import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './SimpleSchemaExtensions';
import { GrabBars, GrabBarsSchema } from './GrabBars';
import { Length, LengthSchema, quantityDefinition } from './Units';

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
   * Does the toilet have grab bars?
   */
  hasGrabBars?: boolean;
  /**
   * Object describing the grab bars.
   */
  grabBars?: GrabBars;
}

export const ToiletSchema = createSchemaInstance('Toilet', {
  heightOfBase: quantityDefinition(LengthSchema, true, {
    question: t`How high is the toilet’s base?`
  }),
  spaceOnUsersLeftSide: quantityDefinition(LengthSchema, true, {
    question: t`How much space is on the left side of the toilet? (from the perspective of somebody using the toilet)`
  }),
  spaceOnUsersRightSide: quantityDefinition(LengthSchema, true, {
    question: t`How much space is on the right side of the toilet? (from the perspective of somebody using the toilet)`
  }),
  spaceInFront: quantityDefinition(LengthSchema, true, {
    question: t`How much space is in front of the toilet?`
  }),
  hasGrabBars: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Does the toilet have grab bars?`
    }
  },
  grabBars: {
    type: GrabBarsSchema,
    optional: true,
    accessibility: {
      question: t`Let’s describe the grab bars.`
    }
  }
});
