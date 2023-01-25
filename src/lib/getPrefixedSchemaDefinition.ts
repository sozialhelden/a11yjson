/* eslint-disable import/no-relative-packages */
import { SimpleSchema } from '../../node_modules/simpl-schema/dist/esm/SimpleSchema.js';
import { SchemaKeyDefinitionWithOneType } from '../../node_modules/simpl-schema/dist/esm/types.js';
import { SchemaDefinition, SchemaKeyDefinition } from '../SchemaDefinition.js';

export default function getPrefixedSchemaDefinition(
  prefix: string,
  definition: SchemaDefinition | SimpleSchema,
  extendDefinition?: Partial<SchemaKeyDefinitionWithOneType>,
): SchemaDefinition {
  const prefixedDefinition: Record<string, SchemaKeyDefinition> = {
    [prefix]: {
      type: definition instanceof SimpleSchema ? definition : Object,
      optional: true,
      ...(extendDefinition || {}),
    },
  };

  if (!(definition instanceof SimpleSchema)) {
    Object.keys(definition).forEach((key) => {
      prefixedDefinition[`${prefix}.${key}`] = definition[key];
    });
  }

  return prefixedDefinition;
}

export function getPrefixedArraySchemaDefinition(
  prefix: string,
  definition: SchemaDefinition,
  extendElementDefinition?: Partial<SchemaKeyDefinitionWithOneType>,
): SchemaDefinition {
  const prefixedDefinition: SchemaDefinition = {
    [prefix]: {
      type: Array,
      optional: true,
    },
    ...getPrefixedSchemaDefinition(`${prefix}.$`, definition, extendElementDefinition),
  };
  return prefixedDefinition;
}
