import { Pathways } from './Pathways.js';
import { Complete } from './Complete.js';
import surfaceFixture from './surfaceFixture.js';

const pathwaysFixture: Complete<Pathways> = {
  width: '>150cm',
  widthAtObstacles: '>90cm',
  surface: surfaceFixture,
  isKerbstoneFree: true,
};
export default pathwaysFixture;
