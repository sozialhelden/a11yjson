import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './SimpleSchemaExtensions';
import { Length, LengthSchema } from './Units';
import { LocalizedStringSchema } from './LocalizedString';

export interface Bed {
  /**
   * `true` if the bed is completely accessible while using a wheelchair,
   * `false` if not, `undefined` if the condition is unknown or difficult to assess.
   */
  isWheelchairAccessible?: boolean;
  hasEasyAccessFromBothSides?: boolean;
  hasAccessibleLightSwitch?: boolean;
}

export const BedSchema = createSchemaInstance('Bed', {
  isWheelchairAccessible: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the bed wheelchair accessible?`
    }
  },
  hasAccessibleLightSwitch: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the light switch accessible from the bed?`
    }
  },
  hasEasyAccessFromBothSides: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Does the bed have enough space to easily access it from both sides?`
    }
  }
});
