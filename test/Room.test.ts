import { Room, RoomSchema } from '../src/Room';
import { FormatVersion } from '../src/Version';

export const roomMinimumFixture: Room = {};

const roomWithOptionalsFixture: Room = {
  isAccessibleWithWheelchair: true
};

const roomHasWheelchairAccessiblePathFromOutsideFixture: Room = {
  hasWheelchairAccessiblePathFromOutside: true
};

const allValidFixtures = Object.freeze([roomMinimumFixture, roomWithOptionalsFixture, roomHasWheelchairAccessiblePathFromOutsideFixture]);

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
