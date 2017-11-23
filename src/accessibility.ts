import SimpleSchema from 'simpl-schema';
import { Area, AreaSchema } from './area';

export interface Accessibility {
  areas: Array<Area>;
}

export const AccessibilitySchema = new SimpleSchema({
  areas: {
    type: Array
  },
  'areas.$': AreaSchema
});
