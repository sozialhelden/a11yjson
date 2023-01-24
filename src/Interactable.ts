import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
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
) => SchemaDefinition = (interactionTypes) => {
  return ({
    interactions: {
      type: Object,
      optional: true,
      blackbox: true,
      custom(): string | undefined {
        if (!this.isSet) {
          return undefined;
        }
        const { value } = this;
        if (typeof value !== 'object') {
          return 'expectedType';
        }
        if (Object.keys(value).length === 0) {
          return 'mustHaveAtLeastOneKey';
        }
        return undefined;
      },
    },
    ...getPrefixedSchemaDefinition(`interactions.$`, getInteractionModeSchemaDefinition()),
  });
};


