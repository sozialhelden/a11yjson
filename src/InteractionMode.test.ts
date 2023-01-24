import expectValidFixture from './lib/expectValidFixture.js';
import { getInteractionModeSchemaDefinition } from './InteractionMode.js';
import interactionModeFixture from './interactionModeFixture.js';

const definition = getInteractionModeSchemaDefinition();

describe('InteractionMode schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, interactionModeFixture);
  });
});
