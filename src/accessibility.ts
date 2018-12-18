import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { PersonalProfile, PersonalProfileSchema } from './personal-profile';
import { Entrance, EntranceSchema } from './entrance';
import { Restroom, RestroomSchema } from './restroom';
import { Staff, StaffSchema } from './staff';
import { WheelchairPlaces, WheelchairPlacesSchema } from './wheelchair-places';
import { Media, MediaSchema } from './media';
import { Payment, PaymentSchema } from './payment';
import { AccessibleTablesPrefab, Tables, TablesSchema } from './tables';
import { Pathways, PathwaysSchema } from './pathways';
import { Parking, ParkingSchema } from './parking';
import { Ground, GroundSchema } from './ground';
import { LocalizedString, LocalizedStringSchema } from './localized-string';
import { AnimalPolicySchema, AnimalPolicy } from './animal-policy';
import { SmokingPolicy, smokingPolicies } from './smoking-policy';
import { Volume, quantityDefinition } from './units';
import { VolumeSchema } from './ac-format';

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
   * Information about the staff.
   * `null` indicates there is no staff, `undefined` or missing property indicates unknown.
   */
  staff?: Staff | null;

  parking?: Parking | null;

  // QUESTION what are the allowed numbers for this rating
  ratingSpacious?: number;
  // QUESTION How is this measured, should be changed to ambient.lighting
  isWellLit?: boolean;
  isQuiet?: boolean;
  ambientNoiseLevel?: Volume; // in dB(A) relative to a reference pressure of 0.00002 Pa
  smokingPolicy?: SmokingPolicy;
  hasTactileGuideStrips?: boolean;
  animalPolicy?: AnimalPolicy;
  ground?: Ground | null;
  pathways?: Pathways | null;
  entrances?: ArrayLike<Entrance> | null;
  restrooms?: ArrayLike<Restroom> | null;
  sitemap?: any; // TODO define type
  switches?: [any]; // TODO define type
  vendingMachines?: [any]; // TODO define type
  powerOutlets?: [any]; // TODO define type
  beds?: [any]; // TODO define type
  wardrobe?: any; // TODO define type
  changingRoom?: any; // TODO define type,
  stage?: any; // TODO define type,
  cashRegister?: any; // TODO define type,
  /**
   * Information about payment.
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
  seats?: any; // TODO define type,
  serviceContact?: LocalizedString;
  services?: any; // TODO define type,,

  infoDesk?: any; // TODO define type,
  signage?: any; // TODO define type,
  /**
   * Information about media.
   * `null` indicates there is no media, `undefined` or missing property indicates unknown.
   */
  media?: Array<Media> | null;
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
      question: t`Is there a ground next to this place?`
    }
  },
  ratingSpacious: {
    type: Number,
    optional: true,
    min: 0,
    max: 1,
    accessibility: {
      question: t`How spacious is this place?`,
      componentHint: 'StarRating'
    }
  },
  isWellLit: {
    type: Boolean,
    optional: true
  },
  isQuiet: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the place quiet?`
    }
  },
  ambientNoiseLevel: quantityDefinition(VolumeSchema, true, {
    question: t`How loud is the ambient noise here typically (A-Weighted)?`,
    machineData: true
  }),
  smokingPolicy: {
    type: Boolean,
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
    optional: true
    type: LocalizedStringSchema,
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
