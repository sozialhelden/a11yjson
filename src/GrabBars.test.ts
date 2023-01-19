import { getGrabBarsSchemaDefinition } from './GrabBars';
import expectValidFixture from './lib/expectValidFixture';
import { grabBarsFixture } from './grabBarsFixture';

const definition = getGrabBarsSchemaDefinition();

describe('GrabBars schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, grabBarsFixture);
  });
});
