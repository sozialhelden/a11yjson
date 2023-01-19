import { getSurfaceSchemaDefinition } from './Surface';
import expectValidFixture from './lib/expectValidFixture';
import { surfaceFixture } from './surfaceFixture';

const definition = getSurfaceSchemaDefinition();

describe('Surface schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, surfaceFixture);
  });
});
