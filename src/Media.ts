import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';
import {
  ietfLanguageTagsAndSignLanguageCodes,
  IetfLanguageTagOrSignLanguageCode,
} from './ietfLanguageTags';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';
import { W3CAccessibilityFeature, w3cAccessibilityFeatures } from './W3CAccessibilityFeature';
import { W3CAccessibilityHazard, w3cAccessibilityHazards } from './W3CAccessibilityHazard';
import { W3CAccessMode, w3cAccessModes } from './W3CAccessMode';
import { w3cAccessibilityControls, W3CAccessibilityControl } from './W3CAccessibilityControl';

/**
 * Describes a media unit provided at this place, for example an exhibit at a museum or a movie in
 * a cinema.
 */
export interface Media {
  /**
   * Type of the media unit
   */
  type:
  | 'document'
  | 'menu'
  | 'guide'
  | 'tour'
  | 'presentation'
  | 'exhibit'
  | 'movie'
  | 'play'
  | 'screen'
  | 'website';

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
  languages?: ArrayLike<IetfLanguageTagOrSignLanguageCode>;

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

export const getMediaSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  type: {
    type: String,
    label: t`Media Type`,
    allowedValues: [
      'document',
      'menu',
      'guide',
      'presentation',
      'exhibit',
      'movie',
      'play',
      'screen',
      'website',
      'tour',
    ],
  },
  ...getLocalizedStringSchemaDefinition('name', {
    label: t`Media Name`,
  }),
  isBraille: {
    type: Boolean,
    label: t`Braille`,
    optional: true,
  },
  isAudio: {
    type: Boolean,
    label: t`Audio`,
    optional: true,
  },
  isLargePrint: {
    type: Boolean,
    label: t`Large Print`,
    optional: true,
  },
  hasContrastingBackground: {
    type: Boolean,
    label: t`Contrasting Background`,
    optional: true,
  },
  hasDedicatedScreenForSubtitles: {
    type: Boolean,
    label: t`Dedicated Subtitle Screen`,
    optional: true,
  },
  hasSubtitles: {
    type: Boolean,
    label: t`Subtitles`,
    optional: true,
  },
  hasRealTimeCaptioning: {
    type: Boolean,
    label: t`Real-time Captioning`,
    optional: true,
  },
  hasPlainLanguageOption: {
    type: Boolean,
    label: t`Plain Language Option`,
    optional: true,
  },
  languages: {
    type: Array,
    label: t`Languages`,
    optional: true,
  },
  'languages.$': {
    type: String,
    label: t`Language`,
    allowedValues: ietfLanguageTagsAndSignLanguageCodes,
  },
  accessMode: {
    type: Array,
    label: t`Access Modes`,
    optional: true,
  },
  'accessMode.$': {
    type: String,
    label: t`Access Modes`,
    allowedValues: w3cAccessModes,
  },
  accessModeSufficient: {
    type: Array,
    label: t`Sufficient Access Modes`,
    optional: true,
  },
  'accessModeSufficient.$': {
    type: String,
    allowedValues: w3cAccessModes,
  },
  accessibilityControl: {
    type: Array,
    label: t`Accessibility Controls`,
    optional: true,
  },
  'accessibilityControl.$': {
    type: String,
    allowedValues: w3cAccessibilityControls,
  },
  accessibilityFeature: {
    type: Array,
    label: t`Accessibility Features`,
    optional: true,
  },
  'accessibilityFeature.$': {
    type: String,
    allowedValues: w3cAccessibilityFeatures,
  },
  accessibilityHazard: {
    type: Array,
    label: t`Accessibility Hazards`,
    optional: true,
  },
  'accessibilityHazard.$': {
    type: String,
    allowedValues: w3cAccessibilityHazards,
  },
  ...getPrefixedQuantitySchemaDefinition('turningSpaceInFront', LengthSchemaDefinition),
  sameAs: {
    type: Array,
    label: t`Same as (URL)`,
    optional: true,
  },
  'sameAs.$': {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
  },
});
