import { Payment, PaymentSchema } from '../src/payment';

export const paymentMinimumFixture: Payment = {};

const paymentWithOptionalsFixture: Payment = {
  hasPortablePaymentSystem: true,
  acceptsPaymentByMobilePhone: true,
  acceptsCreditCards: true,
  acceptsDebitCards: true,
  acceptsCoins: true,
  acceptsBills: true,
  // offers: [{}],
  customPaymentMetaInfo: ['SMS to +49 123…'] // e.g. for phone numbers, parking lot IDs etc.
};

const allValidFixtures = Object.freeze([paymentMinimumFixture, paymentWithOptionalsFixture]);

const invalidPaymentFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidPaymentFixture]);

describe('PaymentSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = PaymentSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = PaymentSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
