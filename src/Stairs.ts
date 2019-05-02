import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './SimpleSchemaExtensions';
import { Length, LengthSchema, quantityDefinition } from './Units';
import { LocalizedString, LocalizedStringSchema } from './LocalizedString';

/**
 * The `Stairs` interface describes one or more walkable stairs.
 */
export interface Stairs {
  /**
   * Number of steps.
   */
  count?: number;
  /**
   * `true` if all relevant steps have a high contrast nosing.
   */
  hasHighContrastNosing?: boolean;
  /**
   * `true` if all relevant steps are made with anti-slip material.
   */
  hasAntiSlipNosing?: boolean;
  /**
   * If there are multiple staircase, you SHOULD indicate a name for this staircase here.
   */
  name?: LocalizedString;
  /**
   * Indicates how high the steps if these stairs are (can be a range).
   */
  stepHeight?: Length;
  /**
   * `true` if there is a handrail covering all relevant steps, `false` if not, `undefined` if condition is unknown.
   */
  hasHandRail?: boolean;
  /**
   * `true` if there is braille navigation for this staircase, `false` if not, `undefined` if condition is unknown.
   */
  hasBrailleNavigation?: boolean;
  /**
   * You SHOULD reference alternative equipment IDs with this field, for example elevators, escalators, or hoists.
   */
  alternativeMobileEquipmentIds?: Array<string>;
  /**
   * `true` if all relevant steps have tactile safety surfaces, used as warnings, implying textures
   * detectable with the touch of a foot or sweep of a cane.
   */
  hasTactileSafetyStrips?: boolean;
  /**
   * `true` if first and last step of the stair is colorized in a way, so that people with visual impairment can 
   * recognize it easily.
   */
  firstAndLastStepColorized?: boolean;
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
  },
  firstAndLastStepColorized: {
    type: Boolean,
    optional: true,
    accessibility: {
      description: t`Do the stairs have first and last step colorized?`
    }
  }
});
