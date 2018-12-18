import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { Length, LengthSchema, quantityDefinition } from './units';

export interface Pathways {
  width: Length;
  widthAtObstacles?: Length;
  /// grade in percent as calculated by `100 * rise / run` or the tangent of the angle of inclination times 100
  maxLongitudinalSlope?: number; // TODO use something for >10
  /// grade in percent as calculated by `100 * rise / run` or the tangent of the angle of inclination times 100
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
      description: t`Grade in percent as calculated by \`100 * rise / run\` or the tangent of the angle of inclination times 100`
    }
  },
  maxLateralSlope: {
    type: Number,
    optional: true,
    accessibility: {
      question: t`What is the angle of the lateral slope?`,
      description: t`Grade in percent as calculated by \`100 * rise / run\` or the tangent of the angle of inclination times 100`
    }
  }
});
