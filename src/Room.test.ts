import { Room, getRoomSchemaDefinition } from './Room';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const roomFixture: Complete<Room> = {
  isAccessibleWithWheelchair: true,
  sameAs: ['https://example.com/rooms/1'],
};

export default roomFixture;

const definition = getRoomSchemaDefinition();

describe('Room schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, roomFixture);
  });
});
