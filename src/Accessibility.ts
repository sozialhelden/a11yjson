import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

import { PersonalProfile, PersonalProfileSchema } from './PersonalProfile';
import { Entrance, EntranceSchema } from './Entrance';
import { Restroom, RestroomSchema } from './Restroom';
import { Staff, StaffSchema } from './Staff';
import { WheelchairPlaces, WheelchairPlacesSchema } from './WheelchairPlaces';
import { Media, MediaSchema } from './Media';
import { Payment, PaymentSchema } from './Payment';
import { AccessibleTablesPrefab, Tables, TablesSchema } from './Tables';
import { Pathways, PathwaysSchema } from './Pathways';
import { Parking, ParkingSchema } from './Parking';
import { Ground, GroundSchema } from './Ground';
import { LocalizedString, LocalizedStringSchema } from './LocalizedString';
import { AnimalPolicySchema, AnimalPolicy } from './AnimalPolicy';
import { SmokingPolicy, smokingPolicies } from './SmokingPolicy';
import { quantityDefinition, Volume, LengthSchema } from './Units';
import { Door, DoorSchema } from './Door';
import { EmergencyDevice, EmergencyDeviceSchema } from './EmergencyDevice';

/**
 * Describes the physical (and sometimes human rated) accessibility of a place.
 */
export interface Accessibility {
  /// @deprecated
  accessibleWith?: PersonalProfile;
  /// @deprecated
  partiallyAccessibleWith?: PersonalProfile;
  /// @deprecated
  offersActivitiesForPeopleWith?: PersonalProfile;
  // areas?: Array<Area>;

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
   * Determines if the venue is well lit (subjectively, by the assessor).  Will be replaced by a measurable lumen value in the future.
   */
  isWellLit?: boolean;
  /**
   * Determines if the venue is quiet (subjectively, by the assessor). Will be replaced by a measurable ambient noise level in the future.
   */
  isQuiet?: boolean;
  // TODO: Causes test error. Fix this!
  // ambientNoiseLevel?: Volume; // in dB(A) relative to a reference pressure of 0.00002 Pa
  /**
   * Object describing the owner's smoking policy.
   */
  smokingPolicy?: SmokingPolicy;
  /**
   * Object describing the owner's policy regarding visitors bringing animals with them.
   */
  animalPolicy?: AnimalPolicy;
  /**
   * `true` if the venue has tactile guide strips on the floor or at the walls, `false` if not. `undefined` or missing property indicates unknown.
   */
  hasTactileGuideStrips?: boolean;
  /**
   * `true` if the venue has induction loops installed in its functional units where this is relevant.
   */
  hasInductionLoop?: boolean;
  /**
   * Object describing the place's ground condition. If there are very different ground conditions, you can create multiple places and nest them.
   */
  ground?: Ground | null;
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
  /**
   * `true` if the facility provides mobility equipment e.g. foldable wheelchairs or crutches
   */
  providesMobilityEquipment?: boolean;
  /**
   * Describes the pick up or drop off zone
   */
  pickUpOrDropOffZone?: Ground | null;
  /**
   * `true if the room is on an accessible path or on the accessible route`
   * `false` if not, `undefined` if the condition is unknown or difficult to assess.
   */
  hasWheelchairAccessiblePathFromOutside?: boolean;
  /**
   * Describes the doors of the place
   */
  doors?: Door;
  /**
   * `true if the place provides dedicated signage for way finding`
   * `false` if not, `undefined` if the condition is unknown or difficult to assess.
   */
  hasDedicatedAccessibilitySignage?: boolean;
  /**
   * Describes the emergency devices in the place
   */
  emergencyDevices?: ArrayLike<EmergencyDevice> | null;
  /**
   * TODO
   */
  sitemap?: any; // TODO define type
  /**
   * TODO
   */
  switches?: [any]; // TODO define type
  /**
   * TODO
   */
  vendingMachines?: [any]; // TODO define type
  /**
   * TODO
   */
  powerOutlets?: [any]; // TODO define type
  /**
   * TODO
   */
  beds?: [any]; // TODO define type
  /**
   * TODO
   */
  wardrobe?: any; // TODO define type
  /**
   * TODO
   */
  changingRoom?: any; // TODO define type,
  /**
   * TODO
   */
  stage?: any; // TODO define type,
  /**
   * TODO
   */
  cashRegister?: any; // TODO define type,
  /**
   * TODO
   */
  seats?: any; // TODO define type,
  /**
   * TODO
   */
  services?: any; // TODO define type,,
  /**
   * TODO
   */
  infoDesk?: any; // TODO define type,
  /**
   * TODO
   */
  signage?: any; // TODO define type,
}

export const AccessibilitySchema = new SimpleSchema({
  accessibleWith: {
    type: PersonalProfileSchema,
    optional: true,
    accessibility: {
      deprecated: true
    }
  },
  partiallyAccessibleWith: {
    type: PersonalProfileSchema,
    optional: true,
    accessibility: {
      deprecated: true
    }
  },
  offersActivitiesForPeopleWith: {
    type: PersonalProfileSchema,
    optional: true,
    accessibility: {
      deprecated: true
    }
  },
  staff: {
    type: StaffSchema,
    optional: true,
    accessibility: {
      question: t`Is there any staff on the premises?`
    }
  },
  wheelchairPlaces: {
    type: WheelchairPlacesSchema,
    optional: true,
    accessibility: {
      question: t`Are there any spaces reserved for people in wheelchairs?`
    }
  },
  media: {
    type: Array,
    optional: true,
    accessibility: {
      question: t`Is there any media available?`,
      questionMore: t`Is there more media available?`,
      description: t`e.g. menus, exhibits or presentations`
    }
  },
  'media.$': {
    type: MediaSchema
  },
 
  emergencyDevices: {
    type: Array,
    optional: true,
    accessibility: {
      question: t`Are there any emergency devices?`,
      questionMore: t`Are there more emergency devices?`,
      description: t`e.g. evacuation chairs, fire alarms, audible alarms`
    }
  },
  'emergencyDevices.$': {
    type: EmergencyDeviceSchema
  },
  payment: {
    type: PaymentSchema,
    optional: true,
    accessibility: {
      question: t`Is there any payment possible?`
    }
  },
  parking: {
    type: ParkingSchema,
    optional: true,
    accessibility: {
      question: t`Is there parking attached to this place?`
    }
  },
  ground: {
    type: GroundSchema,
    optional: true,
    accessibility: {
      question: t`In which condition is the ground you have to traverse to get here?`
    }
  },
  pickUpOrDropOffZone: {
    type: GroundSchema,
    optional: true,
    accessibility: {
      question: t`In which condition is the ground around the pick or drop off zone?`
    }
  },
  hasWheelchairAccessiblePathFromOutside: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the place on a wheeclchair accessible path?`
    }
  },
  hasDedicatedAccessibilitySignage: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is there dedicated signage for way finding?`
    }
  },
  ratingSpacious: {
    type: Number,
    optional: true,
    min: 0,
    max: 1,
    accessibility: {
      deprecated: true,
      question: t`How spacious is this place?`,
      componentHint: 'StarRating'
    }
  },
  isWellLit: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the place well lit?`
    }
  },
  isQuiet: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the place quiet?`
    }
  },
  hasInductionLoop: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Does this place have induction loops?`
    }
  },
  // TODO: Causes test error. Fix this!
  // ambientNoiseLevel: quantityDefinition(LengthSchema, true, {
  //   question: t`How loud is the ambient noise here typically (A-Weighted)?`,
  //   machineData: true
  // }),

  smokingPolicy: {
    type: String,
    optional: true,
    allowedValues: smokingPolicies.map(s => s.value),
    accessibility: {
      question: t`Is smoking allowed here?`,
      options: smokingPolicies
    }
  },
  hasTactileGuideStrips: {
    type: Boolean,
    optional: true
  },
  animalPolicy: {
    type: AnimalPolicySchema,
    optional: true,
    accessibility: {
      question: t`What is the animal policy of this place?`
    }
  },
  pathways: {
    type: PathwaysSchema,
    optional: true
  },
  entrances: {
    type: Array,
    optional: true,
    label: t`Entrances`,
    accessibility: {
      questionBlockBegin: t`Would you like to rate the first entrance?`,
      questionMore: t`Would you like to rate another entrance?`
    }
  },
  'entrances.$': EntranceSchema,
  restrooms: {
    type: Array,
    optional: true,
    label: t`Restrooms`,
    accessibility: {
      questionBlockBegin: t`Would you like to rate the accessibility of the restroom?`,
      questionMore: t`Would you like to rate another restroom?`
    }
  },
  'restrooms.$': RestroomSchema,
  tables: {
    type: TablesSchema,
    optional: true,
    accessibility: {
      question: t`Are there any tables here?`,
      options: [
        {
          label: t`Accessible table`,
          option: AccessibleTablesPrefab
        }
      ]
    }
  },
  providesMobilityEquipment: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Does the place provide mobility equipment, e.g. foldable wheelchairs or crutches?`
    }
  },
  doors: {
    type: DoorSchema,
    optional: true,
    label: t`Door`,
    accessibility: {
      questionBlockBegin: t`Would you like soem general information about the doors in the place?`
    }
  },
  sitemap: {
    type: Object, // TODO define type
    optional: true
  },
  lifts: {
    type: Array,
    optional: true
  },
  'lifts.$': Object, // TODO define type
  switches: {
    type: Array,
    optional: true
  },
  'switches.$': Object, // TODO define type
  vendingMachines: {
    type: Array,
    optional: true
  },
  'vendingMachines.$': Object, // TODO define type
  powerOutlets: {
    type: Array,
    optional: true
  },
  'powerOutlets.$': Object, // TODO define type
  beds: {
    type: Array,
    optional: true
  },
  'beds.$': Object, // TODO define type
  wardrobe: {
    type: Object, // TODO define type
    optional: true
  },
  changingRoom: {
    type: Object, // TODO define type
    optional: true
  },
  stage: {
    type: Object, // TODO define type
    optional: true
  },
  cashRegister: {
    type: Object, // TODO define type
    optional: true
  },
  seats: {
    type: Object, // TODO define type
    optional: true
  },
  serviceContact: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`How can the service staff be reached?`
    }
  },
  services: {
    type: Object, // TODO define type
    optional: true
  },
  infoDesk: {
    type: Object, // TODO define type
    optional: true
  },
  signage: {
    type: Object, // TODO define type
    optional: true
  }
});
