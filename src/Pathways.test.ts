import { getPathwaysSchemaDefinition } from './Pathways.js';
import expectValidFixture from './lib/expectValidFixture.js';
import pathwaysFixture from './pathwaysFixture.js';

const definition = getPathwaysSchemaDefinition();

describe('Pathways schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, pathwaysFixture);
  });
});
