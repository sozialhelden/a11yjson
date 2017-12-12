import SimpleSchema from 'simpl-schema';

import {
  forEachKeyInSchemas,
  getFirstSchemaFromDefinition
} from '../src/schema-helpers';

// allow custom fields
SimpleSchema.extendOptions(['accessibility']);

describe('Schema Helpers forEachKeyInSchemas', () => {
  it('Full Schema is visited', () => {
    const HierarchicalSchema = new SimpleSchema({
      name: String,
      object1: new SimpleSchema({
        name: String,
        subObject: new SimpleSchema({
          name: String
        })
      }),
      object2: Object,
      'object2.name': String,
      'object2.subObject': new SimpleSchema({
        name: String
      }),
      array: Array,
      'array.$': new SimpleSchema({
        name: String,
        subObject: new SimpleSchema({
          name: String
        })
      }),
      array2: Array,
      'array2.$': Object,
      'array2.$.subObject': new SimpleSchema({
        name: String
      }),
      'array2.$.subObject2': {
        type: new SimpleSchema({
          // should not be shown
          name: String
        }),
        accessibility: { inseparable: true }
      },
      'array2.$.subObject3': {
        type: new SimpleSchema({
          name: String
        }),
        accessibility: { inseparable: false }
      }
    });
    const allPaths: string[] = [];
    const callback = jest
      .fn()
      .mockImplementation(
        (
          schema: SimpleSchema,
          path: string,
          pathFromRoot: string,
          hasChildren: boolean
        ) => {
          allPaths.push(pathFromRoot);
        }
      );
    const result = forEachKeyInSchemas(HierarchicalSchema, callback);
    expect(result).toBeTruthy();
    expect(allPaths).toEqual([
      'name',
      'object1.name',
      'object1.subObject.name',
      'object1.subObject',
      'object1',
      'object2.name',
      'object2.subObject.name',
      'object2.subObject',
      'object2',
      'array.$.name',
      'array.$.subObject.name',
      'array.$.subObject',
      'array',
      'array2.$.subObject.name',
      'array2.$.subObject',
      'array2.$.subObject2',
      'array2.$.subObject3.name',
      'array2.$.subObject3',
      'array2'
    ]);
  });
  it('Empty Schema has no child keys', () => {
    const HierarchicalSchema = new SimpleSchema({});
    const callback = jest.fn();
    const result = forEachKeyInSchemas(HierarchicalSchema, callback);
    expect(result).toBeFalsy();
    expect(callback).toHaveBeenCalledTimes(0);
  });
});

describe('Schema Helpers getFirstSchemaFromDefinition', () => {
  it('missing schema throws', () => {
    expect(() => {
      getFirstSchemaFromDefinition({});
    }).toThrow();
  });
});
