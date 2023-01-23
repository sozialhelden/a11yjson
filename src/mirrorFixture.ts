import { Mirror } from './Mirror';
import { Complete } from './Complete';

const mirrorFixture: Complete<Mirror> = {
  isLocatedInsideRestroom: true,
  isAccessibleWhileSeated: true,
  heightFromGround: '>100cm',
  interactions: {
    adjust: {
      action: {
        necessaryClimbHeight: '3cm',
        necessaryGripHeight: '50cm',
      },
    },
  },
};
export default mirrorFixture;
