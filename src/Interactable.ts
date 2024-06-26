import SimpleSchema, {
  SchemaDefinition,
  SchemaKeyDefinition,
  ValidationError,
} from '@sozialhelden/simpl-schema';
import { getInteractionModeSchemaDefinition, InteractionMode } from './InteractionMode.js';

/**
 * Mixin to link {@link InteractionMode} objects to your model.
 */

export interface Interactable<InteractionType extends string> {
  /**
   * An object that indicates how the object can be interacted with, or how you can engange in the
   * main function of a place or thing.
   *
   * The keys of this object are the interaction types, and the values are {@link InteractionMode}
   * objects.
   */
  interactions?: Partial<Record<InteractionType, InteractionMode>>;
}

const InteractionModeSchema = new SimpleSchema(getInteractionModeSchemaDefinition());

export const getInteractableSchemaDefinition: (
  interactionTypes: Readonly<Set<string>>
) => SchemaDefinition = (interactionTypes) => {
  const interactions: SchemaKeyDefinition = {
    type: Object,
    optional: true,
    blackbox: true,
    autoValue() {
      const { value } = this;
      if (value && Object.keys(value).length === 0) {
        this.unset();
        return undefined;
      }
      if (typeof value !== 'object' || value instanceof Array || typeof value === 'string' || value === null || value === undefined) {
        return undefined;
      }
      const newValue: typeof value = {};
      const keys = Object.keys(value);
      keys.forEach((key) => {
        const interactionMode = value[key];
        if (typeof interactionMode !== 'object' || interactionMode instanceof Array || typeof interactionMode === 'string' || interactionMode === null || interactionMode === undefined) {
          return;
        }
        newValue[key] = InteractionModeSchema.clean(value[key]);
      });
      return newValue;
    },
    custom(): string | undefined {
      if (!this.isSet) {
        return undefined;
      }
      const { value } = this;
      if (typeof value !== 'object' || value instanceof Array || typeof value === 'string' || value === null || value === undefined) {
        return 'expectedType';
      }

      const keys = Object.keys(value);
      if (keys.length === 0) {
        return 'mustHaveAtLeastOneValidKey';
      }
      const errors: ValidationError[] = [];
      keys.forEach((key) => {
        if (!interactionTypes.has(key)) {
          errors.push({
            name: `interactions.${key}`,
            type: 'invalidInteractionType',
            value: key,
          });
        }
        const interactionMode = value[key];
        if (
          typeof interactionMode !== 'object'
          || interactionMode instanceof Array
          || typeof interactionMode === 'string'
          || interactionMode === null
          || interactionMode === undefined
        ) {
          errors.push({
            name: `interactions.${key}`,
            type: 'expectedType',
            value: interactionMode,
          });
        } else {
          // validate the interaction mode for the key and add validation errors from child
          // evaluation
          const context = InteractionModeSchema.newContext();
          context.validate(value[key]);
          errors.push(
            ...context
              .validationErrors()
              .map((error) => ({ ...error, name: `interactions.${key}.${error.name}` })),
          );
        }
        if (errors.length > 0) {
          this.addValidationErrors(errors);
          return false;
        }
        return undefined;
      });
      return undefined;
    },
  };
  return {
    interactions,
  };
};
