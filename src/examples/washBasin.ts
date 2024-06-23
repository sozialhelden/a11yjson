import { WashBasin } from '../WashBasin.js';

const washBasin: WashBasin = {
  isLocatedInsideRestroom: true,
  accessibleWithWheelchair: false,
  height: { value: 79, unit: 'cm' },
  spaceBelowHeight: { value: 75, unit: 'cm' },
  spaceBelowDepth: { value: 50, unit: 'cm' },
  interactions: {
    changeTemperature: {
      action: {
        singleHanded: 'possible',
        necessaryGripHeight: { value: 80, unit: 'cm' },
        burnHazard: true,
        tactileGuides: 'always',
        turnKnob: 'required',
        directionAxis: 'axial',
      },
      perception: {
        heat: 'required',
        visual: 'optional',
        temperature: { min: 20, max: 60, unit: 'degC' },
      },
    },
    changeWaterPressure: {
      action: {
        singleHanded: 'possible',
        necessaryGripHeight: { value: 80, unit: 'cm' },
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
    getCarbonizedWater: {
      action: {
        singleHanded: 'impossible',
        twoHanded: 'possible',
        necessaryGripHeight: { value: 100, unit: 'cm' },
        tactileGuides: 'always',
        knurled: 'always',
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
    useSoap: {
      action: {
        singleHanded: 'possible',
        necessaryGripHeight: { value: 120, unit: 'cm' },
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
        necessaryGripHeight: { value: 120, unit: 'cm' },
      },
      perception: {
        visual: 'always',
        isEasyToFind: true,
      },
    },
    getPaperTowel: {
      action: {
        singleHanded: 'possible',
        necessaryGripHeight: { value: 120, unit: 'cm' },
      },
      perception: {
        isEasyToFind: true,
      },
    },
    useAirDryer: {
      action: {
        singleHanded: 'possible',
        necessaryGripHeight: { value: 80, unit: 'cm' },
      },
      perception: {
        isEasyToFind: true,
      },
    },
    sanitizeHands: {
      action: {
        singleHanded: 'possible',
        necessaryGripHeight: { value: 120, unit: 'cm' },
        press: 'required',
        activationForce: { value: 10, unit: 'N' },
      },
      perception: {
        isEasyToFind: true,
      },
    },
  },
};

export default washBasin;
