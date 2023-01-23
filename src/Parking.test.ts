import { getParkingSchemaDefinition } from './Parking';
import expectValidFixture from './lib/expectValidFixture';
import parkingFixture from './parkingFixture';

const definition = getParkingSchemaDefinition();

describe('Parking schema', () => {
  it('tests a comprehensive fixture as valid', () => {
    expectValidFixture(definition, parkingFixture);
  });
});
