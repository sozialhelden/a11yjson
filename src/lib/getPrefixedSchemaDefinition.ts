import { SchemaDefinition, SchemaKeyDefinition, SchemaKeyDefinitionWithOneType } from '../../node_modules/simpl-schema/dist/esm/types.js';
import { SimpleSchema } from '../../node_modules/simpl-schema/dist/esm/SimpleSchema.js';

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
) {
  const prefixedDefinition: SchemaDefinition = {
    [prefix]: {
      type: Array,
      optional: true,
    },
    ...getPrefixedSchemaDefinition(`${prefix}.$`, definition, extendElementDefinition),
  };
  return prefixedDefinition;
}
