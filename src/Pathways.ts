import { SchemaDefinition } from 'simpl-schema/dist/esm/types';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import { getSurfaceSchemaDefinition, Surface } from './Surface';
import BooleanField from './BooleanField';

/**
 * Describes one or multiple pathways inside a place.
 */
export interface Pathways {
  /**
   * Width constraints of all pathways inside a place relevant for consumers.
   */
  width?: Length;

  /**
   * Width constraints of all pathways inside a place relevant for consumers.
   */
  widthAtObstacles?: Length;

  surface?: Surface;

  /**
   * `true` if the pathway is kerbstone-free, `false` if not, `undefined` if condition is unknown.
   */
  isKerbstoneFree?: boolean;
}

// TODO: Harmonize this with:
// https://register.apple.com/resources/imdf/Relationship/
// and
// https://docs.google.com/document/d/1qJOTe4m_a4dcJnvXYt4smYj4QQ1ejZ8CvLBYzDM5IyM

export const getPathwaysSchemaDefinition: () => SchemaDefinition = () => ({
  ...getPrefixedQuantitySchemaDefinition('width', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('widthAtObstacles', LengthSchemaDefinition),
  ...getPrefixedSchemaDefinition('surface', getSurfaceSchemaDefinition()),
  isKerbstoneFree: BooleanField,
});
