export const Urgencies = [
  'alert',
  'announcement',
  'alarm',
  'warning',
  'info',
  'debug',
] as const;

export type Urgency = typeof Urgencies[number];
