import { PlaceIdSchemaDefinition } from '../src/place-id';
import SimpleSchema from 'simpl-schema';

export const validPlaceIdWithExtendedDataFixture = {
  provider: 'Deutsche Bahn',
  stationNumber: 123,
  ril100Identifier: 'KA',
  evaNumber: 123
};

const allValidFixtures = Object.freeze([validPlaceIdWithExtendedDataFixture]);

const invalidPlaceIdWithJustAProviderFixture = {
  provider: 'Deutsche Bahn'
};

const allInvalidFixtures = Object.freeze([
  undefined,
  {},
  invalidPlaceIdWithJustAProviderFixture
]);

const SchemaWithPlaceIdField = new SimpleSchema({
  field: PlaceIdSchemaDefinition
});

describe('PlaceIdSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = SchemaWithPlaceIdField.newContext();
      context.validate({ field: value });
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = SchemaWithPlaceIdField.newContext();
      context.validate({ field: value });
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
