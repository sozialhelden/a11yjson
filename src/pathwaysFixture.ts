import { Pathways } from './Pathways';
import { Complete } from './Complete';
import surfaceFixture from "./surfaceFixture";

export const pathwaysFixture: Complete<Pathways> = {
  width: '>150cm',
  widthAtObstacles: '>90cm',
  surface: surfaceFixture,
  isKerbstoneFree: true,
};
export default pathwaysFixture;
