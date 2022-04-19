/**
 * @see https://www.w3.org/2021/a11y-discov-vocab/latest
 */
export const w3cAccessibilityHazards = [
  'flashing',
  'noFlashingHazard',
  'motionSimulation',
  'noMotionSimulationHazard',
  'sound',
  'noSoundHazard',
  'unknown',
  'none',
];

/**
 * @see https://www.w3.org/2021/a11y-discov-vocab/latest
 */
export type W3CAccessibilityHazard = typeof w3cAccessibilityHazards[number];
