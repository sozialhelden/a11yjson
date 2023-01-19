import expectValidFixture from './lib/expectValidFixture';
import { getPerceptionModeSchemaDefinition } from './PerceptionMode';
import { perceptionModeFixture } from './perceptionModeFixture';

const definition = getPerceptionModeSchemaDefinition();

describe('PerceptionMode schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, perceptionModeFixture);
  });
});
