import { getGrabBarsSchemaDefinition } from './GrabBars.js';
import expectValidFixture from './lib/expectValidFixture.js';
import grabBarsFixture from './grabBarsFixture.js';

const definition = getGrabBarsSchemaDefinition();

describe('GrabBars schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, grabBarsFixture);
  });
});
