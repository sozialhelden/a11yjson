import { AnimalPolicy, getAnimalPolicySchemaDefinition } from './AnimalPolicy';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const animalPolicyFixture: Complete<AnimalPolicy> = {
  allowsGuideDogs: true,
  allowsAssistanceDogs: true,
  allowsDogs: true,
  dogsNeedMuzzle: true,
  allowsServiceAnimals: true,
  suppliesWaterForPets: true,
};

export default animalPolicyFixture;

const definition = getAnimalPolicySchemaDefinition();

describe('AnimalPolicy schema', () => {
  it('evaluates an empty object as valid', () => {
    expectValidFixture(definition, {});
  });

  it('evaluates a complex animalPolicy as valid', () => {
    expectValidFixture(definition, animalPolicyFixture);
  });
});
