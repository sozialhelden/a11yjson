import SimpleSchema from 'simpl-schema';

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
