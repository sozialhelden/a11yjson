import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { Length, LengthSchema, Operator, quantityDefinition } from './units';

export interface Tables {
  /**
   * Height or heights of the tables at this place, measured from the top of the table surface.
   */
  height?: Length;
  /**
   * Object describing the space below existing tables.
   */
  spaceBelow: {
    /**
     * Indicates how high the space below a table is.
     */
    height: Length;
    /**
     * Indicates how wide the space below a table is for each user.
     */
    width: Length;
    /**
     * Indicates how deep the space below a table is for each user.
     */
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
