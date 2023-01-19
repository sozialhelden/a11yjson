import BooleanField from './BooleanField';
import { getInteractableSchemaDefinition, Interactable } from './Interactable';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';

const MirrorInteractions = [
  'turn',
  'adjust',
  'move',
  'clean',
  'use',
] as const;
export type MirrorInteraction = typeof MirrorInteractions[number];

/**
 * Describes a mirror.
 */
export interface Mirror extends Interactable<MirrorInteraction> {
  /**
   * `true` if the mirror is located inside the restroom, `false` if not, `undefined` if
   * condition is unknown.
   */
  isLocatedInsideRestroom?: boolean;
  /**
   * `true` if the mirror is accessible while sitting in a wheelchair, `false` if not, `undefined`
   * if condition is unknown.
   */
  isAccessibleWhileSeated: boolean;
  /**
   * How far is the mirror's bottom from the ground?
   */
  heightFromGround: Length;
}

export const getMirrorSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  isLocatedInsideRestroom: BooleanField,
  isAccessibleWhileSeated: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('heightFromGround', LengthSchemaDefinition),
  ...getInteractableSchemaDefinition(MirrorInteractions),
});
