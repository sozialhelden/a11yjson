import { getWifiAccessibilitySchemaDefinition } from './WifiAccessibility';
import expectValidFixture from './lib/expectValidFixture';
import { wifiAccessibilityFixture } from './wifiAccessibilityFixture';

const definition = getWifiAccessibilitySchemaDefinition();

describe('WifiAccessibility schema', () => {
  it('validates a completely defined object', () => {
    expectValidFixture(definition, wifiAccessibilityFixture);
  });
});
