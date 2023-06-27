import { SchemaDefinition } from '@sozialhelden/simpl-schema';

import IETFLanguageCodeSchemaKeyDefinition, { IETFLanguageTag } from './ietfLanguageTags.js';
import { getInteractableSchemaDefinition, Interactable } from './Interactable.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchema } from './Quantity.js';
import validateUrl from './validateUrl.js';
import { W3CAccessibilityControl, w3cAccessibilityControls } from './W3CAccessibilityControl.js';
import { W3CAccessibilityFeature, w3cAccessibilityFeatures } from './W3CAccessibilityFeature.js';
import { W3CAccessibilityHazard, w3cAccessibilityHazards } from './W3CAccessibilityHazard.js';
import { W3CAccessMode, w3cAccessModes } from './W3CAccessMode.js';

export const MediaInteractions = [
  'watch',
  'listen',
  'feel',
  'discover',
  'open',
  'close',
  'rent',
  'recognize',
  'browse',
  'read',
  'interact',
] as const;
export type MediaInteraction = typeof MediaInteractions[number];
export const MediaInteractionsSet = new Set(MediaInteractions);

export const MediaTypes = [
  'document',
  'menu',
  'guide',
  'tour',
  'presentation',
  'exhibit',
  'movie',
  'play',
  'screen',
  'website',
  'form',
] as const;
export type MediaType = typeof MediaTypes[number];
export const MediaTypeSet = new Set(MediaTypes);

/**
 * Describes a media unit provided at this place, for example an exhibit at a museum or a movie in
 * a cinema.
 */
export interface Media extends Interactable<MediaInteraction> {
  /**
   * Type of the media unit
   */
  type?: MediaType;

  /**
   * Name of the media unit (relevant if there are multiple units of the same kind)
   */
  name?: LocalizedString;

  /**
   * Is the media unit consumable or described for Braille readers?
   */
  isBraille?: boolean;

  /**
   * Is the media unit consumable as audio-only option?
   */
  isAudio?: boolean;

  /**
   * Is the media tactile?
   */
  isTactile?: boolean;

  /**
   * If the media unit is printed, is the print large?
   */
  isLargePrint?: boolean;

  /**
   * If the media unit is printed or on a screen, does it have high contrast between background and
   * foreground?
   */
  hasContrastingBackground?: boolean;

  /**
   * Relevant for movies, screens and presentations: Is there a dedicated screen where subtitles can
   * be read?
   */
  hasDedicatedScreenForSubtitles?: boolean;

  /**
   * Is the media unit provided with subtitles?
   */
  hasSubtitles?: boolean;

  /**
   * Is the media unit provided with audio description?
   */
  hasAudioDescription?: boolean;

  /**
   * Does the media unit have [real time captioning](https://www.washington.edu/doit/what-real-time-captioning)?
   */
  hasRealTimeCaptioning?: boolean;

  /**
   * Is the media unit provided in a [Plain Language](https://en.wikipedia.org/wiki/Plain_language) option?
   */
  hasPlainLanguageOption?: boolean;

  /**
   * Specifies which languages (including sign languages) in which the media unit is provided
   */
  languages?: IETFLanguageTag[];

  /**
   * If the media is consumed while the consumer is directly in front of it, this property specifies
   * how much turning space there is in front of it.
   */
  turningSpaceInFront?: Length;

  /**
   * URLs that contain the media. Use this to link data, for example with [RDF](https://www.w3.org/RDF/).
   */
  sameAs?: string[];

  /**
   * Access modes supported by this equipment.
   *
   * @see https://www.w3.org/2021/a11y-discov-vocab/latest/
   */
  accessMode?: W3CAccessMode[];

  /**
   * Access mode combinations that allow understanding and using the equipment.
   *
   * @see https://www.w3.org/2021/a11y-discov-vocab/latest/
   */
  accessModeSufficient?: W3CAccessMode[];

  /**
   * The accessibility controls that allow controlling this equipment.
   *
   * @see https://www.w3.org/2021/a11y-discov-vocab/latest/
   */
  accessibilityControl?: W3CAccessibilityControl[];

  /**
   * Indicates the access mode combinations that allow understanding and using the equipment.
   *
   * @see https://www.w3.org/2021/a11y-discov-vocab/latest/
   */
  accessibilityFeature?: W3CAccessibilityFeature[];

  /**
   * Indicates the access mode combinations that allow understanding and using the equipment.
   *
   * @see https://www.w3.org/2021/a11y-discov-vocab/latest/
   */
  accessibilityHazard?: W3CAccessibilityHazard[];
}

export const getMediaSchemaDefinition: () => SchemaDefinition = () => ({
  type: {
    type: String,
    optional: true,
    allowedValues: (MediaTypes as any) as any[],
  },
  ...getLocalizedStringSchemaDefinition('name', {
  }),
  isBraille: {
    type: Boolean,
    optional: true,
  },
  isAudio: {
    type: Boolean,
    optional: true,
  },
  isTactile: {
    type: Boolean,
    optional: true,
  },
  isLargePrint: {
    type: Boolean,
    optional: true,
  },
  hasContrastingBackground: {
    type: Boolean,
    optional: true,
  },
  hasDedicatedScreenForSubtitles: {
    type: Boolean,
    optional: true,
  },
  hasSubtitles: {
    type: Boolean,
    optional: true,
  },
  hasAudioDescription: {
    type: Boolean,
    optional: true,
  },
  hasRealTimeCaptioning: {
    type: Boolean,
    optional: true,
  },
  hasPlainLanguageOption: {
    type: Boolean,
    optional: true,
  },
  languages: {
    type: Array,
    optional: true,
  },
  'languages.$': IETFLanguageCodeSchemaKeyDefinition,
  accessMode: {
    type: Array,
    optional: true,
  },
  'accessMode.$': {
    type: String,
    allowedValues: w3cAccessModes,
  },
  accessModeSufficient: {
    type: Array,
    optional: true,
  },
  'accessModeSufficient.$': {
    type: String,
    allowedValues: w3cAccessModes,
  },
  accessibilityControl: {
    type: Array,
    optional: true,
  },
  'accessibilityControl.$': {
    type: String,
    allowedValues: w3cAccessibilityControls,
  },
  accessibilityFeature: {
    type: Array,
    optional: true,
  },
  'accessibilityFeature.$': {
    type: String,
    allowedValues: w3cAccessibilityFeatures,
  },
  accessibilityHazard: {
    type: Array,
    optional: true,
  },
  'accessibilityHazard.$': {
    type: String,
    allowedValues: w3cAccessibilityHazards,
  },
  ...getPrefixedQuantitySchemaDefinition('turningSpaceInFront', LengthSchema),
  sameAs: {
    type: Array,
    optional: true,
  },
  'sameAs.$': {
    type: String,
    custom: validateUrl,
  },
  ...getInteractableSchemaDefinition(MediaInteractionsSet),
});
