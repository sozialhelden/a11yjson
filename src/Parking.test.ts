import { getParkingSchemaDefinition } from './Parking.js';
import expectValidFixture from './lib/expectValidFixture.js';
import parkingFixture from './parkingFixture.js';

const definition = getParkingSchemaDefinition();

describe('Parking schema', () => {
  it('tests a comprehensive fixture as valid', () => {
    expectValidFixture(definition, parkingFixture);
  });
});
