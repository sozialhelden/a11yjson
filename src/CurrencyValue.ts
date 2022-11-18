/**
 * Describes an amount of paid money in a specific currency.
 *
 * Don't use this for very small amounts of money (like sub-cent dollar amounts) as this uses no
 * BigDecimal arithmetic.
 */

import { AccessType, accessTypes } from './AccessType';
import { BaseQuantitySchemaDefinition, getPrefixedQuantitySchemaDefinition, Quantity } from './Quantity';

export interface CurrencyValue {
  /**
   * The amount of money.
   */
  amount: number;
  /**
   * The currency in which the amount is specified, as three-letter acronym.
   */
  currency: string;
  /**
   * Unit that is paid with the amount of money, e.g. "minute", "hour", 'GB', 'piece'
   */
  per?: Quantity;
  /**
   * For whom is this amount of money paid?
   * @see {@link AccessType}
   */
  access?: AccessType[];
}

export const getCurrencyValueSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  amount: {
    type: Number,
  },
  currency: {
    type: String,
    max: 3,
    min: 3,
  },
  ...getPrefixedQuantitySchemaDefinition('per', BaseQuantitySchemaDefinition),
  access: {
    type: Array,
    optional: true,
  },
  'access.$': {
    type: String,
    allowedValues: accessTypes,
  },
});
