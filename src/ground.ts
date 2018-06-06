import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';
import { Length, LengthSchema, quantityDefinition } from './units';

export interface Ground {
  sidewalkConditions?: number;
  isLevel?: boolean;
  distanceToDroppedCurb?: Length;
  slopeAngle?: number; // TODO  replace with unit for degrees
  evenPavement?: boolean;
  turningSpace?: Length;
  streetIsSloping?: boolean;
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
  streetIsSloping: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the street sloping?`
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
  distanceToDroppedCurb: quantityDefinition(LengthSchema),
  turningSpace: quantityDefinition(LengthSchema, true, {
    question: t`How much space for turning is there?`
  })
});
