import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

import { Length, LengthSchema, Operator, quantityDefinition } from './Units';

export interface Tables {
  /**
   * Height or heights of the tables at this place, measured from the top of the table surface.
   */
  height?: Length;
  /**
   * Indicates how high the space below a table is.
   */
  spaceBelowHeight: Length;
  /**
   * Indicates how wide the space below a table is for each user.
   */
  spaceBelowWidth: Length;
  /**
   * Indicates how deep the space below a table is for each user.
   */
  spaceBelowDepth: Length;
}

export const TablesSchema = new SimpleSchema({
  height: quantityDefinition(LengthSchema, true, {
    question: t`How high is the table?`
  }),
  spaceBelowHeight: quantityDefinition(LengthSchema, false, {
    question: t`How high is the free space below the table?`
  }),
  spaceBelowWidth: quantityDefinition(LengthSchema, false, {
    question: t`How wide is the free space below the table?`
  }),
  spaceBelowDepth: quantityDefinition(LengthSchema, false, {
    question: t`How deep is the free space below the table?`
  })
});

export const AccessibleTablesPrefab: Tables = {
  height: {
    operator: '>=',
    value: 72,
    unit: 'cm'
  },
  spaceBelowHeight: {
    operator: '>=',
    value: 70,
    unit: 'cm'
  },
  spaceBelowWidth: {
    operator: '>=',
    value: 80,
    unit: 'cm'
  },
  spaceBelowDepth: {
    operator: '>=',
    value: 50,
    unit: 'cm'
  }
};
