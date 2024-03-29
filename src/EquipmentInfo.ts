import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import { getPointGeometrySchemaDefinition, PointGeometry } from './Geometry.js';
import {
  EquipmentProperties,
  getEquipmentPropertiesSchemaDefinition,
} from './EquipmentProperties.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';

/**
 * Describes a facility equipment that is part of a place, like an elevator, an escalator, or a
 * sitemap. Can contain attributes that are realtime updated to indicate operational status.
 */

export interface EquipmentInfo {
  properties?: EquipmentProperties;
  /**
   * The physical location of the place in WGS84 coordinates. Currently only a GeoJSON
   * `PointGeometry` is supported.
   */
  geometry?: PointGeometry;
}

export const getEquipmentInfoSchemaDefinition: () => SchemaDefinition = () => ({
  formatVersion: {
    type: String,
    optional: true,
  },
  ...getPrefixedSchemaDefinition('properties', getEquipmentPropertiesSchemaDefinition()),
  ...getPrefixedSchemaDefinition('geometry', getPointGeometrySchemaDefinition()),
});
