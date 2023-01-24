import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';

import { AccessType, AccessTypes } from './AccessType.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';
import { getPaymentSchemaDefinition, Payment } from './Payment.js';
import { BaseQuantitySchema, getPrefixedQuantitySchemaDefinition, Quantity } from './Quantity.js';

/**
 * Describes an amount of paid money in a specific currency, per specified unit, for a specific kind
 * of access to a service or product.
 *
 * Can represent free availability, by setting `amount` to 0, and not defining `currency`.
 *
 * Don't use this for very small amounts of money (like sub-cent dollar amounts) as this uses no
 * BigDecimal arithmetic.
 */
export interface CurrencyValue {
  /**
   * The amount of money.
   */
  amount: number;
  /**
   * The currency in which the amount is specified, as three-letter acronym.
   *
   * Can be undefined if the amount is zero.
   */
  currency?: string;
  /**
   * Unit that is paid with the amount of money, e.g. "minute", "hour", 'GB', 'piece'
   */
  per?: Quantity;
  /**
   * For whom is this amount of money paid?
   * @see {@link AccessType}
   */
  access?: AccessType[];
  /**
   * The payment method that is used to pay the amount of money.
   */
  paymentTypes?: Payment[];
}

export const getCurrencyValueSchemaDefinition: () => SchemaDefinition = () => ({
  amount: {
    type: Number,
    min: 0,
  },
  currency: {
    type: String,
    max: 3,
    min: 3,
    optional: true,
    custom() {
      // Allow zero amounts without currency
      if (this.isSet) {
        if (!this.value.match(/^[A-Z]{3}$/)) {
          return 'notAllowed';
        }
      } else if (this.field('amount').value !== 0) {
        return 'required';
      }
      return undefined;
    },
  },
  ...getPrefixedQuantitySchemaDefinition('per', BaseQuantitySchema),
  access: {
    type: Array,
    optional: true,
  },
  'access.$': {
    type: String,
    allowedValues: (AccessTypes as any) as any[],
  },
  paymentTypes: {
    type: Array,
    optional: true,
  },
  ...getPrefixedSchemaDefinition('paymentTypes.$', getPaymentSchemaDefinition()),
});
