import SimpleSchema from 'simpl-schema';
import { Entrance, EntranceSchema } from './entrance';

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
  'hotel-room',
  'meeting-room',
  'confidential',
  'bedroom',
  'terrace',
  'roof',
  'front-space'
]) as Array<AreaTypes>;

export interface Area {
  // QUESTION should this really be optional? How to treat rooms that do not fit any of the categories. Unused atm.
  tags?: ArrayLike<AreaTypes>;
  name?: string;
  buildingName?: string;
  buildingNumber?: number;
  floorLevel?: number;
  roomName?: string;
  roomNumber?: number;
  ratingSpacious?: number;
  isWellLit?: boolean;
  isQuiet?: boolean;
  // QUESTION this should not be split across to fields, should rather be smoking: unknown | forbidden | allowed;
  isSmoking?: boolean;
  isNonSmoking?: boolean;
  ground?: any; // TODO define type
  pathways?: any; // TODO define type
  entrances?: ArrayLike<Entrance>; // TODO define type
  restrooms?: [any]; // TODO define type
  sitemap?: any; // TODO define type
  lifts?: [any]; // TODO define type
  switches?: [any]; // TODO define type
  vendingMachines?: [any]; // TODO define type
  powerOutlets?: [any]; // TODO define type
  beds?: [any]; // TODO define type
  wardrobe?: any; // TODO define type
  changingRoom?: any; // TODO define type,
  stage?: any; // TODO define type,
  cashRegister?: any; // TODO define type,
  wheelchairPlaces?: any; // TODO define type,
  tables?: any; // TODO define type,
  seats?: any; // TODO define type,
  serviceContact?: string;
  services?: any; // TODO define type,,
  tactileGuideStrips?: any; // TODO define type,
  infoDesk?: any; // TODO define type,
  signage?: any; // TODO define type,
  media?: [any]; // TODO define type,
}

export const AreaSchema = new SimpleSchema({
  tags: {
    type: Array,
    optional: true
  },
  'tags.$': {
    type: String,
    allowedValues: AllowedAreaTypes.map(s => s)
  },
  name: {
    type: String,
    optional: true
  },
  buildingName: {
    type: String,
    optional: true
  },
  buildingNumber: {
    type: Number,
    optional: true
  },
  floorLevel: {
    type: Number,
    optional: true
  },
  roomName: {
    type: String,
    optional: true
  },
  roomNumber: {
    type: Number,
    optional: true
  },
  ratingSpacious: {
    type: Number,
    optional: true
  },
  isWellLit: {
    type: Boolean,
    optional: true
  },
  isQuiet: {
    type: Boolean,
    optional: true
  },
  isSmoking: {
    type: Boolean,
    optional: true
  },
  isNonSmoking: {
    type: Boolean,
    optional: true
  },
  ground: {
    type: Object, // TODO define type
    optional: true
  },
  pathways: {
    type: Object, // TODO define type
    optional: true
  },
  entrances: {
    type: Array,
    optional: true
  },
  'entrances.$': EntranceSchema,
  restrooms: {
    type: Array,
    optional: true
  },
  'restrooms.$': Object, // TODO define type
  sitemap: {
    type: Object, // TODO define type
    optional: true
  },
  lifts: {
    type: Array,
    optional: true
  },
  'lifts.$': Object, // TODO define type
  switches: {
    type: Array,
    optional: true
  },
  'switches.$': Object, // TODO define type
  vendingMachines: {
    type: Array,
    optional: true
  },
  'vendingMachines.$': Object, // TODO define type
  powerOutlets: {
    type: Array,
    optional: true
  },
  'powerOutlets.$': Object, // TODO define type
  beds: {
    type: Array,
    optional: true
  },
  'beds.$': Object, // TODO define type
  wardrobe: {
    type: Object, // TODO define type
    optional: true
  },
  changingRoom: {
    type: Object, // TODO define type
    optional: true
  },
  stage: {
    type: Object, // TODO define type
    optional: true
  },
  cashRegister: {
    type: Object, // TODO define type
    optional: true
  },
  wheelchairPlaces: {
    type: Object, // TODO define type
    optional: true
  },
  tables: {
    type: Object, // TODO define type
    optional: true
  },
  seats: {
    type: Object, // TODO define type
    optional: true
  },
  serviceContact: {
    type: String,
    optional: true
  },
  services: {
    type: Object, // TODO define type
    optional: true
  },
  tactileGuideStrips: {
    type: Object, // TODO define type
    optional: true
  },
  infoDesk: {
    type: Object, // TODO define type
    optional: true
  },
  signage: {
    type: Object, // TODO define type
    optional: true
  },
  media: {
    type: Array,
    optional: true
  },
  'media.$': Object // TODO define type
});
