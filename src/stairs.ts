import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './simpl-schema-extensions';
import { Length, LengthSchema, quantityDefinition } from './units';
import { LocalizedString, LocalizedStringSchema } from './localized-string';

/**
 * The `Stairs` interface describes one or more walkable stairs.
 */
export interface Stairs {
  /// number of steps
  count?: number;
  nosing?: {
    isHighContrast?: boolean;
    isAntiSlip?: boolean;
  };
  name?: LocalizedString;
  stepHeight?: Length;
  hasHandRail?: boolean;
  hasBrailleNavigation?: boolean;
  alternativeMobileEquipmentIds?: Array<string>;
  hasTactileSafetyStrips?: boolean;
}

export const StairsSchema = createSchemaInstance('Stairs', {
  /// number of steps
  count: {
    type: Number,
    optional: true,
    accessibility: {
      question: t`How many steps are there?`
    }
  },
  nosing: {
    type: Object,
    optional: true,
    accessibility: {}
  },
  'nosing.isHighContrast': {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Are the steps nosings marked for higher contrast?`
    }
  },
  'nosing.isAntiSlip': {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Do the steps have anti-slip material?`
    }
  },
  name: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`What is the name of these stairs?`
    }
  },
  stepHeight: quantityDefinition(LengthSchema, true, {
    question: t`How high is this step / are these steps?`
  }),
  hasHandRail: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is there a hand rail?`
    }
  },
  hasTactileSafetyStrips: {
    type: Boolean,
    optional: true,
    accessibility: {
      description: t`Do the stairs have tactile safety strips?`
    }
  },
  hasBrailleNavigation: {
    type: Boolean,
    optional: true,
    accessibility: {
      description: t`Do the stairs have braille navigation hints printed on the rails?`
    }
  },
  alternativeMobileEquipmentIds: {
    type: Array,
    optional: true,
    accessibility: {
      machineData: true,
      description: t`accessibility.cloud IDs of alternative escalators, elevators, hoists, or stair lifts to replace this pathway`
    }
  },
  'alternativeMobileEquipmentIds.$': {
    type: String,
    label: t`accessibility.cloud Equipment ID`
  }
});
