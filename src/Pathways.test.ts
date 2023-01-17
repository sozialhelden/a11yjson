import { Pathways, getPathwaysSchemaDefinition } from './Pathways';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import surfaceFixture from './Surface.test';

const pathwaysFixture: Complete<Pathways> = {
  width: '>150cm',
  widthAtObstacles: '>90cm',
  surface: surfaceFixture,
};

export default pathwaysFixture;

const definition = getPathwaysSchemaDefinition();

describe('Pathways schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, pathwaysFixture);
  });
});
