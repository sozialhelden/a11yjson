import { getPlaceInfoSchemaDefinition } from './PlaceInfo.js';
import expectValidFixture from './lib/expectValidFixture.js';
import placeInfoFixture from './placeInfoFixture.js';

const definition = getPlaceInfoSchemaDefinition();

describe('PlaceInfo schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, placeInfoFixture);
  });
});
