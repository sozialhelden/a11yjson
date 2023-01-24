import { AnimalPolicy } from './AnimalPolicy.js';
import { Complete } from './Complete.js';

const animalPolicyFixture: Complete<AnimalPolicy> = {
  allowsGuideDogs: true,
  allowsAssistanceDogs: true,
  allowsDogs: true,
  dogsNeedMuzzle: true,
  allowsServiceAnimals: true,
  suppliesWaterForPets: true,
};
export default animalPolicyFixture;
