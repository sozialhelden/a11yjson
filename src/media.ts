import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { Length, LengthSchema, quantityDefinition } from './units';

export interface Media {
  type: 'document' | 'menu' | 'guide' | 'presentation' | 'exhibit' | 'movie' | 'screen';
  name?: string;
  isBraille?: boolean;
  isAudio?: boolean;
  isLargePrint?: boolean;
  hasContrastingBackground?: boolean;
  isEasyToUnderstand?: boolean;
  hasDedicatedScreenForSubtitles?: boolean;
  hasSubtitles?: boolean;
  hasRealTimeCaptioning?: boolean;
  hasPlainLanguageOption?: boolean;
  languages?: Array<string>;
  turningSpaceInFront?: Length;
  isClearlyVisibleWhileSeated?: boolean;
  isInformationReadableWhileSeated?: boolean;
}

export const MediaSchema = new SimpleSchema({
  type: {
    type: String,
    label: t`Media Type`,
    allowedValues: ['document', 'menu', 'guide', 'presentation', 'exhibit', 'movie', 'screen'],
    accessibility: {
      question: t`What format is the media in?`,
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
    type: String,
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
  isEasyToUnderstand: {
    type: Boolean,
    label: t`Easy To Understand`,
    optional: true,
    accessibility: {
      question: t`Is the media easy to understand?`
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
    label: t`Language`
    // TODO add allowed values
  },
  turningSpaceInFront: quantityDefinition(LengthSchema, true, {
    question: t`How much space for turning is in front of the media?`
  }),
  isClearlyVisibleWhileSeated: {
    type: Boolean,
    label: t`Clearly Visible While Seated`,
    optional: true,
    accessibility: {
      question: t`Is the media clearly visible while seated?`
    }
  },
  isInformationReadableWhileSeated: {
    type: Boolean,
    label: t`Information Readable While Seated`,
    optional: true,
    accessibility: {
      question: t`Is the information readable while seated?`
    }
  }
});
