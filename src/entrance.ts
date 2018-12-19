import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

import { Door, DoorSchema } from './Door';
import { Stairs, StairsSchema } from './Stairs';
import { LocalizedStringSchema, LocalizedString } from './LocalizedString';

/**
 * Describes an entrance to a place.
 */
export interface Entrance {
  /**
   * Name of the entrance (helpful if there are multiple entrances).
   * */
  name?: LocalizedString;
  /**
   * `true` if this is the main entrance, `false` if not, `undefined` if unknown. If there is only one entrance, this attribute SHOULD be `undefined`.
   */
  isMainEntrance?: boolean;
  // QUESTION merge with slope/stairs in some way
  /**
   * `true` if this entrance has no steps and needs no ramp, `false` if there are steps or a ramp, `undefined` if unknown.
   */
  isLevel?: boolean;
  // TODO create unit for this for eg. >10
  /**
   * grade in percent as calculated by `100 * rise / run` or the tangent of the angle of inclination times 100, or `undefined` if there is no slope.
   */
  slopeAngle?: number;
  /**
   *  `true` if there is a removable ramp, `false` if not, `undefined` if unknown. If there is a fixed ramp, this property MUST be `undefined`.
   */
  hasRemovableRamp?: boolean;
  // QUESTION duplicated from area
  /**
   *  Object that describes stairs that you have to take to use the entrance.
   */
  stairs?: Stairs;
  /**
   *  Object that describes the entrance’s door. `null` if there is no doof, `undefined` if it is unknown.
   */
  door?: Door | null;
  /**
   *  reference to the equipment id if this entrance is an elevator (on accessibility.cloud)
   */
  elevatorEquipmentId?: string;
  /**
   * reference to the equipment id of the intercom of this entrance (on accessibility.cloud)
   */
  intercomEquipmentId?: string;
}

export const EntranceSchema = new SimpleSchema({
  name: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`What is the name of this entrance?`,
      example: t`e.g. main entrance`
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
      question: t`Is the entrance stepless?`
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
      question: t`Is a portable ramp available? Please check with the staff on-site.`
    }
  },
  stairs: {
    type: StairsSchema,
    optional: true,
    label: t`Stairs`,
    accessibility: {
      question: t`Are there steps at the entrance?`
    }
  },
  door: {
    type: DoorSchema,
    optional: true,
    label: t`Door`,
    accessibility: {
      questionBlockBegin: t`Would you like to add information about the door at the entrance?`
    }
  },
  elevatorEquipmentId: {
    type: String,
    optional: true,
    accessibility: {
      question: t`Is there a lift at this entrance?`,
      machineData: true
      // TODO foreign object flow equipment
    }
  },
  intercomEquipmentId: {
    type: String,
    optional: true,
    accessibility: {
      question: t`Is there an intercom at this entrance?`,
      machineData: true
      // TODO foreign object flow equipment
    }
  }
});
