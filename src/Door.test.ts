import { getDoorSchemaDefinition } from './Door.js';
import expectValidFixture from './lib/expectValidFixture.js';
import doorFixture from './doorFixture.js';

const definition = getDoorSchemaDefinition();

describe('Door schema', () => {
  it('evaluates an empty object as valid', () => {
    expectValidFixture(definition, {});
  });

  it('evaluates a complex door as valid', () => {
    expectValidFixture(definition, doorFixture);
  });
});
