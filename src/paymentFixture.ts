import { Payment } from './Payment';
import { Complete } from './Complete';

export const paymentFixture: Complete<Payment> = {
  hasPortablePaymentSystem: true,
  acceptsPaymentByMobilePhone: true,
  acceptsCreditCards: true,
  acceptsDebitCards: true,
  acceptsCoins: true,
  acceptsBills: true,
  customPaymentMetaInfo: [{ en: 'SMS to +49 123…' }], // e.g. for phone numbers, parking lot IDs etc.
};
export default paymentFixture;
