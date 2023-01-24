import { getPlacePropertiesSchemaDefinition } from './PlaceProperties.js';
import expectInvalidFixture from './lib/expectInvalidFixture.js';
import expectValidFixture from './lib/expectValidFixture.js';
import placePropertiesFixture, { minimalPlaceProperties } from './placePropertiesFixture.js';

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
      { type: 'invalidUrl', name: 'infoPageUrl' },
      { type: 'invalidUrl', name: 'editPageUrl' },
      { type: 'invalidUrl', name: 'placeWebsiteUrl' },
    ]);
  });

  it('recognizes bad email addresses', () => {
    expectInvalidFixture(definition, {
      ...minimalPlaceProperties,
      emailAddress: 'example.com',
    }, [
      { type: 'invalidEmail', name: 'emailAddress' },
    ]);
  });
});
