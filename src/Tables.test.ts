import { Tables, getTablesSchemaDefinition } from './Tables';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const tablesFixture: Complete<Tables> = {
  height: '60 .. 80cm',
  spaceBelowHeight: '>67cm',
  spaceBelowWidth: '>30cm',
  spaceBelowDepth: '>30cm',
};

export default tablesFixture;

const definition = getTablesSchemaDefinition();

describe('Tables schema', () => {
  it('validates completely defined tables', () => {
    expectValidFixture(definition, tablesFixture);
  });
});
