import { Restroom, getRestroomSchemaDefinition } from './Restroom';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import entranceFixture from './Entrance.test';
import toiletFixture from './Toilet.test';
import showerFixture from './Shower.test';
import washBasinFixture from './WashBasin.test';

const restroomFixture: Complete<Restroom> = {
  isAccessibleWithWheelchair: true,
  signIcons: ['female', 'personInWheelchair'],
  hasMirror: true,
  mirror: {
    isLocatedInsideRestroom: false,
    isAccessibleWhileSeated: true,
    heightFromGround: '100cm',
  },
  turningSpaceInside: '>150cm',
  hasSupportRails: true,
  hasChangingTableForBabies: true,
  hasChangingTableForAdults: true,
  hasEmergencyPullstring: true,
  hasCeilingHoist: true,
  toilet: toiletFixture,
  hasBathTub: true,
  hasShower: true,
  entrance: entranceFixture,
  shower: showerFixture,
  heightOfSoap: '100 .. 120cm',
  heightOfDrier: '100 .. 120cm',
  washBasin: washBasinFixture,
  access: ['customers', 'employees'],
  usageFee: {
    currency: 'EUR',
    amount: 0.5,
  },
};

export default restroomFixture;

const definition = getRestroomSchemaDefinition();

describe('Restroom schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, restroomFixture);
  });
});
