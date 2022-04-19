import { PlaceProperties, getPlacePropertiesSchemaDefinition } from './PlaceProperties';
import accessibilityFixture from './Accessibilty.test';
import structuredAddressFixture from './Address.test';
import { Complete } from './Complete';
import expectInvalidFixture from './lib/expectInvalidFixture';
import expectValidFixture from './lib/expectValidFixture';

export const minimalPlaceProperties: PlaceProperties = {
  category: 'biergarten',
};

export const placePropertiesFixture: Complete<PlaceProperties> = {
  sameAs: ['https://www.wikidata.org/wiki/Q688541'],
  originalId: 'ChIJwSo_DaaHUocRFFAENf-ILl8',
  infoPageUrl: 'https://example.com/venue/ChIJwSo_DaaHUocRFFAENf-ILl8',
  editPageUrl: 'https://example.com/venue/ChIJwSo_DaaHUocRFFAENf-ILl8/edit',
  placeWebsiteUrl: 'https://www.example.com',
  name: { en: 'T-Mobile Sandy' },
  category: 'shopping',
  address: structuredAddressFixture,
  phoneNumber: { en: '555-SANDY' },
  emailAddress: 'sandy@example.com',
  description: { en: 'Some Description' },
  originalData: 'originalData',
  sourceId: 'T8j8nnnqMpbxpLxZu',
  sourceImportId: 'T8j8nnnqMpbxpLxZu',
  parentPlaceInfoId: 'T8j8nnnqMpbxpLxZu',
  originalParentPlaceInfoId: 'T8j8nnnqMpbxpLxZu',
  parentPlaceSourceId: 'T8j8nnnqMpbxpLxZu',
  ids: {
    wikidata: 'Q688541',
    hafas: '12345',
  },
  accessibility: accessibilityFixture,
  access: ['designated'],
};

const definition = getPlacePropertiesSchemaDefinition();

describe('PlaceProperties schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, placePropertiesFixture);
  });

  it('recognizes bad URLs', () => {
    expectInvalidFixture(definition, {
      ...minimalPlaceProperties,
      infoPageUrl: 'example.com/venue/ChIJwSo_DaaHUocRFFAENf-ILl8',
      editPageUrl: 'ASD',
      placeWebsiteUrl: 'www.example.com',
    }, [
      { type: 'regEx', name: 'infoPageUrl' },
      { type: 'regEx', name: 'editPageUrl' },
      { type: 'regEx', name: 'placeWebsiteUrl' },
    ]);
  });

  it('recognizes bad email addresses', () => {
    expectInvalidFixture(definition, {
      ...minimalPlaceProperties,
      emailAddress: 'example.com',
    }, [
      { type: 'regEx', name: 'emailAddress' },
    ]);
  });
});
