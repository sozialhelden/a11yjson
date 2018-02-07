import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './simpl-schema-extensions';
import { Length, LengthSchema, quantityDefinition } from './units';

export interface Stairs {
  /// number of steps
  count?: number;
  nosing?: {
    isHighContrast?: boolean;
    isAntiSlip?: boolean;
  };
  name?: string;
  stepHeight?: Length;
  hasHoist?: boolean;
  hasHandRail?: boolean;
  // QUESTION should this be an external id to a lift
  hasStairLift?: boolean;
  // QUESTION should this be an external id to an escalator
  hasEscalator?: boolean;
  hasTactileSafetyStrip?: boolean;
  wheelChairPlatformLift?: {
    height?: Length;
    width?: Length;
  };
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
    accessibility: {}
  },
  'nosing.isAntiSlip': {
    type: Boolean,
    optional: true,
    accessibility: {}
  },
  name: {
    type: String,
    optional: true,
    accessibility: {}
  },
  stepHeight: quantityDefinition(LengthSchema, true, {
    question: t`How high is this step/ are these steps?`
  }),
  hasHoist: {
    type: Boolean,
    optional: true,
    accessibility: {}
  },
  hasHandRail: {
    type: Boolean,
    optional: true,
    accessibility: {}
  },
  hasStairLift: {
    type: Boolean,
    optional: true,
    accessibility: {}
  },

  hasEscalator: {
    type: Boolean,
    optional: true,
    accessibility: {}
  },
  hasTactileSafetyStrip: {
    type: Boolean,
    optional: true,
    accessibility: {}
  },
  wheelChairPlatformLift: {
    type: Object,
    optional: true,
    accessibility: {}
  },
  'wheelChairPlatformLift.height': quantityDefinition(LengthSchema, true, {}),
  'wheelChairPlatformLift.width': quantityDefinition(LengthSchema, true, {})
});
