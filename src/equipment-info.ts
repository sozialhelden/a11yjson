import SimpleSchema from 'simpl-schema';
import { PointGeometry, PointGeometrySchema } from './geometry';
import {
  EquipmentProperties,
  EquipmentPropertiesSchema
} from './equipment-properties';

export interface EquipmentInfo {
  formatVersion?: string;
  properties?: EquipmentProperties;
  geometry?: PointGeometry;
}

export const EquipmentInfoSchema = new SimpleSchema({
  formatVersion: {
    type: String,
    optional: true
  },
  properties: {
    type: EquipmentPropertiesSchema
  },
  geometry: {
    type: PointGeometrySchema
  }
});
