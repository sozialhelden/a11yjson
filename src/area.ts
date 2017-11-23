import SimpleSchema from 'simpl-schema';

export type AreaTags =
  | 'indoors'
  | 'hotel-room'
  | 'outdoors'
  | 'meeting-room'
  | 'confidential'
  | 'bedroom'
  | 'terrace'
  | 'roof'
  | 'front-space';

export interface Area {
  tags?: Array<AreaTags>; // QUESTION should this really be optional? How to treat rooms that do not fit any of the categories
}

export const AreaSchema = new SimpleSchema({});
