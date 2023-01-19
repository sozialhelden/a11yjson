export const accessTypes = [
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

export type AccessType = typeof accessTypes[number];
