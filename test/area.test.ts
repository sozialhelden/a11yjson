import { AllowedAreaTags, Area, AreaSchema } from '../src/area';
import { entranceMinimumFixture } from './entrance.test';

export const areaMinimumFixture: Area = {};

const areaWithOptionalsFixture: Area = {
  tags: AllowedAreaTags,
  name: 'string',
  buildingName: 'string',
  buildingNumber: 1,
  floorLevel: 1,
  roomName: 'string',
  roomNumber: 1,
  ratingSpacious: 1,
  isWellLit: true,
  isQuiet: true,
  isSmoking: true,
  isNonSmoking: true,
  ground: {},
  pathways: {},
  entrances: [entranceMinimumFixture, entranceMinimumFixture],
  restrooms: [{}, {}],
  sitemap: {},
  lifts: [{}, {}],
  switches: [{}, {}],
  vendingMachines: [{}, {}],
  powerOutlets: [{}, {}],
  beds: [{}, {}],
  wardrobe: {},
  changingRoom: {},
  stage: {},
  cashRegister: {},
  wheelchairPlaces: {},
  tables: {},
  seats: {},
  serviceContact: 'string',
  services: {},
  tactileGuideStrips: {},
  infoDesk: {},
  signage: {},
  media: [{}, {}]
};

const allValidFixtures = Object.freeze([
  areaMinimumFixture,
  areaWithOptionalsFixture
]);

const invalidAreaInvalidTagsFixture = {
  tags: ['foo', 'bar']
};

const invalidAreaTooManyFieldsFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([
  invalidAreaInvalidTagsFixture,
  invalidAreaTooManyFieldsFixture
]);

describe('AreaSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = AreaSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = AreaSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
