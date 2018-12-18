import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './simpl-schema-extensions';
import { Length, LengthSchema, quantityDefinition } from './units';

export interface Toilet {
  heightOfBase?: Length;
  spaceOnUsersLeftSide?: Length;
  spaceOnUsersRightSide?: Length;
  spaceInFront?: Length;
  hasFoldingHandles?: boolean;
  foldingHandles?: {
    onUsersLeftSide?: boolean;
    onUsersRightSide?: boolean;
    topHeightFromFloor?: Length;
    distanceBetweenHandles?: Length;
  };
}

export const ToiletSchema = createSchemaInstance('Toilet', {
  heightOfBase: quantityDefinition(LengthSchema, true, {
    question: t`How high is the toilet’s base?`
  }),
  spaceOnUsersLeftSide: quantityDefinition(LengthSchema, true, {
    question: t`How much space is on the left side of the toilet? (from the perspective of somebody using the toilet)`
  }),
  spaceOnUsersRightSide: quantityDefinition(LengthSchema, true, {
    question: t`How much space is on the right side of the toilet? (from the perspective of somebody using the toilet)`
  }),
  spaceInFront: quantityDefinition(LengthSchema, true, {
    question: t`How much space is in front of the toilet?`
  }),
  hasFoldingHandles: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Does the toilet have folding handles?`
    }
  },
  foldingHandles: {
    type: Object,
    optional: true,
    accessibility: {
      question: t`Let’s describe the folding handles.`
    }
  },
  'foldingHandles.onUsersLeftSide': {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is there a folding handle on left side? (from the perspective of somebody using the toilet)`
    }
  },
  'foldingHandles.onUsersRightSide': {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is there a folding handle on right side? (from the perspective of somebody using the toilet)`
    }
  },
  'foldingHandles.topHeightFromFloor': quantityDefinition(LengthSchema, true, {
    question: t`How high are the folding handles (top edge, measured from the floor)`
  }),
  'foldingHandles.distanceBetweenHandles': quantityDefinition(LengthSchema, true, {
    question: t`How far are the handles apart?`
  })
});
