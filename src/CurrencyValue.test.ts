import { getCurrencyValueSchemaDefinition } from './CurrencyValue.js';
import expectValidFixture from './lib/expectValidFixture.js';
import expectInvalidFixture from './lib/expectInvalidFixture.js';
import currencyValueFixture, {
  forFreeFixture, nonFreeFixtureWithoutCurrency, negativeAmountFixture,
} from './currencyValueFixture.js';

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
