import SimpleSchema from 'simpl-schema';
import { t } from "ttag";

import { createSchemaInstance } from './simpl-schema-extensions';
import { Length, LengthSchema, quantityDefinition } from './units';

export interface Shower {
  // QUESTION could be more than one step
  // QUESTION stairsFormat calls this field stepHeight
  step?: Length;
  isWalkIn?: boolean; // needs review
  hasSupportRails?: boolean;
  supportRails?: {
    height?: Length;
    aboveAndBelowControls?: boolean;
  };
  hasShowerSeat?: boolean;
  hasErgonomicHandle?: boolean;
  showerSeat?: {
    // QUESTION do not split Removable & Fixed, these are mutually exclusive
    isRemovable?: boolean;
    isFixed?: boolean;
    // QUESTION bad language should be isFolding
    isFoldable?: boolean;
  };
}

export const ShowerSchema = createSchemaInstance('Shower', {
  step: quantityDefinition(LengthSchema),
  isWalkIn: {
    type: Boolean,
    optional: true
  },
  hasSupportRails: {
    type: Boolean,
    optional: true
  },
  supportRails: {
    type: Object,
    optional: true
  },
  'supportRails.height': quantityDefinition(LengthSchema),
  'supportRails.aboveAndBelowControls': {
    type: Boolean,
    optional: true
  },
  hasShowerSeat: {
    type: Boolean,
    optional: true
  },
  hasErgonomicHandle: {
    type: Boolean,
    optional: true
  },
  showerSeat: {
    type: Object,
    optional: true
  },
  'showerSeat.isRemovable': {
    type: Boolean,
    optional: true
  },
  'showerSeat.isFixed': {
    type: Boolean,
    optional: true
  },
  'showerSeat.isFoldable': {
    type: Boolean,
    optional: true
  }
});
