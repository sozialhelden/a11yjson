import { WheelchairPlaces, getWheelchairPlacesSchemaDefinition } from './WheelchairPlaces';
import { Complete } from './Complete';
import expectInvalidFixture from './lib/expectInvalidFixture';
import expectValidFixture from './lib/expectValidFixture';

const wheelchairPlacesFixture: Complete<WheelchairPlaces> = {
  count: 200,
  hasSpaceForAssistant: true,
  wheelchairUserCapacity: 200,
};

export default wheelchairPlacesFixture;

const definition = getWheelchairPlacesSchemaDefinition();

describe('WheelchairPlaces schema', () => {
  it('validates a completely defined object', () => {
    expectValidFixture(definition, wheelchairPlacesFixture);
  });
  it('recognizes invalid negative count', () => {
    expectInvalidFixture(definition, { count: -100 }, [{ type: 'minNumber', min: 0, name: 'count' }]);
  });
  it('recognizes invalid non-integer count', () => {
    expectInvalidFixture(definition, { count: 0.5 }, [{ type: 'noDecimal', name: 'count' }]);
  });
});
