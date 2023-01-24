import { getAnimalPolicySchemaDefinition } from './AnimalPolicy.js';
import animalPolicyFixture from './animalPolicyFixture.js';
import expectValidFixture from './lib/expectValidFixture.js';

const definition = getAnimalPolicySchemaDefinition();

describe('AnimalPolicy schema', () => {
  it('evaluates an empty object as valid', () => {
    expectValidFixture(definition, {});
  });

  it('evaluates a complex animalPolicy as valid', () => {
    expectValidFixture(definition, animalPolicyFixture);
  });
});
