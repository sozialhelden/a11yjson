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
  /**
   * The format version this place info document was created with
   * (Uses the npm module version from `package.json`)
   * Not used right now, but added for future compatibility.
   */
  formatVersion?: string;
  properties?: EquipmentProperties;
  /**
   * The physical location of the place in WGS84 coordinates. Currently only a GeoJSON `PointGeometry` is supported.
   */
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
