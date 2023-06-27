import { Complete } from './Complete.js';
import grabBarsFixture from './grabBarsFixture.js';
import { QueueSystem } from './QueueSystem.js';

const queueSystemFixture: Complete<QueueSystem> = {
  usesCattleBars: true,
  needsTickets: true,
  canSkipQueueWithDisability: true,
  numberOfSeats: 42,
  numberOfQueueServerPoints: 23,
  grabBars: grabBarsFixture,
  hasVisualAnnouncements: true,
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
