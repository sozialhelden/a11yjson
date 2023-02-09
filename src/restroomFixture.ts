import { Restroom } from './Restroom.js';
import { Complete } from './Complete.js';
import toiletFixture from './toiletFixture.js';
import showerFixture from './showerFixture.js';
import washBasinFixture from './washBasinFixture.js';
import roomFixture from './roomFixture.js';

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
  hasChangingTableForBabies: true,
  hasChangingTableForAdults: true,
  hasEmergencyPullstring: true,
  hasCeilingHoist: true,
  toilet: toiletFixture,
  hasBathTub: true,
  hasShower: true,
  shower: showerFixture,
  heightOfSoap: '100 .. 120cm',
  heightOfDrier: '100 .. 120cm',
  washBasin: washBasinFixture,
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
