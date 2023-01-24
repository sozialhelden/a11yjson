import { getSurfaceSchemaDefinition } from './Surface.js';
import expectValidFixture from './lib/expectValidFixture.js';
import surfaceFixture from './surfaceFixture.js';

const definition = getSurfaceSchemaDefinition();

describe('Surface schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, surfaceFixture);
  });
});
