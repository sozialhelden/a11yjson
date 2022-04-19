import { Payment, getPaymentSchemaDefinition } from './Payment';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

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

const definition = getPaymentSchemaDefinition();

describe('PlaceInfo schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, paymentFixture);
  });
});
