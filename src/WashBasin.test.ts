import expectValidFixture from './lib/expectValidFixture.js';
import { getWashBasinSchemaDefinition } from './WashBasin.js';
import washBasinFixture from './washBasinFixture.js';

const definition = getWashBasinSchemaDefinition();

describe('WashBasin schema', () => {
  it('validates a completely defined object', () => {
    expectValidFixture(definition, washBasinFixture);
  });
});
