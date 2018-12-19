import { PlaceProperties, PlacePropertiesSchema } from '../src/PlaceProperties';

import { validExternalIdWithExtendedDataFixture } from './ExternalId.test';
import { accessibilityMinimumFixture } from './Accessibilty.test';
import { structuredAddressMinimalFixture } from './Address.test';

export const placePropertiesMinimumFixture: PlaceProperties = {
  name: 'T-Mobile Sandy',
  category: 'shopping'
};

export const placePropertiesWithNullFixture: PlaceProperties = {
  name: 'T-Mobile Sandy',
  category: 'shopping',
  address: null,
  accessibility: null
};

const placePropertiesWithOptionalsFixture: PlaceProperties = {
  ids: [validExternalIdWithExtendedDataFixture],
  originalId: 'ChIJwSo_DaaHUocRFFAENf-ILl8',
  infoPageUrl: 'https://axsmap.com/venue/ChIJwSo_DaaHUocRFFAENf-ILl8',
  name: 'T-Mobile Sandy',
  category: 'shopping',
  address: structuredAddressMinimalFixture,
  phoneNumber: '555-SANDY',
  description: 'Some Description',
  originalData: 'originalData',
  eventId: 'T8j8nnnqMpbxpLxZu',
  creatorId: 'T8j8nnnqMpbxpLxZu',
  sourceId: 'T8j8nnnqMpbxpLxZu',
  sourceImportId: 'T8j8nnnqMpbxpLxZu',
  accessibility: accessibilityMinimumFixture
};

const allValidFixtures = Object.freeze([
  placePropertiesMinimumFixture,
  placePropertiesWithNullFixture,
  placePropertiesWithOptionalsFixture
]);

const invalidPlacePropertiesBadUrlFixture = {
  infoPageUrl: '??NoURL!!'
};

const invalidPlacePropertiesWrongFieldFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([
  {},
  invalidPlacePropertiesBadUrlFixture,
  invalidPlacePropertiesWrongFieldFixture
]);

describe('PlaceInfoSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = PlacePropertiesSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = PlacePropertiesSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
