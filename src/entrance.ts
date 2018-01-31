import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { Door, DoorSchema } from './door';
import { Stairs, StairsSchema } from './stairs';

export interface Entrance {
  name?: string;
  // QUESTION what is the range for the rating, how is this objective?
  ratingForWheelchair?: number;
  isMainEntrance?: boolean;
  // QUESTION merge with slope/stairs in some way
  isLevel?: boolean;
  // QUESTION merge with slopeAngle in some way (e.g. > 0)
  hasSlope?: boolean;
  // TODO create unit for this
  /// grade in percent as calculated by `100 * rise / run` or the tangent of the angle of inclination times 100
  slopeAngle?: number;
  hasRemovableRamp?: boolean;
  // QUESTION duplicated from area
  stairs?: Stairs;
  door?: Door;
  /// reference to the equipment id if this entrance is a lift
  liftEquipmentId?: string;
  /// reference to the equipment id of the intercom of this entrance
  intercomEquipmentId?: string;
}

export const EntranceSchema = new SimpleSchema({
  name: {
    type: String,
    optional: true,
    accessibility: {
      question: t`What is the name of this entrance?`,
      example: t`e.g. main entrance`
    }
  },
  ratingForWheelchair: {
    type: Number,
    optional: true,
    min: 0,
    max: 1,
    accessibility: {
      // QUESTION - this is very subjective, should not exist as a question like this
      question: t`How would you rate this entrance for wheelchair users?`
    }
  },
  isMainEntrance: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is this the main entrance?`
    }
  },
  isLevel: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is this entrance level?`
    }
  },
  hasSlope: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is this entrance sloped?`
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
  hasRemovableRamp: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is there a removable ramp?`
    }
  },
  stairs: {
    type: StairsSchema,
    optional: true,
    accessibility: {
      question: t`Are there stairs or steps at this entrance?`
    }
  },
  door: {
    type: DoorSchema,
    optional: true,
    accessibility: {
      questionBlockBegin: t`Does this entrance have a door?`
    }
  },
  liftEquipmentId: {
    type: String,
    optional: true,
    accessibility: {
      question: t`Is there a lift at this entrance?`
      // TODO foreign object flow equipment
    }
  },
  intercomEquipmentId: {
    type: String,
    optional: true,
    accessibility: {
      question: t`Is there an intercom at this entrance?`
      // TODO foreign object flow equipment
    }
  }
});
