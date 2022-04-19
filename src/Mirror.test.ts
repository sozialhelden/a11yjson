import { Mirror, getMirrorSchemaDefinition } from './Mirror';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const mirrorFixture: Complete<Mirror> = {
  isLocatedInsideRestroom: true,
  isAccessibleWhileSeated: true,
  heightFromGround: '>100cm',
};

export default mirrorFixture;

const definition = getMirrorSchemaDefinition();

describe('Mirror schema', () => {
  it('tests an empty fixture as valid', () => {
    expectValidFixture(definition, {});
  });
  it('tests a comprehensive fixture as valid', () => {
    expectValidFixture(definition, mirrorFixture);
  });
});
