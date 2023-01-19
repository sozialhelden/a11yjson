import { getPathwaysSchemaDefinition } from './Pathways';
import expectValidFixture from './lib/expectValidFixture';
import { pathwaysFixture } from './pathwaysFixture';

const definition = getPathwaysSchemaDefinition();

describe('Pathways schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, pathwaysFixture);
  });
});
