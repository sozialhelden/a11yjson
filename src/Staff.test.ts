import { getStaffSchemaDefinition } from './Staff.js';
import expectValidFixture from './lib/expectValidFixture.js';
import staffFixture from './staffFixture.js';

const definition = getStaffSchemaDefinition();

describe('Staff schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, staffFixture);
  });
});
