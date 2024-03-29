import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import { PointGeometry, getPointGeometrySchemaDefinition } from './Geometry.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';
import { PlaceProperties, getPlacePropertiesSchemaDefinition } from './PlaceProperties.js';

/**
 * The PlaceInfo interface describes a physical location with added accessibility properties.
 */
export interface PlaceInfo {
  /**
   * The format version this place info document was created with
   * (Uses the npm module version from `package.json`)
   * Not used right now, but added for future compatibility.
   */
  formatVersion?: string;
  /**
   * Holds additional place properties such as name and category and accessibility information
   */
  properties: PlaceProperties;
  /**
   * The physical location of the place in WGS84 coordinates. Currently only a GeoJSON
   * `PointGeometry` is supported.
   */
  geometry: PointGeometry;
}

/**
 * The PlaceInfoSchema allows easy validation, cleaning and checking of PlaceInfo objects.
 */
export const getPlaceInfoSchemaDefinition: () => SchemaDefinition = () => ({
  formatVersion: {
    type: String,
    optional: true,
  },
  ...getPrefixedSchemaDefinition('properties', getPlacePropertiesSchemaDefinition()),
  ...getPrefixedSchemaDefinition('geometry', getPointGeometrySchemaDefinition()),
});
