import { Toilet, getToiletSchemaDefinition } from './Toilet';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

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
  },
  isSquatToilet: false,
  isUrinal: false,
  hasAutomaticFlush: false,
  flushMechanism: {
    interactions: [
      {
        action: [{ pullstring: true }],
      },
    ],
  },
  flushMechanismDistanceFromToilet: '0 .. 1m',
  secondaryFlushMechanism: { // a secondary button that you can use instead of the pullstring
    interactions: [
      {
        action: [
          {
            pushButton: true,
            necessaryGripHeight: '50cm',
            tactileGuides: true,
            tactile: true,
            brailleText: true,
          },
        ],
      },
    ],
  },
  secondaryFlushMechanismDistanceFromToilet: '0 .. 1m',
};

export default toiletFixture;

const definition = getToiletSchemaDefinition();

describe('Toilet schema', () => {
  it('validates a completely defined toilet', () => {
    expectValidFixture(definition, toiletFixture);
  });
});
