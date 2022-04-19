import { getStructuredAddressSchemaDefinition, StructuredAddress } from './Address';
import { Complete } from './Complete';
import expectInvalidFixture from './lib/expectInvalidFixture';
import expectValidFixture from './lib/expectValidFixture';

const structuredAddressFixture: Complete<StructuredAddress> = {
  text: { en: 'Testweg 12, Berlin' },
  room: { en: 'Room 123' },
  roomNumber: { en: '123' },
  levelName: { en: '5' },
  levelIndex: 1.5,
  building: { en: 'B' },
  house: { en: '12' },
  street: { en: 'Testweg' },
  postalCode: { en: '12345' },
  areas: [{ en: 'foo' }, { en: 'bar' }],
  district: { en: 'Kreuzberg' },
  city: { en: 'Berlin' },
  regions: [{ en: 'foo' }, { en: 'bar' }],
  county: { en: 'Berlin' },
  state: { en: 'Berlin' },
  stateCode: 'B',
  countryCode: 'DEU',
};

export default structuredAddressFixture;

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
