import SimpleSchema from 'simpl-schema';
import { Geometry, GeometrySchema } from './geometry';
import { PlaceProperties, PlacePropertiesSchema } from './place-properties';

export interface PlaceInfo {
  formatVersion?: string;
  properties: PlaceProperties;
  geometry: Geometry;
}

export const PlaceInfoSchema = new SimpleSchema({
  formatVersion: {
    type: String,
    optional: true
  },
  properties: {
    type: PlacePropertiesSchema
  },
  geometry: {
    type: GeometrySchema
  }
});
