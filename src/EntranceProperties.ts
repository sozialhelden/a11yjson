import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import { Door, getDoorSchemaDefinition } from './Door.js';
import { Stairs, getStairsSchemaDefinition } from './Stairs.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';
import { getPrefixedQuantitySchemaDefinition, Slope, SlopeSchema } from './Quantity.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';
import BooleanField from './BooleanField.js';

/**
 * Describes an entrance to a place.
 */
export interface EntranceProperties {
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

export const getEntrancePropertiesSchemaDefinition: () => SchemaDefinition = () => ({
  ...getLocalizedStringSchemaDefinition('name'),
  isMainEntrance: BooleanField,
  isLevel: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('slopeAngle', SlopeSchema),
  hasFixedRamp: BooleanField,
  hasRemovableRamp: BooleanField,
  hasHoist: BooleanField,
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
  needsAppointment: BooleanField,
  hasSignage: BooleanField,
  placeInfoId: {
    type: String,
    optional: true,
  },
});
