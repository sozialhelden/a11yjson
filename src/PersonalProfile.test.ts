import { getPersonalProfileSchemaDefinition } from './PersonalProfile';
import expectValidFixture from './lib/expectValidFixture';
import personalProfileFixture from './personalProfileFixture';

const definition = getPersonalProfileSchemaDefinition();

describe('PersonalProfile schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, personalProfileFixture);
  });
});
