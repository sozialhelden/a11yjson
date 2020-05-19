import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

import { PersonalProfile, PersonalProfileSchema } from './PersonalProfile';
import { Entrance, EntranceSchema } from './Entrance';
import { Restroom, RestroomSchema } from './Restroom';

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

/**
 * Describes the physical (and sometimes human rated) accessibility of a place.
 */
export interface RoomAccessibility {
  /// @deprecated
  accessibleWith?: PersonalProfile;
  /// @deprecated
  partiallyAccessibleWith?: PersonalProfile;
  /// @deprecated
  offersActivitiesForPeopleWith?: PersonalProfile;
  // areas?: Array<Area>;

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
   * Information about tables.
   * `null` indicates there are no tables, `undefined` or missing property indicates unknown.
   */
  tables?: Tables | null;
  /**
   * Information about media.
   * `null` indicates there is no media, `undefined` or missing property indicates unknown.
   */
  media?: ArrayLike<Media> | null;
 
  /**
   * `true if the room is on an accessible path or on the accessible route`
   * `false` if not, `undefined` if the condition is unknown or difficult to assess.
   */
  hasWheelchairAccessiblePathFromOutside?: boolean;
  /**
   * Describes the doors of the room
   */
  doors?: Door;
  /**
   * `true if the place provides dedicated signage for way finding`
   * `false` if not, `undefined` if the condition is unknown or difficult to assess.
   */
  hasDedicatedAccessibilitySignage?: boolean;
}

export const RoomAccessibilitySchema = new SimpleSchema({
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
  ground: {
    type: GroundSchema,
    optional: true,
    accessibility: {
      question: t`In which condition is the ground you have to traverse to get here?`
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
  doors: {
    type: DoorSchema,
    optional: true,
    label: t`Door`,
    accessibility: {
      questionBlockBegin: t`Would you like some general information about the doors in the place?`
    }
  },
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
  }
});
