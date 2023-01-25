import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import { getPointGeometrySchemaDefinition, PointGeometry } from './Geometry.js';
import {
  EntranceProperties,
  getEntrancePropertiesSchemaDefinition,
} from './EntranceProperties.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';

/**
 * Describes an entrance to a `PlaceInfo`.
 */

export interface Entrance {
  properties?: EntranceProperties;
  /**
   * The physical location of the entrance in WGS84 coordinates. Currently only a GeoJSON
   * `PointGeometry` is supported.
   */
  geometry?: PointGeometry;
}

export const getEntranceSchemaDefinition: () => SchemaDefinition = () => ({
  formatVersion: {
    type: String,
    optional: true,
  },
  ...getPrefixedSchemaDefinition('properties', getEntrancePropertiesSchemaDefinition()),
  ...getPrefixedSchemaDefinition('geometry', getPointGeometrySchemaDefinition()),
});
