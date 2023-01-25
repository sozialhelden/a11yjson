/* eslint-disable import/no-relative-packages */
import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
import BooleanField from './BooleanField.js';
import { getInteractableSchemaDefinition, Interactable } from './Interactable.js';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchema } from './Quantity.js';

export const MirrorInteractions = [
  'turn',
  'adjust',
  'move',
  'clean',
  'use',
] as const;
export type MirrorInteraction = typeof MirrorInteractions[number];
export const MirrorInteractionsSet = new Set(MirrorInteractions);

/**
 * Describes a mirror.
 */
export interface Mirror extends Interactable<MirrorInteraction> {
  /**
   * `true` if the mirror is located inside the restroom, `false` if not.
   */
  isLocatedInsideRestroom?: boolean;
  /**
   * `true` if the mirror is accessible while sitting in a wheelchair, `false` if not.
   */
  isAccessibleWhileSeated: boolean;
  /**
   * How far is the mirror's bottom from the ground?
   */
  heightFromGround: Length;
}

export const getMirrorSchemaDefinition: () => SchemaDefinition = () => ({
  isLocatedInsideRestroom: BooleanField,
  isAccessibleWhileSeated: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('heightFromGround', LengthSchema),
  ...getInteractableSchemaDefinition(MirrorInteractionsSet),
});
