import { getSeatSchemaDefinition } from './Seat.js';
import expectValidFixture from './lib/expectValidFixture.js';
import seatFixture from './seatFixture.js';

const definition = getSeatSchemaDefinition();

describe('Seat schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, seatFixture);
  });
});
