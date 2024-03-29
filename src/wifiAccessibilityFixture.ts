import { WifiAccessibility } from './WifiAccessibility.js';
import { Complete } from './Complete.js';

const wifiAccessibilityFixture: Complete<WifiAccessibility> = {
  access: ['public'],
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
