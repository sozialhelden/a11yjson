import { getAnimalPolicySchemaDefinition } from './AnimalPolicy';
import animalPolicyFixture from './animalPolicyFixture';
import expectValidFixture from './lib/expectValidFixture';

const definition = getAnimalPolicySchemaDefinition();

describe('AnimalPolicy schema', () => {
  it('evaluates an empty object as valid', () => {
    expectValidFixture(definition, {});
  });

  it('evaluates a complex animalPolicy as valid', () => {
    expectValidFixture(definition, animalPolicyFixture);
  });
});
