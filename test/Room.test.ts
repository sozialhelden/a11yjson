import { Room, RoomSchema } from '../src/Room';
import { FormatVersion } from '../src/Version';
import { groundIsLevelFixture } from './Ground.test';
import { mediaWithOptionalsFixture } from './Media.test';
import { bedWithOptionalsFixture } from './Bed.test';
import { roomAccessibilityWithOptionalsFixture } from './RoomAccessibilty.test';
export const roomMinimumFixture: Room = {};

const roomWithOptionalsFixture: Room = {
  isAccessibleWithWheelchair: true,
  hasWheelchairAccessiblePathFromOutside: true,
  ground: groundIsLevelFixture,
  hasAccessibleChairs: false,
  name: 'Waiting room',
  media: [mediaWithOptionalsFixture],
  roomAccessibility: roomAccessibilityWithOptionalsFixture
};

const roomWithBedFixture: Room = {
  beds: bedWithOptionalsFixture
};

const allValidFixtures = Object.freeze([
  roomMinimumFixture,
  roomWithOptionalsFixture,
  roomWithBedFixture
]);

const invalidRoomFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidRoomFixture]);

describe('RoomSchema Schema', () => {
  it('schema is tagged', () => {
    expect(RoomSchema.__schemaType).toBe('Room');
    expect(RoomSchema.__schemaVersion).toBe(FormatVersion);
  });
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = RoomSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = RoomSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
