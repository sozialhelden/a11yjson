import { SchemaDefinition } from 'simpl-schema/dist/esm/types';
import { getInteractionModeSchemaDefinition, InteractionMode } from './InteractionMode';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';

export interface Interactable<InteractionType extends string> {
  /**
   * Indicates how the object can be interacted with.
   */
  interactions?: Partial<Record<InteractionType, InteractionMode>>;
}

export const getInteractableSchemaDefinition: (
  interactionTypes: readonly string[]
) => SchemaDefinition = (interactionTypes) => ({
  interactions: {
    type: Object,
    optional: true,
  },
  ...interactionTypes.reduce(
    (acc, interactionType) => ({
      ...acc,
      ...getPrefixedSchemaDefinition(`interactions.${interactionType}`, getInteractionModeSchemaDefinition()),
    }),
    {},
  ),
});
