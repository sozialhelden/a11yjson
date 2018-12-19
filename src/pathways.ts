import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

import { Length, LengthSchema, quantityDefinition } from './Units';

/**
 * Describes pathways inside a place.
 */
export interface Pathways {
  /**
   * Width constraints of all pathways inside a place relevant for consumers.
   */
  width: Length;

  /**
   * Width constraints of all pathways inside a place relevant for consumers.
   */
  widthAtObstacles?: Length;

  /**
   * Maximal longitudinal slope, in percent as calculated by `100 * rise / run` or the tangent of the angle of inclination, multiplied by 100
   */
  maxLongitudinalSlope?: number; // TODO use something for >10

  /**
   * Maximal lateral slope, in percent as calculated by `100 * rise / run` or the tangent of the angle of inclination, multiplied by 100
   */
  maxLateralSlope?: number; // TODO use something for >10
}

// TODO: Harmonize this with:
// https://register.apple.com/resources/imdf/Relationship/
// and
// https://docs.google.com/document/d/1qJOTe4m_a4dcJnvXYt4smYj4QQ1ejZ8CvLBYzDM5IyM

export const PathwaysSchema = new SimpleSchema({
  width: quantityDefinition(LengthSchema, true, {
    question: t`How wide are the aisles or pathways?`
  }),
  widthAtObstacles: quantityDefinition(LengthSchema, true, {
    question: t`What is the minimum width at obstacles?`
  }),
  maxLongitudinalSlope: {
    type: Number,
    optional: true,
    accessibility: {
      question: t`What is the angle of the longitudinal slope?`,
      description: t`Grade in percent as calculated by \`100 * rise / run\` or the tangent of the angle of inclination, multiplied by 100`
    }
  },
  maxLateralSlope: {
    type: Number,
    optional: true,
    accessibility: {
      question: t`What is the angle of the lateral slope?`,
      description: t`Grade in percent as calculated by \`100 * rise / run\` or the tangent of the angle of inclination, multiplied by 100`
    }
  }
});
