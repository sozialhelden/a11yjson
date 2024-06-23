import { Complete } from './Complete.js';
import { WashBasin } from './WashBasin.js';

const washBasinFixture: Complete<WashBasin> = {
  isLocatedInsideRestroom: true,
  accessibleWithWheelchair: false,
  height: '79cm',
  spaceBelowHeight: '75cm',
  spaceBelowDepth: '50cm',
  interactions: {
    changeTemperature: {
      action: {
        singleHanded: 'possible',
        necessaryGripHeight: '80cm',
        burnHazard: true,
        tactileGuides: 'always',
        turnKnob: 'required',
        directionAxis: 'axial',
      },
      perception: {
        heat: 'always',
        light: 'always',
        temperature: { min: 20, max: 60, unit: 'degC' },
      },
    },
    changeWaterPressure: {
      action: {
        singleHanded: 'possible',
        necessaryGripHeight: '80cm',
        turnKnob: 'required',
        directionAxis: 'sagittal',
        feedback: {
          description: { en: 'The knob shows its position.' },
          visual: 'always',
        },
      },
      perception: {
        tactileGuides: 'always',
      },
    },
    useWater: {},
    getHotWater: {},
    getColdWater: {},
    getCarbonizedWater: {
      // This describes an actual fixture to be found in the Sozialhelden e.V. office.
      action: {
        singleHanded: 'impossible',
        twoHanded: 'possible',
        necessaryGripHeight: '100cm',
        tactileGuides: 'always',
        knurled: true,
        knob: 'always',
        turnKnob: 'required',
        press: 'required',
        direction: 'down',
        isEasyToUnderstand: false,
      },
      perception: {
        tactileGuides: 'always',
      },
    },
    useWaterJet: {},
    useWaterSpray: {},
    useSoap: {
      action: {
        singleHanded: 'possible',
        necessaryGripHeight: '120cm',
      },
      perception: {
        smell: 'always',
        visual: 'always',
        isEasyToFind: true,
      },
    },
    getTowel: {
      action: {
        singleHanded: 'possible',
        necessaryGripHeight: '120cm',
      },
      perception: {
        visual: 'always',
        isEasyToFind: true,
      },
    },
    getPaperTowel: {
      action: {
        singleHanded: 'possible',
        necessaryGripHeight: '120cm',
      },
      perception: {
        isEasyToFind: true,
      },
    },
    useAirDryer: {
      action: {
        singleHanded: 'possible',
        necessaryGripHeight: '80cm',
      },
      perception: {
        isEasyToFind: true,
      },
    },
    sanitizeHands: {
      action: {
        singleHanded: 'possible',
        necessaryGripHeight: '120cm',
        press: 'required',
        activationForce: { value: 10, unit: 'N' },
      },
      perception: {
        isEasyToFind: true,
      },
    },
  },
};
export default washBasinFixture;
