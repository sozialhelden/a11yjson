import { getRoomSchemaDefinition } from './Room';
import expectValidFixture from './lib/expectValidFixture';
import { roomFixture } from './roomFixture';

const definition = getRoomSchemaDefinition();

describe('Room schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, roomFixture);
  });
});
