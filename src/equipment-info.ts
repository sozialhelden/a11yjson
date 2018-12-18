import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { PointGeometry, PointGeometrySchema } from './geometry';
import { EquipmentProperties, EquipmentPropertiesSchema } from './equipment-properties';

/**
 * Describes a facility equipment that is part of a place, like an elevator, an escalator, or a
 * sitemap. Can contain attributes that are realtime updated to indicate operational status.
 */

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
