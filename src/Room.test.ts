import { Room, getRoomSchemaDefinition } from './Room';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const roomFixture: Complete<Room> = {
  isAccessibleWithWheelchair: true,
  sameAs: ['https://example.com/rooms/1'],
  address: {
    roomNumber: { en: '201', zh: '二百一' },
    room: { en: 'Waiting room', zh: '候诊室' },
    levelName: { en: '2', zh: '二' },
    levelIndex: 2,
  },
  description: {
    en: 'A room with a view.',
    zh: '有景观的房间。',
  },
  interactions: {
    see: [{
      name: {
        en: 'Looking through the window',
        zh: '从窗户看外面',
      },
      action: [{
        necessaryEyeHeight: '100cm',
      }],
    }],
  },
};

export default roomFixture;

const definition = getRoomSchemaDefinition();

describe('Room schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, roomFixture);
  });
});
