import { GrabBars, getGrabBarsSchemaDefinition } from './GrabBars';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import interactionModeFixture from './InteractionMode.test';

const grabBarsFixture: Complete<GrabBars> = {
  onUsersLeftSide: true,
  onUsersRightSide: true,
  inFrontOfTheUser: false,
  topHeightFromFloor: '80cm',
  distanceBetweenBars: '80cm',
  foldable: true,
  interactions: [interactionModeFixture],
  continuous: true,
};

export default grabBarsFixture;

const definition = getGrabBarsSchemaDefinition();

describe('GrabBars schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, grabBarsFixture);
  });
});
