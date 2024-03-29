import { Room } from './Room.js';
import { Complete } from './Complete.js';
import entrancePropertiesFixture from './entrancePropertiesFixture.js';
import entranceFixture from './entranceFixture.js';

const roomFixture: Complete<Room> = {
  turningSpaceInside: '>150cm',
  hasSupportRails: true,
  entrance: entrancePropertiesFixture,
  entrances: [entranceFixture],
  access: ['customers', 'employees'],
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
    lookAround: {
      name: {
        en: 'Looking through the window',
        zh: '从窗户看外面',
      },
      action: {
        necessaryEyeHeight: '100cm',
      },
    },
  },
};
export default roomFixture;
