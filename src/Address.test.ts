import { getStructuredAddressSchemaDefinition } from './Address.js';
import expectInvalidFixture from './lib/expectInvalidFixture.js';
import expectValidFixture from './lib/expectValidFixture.js';
import structuredAddressFixture from './structuredAddressFixture.js';

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
