import { Room, getRoomSchemaDefinition } from './Room';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const roomFixture: Complete<Room> = {
  isAccessibleWithWheelchair: true,
};

export default roomFixture;

const definition = getRoomSchemaDefinition();

describe('Room schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, roomFixture);
  });
});
