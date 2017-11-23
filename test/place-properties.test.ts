import { PlacePropertiesSchema } from '../src/place-properties';
import { validPlaceIdWithExtendedDataFixture } from './place-id.test';

export const placePropertiesMinimumFixture = {
  originalId: 'ChIJwSo_DaaHUocRFFAENf-ILl8',
  infoPageUrl: 'https://axsmap.com/venue/ChIJwSo_DaaHUocRFFAENf-ILl8',
  name: 'T-Mobile Sandy',
  category: 'shopping',
  sourceId: 'T8j8nnnqMpbxpLxZu'
};

const placePropertiesWithOptionalsFixture = {
  ids: [validPlaceIdWithExtendedDataFixture],
  originalId: 'ChIJwSo_DaaHUocRFFAENf-ILl8',
  infoPageUrl: 'https://axsmap.com/venue/ChIJwSo_DaaHUocRFFAENf-ILl8',
  name: 'T-Mobile Sandy',
  category: 'shopping',
  address: ',Sandy,Utah',
  phoneNumber: '555-SANDY',
  description: 'Some Description',
  originalData: 'originalData',
  sourceId: 'T8j8nnnqMpbxpLxZu',
  sourceImportId: 'ZmrXoY5ZFbG3EbRBB',
  accessibility: {}
};

const allValidFixtures = Object.freeze([
  placePropertiesMinimumFixture,
  placePropertiesWithOptionalsFixture
]);

const invalidPlacePropertiesFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([{}, invalidPlacePropertiesFixture]);

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
