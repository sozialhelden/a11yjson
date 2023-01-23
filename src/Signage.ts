import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';
import BooleanField from './BooleanField';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';
import { getInteractableSchemaDefinition, Interactable } from './Interactable';

export const SignageInteractions = [
  'locateYourself',
  'findYourDestination',
  'useSitemap',
] as const;
export type SignageInteraction = typeof SignageInteractions[number];

/**
 * Describes a signage / physical navigation system belonging to a location.
 */
export interface Signage extends Interactable<SignageInteraction> {
  /**
   * A description of the signage.
   */
  description?: LocalizedString;

  /**
   * `true` if the signage has pictograms, `false` if not.
   */
  hasPictograms?: boolean;

  /**
   * `true` if the signage has braille, `false` if not.
   */
  hasBraille?: boolean;

  /**
   * `true` if the signage has raised letters, `false` if not.
   */
  hasRaisedLetters?: boolean;

  /**
   * `true` if the signage has audio, `false` if not.
   */
  hasAudio?: boolean;

  /**
   * `true` if the signage has video, `false` if not.
   */
  hasVideo?: boolean;

  /**
   * `true` if the signage has tactile hand rails, `false` if not, `undefined` if condition is
   * unknown.
   */
  hasTactileHandRails?: boolean;

  /**
   * `true` if the signage has tactile room names, `false` if not, `undefined` if condition is
   * unknown.
   */
  hasTactileRoomNames?: boolean;

  /**
   * `true` if the signage has tactile north markers, `false` if not, `undefined` if condition is
   * unknown.
   *
   * https://twitter.com/saizai/status/1210352258950598656
   */
  hasTactileNorthMarkers?: boolean;

  /**
   * `true` if the signage has tactile guide strips, `false` if not, `undefined` if condition is
   * nknown.
   */
  hasTactileGuideStrips?: boolean;

  /**
   * `true` if the signage has tactile paving, `false` if not.
   */
  hasTactilePaving?: boolean;

  /**
   * `true` if the signage has a virtual map, `false` if not.
   */
  hasVirtualMap?: boolean;

  /**
   * `true` if the signage has a tactile map, `false` if not.
   */
  hasTactileMap?: boolean;

  /**
   * `true` if the signage has a search function, `false` if not, `undefined` if condition is
   * unknown.
   */
  hasSearch?: boolean;

  /**
   * `true` if the signage uses a numbering scheme, `false` if not, `undefined` if condition is
   * unknown.
   */
  hasNumbers?: boolean;

  /**
   * `true` if the signage has text features, `false` if not.
   */
  hasText?: boolean;

  /**
   * `true` if the signage has high contrast, `false` if not.
   */
  isHighContrast?: boolean;

  /**
   * `true` if the signage has high legibility, `false` if not.
   */
  highLegibility?: boolean;

  /**
   * The height of the font used on the signage. Most likely in millimeters, using a range.
   */
  fontHeight?: Length;
}

export const getSignageSchemaDefinition: () => SchemaDefinition = () => ({
  ...getLocalizedStringSchemaDefinition('description'),
  hasPictograms: BooleanField,
  hasBraille: BooleanField,
  hasRaisedLetters: BooleanField,
  hasAudio: BooleanField,
  hasVideo: BooleanField,
  hasTactileHandRails: BooleanField,
  hasTactileRoomNames: BooleanField,
  hasTactileNorthMarkers: BooleanField,
  hasTactileGuideStrips: BooleanField,
  hasTactilePaving: BooleanField,
  hasVirtualMap: BooleanField,
  hasTactileMap: BooleanField,
  hasSearch: BooleanField,
  hasNumbers: BooleanField,
  hasText: BooleanField,
  isHighContrast: BooleanField,
  highLegibility: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('fontHeight', LengthSchemaDefinition),
  ...getInteractableSchemaDefinition(SignageInteractions),
});
