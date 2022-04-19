import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';

export interface Tables {
  /**
   * Height or heights of the tables at this place, measured from the top of the table surface.
   */
  height?: Length;
  /**
   * Indicates how high the space below a table is.
   */
  spaceBelowHeight: Length;
  /**
   * Indicates how wide the space below a table is for each user.
   */
  spaceBelowWidth: Length;
  /**
   * Indicates how deep the space below a table is for each user.
   */
  spaceBelowDepth: Length;
}

export const getTablesSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  ...getPrefixedQuantitySchemaDefinition('height', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('spaceBelowHeight', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('spaceBelowWidth', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('spaceBelowDepth', LengthSchemaDefinition),
});
