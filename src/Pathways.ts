import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchema } from './Quantity.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';
import { getSurfaceSchemaDefinition, Surface } from './Surface.js';
import BooleanField from './BooleanField.js';

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
   * `true` if the pathway is kerbstone-free, `false` if not.
   */
  isKerbstoneFree?: boolean;
}

// TODO: Harmonize this with:
// https://register.apple.com/resources/imdf/Relationship/
// and
// https://docs.google.com/document/d/1qJOTe4m_a4dcJnvXYt4smYj4QQ1ejZ8CvLBYzDM5IyM

export const getPathwaysSchemaDefinition: () => SchemaDefinition = () => ({
  ...getPrefixedQuantitySchemaDefinition('width', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('widthAtObstacles', LengthSchema),
  ...getPrefixedSchemaDefinition('surface', getSurfaceSchemaDefinition()),
  isKerbstoneFree: BooleanField,
});
