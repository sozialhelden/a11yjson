import { getStructuredAddressSchemaDefinition } from './Address';
import expectInvalidFixture from './lib/expectInvalidFixture';
import expectValidFixture from './lib/expectValidFixture';
import structuredAddressFixture from './structuredAddressFixture';

const definition = getStructuredAddressSchemaDefinition();

describe('Address schema', () => {
  it('evaluates a non-set address as valid because Address is optional', () => {
    expectValidFixture(definition, {});
  });

  it('evaluates a complex address as valid', () => {
    expectValidFixture(definition, structuredAddressFixture);
  });

  it('validates country codes', () => {
    expectInvalidFixture(
      definition,
      {
        countryCode: 'INVALID',
      },
      [{ type: 'notAllowed', name: 'countryCode' }],
    );
  });
});
