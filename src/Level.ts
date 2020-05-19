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
      question: t`What the name of the Level`,
    }
  },
  index: {
    type: Number,
    optional: true,
    accessibility: {
      question: t`Index of the level in question`,
    }    
  }
});
