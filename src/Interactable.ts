import { getInteractionModeSchemaDefinition, InteractionMode } from './InteractionMode';
import { getPrefixedArraySchemaDefinition } from './lib/getPrefixedSchemaDefinition';

export interface Interactable {
  /**
   * Indicates how the object can be interacted with.
   */
  interactions?: InteractionMode[];
}

export const getInteractableSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  ...getPrefixedArraySchemaDefinition('interactions', getInteractionModeSchemaDefinition()),
});
