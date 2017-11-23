import SimpleSchema from 'simpl-schema';
import { Area, AreaSchema } from './area';
import { PersonalProfile, PersonalProfileSchema } from './personal-profile';

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
