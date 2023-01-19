import { getPlaceInfoSchemaDefinition } from './PlaceInfo';
import expectValidFixture from './lib/expectValidFixture';
import { placeInfoFixture } from './placeInfoFixture';

const definition = getPlaceInfoSchemaDefinition();

describe('PlaceInfo schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, placeInfoFixture);
  });
});
