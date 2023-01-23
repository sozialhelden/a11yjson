import { getPaymentSchemaDefinition } from './Payment';
import expectValidFixture from './lib/expectValidFixture';
import paymentFixture from './paymentFixture';

const definition = getPaymentSchemaDefinition();

describe('Payment schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, paymentFixture);
  });
});
