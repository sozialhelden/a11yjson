import { Toilet } from './Toilet';
import { Complete } from './Complete';

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
      action: { pullstring: true, pedal: true, activationForce: '10N' },
    },
    secondaryFlush: {
      name: { en: 'Flush with a secondary button at low height' },
      action: {
        pushButton: true,
        necessaryGripHeight: '50cm',
        tactileGuides: true,
        tactile: true,
        brailleText: true,
      },
    },
  },
};
export default toiletFixture;
