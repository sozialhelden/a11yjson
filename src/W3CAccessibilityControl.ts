/**
 * @see https://www.w3.org/2021/a11y-discov-vocab/latest
 */
export const w3cAccessibilityControls = [
  'fullKeyboardControl',
  'fullMouseControl',
  'fullSwitchControl',
  'fullTouchControl',
  'fullVideoControl',
  'fullVoiceControl',
];

/**
 * @see https://www.w3.org/2021/a11y-discov-vocab/latest
 */
export type W3CAccessibilityControl = typeof w3cAccessibilityControls[number];
