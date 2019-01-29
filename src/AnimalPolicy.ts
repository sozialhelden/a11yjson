import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';
import './SimpleSchemaExtensions';

export interface AnimalPolicy {
  /**
   * `true` if the place allows visitors to bring guide dogs, `false` if bringing them is explicitly prohibited, `undefined` if the policy is unknown.
   */
  allowsGuideDogs?: boolean;
  /**
   * `true` if the place allows visitors to bring service animals, `false` if bringing them is explicitly prohibited, `undefined` if the policy is unknown.
   */
  allowsServiceAnimals?: boolean;
  /**
   * `true` if the place allows visitors to bring dogs in general, `false` if bringing them is explicitly prohibited (with exception of dogs specified by `allowsGuideDogs` and `allowsTherapyAnimals`), `undefined` if the policy is unknown.
   */
  allowsDogs?: boolean;
  /**
   * `true` if the place denies entry to visitors bringing a dogs without muzzles, `false` if dogs without muzzles are explicitly allowed.
   */
  dogsNeedMuzzle?: boolean;
  /**
   * `true` if the place allows bringing any kind of animal, `false` or `undefined` if not or if there are exceptions.
   */
  allowsAnyAnimals?: boolean;
  /**
   * `true` if the place supplies water for accompanying animals, `false` if explicitly not, or `undefined` if unknown.
   */
  suppliesWaterForPets?: boolean;
}

export const AnimalPolicySchema = new SimpleSchema({
  allowsGuideDogs: {
    type: Boolean,
    accessibility: {
      question: t`Does this place allow guide dogs?`
    }
  },
  allowsServiceAnimals: {
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
