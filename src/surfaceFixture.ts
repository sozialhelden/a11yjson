import { Surface } from './Surface';
import { Complete } from './Complete';

export const surfaceFixture: Complete<Surface> = {
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
