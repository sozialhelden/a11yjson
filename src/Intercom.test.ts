import { getIntercomSchemaDefinition } from './Intercom';
import expectValidFixture from './lib/expectValidFixture';
import { intercomFixture } from './intercomFixture';

const definition = getIntercomSchemaDefinition();

describe('Intercom schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, intercomFixture);
  });
});
