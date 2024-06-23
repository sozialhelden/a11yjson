import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import { AnimalPolicy, getAnimalPolicySchemaDefinition } from './AnimalPolicy.js';
import { AppointmentPolicy, getAppointmentPolicySchemaDefinition } from './AppointmentPolicy.js';
import BooleanField from './BooleanField.js';
import { Desk, getDeskSchemaDefinition } from './Desk.js';
import { Entrance, getEntranceSchemaDefinition } from './Entrance.js';
import { EquipmentProperties, getEquipmentPropertiesSchemaDefinition } from './EquipmentProperties.js';
import { getInteractableSchemaDefinition, Interactable } from './Interactable.js';
import getPrefixedSchemaDefinition, { getPrefixedArraySchemaDefinition } from './lib/getPrefixedSchemaDefinition.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';
import { getMediaSchemaDefinition, Media } from './Media.js';
import { getParkingSchemaDefinition, Parking } from './Parking.js';
import { getPathwaysSchemaDefinition, Pathways } from './Pathways.js';
import { getPaymentSchemaDefinition, Payment } from './Payment.js';
import { getPersonalProfileSchemaDefinition, PersonalProfile } from './PersonalProfile.js';
import { getPrefixedQuantitySchemaDefinition, Volume, VolumeSchema } from './Quantity.js';
import { getQueueSystemSchemaDefinition, QueueSystem } from './QueueSystem.js';
import { getRestroomSchemaDefinition, Restroom } from './Restroom.js';
import { getRoomSchemaDefinition, Room } from './Room.js';
import { getSignageSchemaDefinition, Signage } from './Signage.js';
import { smokingPolicies, SmokingPolicy } from './SmokingPolicy.js';
import { getStaffSchemaDefinition, Staff } from './Staff.js';
import { getSurfaceSchemaDefinition, Surface } from './Surface.js';
import { getWheelchairPlacesSchemaDefinition, WheelchairPlaces } from './WheelchairPlaces.js';
import { getWifiAccessibilitySchemaDefinition, WifiAccessibility } from './WifiAccessibility.js';

/**
 * Describes the general wheelchair accessibility of the place. This is a human-rated value.
 * It SHOULD conform to the traffic light system found in OpenStreetMap and Wheelmap.org.
 */

export const WheelchairAccessibilityGrades = [
  /**
   * Entrance (if applicable) has no steps, and all rooms are accessible without steps. If there
   * are no rooms, the main functionality of the place must be accessible with a wheelchair.
   */
  'fully',
  /**
   * `"partially"`: Entrance has one step with max. 3 inches height (or a mobile ramp is
   * available), most rooms are without steps. After passing the entrance, the main functionality
   * of the place must be accessible with a wheelchair.
   */
  'partially',
  /**
   * Entrance has a high step or several steps, or none of the rooms are accessible. You can't
   * enter / use the place with a wheelchair.
   */
  'not',
] as const;

export type WheelchairAccessibilityGrade = typeof WheelchairAccessibilityGrades[number];

export const GenericInteractions = [
  'main',
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
  'getDrinks',
  'getTreatment',
  'getService',
  'eat',
  'order',
  'orderAnnouncement',
  'pickUpOrder',
  'pay',
  'buy',
  'sell',
  'workHere',
  'arrive',
  'checkIn',
  'checkOut',
  'useLockers',
  'useService',
  'change',
  'use',
  'book',
  'play',
] as const;
export type GenericInteraction = typeof GenericInteractions[number];
export const GenericInteractionsSet = new Set(GenericInteractions);

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
   * Determines if there is background music playing.
   */
  hasBackgroundMusic?: boolean;

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
   * Describes how you can get an appointment for this place, or if you need one.
   */
  appointmentPolicies?: AppointmentPolicy[];

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
   * `true` if the venue has a patient lifter (MedTech) installed, `false` if not..
   */
  hasPatientLifter?: boolean;

  /**
   * `true` for healthcare providers that offer that wheelchair users do not have to leave their
   * wheelchair for treatment, `false` if this is not possible.
   */
  offersTreatmentWithoutLeavingWheelchair?: boolean;

  /**
   * `true` if the venue has a designated low-stimulus room or environment, `false` if not.
   * Can help with hypersensitivity to sensory input.
   */
  hasLowStimulusEnvironment?: boolean;

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
  entrances?: Entrance[] | null;

  /**
   * Describes the accessibility of desks in the place.
   * `null` indicates there are no desks, `undefined` or missing property indicates unknown.
   */
  desks?: Desk[] | null;

  /**
   * Describes the accessibility of restrooms that belong to the place.
   */
  restrooms?: Restroom[] | null;

  /**
   * Describes the accessibility of rooms that belong to the place.
   */
  rooms?: Room[] | null;

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
  tables?: Desk[] | null;

  /**
   * Information about the place's equipment.
   *
   * Use this property for equipment that does not need to be locatable in a specific geolocation,
   * but belongs to a place.
   */
  availableEquipment?: EquipmentProperties[] | null;

  /**
   * Information about the place's queue system.
   */
  queueSystem?: QueueSystem | null;

  serviceContact?: LocalizedString;
  /**
   * Information about media.
   * `null` indicates there is no media, `undefined` or missing property indicates unknown.
   */
  media?: Media[] | null;
}

export const getAccessibilitySchemaDefinition: () => SchemaDefinition = () => ({
  ...getPrefixedSchemaDefinition('accessibleWith', getPersonalProfileSchemaDefinition()),
  ...getPrefixedSchemaDefinition('partiallyAccessibleWith', getPersonalProfileSchemaDefinition()),
  ...getPrefixedSchemaDefinition(
    'offersActivitiesForPeopleWith',
    getPersonalProfileSchemaDefinition(),
  ),
  wheelchairAccessibilityGrade: {
    type: 'string',
    optional: true,
    allowedValues: (WheelchairAccessibilityGrades as any) as any[],
  },
  smokingPolicy: {
    type: String,
    optional: true,
    allowedValues: ((smokingPolicies as any) as any[]),
  },
  isWellLit: BooleanField,
  isQuiet: BooleanField,
  hasSoundAbsorption: BooleanField,
  hasAirConditioning: BooleanField,
  hasInductionLoop: BooleanField,
  hasBrailleSignage: BooleanField,
  hasTactileSignage: BooleanField,
  hasTactileGuideStrips: BooleanField,
  hasPatientLifter: BooleanField,
  offersTreatmentWithoutLeavingWheelchair: BooleanField,
  hasLowStimulusEnvironment: BooleanField,
  hasBackgroundMusic: BooleanField,
  ...getPrefixedSchemaDefinition('staff', getStaffSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('availableEquipment', getEquipmentPropertiesSchemaDefinition()),
  ...getPrefixedSchemaDefinition('wheelchairPlaces', getWheelchairPlacesSchemaDefinition()),
  ...getPrefixedSchemaDefinition('payment', getPaymentSchemaDefinition()),
  ...getPrefixedSchemaDefinition('parking', getParkingSchemaDefinition()),
  ...getPrefixedSchemaDefinition('surface', getSurfaceSchemaDefinition()),
  ...getPrefixedSchemaDefinition('wifi', getWifiAccessibilitySchemaDefinition()),
  ...getPrefixedSchemaDefinition('queueSystem', getQueueSystemSchemaDefinition()),
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
  ...getPrefixedArraySchemaDefinition('rooms', getRoomSchemaDefinition()),
  ...getPrefixedQuantitySchemaDefinition('ambientNoiseLevel', VolumeSchema),
  ...getLocalizedStringSchemaDefinition('serviceContact'),
  ...getInteractableSchemaDefinition(GenericInteractionsSet),
  ...getPrefixedArraySchemaDefinition('appointmentPolicies', getAppointmentPolicySchemaDefinition()),
});
