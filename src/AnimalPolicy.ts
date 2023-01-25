import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import BooleanField from './BooleanField.js';

export interface AnimalPolicy {
  /**
   * `true` if the place allows visitors to bring guide dogs, `false` if bringing them is
   * explicitly prohibited, `undefined` if the policy is unknown.
   */
  allowsGuideDogs?: boolean;
  /**
   * `true` if the place allows visitors to bring assistance dogs, `false` if bringing them is
   * explicitly prohibited, `undefined` if the policy is unknown.
   */
  allowsAssistanceDogs?: boolean;
  /**
   * `true` if the place allows visitors to bring dogs in general, `false` if bringing them is
   * explicitly prohibited (with exception of dogs specified by `allowsGuideDogs` and
   * `allowsTherapyAnimals`), `undefined` if the policy is unknown.
   */
  allowsDogs?: boolean;
  /**
   * `true` if the place denies entry to visitors bringing a dogs without muzzles, `false` if
   * dogs without muzzles are explicitly allowed.
   */
  dogsNeedMuzzle?: boolean;
  /**
   * `true` if the place allows bringing any kind of animal, `false` or `undefined` if not or if
   * there are exceptions.
   */
  allowsServiceAnimals?: boolean;
  /**
   * `true` if the place supplies water for accompanying animals, `false` if explicitly not, or
   * `undefined` if unknown.
   */
  suppliesWaterForPets?: boolean;
}

export const getAnimalPolicySchemaDefinition: () => SchemaDefinition = () => ({
  allowsGuideDogs: BooleanField,
  allowsServiceAnimals: BooleanField,
  allowsAssistanceDogs: BooleanField,
  allowsDogs: BooleanField,
  dogsNeedMuzzle: BooleanField,
  allowsAnyPets: BooleanField,
  suppliesWaterForPets: BooleanField,
});
