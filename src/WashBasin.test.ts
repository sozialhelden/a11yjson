import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import { getWashBasinSchemaDefinition, WashBasin } from './WashBasin';

const washBasinFixture: Complete<WashBasin> = {
  isLocatedInsideRestroom: true,
  accessibleWithWheelchair: false,
  height: '79cm',
  spaceBelowHeight: '75cm',
  spaceBelowDepth: '50cm',
  interactions: {
    changeTemperature: [{
      action: [{
        singleHanded: true,
        necessaryGripHeight: '80cm',
        burnHazard: true,
        tactileGuides: true,
        turnKnob: true,
        directionAxis: 'axial',
      }],
      perception: [{
        heat: true,
        light: true,
        temperature: { min: 20, max: 60, unit: 'degC' },
      }],
    }],
    changeWaterPressure: [{
      action: [{
        singleHanded: true,
        necessaryGripHeight: '80cm',
        turnKnob: true,
        directionAxis: 'sagittal',
        feedback: [{
          description: { en: 'The knob shows its position.' },
          visual: true,
        }],
      }],
      perception: [{
        tactileGuides: true,
      }],
    }],
    useWater: [],
    getHotWater: [],
    getColdWater: [],
    getCarbonizedWater: [{
      // This describes an actual fixture to be found in the Sozialhelden e.V. office.
      action: [{
        singleHanded: false,
        twoHanded: true,
        necessaryGripHeight: '100cm',
        tactileGuides: true,
        knurled: true,
        knob: true,
        turnKnob: true,
        press: true,
        direction: 'down',
        isEasyToUnderstand: false,
      }],
      perception: [{
        tactileGuides: true,
      }],
    }],
    useWaterJet: [],
    useWaterSpray: [],
    useSoap: [{
      action: [{
        singleHanded: true,
        necessaryGripHeight: '120cm',
      }],
      perception: [{
        smell: true,
        visual: true,
      }],
    }],
    getTowel: [{
      action: [{
        singleHanded: true,
        necessaryGripHeight: '120cm',
      }],
      perception: [{
        visual: true,
        isEasyToFind: true,
      }],
    }],
    getPaperTowel: [{
      action: [{
        singleHanded: true,
        necessaryGripHeight: '120cm',
      }],
      perception: [{
        isEasyToFind: true,
      }],
    }],
    useAirDryer: [{
      action: [{
        singleHanded: true,
        necessaryGripHeight: '80cm',
      }],
      perception: [{
        isEasyToFind: true,
      }],
    }],
    sanitizeHands: [{
      action: [{
        singleHanded: true,
        necessaryGripHeight: '120cm',
        press: true,
        activationForce: { value: 10, unit: 'N' },
      }],
      perception: [{
        isEasyToFind: true,
      }],
    }],
  },
};

export default washBasinFixture;

const definition = getWashBasinSchemaDefinition();

describe('WashBasin schema', () => {
  it('validates a completely defined object', () => {
    expectValidFixture(definition, washBasinFixture);
  });
});
