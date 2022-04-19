import { Staff, getStaffSchemaDefinition } from './Staff';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const staffFixture: Complete<Staff> = {
  canSeeVisitorsFromInside: true,
  hasFreeAssistantForVisitors: true,
  spokenLanguages: ['es', 'en', 'sgn-ase'],
};

export default staffFixture;

const definition = getStaffSchemaDefinition();

describe('Staff schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, staffFixture);
  });
});
