import { CurrencyValue } from './CurrencyValue';
import { Complete } from './Complete';
import paymentFixture from './paymentFixture';

export const currencyValueFixture: Complete<CurrencyValue> = {
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
export const forFreeFixture: CurrencyValue = {
  amount: 0,
};
export const negativeAmountFixture: CurrencyValue = {
  amount: -1,
  currency: 'USD',
};
export const nonFreeFixtureWithoutCurrency: CurrencyValue = {
  amount: 1,
};
export default currencyValueFixture;
