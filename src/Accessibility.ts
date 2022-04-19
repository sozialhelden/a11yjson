import { t } from 'ttag';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';
import { PersonalProfile, getPersonalProfileSchemaDefinition } from './PersonalProfile';
import { Entrance, getEntranceSchemaDefinition } from './Entrance';
import { Restroom, getRestroomSchemaDefinition } from './Restroom';
import { Staff, getStaffSchemaDefinition } from './Staff';
import { WheelchairPlaces, getWheelchairPlacesSchemaDefinition } from './WheelchairPlaces';
import { Media, getMediaSchemaDefinition } from './Media';
import { Payment, getPaymentSchemaDefinition } from './Payment';
import { Tables, getTablesSchemaDefinition } from './Tables';
import { Pathways, getPathwaysSchemaDefinition } from './Pathways';
import { Parking, getParkingSchemaDefinition } from './Parking';
import { Surface, getSurfaceSchemaDefinition } from './Surface';
import { AnimalPolicy, getAnimalPolicySchemaDefinition } from './AnimalPolicy';
import { SmokingPolicy, smokingPolicies } from './SmokingPolicy';
import { getPrefixedQuantitySchemaDefinition, Volume, VolumeSchemaDefinition } from './Quantity';
import { WifiAccessibility, getWifiAccessibilitySchemaDefinition } from './WifiAccessibility';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';

/**
 * Describes the general wheelchair accessibility of the place. This is a human-rated value.
 * It SHOULD conform to the traffic light system found in OpenStreetMap and Wheelmap.org.
 */

export enum WheelchairAccessibilityGrade {
  /**
   * Entrance (if applicable) has no steps, and all rooms are accessible without steps. If there
   * are no rooms, the main functionality of the place must be accessible with a wheelchair.
   */
  Fully = 'fully',
  /**
   * `"partially"`: Entrance has one step with max. 3 inches height (or a mobile ramp is
   * available), most rooms are without steps. After passing the entrance, the main functionality
   * of the place must be accessible with a wheelchair.
   */
  Partially = 'partially',
  /**
   * Entrance has a high step or several steps, or none of the rooms are accessible. You can't
   * enter / use the place with a wheelchair.
   */
  Not = 'not',
}

export const wheelchairAccessibilityGrades = ['fully', 'partially', 'not'];

/**
 * Describes the physical (and sometimes human rated) accessibility of a place.
 */
export interface Accessibility {
  /// @deprecated Use `wheelchairAccessibilityGrade`, `media`, and other properties instead.
  accessibleWith?: PersonalProfile;
  /// @deprecated Use `wheelchairAccessibilityGrade`, `media`, and other properties instead.
  partiallyAccessibleWith?: PersonalProfile;
  /// @deprecated Use `wheelchairAccessibilityGrade`, `media`, and other properties instead.
  offersActivitiesForPeopleWith?: PersonalProfile;

  /**
   * Describes the general wheelchair accessibility of the place. This is a human-rated value.
   * It SHOULD conform to the traffic light system found in OpenStreetMap and Wheelmap.org:
   *
   * - `"fully"`: Entrance (if applicable) has no steps, and all rooms are accessible without steps.
   *   If there are no rooms, the main functionality of the place must be accessible with a
   *   wheelchair.
   * - `"partially"`: Entrance has one step with max. 3 inches height (or a mobile ramp is
   *   available), most rooms are without steps. After passing the entrance, the main functionality
   *   of the place must be accessible with a wheelchair.
   * - `"not"`: Entrance has a high step or several steps, or none of the rooms are accessible. You
   *   can't enter / use the place with a wheelchair.
   */
  wheelchairAccessibilityGrade?: WheelchairAccessibilityGrade;

  /**
   * Information about the service staff.
   * `null` indicates there is no staff, `undefined` or missing property indicates unknown.
   */
  staff?: Staff | null;

  /**
   * Information about parking facilities at/around the venue.
   * `null` indicates there is no parking, `undefined` or missing property indicates unknown.
   */
  parking?: Parking | null;
  // QUESTION How is this measured, should be changed to ambient.lighting
  /**
   * Determines if the venue is well lit (subjectively, by the assessor).  Will be replaced by a
   * measurable lumen value in the future.
   */
  isWellLit?: boolean;
  /**
   * Determines if the venue is quiet (subjectively, by the assessor). Will be replaced by a
   * measurable ambient noise level in the future.
   */
  isQuiet?: boolean;
  /**
   * Ambient noise level in dB(A) relative to a reference pressure of 0.00002 Pa. Median over a
   * 10-second period at least.
   */
  ambientNoiseLevel?: Volume;
  /**
   * Object describing the owner's smoking policy.
   */
  smokingPolicy?: SmokingPolicy;
  /**
   * Object describing the owner's policy regarding visitors bringing animals with them.
   */
  animalPolicy?: AnimalPolicy;
  /**
   * `true` if the venue has tactile guide strips on the floor or at the walls, `false` if not.
   * `undefined` or missing property indicates unknown.
   */
  hasTactileGuideStrips?: boolean;
  /**
   * `true` if the venue has induction loops installed in its functional units where this is
   * relevant.
   */
  hasInductionLoop?: boolean;
  /**
   * Describes the Wifi availability and accessibility at the place.
   */
  wifi?: WifiAccessibility;
  /**
   * Object describing the place's ground condition. If there are very different ground conditions,
   * you can create multiple places and nest them.
   */
  surface?: Surface | null;
  /**
   * Describes the accessibility of pathways to the place or inside the place’s boundaries.
   */
  pathways?: Pathways | null;
  /**
   * Describes the accessibility of entrances to the place.
   */
  entrances?: ArrayLike<Entrance> | null;
  /**
   * Describes the accessibility of restrooms in the place.
   */
  restrooms?: ArrayLike<Restroom> | null;

  /**
   * Information about payment at the place.
   * `null` indicates there is no payment possible/required,
   * `undefined` or missing property indicates unknown.
   */
  payment?: Payment | null;
  /**
   * Information about wheelchair places.
   * `null` indicates there are no places, `undefined` or missing property indicates unknown.
   */
  wheelchairPlaces?: WheelchairPlaces | null;
  /**
   * Information about tables.
   * `null` indicates there are no tables, `undefined` or missing property indicates unknown.
   */
  tables?: Tables | null;
  serviceContact?: LocalizedString;
  /**
   * Information about media.
   * `null` indicates there is no media, `undefined` or missing property indicates unknown.
   */
  media?: ArrayLike<Media> | null;
}

export const getAccessibilitySchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  ...getPrefixedSchemaDefinition('accessibleWith', getPersonalProfileSchemaDefinition()),
  ...getPrefixedSchemaDefinition('partiallyAccessibleWith', getPersonalProfileSchemaDefinition()),
  ...getPrefixedSchemaDefinition(
    'offersActivitiesForPeopleWith',
    getPersonalProfileSchemaDefinition(),
  ),
  wheelchairAccessibilityGrade: {
    type: 'string',
    optional: true,
    allowedValues: wheelchairAccessibilityGrades,
  },
  ...getPrefixedSchemaDefinition('staff', getStaffSchemaDefinition()),
  ...getPrefixedSchemaDefinition('wheelchairPlaces', getWheelchairPlacesSchemaDefinition()),
  media: {
    type: Array,
    optional: true,
  },
  ...getPrefixedSchemaDefinition('media.$', getMediaSchemaDefinition()),
  ...getPrefixedSchemaDefinition('payment', getPaymentSchemaDefinition()),
  ...getPrefixedSchemaDefinition('parking', getParkingSchemaDefinition()),
  ...getPrefixedSchemaDefinition('surface', getSurfaceSchemaDefinition()),
  ...getPrefixedSchemaDefinition('wifi', getWifiAccessibilitySchemaDefinition()),
  isWellLit: {
    type: Boolean,
    optional: true,
  },
  isQuiet: {
    type: Boolean,
    optional: true,
  },
  hasInductionLoop: {
    type: Boolean,
    optional: true,
  },
  ...getPrefixedQuantitySchemaDefinition('ambientNoiseLevel', VolumeSchemaDefinition),
  smokingPolicy: {
    type: String,
    optional: true,
    allowedValues: smokingPolicies().map((s) => s.value),
  },
  hasTactileGuideStrips: {
    type: Boolean,
    optional: true,
  },
  ...getPrefixedSchemaDefinition('animalPolicy', getAnimalPolicySchemaDefinition()),
  ...getPrefixedSchemaDefinition('pathways', getPathwaysSchemaDefinition()),
  entrances: {
    type: Array,
    optional: true,
    label: t`Entrances`,
  },
  ...getPrefixedSchemaDefinition('entrances.$', getEntranceSchemaDefinition()),
  restrooms: {
    type: Array,
    optional: true,
    label: t`Restrooms`,
  },
  ...getPrefixedSchemaDefinition('restrooms.$', getRestroomSchemaDefinition()),
  ...getPrefixedSchemaDefinition('tables', getTablesSchemaDefinition()),
  ...getLocalizedStringSchemaDefinition('serviceContact'),
});
