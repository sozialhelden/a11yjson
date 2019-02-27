import { t } from 'ttag';
import { Length, LengthSchema, quantityDefinition } from './Units';
import { createSchemaInstance } from './SimpleSchemaExtensions';

export interface WashBasin {
  /**
   * `true` if the restroom's wash basin is inside the cabin, `false` if not, `undefined`
   * if condition is unknown.
   */
  isLocatedInsideRestroom?: boolean;

  /**
   * `true` if the wash basin is accessible with wheelchairs, `false` if not, `undefined`
   * if condition is unknown.
   */
  accessibleWithWheelchair?: boolean;

  /**
   * Defines at which height is the wash basin's top
   */
  height?: Length;

  /**
   * How high is the space below the wash basin?
   */
  spaceBelowHeight?: Length;

  /**
   * How deep is the space below the wash basin?
   */
  spaceBelowDepth?: Length;
}

export const WashBasinSchema = createSchemaInstance('WashBasin', {
  isLocatedInsideRestroom: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the wash basin located inside the restroom cabin?`
    }
  },
  height: quantityDefinition(LengthSchema, true, {
    question: t`At which height is the wash basin's top?`
  }),
  spaceBelow: {
    type: Object,
    optional: true,
    accessibility: {
      question: t`Let’s take a look at the space below the wash basin.`
    }
  },
  spaceBelowHeight: quantityDefinition(LengthSchema, true, {
    question: t`How high is the space below the wash basin?`
  }),
  spaceBelowDepth: quantityDefinition(LengthSchema, true, {
    question: t`How deep is the space below the wash basin?`
  })
});
