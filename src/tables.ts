import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { Length, LengthSchema, Operator, quantityDefinition } from './units';

export interface Tables {
  height?: Length;
  spaceBelow: {
    height: Length;
    width: Length;
    depth: Length;
  };
}

export const TablesSchema = new SimpleSchema({
  height: quantityDefinition(LengthSchema, true, {
    question: t`How high is the table?`
  }),
  spaceBelow: {
    type: Object,
    accessibility: {
      question: t`How much space is below the table?`
    }
  },
  'spaceBelow.height': quantityDefinition(LengthSchema, false, {
    question: t`How high is the free space below the table?`
  }),
  'spaceBelow.width': quantityDefinition(LengthSchema, false, {
    question: t`How wide is the free space below the table?`
  }),
  'spaceBelow.depth': quantityDefinition(LengthSchema, false, {
    question: t`How deep is the free space below the table?`
  })
});

export const AccessibleTablesPrefab: Tables = {
  height: {
    operator: '>=',
    value: 72,
    unit: 'cm'
  },
  spaceBelow: {
    height: {
      operator: '>=',
      value: 70,
      unit: 'cm'
    },
    width: {
      operator: '>=',
      value: 80,
      unit: 'cm'
    },
    depth: {
      operator: '>=',
      value: 50,
      unit: 'cm'
    }
  }
};
