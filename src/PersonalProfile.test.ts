import { getPersonalProfileSchemaDefinition } from './PersonalProfile.js';
import expectValidFixture from './lib/expectValidFixture.js';
import personalProfileFixture from './personalProfileFixture.js';

const definition = getPersonalProfileSchemaDefinition();

describe('PersonalProfile schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, personalProfileFixture);
  });
});
