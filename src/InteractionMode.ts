import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import { ActionMode, getActionModeSchemaDefinition } from './ActionMode.js';
import BooleanField from './BooleanField.js';
import IETFLanguageCodeSchemaKeyDefinition, { IETFLanguageTag } from './ietfLanguageTags.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';
import { getPerceptionModeSchemaDefinition, PerceptionMode } from './PerceptionMode.js';

/**
 * Many people with disabilities face barriers when interacting with places or things. These stem
 * from the physical environment, the design of the object, or the way the interaction with the
 * object or place is designed.
 *
 * The `Interactable` model allows to describe how you can interact with a thing or engange in the
 * key purposes of a place, and which abilities you need for this.
 *
 * Attributes typically contain
 *
 * - barriers
 * - means of interaction
 * - required and optional abilities, experiences, or senses
 *
 * This allows for UIs that adapt to the user's needs and abilities, or to provide usage
 * descriptions that work for everyone.
 */
export interface InteractionMode {
  /**
   * Describes which output is meant. Helpful if there are multiple outputs.
   */
  name?: LocalizedString;

  /**
   * Describes the output as human-readable text.
   */
  description?: LocalizedString;

  /**
   * Input languages supported.
   */
  languages?: IETFLanguageTag[];

  /**
   * Perception modes supported to facilitate the interaction.
   */
  perception?: PerceptionMode;

  /**
   * Action modes that are absolutely necessary to facilitate the interaction, e.g. ‘pushing a
   * button’.
   */
  action?: ActionMode;

  /**
   * `true` if the interaction is optional, `false` if it is required.
   */
  optional?: boolean;

  /**
   * `false` if the interaction is optional, `true` if it is required.
   */
  required?: boolean;
}

export const getInteractionModeSchemaDefinition: () => SchemaDefinition = () => ({
  ...getLocalizedStringSchemaDefinition('name'),
  ...getLocalizedStringSchemaDefinition('description'),
  ...getPrefixedSchemaDefinition('action', getActionModeSchemaDefinition()),
  ...getPrefixedSchemaDefinition('perception', getPerceptionModeSchemaDefinition()),
  languages: {
    type: Array,
    optional: true,
  },
  'languages.$': IETFLanguageCodeSchemaKeyDefinition,
  optional: BooleanField,
  required: BooleanField,
});
