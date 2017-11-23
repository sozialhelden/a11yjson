export type AreaTypes =
  | 'indoors'
  | 'hotel-room'
  | 'outdoors'
  | 'meeting-room'
  | 'confidential'
  | 'bedroom'
  | 'terrace'
  | 'roof'
  | 'front-space';

export const AllowedAreaTypes = Object.freeze([
  'indoors',
  'outdoors',
  'building',
  'hotel-room',
  'meeting-room',
  'confidential',
  'bedroom',
  'terrace',
  'roof',
  'front-space'
]) as ReadonlyArray<AreaTypes>;
