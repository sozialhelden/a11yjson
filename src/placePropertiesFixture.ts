import { PlaceProperties } from './PlaceProperties.js';
import accessibilityFixture from './accessibilityFixture.js';
import structuredAddressFixture from './structuredAddressFixture.js';
import { Complete } from './Complete.js';

export const minimalPlaceProperties: PlaceProperties = {
  category: 'biergarten',
};

const placePropertiesFixture: Complete<PlaceProperties> = {
  sameAs: ['https://www.wikidata.org/wiki/Q688541'],
  originalId: 'ChIJwSo_DaaHUocRFFAENf-ILl8',
  infoPageUrl: 'https://example.com/venue/ChIJwSo_DaaHUocRFFAENf-ILl8',
  editPageUrl: 'https://example.com/venue/ChIJwSo_DaaHUocRFFAENf-ILl8/edit',
  placeWebsiteUrl: 'https://www.example.com',
  name: { en: 'T-Mobile Sandy' },
  category: 'shopping',
  address: structuredAddressFixture,
  phoneNumber: '+1 555-SANDY',
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
  tags: {
    healthcare: 'dentist',
  },
};

export default placePropertiesFixture;
