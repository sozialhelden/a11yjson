import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { LocalizedString, LocalizedStringSchema } from './LocalizedString';
import { createSchemaInstance } from './SimpleSchemaExtensions';

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
   * `true` if the wifi has a fixed password. Knowing this password must be enough to enter and use the wifi.
   */
  hasFixedPassword?: boolean;
  /**
   * A string with the Wifi name (SSID). Only use this attribute if security allows to publish this info online publicly.
   */
  ssid?: string;
  /**
   * A string with the Wifi password. Only use this attribute if security allows to publish this info online publicly.
   */
  password?: string;
  /**
   * `true` if the wifi has a fixed password. Knowing this password must be enough to enter and use the wifi.
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
}

export const WifiAccessibilitySchema = createSchemaInstance('WifiAccessibility', {
  isOpenToEveryone: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is this wifi open to everyone?`
    }
  },
  isOpenToVisitors: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is this wifi open to visitors?`
    }
  },
  isOpenToStaff: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is this wifi open to staff?`
    }
  },
  hasFixedPassword: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Does this wifi have a fixed password?`
    }
  },
  needsGuestPass: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Do you need a guest pass to use this wifi?`
    }
  },
  hasCaptivePortal: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Do you need to pass a captive portal to use this wifi?`
    }
  },
  isCaptivePortalAccessible: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`If there is a captive portal, is the captive portal website accessible (WAI/ARIA)?`
    }
  },
  ssid: {
    type: String,
    optional: true,
    accessibility: {
      question: t`What is the name/SSID of this wifi? Only enter this if it's okay to publish this information publicly.`
    }
  },
  password: {
    type: String,
    optional: true,
    accessibility: {
      question: t`What is the password of this wifi? Only enter this if it's okay to publish this information publicly.`
    }
  },
  descriptionWhereToGetLoginData: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`Where can you find the login data for this wifi, or get a guest pass?`
    }
  }
});
