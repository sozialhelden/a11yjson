import { getDoorSchemaDefinition } from './Door';
import expectValidFixture from './lib/expectValidFixture';
import { doorFixture } from './doorFixture';

const definition = getDoorSchemaDefinition();

describe('Door schema', () => {
  it('evaluates an empty object as valid', () => {
    expectValidFixture(definition, {});
  });

  it('evaluates a complex door as valid', () => {
    expectValidFixture(definition, doorFixture);
  });
});
