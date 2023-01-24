import expectValidFixture from './lib/expectValidFixture.js';
import { getQueueSystemSchemaDefinition } from './QueueSystem.js';
import queueSystemFixture from './queueSystemFixture.js';

const definition = getQueueSystemSchemaDefinition();

describe('QueueSystem schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, queueSystemFixture);
  });
});
