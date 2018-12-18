import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';
import './simpl-schema-extensions';

export interface AnimalPolicy {
  allowsGuideDogs?: boolean;
  allowsTherapyAnimals?: boolean;
  allowsDogs?: boolean;
  dogsNeedMuzzle?: boolean;
  allowsAnyAnimals?: boolean;
  suppliesWaterForPets?: boolean;
}

export const AnimalPolicySchema = new SimpleSchema({
  allowsGuideDogs: {
    type: Boolean,
    accessibility: {
      question: t`Does this place allow guide dogs?`
    }
  },
  allowsTherapyAnimals: {
    type: Boolean,
    accessibility: {
      question: t`Does this place allow therapy animals?`
    }
  },
  allowsDogs: {
    type: Boolean,
    accessibility: {
      question: t`Does this place allow visitors to bring dogs?`
    }
  },
  dogsNeedMuzzle: {
    type: Boolean,
    accessibility: {
      question: t`Does this place enforce that dogs wear a muzzle?`
    }
  },
  allowsAnyPets: {
    type: Boolean,
    accessibility: {
      question: t`Does this place allow any kind of pets?`
    }
  },
  suppliesWaterForPets: {
    type: Boolean,
    accessibility: {
      question: t`Does this place supply water for pets?`
    }
  }
});
