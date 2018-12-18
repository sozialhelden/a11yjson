import { t } from 'ttag';

export type SmokingPolicy =
  | 'dedicatedToSmoking'
  | 'allowedEverywhere'
  | 'inSeparateArea'
  | 'inIsolatedArea'
  | 'prohibited'
  | 'onlyOutside';

export const smokingPolicies = [
  { label: t`dedicated to smoking`, value: 'dedicatedToSmoking' },
  { label: t`allowed everywhere`, value: 'allowedEverywhere' },
  { label: t`only allowed in separate (but not isolated) area`, value: 'inSeparateArea' },
  { label: t`only allowed in isolated area`, value: 'inIsolatedArea' },
  { label: t`prohibited`, value: 'prohibited' },
  { label: t`only outside`, value: 'onlyOutside' }
];
