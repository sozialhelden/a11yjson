import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';
import { Length, LengthSchema, quantityDefinition } from './Units';

export interface Ground {
  /**
   * Rating value (range `[0..1]`) with subjective sidewalk conditions.
   */
  sidewalkConditions?: number;
  /**
   * `true` if the ground is level, `false` if not, `undefined` if the condition is unknown.
   */
  isLevel?: boolean;
  /**
   * Specifies the distance between the main entrance and the next dropped curb if the place is
   * reachable from a street.
   *
   * If people with mobility impairments have to use a secondary entrance, the walking distance
   * between this entrance and the main entrance has to be added to this value.
   */
  distanceToDroppedCurb?: Length;

  /**
   * Angle of the slope that this ground has, if applicable. `undefined` if the slope is unknown.
   */
  slopeAngle?: number; // TODO  replace with unit for degrees

  /**
   * `true` if the pavement is even and not plastered, `false` if not. `undefined` if this condition
   * is unknown.
   */
  evenPavement?: boolean;

  /**
   * Turning space that this ground provides to people.
   */
  turningSpace?: Length;
}

export const GroundSchema = new SimpleSchema({
  sidewalkConditions: {
    type: Number,
    optional: true,
    min: 0,
    max: 1,
    accessibility: {
      question: t`How would you rate the conditions of the sidewalk?`,
      componentHint: 'StarRating'
    }
  },
  isLevel: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the ground level?`
    }
  },
  slopeAngle: {
    type: Number,
    optional: true,
    accessibility: {
      description: t`Grade in percent as calculated by \`100 * rise / run\` or the tangent of the angle of inclination times 100`,
      question: t`What is the angle of the slope?`
    }
  },
  evenPavement: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the pavement even, ie. no cobble stones?`
    }
  },
  distanceToDroppedCurb: quantityDefinition(LengthSchema, true, {
    question: t`How far is the entrance from the next dropped curb?`
  }),
  turningSpace: quantityDefinition(LengthSchema, true, {
    question: t`How much space for turning is there?`
  })
});
