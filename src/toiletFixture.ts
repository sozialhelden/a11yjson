import { Complete } from './Complete.js';
import { Toilet } from './Toilet.js';

const toiletFixture: Complete<Toilet> = {
  heightOfBase: '40 .. 45cm',
  spaceOnUsersLeftSide: '>70cm',
  spaceOnUsersRightSide: '>70cm',
  spaceInFront: '>2m',
  grabBars: {
    onUsersLeftSide: true,
    onUsersRightSide: true,
    topHeightFromFloor: '>85cm',
    distanceBetweenBars: '60 .. 65cm',
    continuous: false,
  },
  isSquatToilet: false,
  isUrinal: false,
  isLatrine: false,
  hasAutomaticFlush: false,
  flushMechanismDistanceFromToilet: '0 .. 100cm',
  interactions: {
    flush: {
      action: { pullstring: 'optional', pedal: 'optional', activationForce: '8 .. 10N' },
    },
    secondaryFlush: {
      name: { en: 'Flush with a secondary button at low height' },
      action: {
        pushButton: 'required',
        necessaryGripHeight: '50cm',
        tactileGuides: 'always',
        tactile: 'always',
        brailleText: 'always',
        raisedText: 'always',
      },
    },
  },
};
export default toiletFixture;
