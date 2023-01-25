/**
 * Describes smoking policies for visitors of a place.
 */
export const smokingPolicies = [
  'dedicatedToSmoking',
  'allowedEverywhere',
  'inSeparateArea',
  'inIsolatedArea',
  'prohibited',
  'onlyOutside',
] as const;

/**
 * Describes the smoking policy for visitors of a place.
 */
export type SmokingPolicy = typeof smokingPolicies[number];
