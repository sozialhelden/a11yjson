import { getAccessibilitySchemaDefinition } from './Accessibility';
import personalProfileFixture from './PersonalProfile.test';
import restroomFixture from './Restroom.test';
import entranceFixture from './Entrance.test';
import wheelchairPlacesFixture from './WheelchairPlaces.test';
import mediaFixture from './Media.test';
import staffFixture from './Staff.test';
import paymentFixture from './Payment.test';
import pathwaysFixture from './Pathways.test';
import parkingFixture from './Parking.test';
import surfaceFixture from './Surface.test';
import expectValidFixture from './lib/expectValidFixture';
import { Accessibility, WheelchairAccessibilityGrade } from '.';
import { Complete } from './Complete';
import animalPolicyFixture from './AnimalPolicy.test';
import wifiAccessibilityFixture from './WifiAccessibility.test';
import deskFixture from './Desk.test';
import signageFixture from './Signage.test';
import interactionModeFixture from './InteractionMode.test';

const accessibilityFixture: Complete<Accessibility> = {
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
    arrive: [interactionModeFixture],
    book: [interactionModeFixture],
    buy: [interactionModeFixture],
    checkIn: [interactionModeFixture],
    checkOut: [interactionModeFixture],
    eat: [interactionModeFixture],
    explore: [interactionModeFixture],
    getFood: [interactionModeFixture],
    listen: [interactionModeFixture],
    pay: [interactionModeFixture],
    read: [interactionModeFixture],
    rent: [interactionModeFixture],
    roam: [interactionModeFixture],
    see: [interactionModeFixture],
    sell: [interactionModeFixture],
    use: [interactionModeFixture],
    change: [interactionModeFixture],
    useLockers: [interactionModeFixture],
    visit: [interactionModeFixture],
    watch: [interactionModeFixture],
    watchMovies: [interactionModeFixture],
    watchPlays: [interactionModeFixture],
    workHere: [interactionModeFixture],
  },
};

export default accessibilityFixture;

const definition = getAccessibilitySchemaDefinition();

describe('Accessibility schema', () => {
  it('validates a fully specified object', () => {
    expectValidFixture(definition, accessibilityFixture);
  });
});
