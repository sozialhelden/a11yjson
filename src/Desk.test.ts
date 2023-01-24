import { getDeskSchemaDefinition } from './Desk.js';
import expectValidFixture from './lib/expectValidFixture.js';
import deskFixture from './deskFixture.js';

const definition = getDeskSchemaDefinition();

describe('Desk schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, deskFixture);
  });
});
