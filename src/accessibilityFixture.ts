import personalProfileFixture from './personalProfileFixture.js';
import restroomFixture from './restroomFixture.js';
import entranceFixture from './entranceFixture.js';
import wheelchairPlacesFixture from './wheelchairPlacesFixture.js';
import mediaFixture from './mediaFixture.js';
import staffFixture from './staffFixture.js';
import paymentFixture from './paymentFixture.js';
import pathwaysFixture from './pathwaysFixture.js';
import parkingFixture from './parkingFixture.js';
import surfaceFixture from './surfaceFixture.js';
import { Accessibility } from './index.js';
import { Complete } from './Complete.js';
import animalPolicyFixture from './animalPolicyFixture.js';
import wifiAccessibilityFixture from './wifiAccessibilityFixture.js';
import deskFixture from './deskFixture.js';
import signageFixture from './signageFixture.js';
import interactionModeFixture from './interactionModeFixture.js';
import appointmentPolicyFixture from './appointmentPolicyFixture.js';

const accessibilityFixture: Complete<Accessibility> = {
  accessibleWith: personalProfileFixture,
  partiallyAccessibleWith: personalProfileFixture,
  offersActivitiesForPeopleWith: personalProfileFixture,
  wheelchairAccessibilityGrade: 'fully',
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
  hasPatientLifter: true,
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
  appointmentPolicies: [appointmentPolicyFixture],
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
