import personalProfileFixture from "./personalProfileFixture";
import restroomFixture from "./restroomFixture";
import entranceFixture from './entranceFixture';
import wheelchairPlacesFixture from "./wheelchairPlacesFixture";
import mediaFixture from './mediaFixture';
import staffFixture from "./staffFixture";
import paymentFixture from './paymentFixture';
import pathwaysFixture from './pathwaysFixture';
import parkingFixture from './parkingFixture';
import surfaceFixture from "./surfaceFixture";
import { Accessibility, WheelchairAccessibilityGrade } from '.';
import { Complete } from './Complete';
import animalPolicyFixture from './animalPolicyFixture';
import wifiAccessibilityFixture from "./wifiAccessibilityFixture";
import deskFixture from './deskFixture';
import signageFixture from "./signageFixture";
import interactionModeFixture from './interactionModeFixture';

export const accessibilityFixture: Complete<Accessibility> = {
  accessibleWith: personalProfileFixture,
  partiallyAccessibleWith: personalProfileFixture,
  offersActivitiesForPeopleWith: personalProfileFixture,
  wheelchairAccessibilityGrade: WheelchairAccessibilityGrade.Fully,
  staff: staffFixture,
  wheelchairPlaces: wheelchairPlacesFixture,
  isWellLit: true,
  isQuiet: true,
  hasSoundAbsorption: true,
  hasAirConditioning: true,
  hasInductionLoop: false,
  ambientNoiseLevel: '20dB',
  smokingPolicy: 'prohibited',
  hasTactileGuideStrips: true,
  hasTactileSignage: true,
  hasBrailleSignage: true,
  serviceContact: { en: 'string' },
  media: [mediaFixture],
  desks: [deskFixture],
  tables: [deskFixture],
  payment: paymentFixture,
  entrances: [entranceFixture, entranceFixture],
  restrooms: [restroomFixture, restroomFixture],
  signageSystems: [signageFixture],
  pathways: pathwaysFixture,
  pathwaysInside: pathwaysFixture,
  pathwaysFromEntrance: pathwaysFixture,
  parking: parkingFixture,
  surface: surfaceFixture,
  animalPolicy: animalPolicyFixture,
  wifi: wifiAccessibilityFixture,
  interactions: {
    arrive: interactionModeFixture,
    book: interactionModeFixture,
    buy: interactionModeFixture,
    checkIn: interactionModeFixture,
    checkOut: interactionModeFixture,
    eat: interactionModeFixture,
    explore: interactionModeFixture,
    getFood: interactionModeFixture,
    listen: interactionModeFixture,
    pay: interactionModeFixture,
    read: interactionModeFixture,
    rent: interactionModeFixture,
    roam: interactionModeFixture,
    see: interactionModeFixture,
    sell: interactionModeFixture,
    use: interactionModeFixture,
    change: interactionModeFixture,
    useLockers: interactionModeFixture,
    visit: interactionModeFixture,
    watch: interactionModeFixture,
    watchMovies: interactionModeFixture,
    watchPlays: interactionModeFixture,
    workHere: interactionModeFixture,
  },
};
export default accessibilityFixture;
