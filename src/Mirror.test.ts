import { getMirrorSchemaDefinition } from './Mirror.js';
import expectValidFixture from './lib/expectValidFixture.js';
import mirrorFixture from './mirrorFixture.js';

const definition = getMirrorSchemaDefinition();

describe('Mirror schema', () => {
  it('tests an empty fixture as valid', () => {
    expectValidFixture(definition, {});
  });
  it('tests a comprehensive fixture as valid', () => {
    expectValidFixture(definition, mirrorFixture);
  });
});
