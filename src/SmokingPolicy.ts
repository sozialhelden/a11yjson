/**
 * Describes the smoking policy for visitors of a place.
 */
export type SmokingPolicy =
  | 'dedicatedToSmoking'
  | 'allowedEverywhere'
  | 'inSeparateArea'
  | 'inIsolatedArea'
  | 'prohibited'
  | 'onlyOutside';

export const smokingPolicies = () => [
  { label: `dedicated to smoking`, value: 'dedicatedToSmoking' },
  { label: `allowed everywhere`, value: 'allowedEverywhere' },
  { label: `only allowed in separate (but not isolated) area`, value: 'inSeparateArea' },
  { label: `only allowed in isolated area`, value: 'inIsolatedArea' },
  { label: `prohibited`, value: 'prohibited' },
  { label: `only outside`, value: 'onlyOutside' },
];
