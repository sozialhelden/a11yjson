import expectValidFixture from './lib/expectValidFixture';
import { getWashBasinSchemaDefinition } from './WashBasin';
import washBasinFixture from './washBasinFixture';

const definition = getWashBasinSchemaDefinition();

describe('WashBasin schema', () => {
  it('validates a completely defined object', () => {
    expectValidFixture(definition, washBasinFixture);
  });
});
