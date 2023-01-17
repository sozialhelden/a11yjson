export default function getPrefixedSchemaDefinition(
  prefix: string,
  definition: Record<string, SchemaDefinition>,
  extendDefinition?: Partial<SchemaDefinition>,
): Record<string, SchemaDefinition> {
  const prefixedDefinition: Record<string, SchemaDefinition> = {
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
  definition: Record<string, SchemaDefinition>,
  extendElementDefinition?: Partial<SchemaDefinition>,
) {
  const prefixedDefinition: Record<string, SchemaDefinition> = {
    [prefix]: {
      type: Array,
      optional: true,
    },
    ...getPrefixedSchemaDefinition(`${prefix}.$`, definition, extendElementDefinition),
  };
  return prefixedDefinition;
}
