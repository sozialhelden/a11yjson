import { getMirrorSchemaDefinition } from './Mirror';
import expectValidFixture from './lib/expectValidFixture';
import { mirrorFixture } from './mirrorFixture';

const definition = getMirrorSchemaDefinition();

describe('Mirror schema', () => {
  it('tests an empty fixture as valid', () => {
    expectValidFixture(definition, {});
  });
  it('tests a comprehensive fixture as valid', () => {
    expectValidFixture(definition, mirrorFixture);
  });
});
