import { getAccessibilitySchemaDefinition } from './Accessibility';
import personalProfileFixture from './PersonalProfile.test';
import restroomFixture from './Restroom.test';
import entranceFixture from './Entrance.test';
import wheelchairPlacesFixture from './WheelchairPlaces.test';
import mediaFixture from './Media.test';
import staffFixture from './Staff.test';
import paymentFixture from './Payment.test';
import tablesFixture from './Tables.test';
import pathwaysFixture from './Pathways.test';
import parkingFixture from './Parking.test';
import surfaceFixture from './Surface.test';
import expectValidFixture from './lib/expectValidFixture';
import { Accessibility, WheelchairAccessibilityGrade } from '.';
import { Complete } from './Complete';
import animalPolicyFixture from './AnimalPolicy.test';
import wifiAccessibilityFixture from './WifiAccessibility.test';

const accessibilityFixture: Complete<Accessibility> = {
  accessibleWith: personalProfileFixture,
  partiallyAccessibleWith: personalProfileFixture,
  offersActivitiesForPeopleWith: personalProfileFixture,
  wheelchairAccessibilityGrade: WheelchairAccessibilityGrade.Fully,
  staff: staffFixture,
  wheelchairPlaces: wheelchairPlacesFixture,
  media: [mediaFixture],
  payment: paymentFixture,
  entrances: [entranceFixture, entranceFixture],
  restrooms: [restroomFixture, restroomFixture],
  tables: tablesFixture,
  isWellLit: true,
  isQuiet: true,
  hasInductionLoop: false,
  ambientNoiseLevel: '80dB',
  smokingPolicy: 'prohibited',
  hasTactileGuideStrips: true,
  serviceContact: { en: 'string' },
  pathways: pathwaysFixture,
  parking: parkingFixture,
  surface: surfaceFixture,
  animalPolicy: animalPolicyFixture,
  wifi: wifiAccessibilityFixture,
};

export default accessibilityFixture;

const definition = getAccessibilitySchemaDefinition();

describe('Accessibility schema', () => {
  it('validates a fully specified object', () => {
    expectValidFixture(definition, accessibilityFixture);
  });
});
