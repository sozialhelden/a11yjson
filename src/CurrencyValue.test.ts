import { CurrencyValue, getCurrencyValueSchemaDefinition } from './CurrencyValue';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import paymentFixture from './Payment.test';

const currencyValueFixture: Complete<CurrencyValue> = {
  amount: 0.5,
  currency: 'EUR',
  per: {
    value: 1,
    unit: 'hour',
  },
  access: ['customers'],
  paymentTypes: [
    paymentFixture,
  ],
};

export default currencyValueFixture;

const definition = getCurrencyValueSchemaDefinition();

describe('CurrencyValue schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, currencyValueFixture);
  });
});
