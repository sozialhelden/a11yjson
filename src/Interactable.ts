import { SchemaDefinition } from 'simpl-schema/dist/esm/types';
import { getInteractionModeSchemaDefinition, InteractionMode } from './InteractionMode';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';

export interface Interactable<InteractionType extends string> {
  /**
   * An object that indicates how the object can be interacted with.
   *
   * The keys of this object are the interaction types, and the values are {@link InteractionMode}
   * objects.
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
