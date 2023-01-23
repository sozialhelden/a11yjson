export const AccessTypes = [
  /** Access is private. */
  'private',
  'public',
  'customers',
  'permissive',
  'yes',
  'no',
  'permit',
  'designated',
  'delivery',
  'emergency',
  'residents',
  'employees',
  'disabled',
  'yes',
  'no',
] as const;

export type AccessType = typeof AccessTypes[number];
