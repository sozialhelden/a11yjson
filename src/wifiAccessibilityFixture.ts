import { WifiAccessibility } from './WifiAccessibility';
import { Complete } from './Complete';

export const wifiAccessibilityFixture: Complete<WifiAccessibility> = {
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
