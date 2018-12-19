import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

import { Length, LengthSchema, quantityDefinition } from './Units';
import {
  IetfLanguageTag,
  ietfLanguageTags,
  ietfLanguageTagsAndSignLanguageCodes,
  IetfLanguageTagOrSignLanguageCode
} from './ietfLanguageTags';
import { LocalizedStringSchema, LocalizedString } from './LocalizedString';

/**
 * Describes a media unit provided at this place, for example an exhibit at a museum or a movie in
 * a cinema.
 */
export interface Media {
  /**
   * Type of the media unit
   */
  type: 'document' | 'menu' | 'guide' | 'presentation' | 'exhibit' | 'movie' | 'play' | 'screen';

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
}

export const MediaSchema = new SimpleSchema({
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
      'screen'
    ],
    accessibility: {
      question: t`What kind of media is described?`,
      options: [
        { value: 'document', label: t`document` },
        { value: 'menu', label: t`menu` },
        { value: 'guide', label: t`guide` },
        { value: 'presentation', label: t`presentation` },
        { value: 'exhibit', label: t`exhibit` },
        { value: 'movie', label: t`movie` },
        { value: 'screen', label: t`screen` }
      ]
    }
  },
  name: {
    type: LocalizedStringSchema,
    label: t`Media Name`,
    optional: true,
    accessibility: {
      question: t`What the name of the`,
      description: t`e.g. 'daily menu' or 'park guide'`
    }
  },
  isBraille: {
    type: Boolean,
    label: t`Braille`,
    optional: true,
    accessibility: {
      question: t`Is there a braille version available?`
    }
  },
  isAudio: {
    type: Boolean,
    label: t`Audio`,
    optional: true,
    accessibility: {
      question: t`Is there an audio version available?`
    }
  },
  isLargePrint: {
    type: Boolean,
    label: t`Large Print`,
    optional: true,
    accessibility: {
      question: t`Is there a large print version available?`
    }
  },
  hasContrastingBackground: {
    type: Boolean,
    label: t`Contrasting Background`,
    optional: true,
    accessibility: {
      question: t`Is the print on a contrasting background?`
    }
  },
  hasDedicatedScreenForSubtitles: {
    type: Boolean,
    label: t`Dedicated Subtitle Screen`,
    optional: true,
    accessibility: {
      question: t`Is there a dedicated screen for subtitles.`
    }
  },
  hasSubtitles: {
    type: Boolean,
    label: t`Subtitles`,
    optional: true,
    accessibility: {
      question: t`Are there subtitles?`
    }
  },
  hasRealTimeCaptioning: {
    type: Boolean,
    label: t`Real-time Captioning`,
    optional: true,
    accessibility: {
      question: t`Is there real time captioning?`
    }
  },
  // There are no standardized language codes for this yet, so this needs to be an extra flag for now.
  hasPlainLanguageOption: {
    type: Boolean,
    label: t`Plain Language Option`,
    optional: true,
    accessibility: {
      question: t`Is there a plain language option?`
    }
  },
  languages: {
    type: Array,
    label: t`Languages`,
    optional: true,
    accessibility: {
      question: t`What are the available languages?`
    }
  },
  'languages.$': {
    type: String,
    label: t`Language`,
    allowedValues: ietfLanguageTagsAndSignLanguageCodes
  },
  turningSpaceInFront: quantityDefinition(LengthSchema, true, {
    question: t`How much space for turning is in front of the media?`
  })
});
