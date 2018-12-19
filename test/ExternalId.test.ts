import { ExternalIdSchemaDefinition } from '../src/ExternalId';
import SimpleSchema from 'simpl-schema';

export const validExternalIdWithExtendedDataFixture = {
  provider: 'Deutsche Bahn',
  stationNumber: 123,
  ril100Identifier: 'KA',
  evaNumber: 123
};

const allValidFixtures = Object.freeze([validExternalIdWithExtendedDataFixture]);

const invalidExternalIdWithJustAProviderFixture = {
  provider: 'Deutsche Bahn'
};

const allInvalidFixtures = Object.freeze([
  undefined,
  {},
  invalidExternalIdWithJustAProviderFixture
]);

const SchemaWithExternalIdField = new SimpleSchema({
  field: ExternalIdSchemaDefinition
});

describe('ExternalIdSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = SchemaWithExternalIdField.newContext();
      context.validate({ field: value });
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = SchemaWithExternalIdField.newContext();
      context.validate({ field: value });
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
