import { SchemaDefinition } from 'simpl-schema/dist/esm/types';
import { getPointGeometrySchemaDefinition, PointGeometry } from './Geometry';
import {
  EntranceProperties,
  getEntrancePropertiesSchemaDefinition,
} from './EntranceProperties';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';

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
