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
    continuous: false,
  },
  isSquatToilet: false,
  isUrinal: false,
  hasAutomaticFlush: false,
  flushMechanismDistanceFromToilet: '0 .. 100cm',
  interactions: {
    flush: [
      {
        action: [{ pullstring: true }],
      },
      {
        action: [{ pedal: true, activationForce: '10N' }],
      },
      {
        name: { en: 'Flush with a secondary button at low height' },
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
};

export default toiletFixture;

const definition = getToiletSchemaDefinition();

describe('Toilet schema', () => {
  it('validates a completely defined toilet', () => {
    expectValidFixture(definition, toiletFixture);
  });
});
