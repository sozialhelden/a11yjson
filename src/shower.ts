import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './simpl-schema-extensions';
import { Length, LengthSchema, quantityDefinition } from './units';

export interface Shower {
  // QUESTION could be more than one step
  // QUESTION stairsFormat calls this field stepHeight
  step?: Length;
  isLevel?: boolean;
  hasSupportRails?: boolean;
  supportRails?: {
    height?: Length;
    aboveAndBelowControls?: boolean;
  };
  hasShowerSeat?: boolean;
  hasErgonomicHandle?: boolean;
  showerSeat?: {
    isRemovable?: boolean;
    isFolding?: boolean;
  };
}

export const ShowerSchema = createSchemaInstance('Shower', {
  step: quantityDefinition(LengthSchema),
  isLevel: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the shower step-free and level with the space in front of it?`
    }
  },
  hasSupportRails: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Does the shower have support rails?`
    }
  },
  supportRails: {
    type: Object,
    optional: true,
    accessibility: {
      question: t`Let’s describe the support rails further.`
    }
  },
  'supportRails.height': quantityDefinition(LengthSchema, true, {
    question: t`At which height are the support rails?`
  }),
  'supportRails.aboveAndBelowControls': {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Are the support rails above and below the controls?`
    }
  },
  hasShowerSeat: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is there a shower seat?`
    }
  },
  hasErgonomicHandle: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is there an ergonomic handle?`
    }
  },
  showerSeat: {
    type: Object,
    optional: true,
    accessibility: {
      question: t`Let’s take a look at the shower seat.`
    }
  },
  'showerSeat.isRemovable': {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the seat removable from the shower?`
    }
  },
  'showerSeat.isFolding': {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is this a folding seat?`
    }
  }
});
