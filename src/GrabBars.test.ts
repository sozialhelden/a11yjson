import { GrabBars, getGrabBarsSchemaDefinition } from './GrabBars';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const grabBarsFixture: Complete<GrabBars> = {
  onUsersLeftSide: true,
  onUsersRightSide: true,
  topHeightFromFloor: '80cm',
  distanceBetweenBars: '80cm',
  foldable: true,
};

export default grabBarsFixture;

const definition = getGrabBarsSchemaDefinition();

describe('GrabBars schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, grabBarsFixture);
  });
});
