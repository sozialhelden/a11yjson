import { getPaymentSchemaDefinition } from './Payment.js';
import expectValidFixture from './lib/expectValidFixture.js';
import paymentFixture from './paymentFixture.js';

const definition = getPaymentSchemaDefinition();

describe('Payment schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, paymentFixture);
  });
});
