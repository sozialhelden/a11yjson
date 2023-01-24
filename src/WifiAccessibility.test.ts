import { getWifiAccessibilitySchemaDefinition } from './WifiAccessibility.js';
import expectValidFixture from './lib/expectValidFixture.js';
import wifiAccessibilityFixture from './wifiAccessibilityFixture.js';

const definition = getWifiAccessibilitySchemaDefinition();

describe('WifiAccessibility schema', () => {
  it('validates a completely defined object', () => {
    expectValidFixture(definition, wifiAccessibilityFixture);
  });
});
