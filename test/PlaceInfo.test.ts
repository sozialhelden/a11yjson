import { AccessibilitySchemaExtensionSchema } from '../src/index';
import { forEachKeyInSchemas } from '../src/SchemaHelpers';
import { PlaceInfo, PlaceInfoSchema } from '../src/PlaceInfo';
import { validPointGeometryFixture } from './Geometry.test';
import { placePropertiesMinimumFixture } from './PlaceProperties.test';

const placeMinimumFixture: PlaceInfo = {
  properties: placePropertiesMinimumFixture,
  geometry: validPointGeometryFixture
};

const placeWithOptionalsFixture: PlaceInfo = {
  formatVersion: '1',
  properties: placePropertiesMinimumFixture,
  geometry: validPointGeometryFixture
};

const allValidFixtures = Object.freeze([placeMinimumFixture, placeWithOptionalsFixture]);

const invalidPlaceFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([{}, invalidPlaceFixture]);

describe('PlaceInfoSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = PlaceInfoSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = PlaceInfoSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
  it('tests schema extension data', () => {
    forEachKeyInSchemas(PlaceInfoSchema, (schema, path, absolutePath) => {
      // evaluate accessibility
      const definition = schema.getDefinition(path, ['accessibility', 'label']);
      if (definition.accessibility) {
        const context = AccessibilitySchemaExtensionSchema.newContext();
        context.validate(definition.accessibility);
        if (!context.isValid()) {
          console.error(
            'Failed validating accessibility extension',
            absolutePath,
            definition.accessibility,
            context.validationErrors()
          );
        }
        expect(context.validationErrors()).toHaveLength(0);
        expect(context.isValid()).toBeTruthy();
      }
    });
  });
});
