/**
 * [GeoJSON](https://tools.ietf.org/html/rfc7946) `Point` object.
 */
export interface PointGeometry {
  type: 'Point';
  coordinates: [number, number];
}

export const getPointGeometrySchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  type: {
    type: String,
    allowedValues: ['Point'],
  },
  coordinates: {
    type: Array,
    minCount: 2,
    maxCount: 2,
  },
  'coordinates.$': {
    type: Number,
    min: -180,
    max: 180,
  },
});
