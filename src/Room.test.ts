import { getRoomSchemaDefinition } from './Room.js';
import expectValidFixture from './lib/expectValidFixture.js';
import roomFixture from './roomFixture.js';

const definition = getRoomSchemaDefinition();

describe('Room schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, roomFixture);
  });
});
