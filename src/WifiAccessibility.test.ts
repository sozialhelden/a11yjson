import { WifiAccessibility, getWifiAccessibilitySchemaDefinition } from './WifiAccessibility';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const wifiAccessibilityFixture: Complete<WifiAccessibility> = {
  isOpenToEveryone: true,
  isOpenToVisitors: true,
  isOpenToStaff: true,
  hasFixedPassword: true,
  needsGuestPass: true,
  hasCaptivePortal: true,
  isCaptivePortalAccessible: true,
  ssid: 'A witty wifi name',
  password: 'a clever password',
  descriptionWhereToGetLoginData: {
    en: 'Get a guest pass at the cash register.',
  },
  usageFee: [{
    amount: 1,
    currency: 'USD',
    per: {
      value: 1,
      unit: 'hour',
    },
    access: ['customers'],
  }],
};

export default wifiAccessibilityFixture;

const definition = getWifiAccessibilitySchemaDefinition();

describe('WifiAccessibility schema', () => {
  it('validates a completely defined object', () => {
    expectValidFixture(definition, wifiAccessibilityFixture);
  });
});
