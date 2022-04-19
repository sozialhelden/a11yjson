/**
 * @see https://www.w3.org/2021/a11y-discov-vocab/latest
 */

export const w3cAccessModes = [
  'auditory',
  'tactile',
  'textual',
  'visual',
];

/**
 * @see https://www.w3.org/2021/a11y-discov-vocab/latest
 */

export type W3CAccessMode = typeof w3cAccessModes[number];
