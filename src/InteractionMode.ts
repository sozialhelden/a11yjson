/* eslint-disable import/no-relative-packages */
import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
import { ActionMode, getActionModeSchemaDefinition } from './ActionMode.js';
import BooleanField from './BooleanField.js';
import IETFLanguageCodeSchemaKeyDefinition, { IETFLanguageTag } from './ietfLanguageTags.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';
import { getPerceptionModeSchemaDefinition, PerceptionMode } from './PerceptionMode.js';

/**
 * Describes how you can interact with a thing and which abilities you need to do so.
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
