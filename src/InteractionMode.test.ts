import expectValidFixture from './lib/expectValidFixture';
import { getInteractionModeSchemaDefinition } from './InteractionMode';
import interactionModeFixture from './interactionModeFixture';

const definition = getInteractionModeSchemaDefinition();

describe('InteractionMode schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, interactionModeFixture);
  });
});
