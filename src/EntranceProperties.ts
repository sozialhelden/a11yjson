import { Door, getDoorSchemaDefinition } from './Door';
import { Stairs, getStairsSchemaDefinition } from './Stairs';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';
import { getPrefixedQuantitySchemaDefinition, Slope, SlopeSchemaDefinition } from './Quantity';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import { getInteractableSchemaDefinition, Interactable } from './Interactable';

/**
 * Describes an entrance to a place.
 */
export interface EntranceProperties extends Interactable {
  /**
   * Name of the entrance (helpful if there are multiple entrances).
   */
  name?: LocalizedString;
  /**
   * `true` if this is the main entrance, `false` if not.
   */
  isMainEntrance?: boolean;
  /**
   * `true` if this entrance has no steps and needs no ramp, `false` if there are steps or a ramp.
   */
  isLevel?: boolean;
  /**
   * `true` if this entrance has a fixed ramp, `false` if not.
   */
  hasFixedRamp?: boolean;
  /**
   * How steep is the ground at the entrance?
   */
  slopeAngle?: Slope;
  /**
   *  `true` if there is a removable ramp, `false` if not. If there is a fixed ramp,
   * this property MUST be `undefined`.
   */
  hasRemovableRamp?: boolean;

  /**
   * `true` if there is a hoist / wheelchair lift, `false` if not.
   */
  hasHoist?: boolean;

  /**
   *  Object that describes stairs that you have to take to use the entrance.
   */
  stairs?: Stairs;
  /**
   *  Object that describes the entrance’s door. `null` if there is no door.
   */
  door?: Door | null;

  /**
   * If this entrance is NOT the main entrance: Is this entrance connected to the main entrance, and
   * is there signage that points to this entrance?
   */
  hasSignage?: boolean;

  /**
   * `true` if you need an appointment to enter, `false` if not.
   */
  needsAppointment?: boolean;

  /**
   *  reference to the equipment id if this entrance is an elevator (on accessibility.cloud)
   */
  elevatorEquipmentId?: string;
  /**
   * reference to the equipment id of the intercom of this entrance (on accessibility.cloud)
   */
  intercomEquipmentId?: string;

  /**
   * reference to the place that this entrance is connected to (on accessibility.cloud)
   */
  placeInfoId?: string;
}

export const getEntrancePropertiesSchemaDefinition: () => Record<
string,
SchemaDefinition
> = () => ({
  ...getLocalizedStringSchemaDefinition('name'),
  isMainEntrance: {
    type: Boolean,
    optional: true,
  },
  isLevel: {
    type: Boolean,
    optional: true,
  },
  ...getPrefixedQuantitySchemaDefinition('slopeAngle', SlopeSchemaDefinition),
  hasFixedRamp: {
    type: Boolean,
    optional: true,
  },
  hasRemovableRamp: {
    type: Boolean,
    optional: true,
  },
  hasHoist: {
    type: Boolean,
    optional: true,
  },
  ...getPrefixedSchemaDefinition('stairs', getStairsSchemaDefinition()),
  ...getPrefixedSchemaDefinition('door', getDoorSchemaDefinition()),
  elevatorEquipmentId: {
    type: String,
    optional: true,
  },
  intercomEquipmentId: {
    type: String,
    optional: true,
  },
  needsAppointment: {
    type: Boolean,
    optional: true,
  },
  hasSignage: {
    type: Boolean,
    optional: true,
  },
  placeInfoId: {
    type: String,
    optional: true,
  },
  ...getInteractableSchemaDefinition(),
});
