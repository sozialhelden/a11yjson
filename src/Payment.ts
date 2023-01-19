import { t } from 'ttag';

import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';

const PaymentInteractions = [
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
  customPaymentMetaInfo?: Array<LocalizedString>;
}

export const getPaymentSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  hasPortablePaymentSystem: {
    type: Boolean,
    label: t`Is there a portable payment system?`,
    optional: true,
  },
  acceptsPaymentByMobilePhone: {
    type: Boolean,
    label: t`Is payment by mobile phone accepted?`,
    optional: true,
  },
  acceptsCreditCards: {
    type: Boolean,
    label: t`Is payment by credit card accepted?`,
    optional: true,
  },
  acceptsDebitCards: {
    type: Boolean,
    label: t`Is payment by debit card accepted?`,
    optional: true,
  },
  acceptsCoins: {
    type: Boolean,
    label: t`Is payment by coins accepted?`,
    optional: true,
  },
  acceptsBills: {
    type: Boolean,
    label: t`Is payment by bills accepted?`,
    optional: true,
  },
  customPaymentMetaInfo: {
    type: Array,
    label: t`Custom Payment Information`,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('customPaymentMetaInfo.$', {
    label: t`Custom Payment Information`,
  }),
});
