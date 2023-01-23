import { Complete } from './Complete';
import grabBarsFixture from './grabBarsFixture';
import { QueueSystem } from './QueueSystem';

const queueSystemFixture: Complete<QueueSystem> = {
  usesCattleBars: true,
  needsTickets: true,
  canSkipQueueWithDisability: true,
  numberOfSeats: 42,
  numberOfQueueServerPoints: 23,
  grabBars: grabBarsFixture,
  interactions: {
    enqueue: {
      action: {
        educationLevel: 2,
      },
      perception: {
        backgroundMusic: true,
        ambientNoiseLevel: { value: 20, unit: 'dB' },
      },
    },
    skipQueue: {},
    wait: {},
    leaveQueue: {},
    arrive: {},
    checkIn: {},
    checkOut: {},
    getTicket: {},
    getOnesTurn: {},
  },
};
export default queueSystemFixture;
