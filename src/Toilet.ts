import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';
import { GrabBars, getGrabBarsSchemaDefinition } from './GrabBars.js';
import {
  getPrefixedQuantitySchemaDefinition, Length, LengthSchema,
} from './Quantity.js';
import BooleanField from './BooleanField.js';
import { getInteractableSchemaDefinition, Interactable } from './Interactable.js';

export const ToiletInteractions = [
  'use',
  'flush',
  'secondaryFlush',
  'spray',
] as const;
export type ToiletInteraction = typeof ToiletInteractions[number];

/**
 * Describes a single toilet that can be inside a restroom or cabin.
 */
export interface Toilet extends Interactable<ToiletInteraction> {
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
   * Indicates whether the toilet is a latrine.
   */
  isLatrine?: boolean;

  /**
   * `true` if the toilet is automatically flushing after use.
   */
  hasAutomaticFlush?: boolean;

  /**
   * Indicates how far the flush mechanism(s) from the toilet, from the perspective of a the floor
   * plan. If the flush mechanism is right behind the toilet, this is a 0 length.
   */
  flushMechanismDistanceFromToilet?: Length;
}

export const getToiletSchemaDefinition: () => SchemaDefinition = () => ({
  hasGrabBars: BooleanField,
  isSquatToilet: BooleanField,
  isUrinal: BooleanField,
  isLatrine: BooleanField,
  hasAutomaticFlush: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('heightOfBase', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('spaceOnUsersLeftSide', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('spaceOnUsersRightSide', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('spaceInFront', LengthSchema),
  ...getPrefixedSchemaDefinition('grabBars', getGrabBarsSchemaDefinition()),
  ...getPrefixedQuantitySchemaDefinition('flushMechanismDistanceFromToilet', LengthSchema),
  ...getInteractableSchemaDefinition(ToiletInteractions),
});
