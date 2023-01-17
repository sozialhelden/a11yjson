import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import { GrabBars, getGrabBarsSchemaDefinition } from './GrabBars';
import {
  getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition,
} from './Quantity';
import BooleanField from './BooleanField';
import { EquipmentProperties, getEquipmentPropertiesSchemaDefinition } from './EquipmentProperties';

/**
 * Describes a single toilet that can be inside a restroom or cabin.
 */
export interface Toilet {
  /**
   * Indicates the height of the toilet’s base.
   */
  heightOfBase?: Length;
  /**
   * How much space is on the left side of the toilet? (from the perspective of somebody using the
   * toilet)
   */
  spaceOnUsersLeftSide?: Length;
  /**
   * How much space is on the right side of the toilet? (from the perspective of somebody using the
   * toilet)
   */
  spaceOnUsersRightSide?: Length;
  /**
   * How much space is in front of the toilet?
   */
  spaceInFront?: Length;
  /**
   * Object describing the grab bars.
   */
  grabBars?: GrabBars;

  /**
   * Indicates whether the toilet is a squat toilet.
   */
  isSquatToilet?: boolean;

  /**
   * Indicates whether the toilet is a urinal.
   */
  isUrinal?: boolean;

  /**
   * `true` if the toilet is automatically flushing after use.
   */
  hasAutomaticFlush?: boolean;

  /**
   * Describes the flush mechanism as equipment. Use `actionMode` and/or `perceptionMode` on the
   * properties to describe the mechanism.
   */
  flushMechanism?: EquipmentProperties;

  /**
   * Indicates how far the flush mechanism is from the toilet, from the perspective of a the floor
   * plan. If the flush mechanism is right behind the toilet, this is a 0 length.
   */
  flushMechanismDistanceFromToilet?: Length;

  /**
   * Describes the secondary flush mechanism as equipment. Use `actionMode` and/or `perceptionMode`
   * on the properties to describe the mechanism.
   */
  secondaryFlushMechanism?: EquipmentProperties;

  /**
   * Indicates how far the flush mechanism is from the toilet, from the perspective of a the floor
   * plan. If the flush mechanism is right behind the toilet, this is a 0 length.
   */
  secondaryFlushMechanismDistanceFromToilet?: Length;
}

export const getToiletSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  hasGrabBars: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('heightOfBase', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('spaceOnUsersLeftSide', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('spaceOnUsersRightSide', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('spaceInFront', LengthSchemaDefinition),
  ...getPrefixedSchemaDefinition('grabBars', getGrabBarsSchemaDefinition()),
  ...getPrefixedSchemaDefinition('flushMechanism', getEquipmentPropertiesSchemaDefinition()),
  ...getPrefixedQuantitySchemaDefinition('flushMechanismDistanceFromToilet', LengthSchemaDefinition),
  ...getPrefixedSchemaDefinition('secondaryFlushMechanism', getEquipmentPropertiesSchemaDefinition()),
  ...getPrefixedQuantitySchemaDefinition('secondaryFlushMechanismDistanceFromToilet', LengthSchemaDefinition),
  isSquatToilet: BooleanField,
  isUrinal: BooleanField,
  hasAutomaticFlush: BooleanField,
});
