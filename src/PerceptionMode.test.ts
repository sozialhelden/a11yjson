import expectValidFixture from './lib/expectValidFixture.js';
import { getPerceptionModeSchemaDefinition } from './PerceptionMode.js';
import perceptionModeFixture from './perceptionModeFixture.js';

const definition = getPerceptionModeSchemaDefinition();

describe('PerceptionMode schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, perceptionModeFixture);
  });
});
