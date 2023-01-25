import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import { AccessType, AccessTypes } from './AccessType.js';
import { CurrencyValue } from './CurrencyValue.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';

export const WifiInteractions = [
  'login',
  'register',
  'getPassword',
  'getGuestPass',
  'getTerms',
  'acceptTerms',
] as const;
export type WifiInteraction = typeof WifiInteractions[number];
export const WifiInteractionsSet = new Set(WifiInteractions);

/**
 * Describes the presence of staff and their qualifications and/or provided services.
 */
export interface WifiAccessibility {
  /**
   * `true` if the wifi is open to everyone, `false` if it is explicitly not.
   */
  isOpenToEveryone?: boolean;
  /**
   * `true` if the wifi is open to explicit place visitors, `false` if explicitly not.
   */
  isOpenToVisitors?: boolean;
  /**
   * `true` if the wifi is open to explicit place staff, `false` if explicitly not.
   */
  isOpenToStaff?: boolean;
  /**
   * `true` if the wifi has a fixed password. Knowing this password must be enough to enter and use
   * the wifi.
   */
  hasFixedPassword?: boolean;
  /**
   * A string with the Wifi name (SSID). Only use this attribute if security allows to publish this
   * info online publicly.
   */
  ssid?: string;
  /**
   * A string with the Wifi password. Only use this attribute if security allows to publish this
   * info online publicly.
   */
  password?: string;
  /**
   * `true` if you need a personalized guest pass / code / password to use the wifi, `false` if not.
   */
  needsGuestPass?: boolean;
  /**
   * Describes where you get the login data / guest pass.
   */
  descriptionWhereToGetLoginData?: LocalizedString;
  /**
   * `true` if the wifi has a captive portal website.
   */
  hasCaptivePortal?: boolean;
  /**
   * `true` if the wifi captive portal is accessible (WAI/ARIA).
   */
  isCaptivePortalAccessible?: boolean;
  /**
   * Describes if you need to pay a usage fee to use the wifi, or if no fee is needed.
   */
  usageFee?: CurrencyValue[];

  /**
   * Describes who can access the wifi.
   */
  access?: AccessType[];
}

export const getWifiAccessibilitySchemaDefinition: () => SchemaDefinition = () => ({
  isOpenToEveryone: {
    type: Boolean,
    optional: true,
  },
  isOpenToVisitors: {
    type: Boolean,
    optional: true,
  },
  isOpenToStaff: {
    type: Boolean,
    optional: true,
  },
  hasFixedPassword: {
    type: Boolean,
    optional: true,
  },
  needsGuestPass: {
    type: Boolean,
    optional: true,
  },
  hasCaptivePortal: {
    type: Boolean,
    optional: true,
  },
  isCaptivePortalAccessible: {
    type: Boolean,
    optional: true,
  },
  ssid: {
    type: String,
    optional: true,
  },
  password: {
    type: String,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('descriptionWhereToGetLoginData', {
  }),
  usageFee: {
    type: Array,
    optional: true,
  },
  access: {
    type: Array,
    optional: true,
  },
  'access.$': {
    type: String,
    allowedValues: (AccessTypes as any) as any[],
  },
  ...getLocalizedStringSchemaDefinition('usageFee.$', {
  }),
});
