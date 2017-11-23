import SimpleSchema from 'simpl-schema';
import { ExternalId } from './external-id';
import { PointGeometry } from './geometry';
import { EquipmentAccessibility } from './equipment-accessibility';
import { Length } from './units';

export interface Equipment {
  // QUESTION what is optional
  properties?: {
    ids?: ArrayLike<ExternalId>;
    placeInfoId?: string;
    description?: string;
    // QUESTION add normal accessibility? There might be a ramp to go up to an elevator etc.
    // QUESTION should this not be controlsAccessibility?
    controls?: EquipmentAccessibility;
    // QUESTION there should probably be an disruption(s) here, but missing in ac-format.js
  };
  geometry?: PointGeometry;
}

export interface EquipmentWithDistanceFromEntrance extends Equipment {
  distanceFromEntrance?: Length;
}

export const EquipmentSchema = new SimpleSchema({});
