import { Address, AddressSchema, StructuredAddress } from '../src/address';
import SimpleSchema from 'simpl-schema';

const addressStringFixture = 'Testweg 12, Berlin';

export const structuredAddressMinimalFixture: StructuredAddress = {};

const structuredAddressWithOptionalsFixture: StructuredAddress = {
  text: 'Testweg 12, Berlin',
  room: 'foo',
  level: 'foo',
  building: 'foo',
  house: 'foo',
  street: 'foo',
  postalCode: 'foo',
  areas: ['foo', 'bar'],
  district: 'foo',
  city: 'foo',
  regions: ['foo', 'bar'],
  county: 'foo',
  state: 'foo',
  stateCode: 'foo',
  countryCode: 'DEU'
};

const allValidFixtures = Object.freeze([
  addressStringFixture,
  structuredAddressMinimalFixture,
  structuredAddressWithOptionalsFixture
]);

const structuredAddressTooManyFieldsFixture = {
  text: 'text',
  invalidField: 10
};

const structuredAddressInvalidCountryCodeFixture = {
  text: 'text',
  countryCode: 'INVALID'
};

const allInvalidFixtures = Object.freeze([undefined, structuredAddressTooManyFieldsFixture]);

const SchemaWithLengthField = new SimpleSchema({ field: AddressSchema });

describe('Address Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = SchemaWithLengthField.newContext();
      context.validate({ field: value });
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = SchemaWithLengthField.newContext();
      context.validate({ field: value });
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
