import { getIntercomSchemaDefinition } from './Intercom.js';
import expectValidFixture from './lib/expectValidFixture.js';
import intercomFixture from './intercomFixture.js';

const definition = getIntercomSchemaDefinition();

describe('Intercom schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, intercomFixture);
  });
});
