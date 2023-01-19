import { SchemaDefinition, SchemaKeyDefinition, SchemaKeyDefinitionWithOneType } from 'simpl-schema/dist/esm/types';

export default function getPrefixedSchemaDefinition(
  prefix: string,
  definition: SchemaDefinition,
  extendDefinition?: Partial<SchemaKeyDefinitionWithOneType>,
): SchemaDefinition {
  const prefixedDefinition: Record<string, SchemaKeyDefinition> = {
    [prefix]: {
      type: Object,
      optional: true,
      ...(extendDefinition || {}),
    },
  };

  Object.keys(definition).forEach((key) => {
    prefixedDefinition[`${prefix}.${key}`] = definition[key];
  });

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
