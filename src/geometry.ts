import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

/**
 * [GeoJSON](https://tools.ietf.org/html/rfc7946) `Point` object.
 */
export interface PointGeometry {
  type: 'Point';
  coordinates: [number, number];
}

export const PointGeometrySchema = new SimpleSchema({
  type: {
    type: String,
    allowedValues: ['Point']
  },
  coordinates: {
    type: Array,
    minCount: 2,
    maxCount: 2
  },
  'coordinates.$': {
    type: Number,
    min: -180,
    max: 180
  }
});

export type Geometry = PointGeometry;

export const GeometrySchema = PointGeometrySchema;
