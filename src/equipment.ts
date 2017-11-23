import SimpleSchema from 'simpl-schema';
import { PointGeometry, PointGeometrySchema } from './geometry';
import {
  EquipmentProperties,
  EquipmentPropertiesSchema
} from './equipment-properties';

export interface Equipment {
  properties?: EquipmentProperties;
  geometry?: PointGeometry;
}

export const EquipmentSchema = new SimpleSchema({
  properties: {
    type: EquipmentPropertiesSchema,
    optional: true
  },
  geometry: {
    type: PointGeometrySchema,
    optional: true
  }
});
