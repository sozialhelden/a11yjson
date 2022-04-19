import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import { getWashBasinSchemaDefinition, WashBasin } from './WashBasin';

const washBasinFixture: Complete<WashBasin> = {
  isLocatedInsideRestroom: true,
  accessibleWithWheelchair: false,
  height: '79cm',
  spaceBelowHeight: '75cm',
  spaceBelowDepth: '50cm',
};

export default washBasinFixture;

const definition = getWashBasinSchemaDefinition();

describe('WashBasin schema', () => {
  it('validates a completely defined object', () => {
    expectValidFixture(definition, washBasinFixture);
  });
});
