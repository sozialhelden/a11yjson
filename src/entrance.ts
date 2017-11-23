import SimpleSchema from 'simpl-schema';
import { EquipmentWithDistanceFromEntrance } from './equipment';

export interface Entrance {
  // QUESTION add entry number
  name?: string;
  // QUESTION what is the range for the rating
  ratingForWheelchair?: number;
  isMainEntrance?: boolean;
  isLevel?: boolean;
  // QUESTION how should this be aligned with lift equipment?
  // QUESTION could be part of the lift object, duplication of information
  isALift?: boolean;
  hasSlope?: boolean;
  slopeAngle?: string; // TODO convert to unit angle or remove trailing % - '6%', not used atm
  hasRemovableRamp?: boolean;
  // QUESTION could be part of the intercom object, duplication of information
  hasIntercom?: boolean;
  // QUESTION format does not fit with current AC (or maybe my version of the data)
  intercom?: EquipmentWithDistanceFromEntrance;
  payment?: any; // TODO add object type
  // QUESTION duplicated from area
  sitemap?: any; // TODO add object type
  stairs?: any; // TODO add object type
  door?: any; // TODO add object type
  lift?: any; // TODO add object type
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
  isALift: {
    type: Boolean,
    optional: true
  },
  hasSlope: {
    type: Boolean,
    optional: true
  },
  slopeAngle: {
    type: String,
    optional: true
  },
  hasRemovableRamp: {
    type: Boolean,
    optional: true
  },
  hasIntercom: {
    type: Boolean,
    optional: true
  },
  intercom: {
    type: Object, // TODO add object type
    optional: true
  },
  payment: {
    type: Object, // TODO add object type
    optional: true
  },
  sitemap: {
    type: Object, // TODO add object type
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
  lift: {
    type: Object, // TODO add object type
    optional: true
  }
});
