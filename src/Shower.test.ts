import { Shower, getShowerSchemaDefinition } from './Shower';
import expectValidFixture from './lib/expectValidFixture';
import grabBarsFixture from './GrabBars.test';
import { Complete } from './Complete';

const showerFixture: Complete<Shower> = {
  hasSupportRails: true,
  hasShowerSeat: true,
  grabBars: grabBarsFixture,
  stairs: {
    stepHeight: '5cm',
    count: 1,
  },
  door: {
    width: '80cm',
  },
  seat: {
    fixedHeight: '40cm',
    isFoldable: true,
  },
  interactions: {
    transfer: [{
      action: [{
        necessaryClimbHeight: '20cm',
      }],
    }],
    useShampoo: [{
      action: [{
        necessaryGripHeight: '100cm',
        isEasyToFind: true,
      }],
    }],
    useShowerGel: [{
      action: [{
        necessaryGripHeight: '100cm',
        isEasyToFind: false,
      }],
    }],
    useSoap: [{
      action: [{
        necessaryGripHeight: '100cm',
        isEasyToFind: false,
      }],
    }],
    useConditioner: [{
      action: [{
        necessaryGripHeight: '100cm',
        isEasyToFind: false,
      }],
    }],
    useShowerCurtain: [{
      action: [{
        necessaryGripHeight: '180cm',
        isEasyToFind: true,
      }],
    }],
    useShowerHead: [{
      action: [{
        necessaryGripHeight: '100 .. 180cm',
      }],
    }],
  },
};

export default showerFixture;

const definition = getShowerSchemaDefinition();

describe('Shower schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, showerFixture);
  });
});
