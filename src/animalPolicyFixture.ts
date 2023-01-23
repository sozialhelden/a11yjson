import { AnimalPolicy } from './AnimalPolicy';
import { Complete } from './Complete';

const animalPolicyFixture: Complete<AnimalPolicy> = {
  allowsGuideDogs: true,
  allowsAssistanceDogs: true,
  allowsDogs: true,
  dogsNeedMuzzle: true,
  allowsServiceAnimals: true,
  suppliesWaterForPets: true,
};
export default animalPolicyFixture;
