import { Payment } from './Payment.js';
import { Complete } from './Complete.js';

const paymentFixture: Complete<Payment> = {
  hasPortablePaymentSystem: true,
  acceptsPaymentByMobilePhone: true,
  acceptsCreditCards: true,
  acceptsDebitCards: true,
  acceptsCoins: true,
  acceptsBills: true,
  customPaymentMetaInfo: [{ en: 'SMS to +49 123…' }], // e.g. for phone numbers, parking lot IDs etc.
};

export default paymentFixture;
