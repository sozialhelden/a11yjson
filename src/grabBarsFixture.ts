import { GrabBars } from './GrabBars';
import { Complete } from './Complete';
import interactionModeFixture from './interactionModeFixture';

const grabBarsFixture: Complete<GrabBars> = {
  onUsersLeftSide: true,
  onUsersRightSide: true,
  inFrontOfTheUser: false,
  topHeightFromFloor: '80cm',
  distanceBetweenBars: '80cm',
  foldable: true,
  interactions: {
    localizeYourself: interactionModeFixture,
    findYourDestination: interactionModeFixture,
  },
  continuous: true,
};

export default grabBarsFixture;
