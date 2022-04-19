import { Surface, getSurfaceSchemaDefinition } from './Surface';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const surfaceFixture: Complete<Surface> = {
  lateralSlope: {
    value: 6,
    unit: 'percent',
  },
  longitudinalSlope: {
    value: 6,
    unit: 'percent',
  },
  turningSpace: '<150cm',
  smoothness: 'good',
  types: ['concrete'],
};

export default surfaceFixture;

const definition = getSurfaceSchemaDefinition();

describe('Surface schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, surfaceFixture);
  });
});
