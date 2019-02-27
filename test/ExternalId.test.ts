import { ExternalIdSchema } from '../src/ExternalId';
import SimpleSchema from 'simpl-schema';

export const validExternalIdWithExtendedDataFixture = {
  provider: 'Deutsche Bahn',
  schemaName: 'ril100',
  id: 'KA'
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
  field: ExternalIdSchema
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
