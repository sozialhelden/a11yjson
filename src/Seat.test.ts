import { getSeatSchemaDefinition } from './Seat';
import expectValidFixture from './lib/expectValidFixture';
import { seatFixture } from './seatFixture';

const definition = getSeatSchemaDefinition();

describe('Seat schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, seatFixture);
  });
});
