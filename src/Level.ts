import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

import { LocalizedStringSchema, LocalizedString } from './LocalizedString';

export interface Level {
  /**
   * Name of the level
   */
  name?: LocalizedString;
  /**
   * Index of the level
   */
  index?: Number;
}

export const LevelSchema = new SimpleSchema({
  name: {
    type: LocalizedStringSchema,
    label: t`Level Name`,
    optional: true,
    accessibility: {
      question: t`Optional name of the level (matching level lettering/numbering used inside the structure). Is useful for elevator routing (e.g. “take the elevator to level ‘Rooftop terrace’ or ‘Platforms’ or ‘-1’”).`
    }
  },
  index: {
    type: Number,
    optional: true,
    accessibility: {
      question: t`Index of the level in question`
    }
  }
});
