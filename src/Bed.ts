import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './SimpleSchemaExtensions';
import { Length } from './Units';
import { LocalizedStringSchema } from './LocalizedString';

export interface Bed {
  /**
   * `true` if the bed is completely accessible while using a wheelchair,
   * `false` if not, `undefined` if the condition is unknown or difficult to assess.
   */
  isAccessibleWithWheelchair?: boolean;
  hasEasyAccessFromBothSides?: boolean;
  spaceAround?: Length;
  hasAccessibleLightSwitch?: boolean;
}

export const BedSchema = new SimpleSchema ({
  isAccessibleWithWheelchair: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the bed accessible with wheelchair?`
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
  },
  spaceAround: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`Is the bed accessible with wheelchair?`
    }
  }
});
