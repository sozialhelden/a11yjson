import SimpleSchema from 'simpl-schema';

export interface Entrance {
  name?: string;
  // QUESTION what is the range for the rating
  ratingForWheelchair?: number;
  isMainEntrance?: boolean;
  isLevel?: boolean;
  hasSlope?: boolean;
  // TODO create unit for this
  /// grade in percent as calculated by `100 * rise / run` or the tangent of the angle of inclination times 100
  slopeAngle?: number;
  hasRemovableRamp?: boolean;
  // QUESTION duplicated from area
  stairs?: any; // TODO add object type
  door?: any; // TODO add object type
  /// reference to the equipment id if this entrance is a lift
  liftEquipmentId?: string;
  /// reference to the equipment id of the intercom of this entrance
  intercomEquipmentId?: string;
}

export const EntranceSchema = new SimpleSchema({
  name: {
    type: String,
    optional: true
  },
  ratingForWheelchair: {
    type: Number,
    optional: true
  },
  isMainEntrance: {
    type: Boolean,
    optional: true
  },
  isLevel: {
    type: Boolean,
    optional: true
  },
  hasSlope: {
    type: Boolean,
    optional: true
  },
  slopeAngle: {
    type: Number,
    optional: true
  },
  hasRemovableRamp: {
    type: Boolean,
    optional: true
  },
  stairs: {
    type: Object, // TODO add object type
    optional: true
  },
  door: {
    type: Object, // TODO add object type
    optional: true
  },
  liftEquipmentId: {
    type: String,
    optional: true
  },
  intercomEquipmentId: {
    type: String,
    optional: true
  }
});
