import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { Geometry, GeometrySchema } from './geometry';
import { PlaceProperties, PlacePropertiesSchema } from './place-properties';

/**
 * The PlaceInfo interface describes a physical location with added accessibility properties.
 *
 * It is one of the main objects of accessibility cloud.
 * A place can have Disruptions and Equipment that can be referenced within the place objects.
 */
export interface PlaceInfo {
  /**
   * The format version this place info document was created with.
   * Not used right now, but added for future compatibility.
   */
  formatVersion?: string;
  /**
   * Holds additional place properties such as name and category and accessibility information
   */
  properties: PlaceProperties;
  /**
   * The physical location of the place. Currently only PointGeometry is supported.
   */
  geometry: Geometry;
}

/**
 * The PlaceInfoSchema allows easy validation, cleaning and checking of PlaceInfo objects.
 */
export const PlaceInfoSchema = new SimpleSchema({
  formatVersion: {
    type: String,
    optional: true,
    accessibility: {
      machineData: true
    }
  },
  properties: {
    type: PlacePropertiesSchema,
    label: t`Properties`,
    accessibility: {
      question: t`First we need some information about the place.`
    }
  },
  geometry: {
    type: GeometrySchema,
    label: t`Place on map`,
    accessibility: {
      question: t`On the map, drag the place icon to the entrance's exact position.`,
      inseparable: true
    }
  }
});
