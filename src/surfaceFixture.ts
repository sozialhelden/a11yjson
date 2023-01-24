import { Surface } from './Surface.js';
import { Complete } from './Complete.js';

const surfaceFixture: Complete<Surface> = {
  lateralSlope: {
    value: 6,
    unit: 'percent',
  },
  longitudinalSlope: {
    value: 6,
    unit: 'percent',
  },
  turningSpace: '<150cm',
  smoothness: 'good',
  types: ['concrete'],
};
export default surfaceFixture;
