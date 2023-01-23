import { getStaffSchemaDefinition } from './Staff';
import expectValidFixture from './lib/expectValidFixture';
import staffFixture from './staffFixture';

const definition = getStaffSchemaDefinition();

describe('Staff schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, staffFixture);
  });
});
