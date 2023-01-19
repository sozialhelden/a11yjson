import expectValidFixture from './lib/expectValidFixture';
import { getActionModeSchemaDefinition } from './ActionMode';
import { actionModeFixture } from './actionModeFixture';

const definition = getActionModeSchemaDefinition();

describe('ActionMode schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, actionModeFixture);
  });
});
