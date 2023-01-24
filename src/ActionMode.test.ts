import expectValidFixture from './lib/expectValidFixture.js';
import { getActionModeSchemaDefinition } from './ActionMode.js';
import actionModeFixture from './actionModeFixture.js';

const definition = getActionModeSchemaDefinition();

describe('ActionMode schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, actionModeFixture);
  });
});
