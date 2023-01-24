import { Entrance } from './Entrance.js';
import pointGeometryFixture from './pointGeometryFixture.js';
import entrancePropertiesFixture from './entrancePropertiesFixture.js';
import { Complete } from './Complete.js';

const entranceFixture: Complete<Entrance> = {
  properties: entrancePropertiesFixture,
  geometry: pointGeometryFixture,
};
export default entranceFixture;
