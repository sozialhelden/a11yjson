import SimpleSchema from 'simpl-schema';
import { Area, AreaSchema } from './area';

// QUESTION should this be deprecated
export interface PersonalProfile {
  muteness?: boolean;
  guideDog?: boolean;
  hearingImpairment?: boolean;
  learningImpairment?: boolean;
  limitedSight?: boolean;
  physicalImpairment?: boolean;
  visualImpairment?: boolean;
  blindness?: boolean;
  wheelchair?: boolean;
}

export const PersonalProfileSchema = new SimpleSchema({
  muteness: {
    type: Boolean,
    optional: true
  },
  guideDog: {
    type: Boolean,
    optional: true
  },
  hearingImpairment: {
    type: Boolean,
    optional: true
  },
  learningImpairment: {
    type: Boolean,
    optional: true
  },
  limitedSight: {
    type: Boolean,
    optional: true
  },
  physicalImpairment: {
    type: Boolean,
    optional: true
  },
  visualImpairment: {
    type: Boolean,
    optional: true
  },
  blindness: {
    type: Boolean,
    optional: true
  },
  wheelchair: {
    type: Boolean,
    optional: true
  }
});

export interface Accessibility {
  accessibleWith?: PersonalProfile;
  partiallyAccessibleWith?: PersonalProfile;
  offersActivitiesForPeopleWith?: PersonalProfile;
  areas?: Array<Area>;
  staff?: any; // TODO define type
  parking?: any; // TODO define type
}

export const AccessibilitySchema = new SimpleSchema({
  accessibleWith: {
    type: PersonalProfileSchema,
    optional: true
  },
  partiallyAccessibleWith: {
    type: PersonalProfileSchema,
    optional: true
  },
  offersActivitiesForPeopleWith: {
    type: PersonalProfileSchema,
    optional: true
  },
  areas: {
    type: Array,
    optional: true
  },
  'areas.$': AreaSchema,
  staff: {
    type: Object, // TODO define type
    optional: true
  },
  parking: {
    type: Object, // TODO define type
    optional: true
  }
});
