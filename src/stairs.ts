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
    optional: true
  },
  nosing: {
    type: Object,
    optional: true
  },
  'nosing.isHighContrast': {
    type: Boolean,
    optional: true
  },
  'nosing.isAntiSlip': {
    type: Boolean,
    optional: true
  },
  name: {
    type: String,
    optional: true
  },
  stepHeight: quantityDefinition(LengthSchema),
  hasHoist: {
    type: Boolean,
    optional: true
  },
  hasHandRail: {
    type: Boolean,
    optional: true
  },
  hasStairLift: {
    type: Boolean,
    optional: true
  },

  hasEscalator: {
    type: Boolean,
    optional: true
  },
  hasTactileSafetyStrip: {
    type: Boolean,
    optional: true
  },
  wheelChairPlatformLift: {
    type: Object,
    optional: true
  },
  'wheelChairPlatformLift.height': quantityDefinition(LengthSchema),
  'wheelChairPlatformLift.width': quantityDefinition(LengthSchema)
});
