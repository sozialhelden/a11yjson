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
};

export default toiletFixture;

const definition = getToiletSchemaDefinition();

describe('Toilet schema', () => {
  it('validates a completely defined toilet', () => {
    expectValidFixture(definition, toiletFixture);
  });
});
