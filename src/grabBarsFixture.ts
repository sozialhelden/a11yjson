import { GrabBars } from './GrabBars.js';
import { Complete } from './Complete.js';
import interactionModeFixture from './interactionModeFixture.js';

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
