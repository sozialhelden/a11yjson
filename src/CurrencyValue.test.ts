import { CurrencyValue, getCurrencyValueSchemaDefinition } from './CurrencyValue';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import paymentFixture from './Payment.test';
import expectInvalidFixture from './lib/expectInvalidFixture';

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

const forFreeFixture: CurrencyValue = {
  amount: 0,
};

const negativeAmountFixture: CurrencyValue = {
  amount: -1,
  currency: 'USD',
};

const nonFreeFixtureWithoutCurrency: CurrencyValue = {
  amount: 1,
};

export default currencyValueFixture;

const definition = getCurrencyValueSchemaDefinition();

describe('CurrencyValue schema', () => {
  it('accepts a completely specified object', () => {
    expectValidFixture(definition, currencyValueFixture);
  });

  it('accepts a "for free" object', () => {
    expectValidFixture(definition, forFreeFixture);
  });

  it('rejects a non-free amount without currency', () => {
    expectInvalidFixture(definition, nonFreeFixtureWithoutCurrency, [
      {
        name: 'currency',
        type: 'required',
      },
    ]);
  });

  it('rejects an object with a negative amount', () => {
    expectInvalidFixture(definition, negativeAmountFixture, [{
      name: 'amount',
      type: 'minNumber',
      min: 0,
    }]);
  });
});
