import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

export interface Payment {
  hasPortablePaymentSystem?: boolean;
  // QUESTION: any app?
  acceptsPaymentByApp?: boolean;
  // QUESTION: which standard?
  acceptsPaymentByMobilePhone?: boolean;
  // QUESTION: which card types?
  acceptsCreditCards?: boolean;
  acceptsDebitCards?: boolean;
  acceptsCoins?: boolean;
  acceptsBills?: boolean;
  // offers?: Array<{}>,  QUESTION: Really needed?
  // e.g. for phone numbers, parking lot IDs etc.
  customPaymentMetaInfo?: Array<string>;
}

export const PaymentSchema = new SimpleSchema({
  hasPortablePaymentSystem: {
    type: Boolean,
    label: t`Portable Payment System`,
    optional: true,
    accessibility: {
      question: t`Is there a portable payment system?`
    }
  },
  acceptsPaymentByApp: {
    type: Boolean,
    label: t`Payment App`,
    optional: true,
    accessibility: {
      question: t`Is payment by app accepted?`
    }
  },
  acceptsPaymentByMobilePhone: {
    type: Boolean,
    label: t`Mobile Phone Payment`,
    optional: true,
    accessibility: {
      question: t`Is payment by mobile phone accepted?`
    }
  },
  acceptsCreditCards: {
    type: Boolean,
    label: t`Credit Cards`,
    optional: true,
    accessibility: {
      question: t`Is payment by credit card accepted?`
    }
  },
  acceptsDebitCards: {
    type: Boolean,
    label: t`Debit Cards`,
    optional: true,
    accessibility: {
      question: t`Is payment by debit card accepted?`
    }
  },
  acceptsCoins: {
    type: Boolean,
    label: t`Coins`,
    optional: true,
    accessibility: {
      question: t`Is payment by coins accepted?`
    }
  },
  acceptsBills: {
    type: Boolean,
    label: t`Bills`,
    optional: true,
    accessibility: {
      question: t`Is payment by bills accepted?`
    }
  },
  customPaymentMetaInfo: {
    type: Array,
    label: t`Custom Payment Information`,
    optional: true,
    accessibility: {
      question: t`Is there custom payment information?`,
      questionMore: t`Is there additional custom payment information?`,
      description: t`e.g. additional phone numbers, parking lot IDs etc.`
    }
  },
  'customPaymentMetaInfo.$': {
    type: String,
    label: t`Custom Payment Information`,
    accessibility: {
      question: t`What is the custom information?`
    }
  }
});
