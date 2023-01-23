import { Restroom } from './Restroom';
import { Complete } from './Complete';
import entranceFixture from './entranceFixture';
import toiletFixture from './toiletFixture';
import showerFixture from './showerFixture';
import washBasinFixture from './washBasinFixture';
import roomFixture from './roomFixture';

const restroomFixture: Complete<Restroom> = {
  ...roomFixture,
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
  usageFee: [{
    currency: 'EUR',
    amount: 0.5,
    access: ['public'],
  },
  {
    currency: 'EUR',
    amount: 0,
    access: ['customers'],
  }],
  sameAs: ['https://example.com/restrooms/1'],
};
export default restroomFixture;
