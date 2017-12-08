import SimpleSchema from 'simpl-schema';

type ForEachKeyInSchemasCallbackFunction = (
  schema: SimpleSchema,
  path: string,
  pathFromRoot: string,
  hasChildren: boolean
) => void;

/**
 *  Returns true if the given SimpleSchema definition contains a SimpleSchema instance
 */
export const isDefinitionTypeSchema = (definition: SchemaDefinition): boolean => {
  const type = definition.type as SimpleSchemaGroup;
  // Check whether we need to handle multiple definitions & non SimpleSchemaGroups
  if (
    type.definitions &&
    type.definitions[0] &&
    SimpleSchema.isSimpleSchema(type.definitions[0].type)
  ) {
    return true;
  }

  return false;
};

/**
 * Returns the SimpleSchema of the type of the given definition
 */
export const getFirstSchemaFromDefinition = (definition: SchemaDefinition): SimpleSchema => {
  const type = definition.type as SimpleSchemaGroup;
  // Check whether we need to handle multiple definitions & non SimpleSchemaGroups
  if (type.definitions && type.definitions[0]) {
    return type.definitions[0].type as SimpleSchema;
  }

  throw new Error('No schema found');
};

/**
 *  Returns true if the given SimpleSchema definition contains an array
 */
export const isDefinitionTypeArray = (definition: SchemaDefinition): boolean => {
  const type = definition.type as SimpleSchemaGroup;
  // Check whether we need to handle multiple definitions
  if (type.definitions[0] && type.definitions[0].type === Array) {
    return true;
  }

  return false;
};

export const forEachKeyInSchemas = (
  schema: SimpleSchema,
  callback: ForEachKeyInSchemasCallbackFunction,
  prefix: string = '',
  rootPathPrefix: string = ''
): boolean => {
  const nodeNames: Array<string> = schema.objectKeys(prefix);
  if (!nodeNames) {
    console.warn('Could not find nodes for', prefix);
    return false;
  }

  let valuePrefix = '';
  if (prefix.length > 0) {
    valuePrefix = `${prefix}.`;
  }

  let rootPrefix = '';
  if (rootPathPrefix.length > 0) {
    rootPrefix = `${rootPathPrefix}.`;
  }

  nodeNames.forEach(name => {
    const definitionPath = `${valuePrefix}${name}`;
    const pathFromRoot = `${rootPrefix}${name}`;
    const origDefinition = schema.schema(definitionPath);

    let hasChildren = false;
    if (
      !origDefinition ||
      !origDefinition.accessibility ||
      !origDefinition.accessibility.inseparable
    ) {
      if (isDefinitionTypeSchema(origDefinition)) {
        const subSchema = getFirstSchemaFromDefinition(origDefinition);
        hasChildren = forEachKeyInSchemas(subSchema, callback, '', pathFromRoot);
      } else if (isDefinitionTypeArray(origDefinition)) {
        const arrayPath = definitionPath + '.$';
        const rootArrayPath = pathFromRoot + '.$';

        const arrayFieldDefinition = schema.schema(arrayPath);
        if (isDefinitionTypeSchema(arrayFieldDefinition)) {
          const subSchema = getFirstSchemaFromDefinition(arrayFieldDefinition);
          hasChildren = forEachKeyInSchemas(subSchema, callback, '', rootArrayPath);
        } else {
          hasChildren = forEachKeyInSchemas(schema, callback, arrayPath, rootArrayPath);
        }
      } else {
        hasChildren = forEachKeyInSchemas(schema, callback, definitionPath, pathFromRoot);
      }
    }

    callback(schema, definitionPath, pathFromRoot, hasChildren);
  });

  return nodeNames.length > 0;
};
