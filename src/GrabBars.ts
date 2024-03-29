import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import BooleanField from './BooleanField.js';
import { getInteractableSchemaDefinition, Interactable } from './Interactable.js';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchema } from './Quantity.js';

export const GrabBarsInteractions = [
  'localizeYourself',
  'findYourDestination',
  'foldUp',
  'foldDown',
  'adjust',
] as const;
export type GrabBarsInteraction = typeof GrabBarsInteractions[number];
export const GrabBarsInteractionsSet = new Set(GrabBarsInteractions);

/**
 * Describes grab bars or hand rails.
 */
export interface GrabBars extends Interactable<GrabBarsInteraction> {
  /**
   * `true` if there is a folding handle on left side, `false` if not.
   *
   * Seen from the perspective
   *
   * - of somebody using a toilet
   * - of somebody in front of stairs, facing upwards
   * - of somebody in front of a door
   */
  onUsersLeftSide?: boolean;
  /**
   * `true` if there is a folding handle on right side, `false` if not.
   *
   * Seen from the perspective
   *
   * - of somebody using a toilet
   * - of somebody in front of stairs, facing upwards
   * - of somebody in front of a door
   */
  onUsersRightSide?: boolean;
  /**
   * `true` if there is a folding handle in front of the user, `false` if not.
   *
   * Seen from the perspective
   *
   * - of somebody using a toilet
   * - of somebody in front of stairs, facing upwards
   * - of somebody in front of a door
   */
  inFrontOfTheUser?: boolean;
  /**
   * Indicates how high the grab bars are (top edge, measured from the floor).
   */
  topHeightFromFloor?: Length;
  /**
   * Indicates how far the bars are apart.
   */
  distanceBetweenBars?: Length;
  /**
   * `true` if the grab bars can be folded, `false` if not..
   */
  foldable?: boolean;

  /**
   * Indicates if the grab bars are continuous or not. Helpful for stair grab rails.
   */
  continuous: boolean;
}

export const getGrabBarsSchemaDefinition: () => SchemaDefinition = () => ({
  onUsersLeftSide: BooleanField,
  onUsersRightSide: BooleanField,
  inFrontOfTheUser: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('topHeightFromFloor', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('distanceBetweenBars', LengthSchema),
  foldable: BooleanField,
  continuous: BooleanField,
  ...getInteractableSchemaDefinition(GrabBarsInteractionsSet),
});
