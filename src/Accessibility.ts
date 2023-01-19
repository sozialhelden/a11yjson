import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';
import { PersonalProfile, getPersonalProfileSchemaDefinition } from './PersonalProfile';
import { Entrance, getEntranceSchemaDefinition } from './Entrance';
import { Restroom, getRestroomSchemaDefinition } from './Restroom';
import { Staff, getStaffSchemaDefinition } from './Staff';
import { WheelchairPlaces, getWheelchairPlacesSchemaDefinition } from './WheelchairPlaces';
import { Media, getMediaSchemaDefinition } from './Media';
import { Payment, getPaymentSchemaDefinition } from './Payment';
import { Pathways, getPathwaysSchemaDefinition } from './Pathways';
import { Parking, getParkingSchemaDefinition } from './Parking';
import { Surface, getSurfaceSchemaDefinition } from './Surface';
import { AnimalPolicy, getAnimalPolicySchemaDefinition } from './AnimalPolicy';
import { SmokingPolicy, smokingPolicies } from './SmokingPolicy';
import { getPrefixedQuantitySchemaDefinition, Volume, VolumeSchemaDefinition } from './Quantity';
import { WifiAccessibility, getWifiAccessibilitySchemaDefinition } from './WifiAccessibility';
import getPrefixedSchemaDefinition, { getPrefixedArraySchemaDefinition } from './lib/getPrefixedSchemaDefinition';
import { Desk, getDeskSchemaDefinition } from './Desk';
import BooleanField from './BooleanField';
import { getSignageSchemaDefinition, Signage } from './Signage';
import { getInteractableSchemaDefinition, Interactable } from './Interactable';

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

export const GenericInteractions = [
  'watchMovies',
  'watchPlays',
  'explore',
  'visit',
  'roam',
  'read',
  'rent',
  'watch',
  'see',
  'listen',
  'getFood',
  'eat',
  'pay',
  'buy',
  'sell',
  'workHere',
  'arrive',
  'checkIn',
  'checkOut',
  'useLockers',
  'change',
  'use',
  'book',
  'play',
] as const;
export type GenericInteraction = typeof GenericInteractions[number];

/**
 * Describes the physical (and sometimes human rated) accessibility of a place.
 */
export interface Accessibility extends Interactable<GenericInteraction> {
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

  /**
   * Determines if the venue is well lit (subjectively, by the assessor).  Will be replaced by a
   * measurable lumen value in the future.
   */
  isWellLit?: boolean;

  /**
   * Determines if the venue is quiet (subjectively, by the assessor). If possible, use the
   * `ambientNoiseLevel` property instead.
   */
  isQuiet?: boolean;

  /**
   * Determines if there is sound absorption installed.
   */
  hasSoundAbsorption?: boolean;

  /**
   * Determines if there is air conditioning installed and actively used.
   */
  hasAirConditioning?: boolean;

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
   *
   * @deprecated Use `signageSystems` instead.
   */
  hasTactileGuideStrips?: boolean;

  /**
   * `true` if there is tactile navigation for/to this place, `false` if not.
   *
   * @deprecated Use `signageSystems` instead.
   */
  hasTactileSignage?: boolean;

  /**
   * `true` if there is braille navigation for/to this place, `false` if not.
   *
   * @deprecated Use `signageSystems` instead.
   */
  hasBrailleSignage?: boolean;

  /**
   * Describes local signage systems. If multiple different systems are used, describe them all.
   */
  signageSystems?: Signage[];

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
   * Describes the accessibility of pathways to the place or inside the place’s boundaries (mixed)
   */
  pathways?: Pathways | null;
  /**
   * For places inside other places (e.g. a room inside a building).
   *
   * Describes the accessibility of pathways to the place. If an extra accessible entrance exists,
   * describe pathways from there to this place.
   */
  pathwaysFromEntrance?: Pathways | null;
  /**
   * Describes the accessibility of pathways to the place or inside the place’s boundaries (mixed)
   */
  pathwaysInside?: Pathways | null;
  /**
   * Describes the accessibility of entrances to the place.
   */
  entrances?: ArrayLike<Entrance> | null;

  /**
   * Describes the accessibility of desks in the place.
   * `null` indicates there are no desks, `undefined` or missing property indicates unknown.
   */
  desks?: ArrayLike<Desk> | null;

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
   * Information about tables (for example in a restaurant).
   * `null` indicates there are no tables, `undefined` or missing property indicates unknown.
   */
  tables?: ArrayLike<Desk> | null;

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
  smokingPolicy: {
    type: String,
    optional: true,
    allowedValues: smokingPolicies().map((s) => s.value),
  },
  isWellLit: BooleanField,
  isQuiet: BooleanField,
  hasSoundAbsorption: BooleanField,
  hasAirConditioning: BooleanField,
  hasInductionLoop: BooleanField,
  hasBrailleSignage: BooleanField,
  hasTactileSignage: BooleanField,
  hasTactileGuideStrips: BooleanField,
  ...getPrefixedSchemaDefinition('staff', getStaffSchemaDefinition()),
  ...getPrefixedSchemaDefinition('wheelchairPlaces', getWheelchairPlacesSchemaDefinition()),
  ...getPrefixedSchemaDefinition('payment', getPaymentSchemaDefinition()),
  ...getPrefixedSchemaDefinition('parking', getParkingSchemaDefinition()),
  ...getPrefixedSchemaDefinition('surface', getSurfaceSchemaDefinition()),
  ...getPrefixedSchemaDefinition('wifi', getWifiAccessibilitySchemaDefinition()),
  ...getPrefixedSchemaDefinition('animalPolicy', getAnimalPolicySchemaDefinition()),
  ...getPrefixedSchemaDefinition('pathways', getPathwaysSchemaDefinition()),
  ...getPrefixedSchemaDefinition('pathwaysInside', getPathwaysSchemaDefinition()),
  ...getPrefixedSchemaDefinition('pathwaysFromEntrance', getPathwaysSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('media', getMediaSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('desks', getDeskSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('tables', getDeskSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('signageSystems', getSignageSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('entrances', getEntranceSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('restrooms', getRestroomSchemaDefinition()),
  ...getPrefixedQuantitySchemaDefinition('ambientNoiseLevel', VolumeSchemaDefinition),
  ...getLocalizedStringSchemaDefinition('serviceContact'),
  ...getInteractableSchemaDefinition(GenericInteractions),
});
