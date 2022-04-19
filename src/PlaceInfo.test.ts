import { PlaceInfo, getPlaceInfoSchemaDefinition } from './PlaceInfo';
import expectValidFixture from './lib/expectValidFixture';
import pointGeometryFixture from './Geometry.test';
import { placePropertiesFixture } from './PlaceProperties.test';

const placeInfoFixture: PlaceInfo = {
  properties: placePropertiesFixture,
  geometry: pointGeometryFixture,
};

export default placeInfoFixture;

const definition = getPlaceInfoSchemaDefinition();

describe('PlaceInfo schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, placeInfoFixture);
  });
});
