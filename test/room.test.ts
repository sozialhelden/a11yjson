import { Room, RoomSchema } from '../src/room';
import { FormatVersion } from '../src/version';

export const roomMinimumFixture: Room = {};

const roomWithOptionalsFixture: Room = {
  name: 'Room name',
  isAccessibleWithWheelchair: true
};

const allValidFixtures = Object.freeze([roomMinimumFixture, roomWithOptionalsFixture]);

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
