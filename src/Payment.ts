/* eslint-disable import/no-relative-packages */
import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';

import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';

export const PaymentInteractions = [
  'pay',
  'checkIn',
  'logIn',
  'logOut',
  'register',
] as const;
export type Paymentnteraction = typeof PaymentInteractions[number];

/**
 * The `Payment` interface describes the payment options at a location.
 */
export interface Payment {
  hasPortablePaymentSystem?: boolean;
  // QUESTION: which standard?
  acceptsPaymentByMobilePhone?: boolean;
  // QUESTION: which card types?
  acceptsCreditCards?: boolean;
  acceptsDebitCards?: boolean;
  acceptsCoins?: boolean;
  acceptsBills?: boolean;
  // e.g. for phone numbers, parking lot IDs etc.
  customPaymentMetaInfo?: LocalizedString[];
}

export const getPaymentSchemaDefinition: () => SchemaDefinition = () => ({
  hasPortablePaymentSystem: {
    type: Boolean,
    optional: true,
  },
  acceptsPaymentByMobilePhone: {
    type: Boolean,
    optional: true,
  },
  acceptsCreditCards: {
    type: Boolean,
    optional: true,
  },
  acceptsDebitCards: {
    type: Boolean,
    optional: true,
  },
  acceptsCoins: {
    type: Boolean,
    optional: true,
  },
  acceptsBills: {
    type: Boolean,
    optional: true,
  },
  customPaymentMetaInfo: {
    type: Array,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('customPaymentMetaInfo.$', {
  }),
});
