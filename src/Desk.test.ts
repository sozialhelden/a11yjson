import { getDeskSchemaDefinition } from './Desk';
import expectValidFixture from './lib/expectValidFixture';
import { deskFixture } from './deskFixture';

const definition = getDeskSchemaDefinition();

describe('Desk schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, deskFixture);
  });
});
