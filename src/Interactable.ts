import { getInteractionModeSchemaDefinition, InteractionMode } from './InteractionMode';
import { getPrefixedArraySchemaDefinition } from './lib/getPrefixedSchemaDefinition';

export interface Interactable<InteractionType extends string> {
  /**
   * Indicates how the object can be interacted with.
   */
  interactions?: Partial<Record<InteractionType, InteractionMode[]>>;
}

export const getInteractableSchemaDefinition: (
  interactionTypes: readonly string[]
) => Record<string, SchemaDefinition> = (interactionTypes) => ({
  interactions: {
    type: Object,
    optional: true,
  },
  ...interactionTypes.reduce(
    (acc, interactionType) => ({
      ...acc,
      ...getPrefixedArraySchemaDefinition(`interactions.${interactionType}`, getInteractionModeSchemaDefinition()),
    }),
    {},
  ),
});
