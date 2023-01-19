import expectValidFixture from './lib/expectValidFixture';
import { getQueueSystemSchemaDefinition } from './QueueSystem';
import { queueSystemFixture } from './queueSystemFixture';

const definition = getQueueSystemSchemaDefinition();

describe('QueueSystem schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, queueSystemFixture);
  });
});
