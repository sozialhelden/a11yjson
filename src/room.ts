import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './simpl-schema-extensions';

export interface Room {
  /// REMOVE, not needed as already in place details (rooms are child places now)
  name?: string;
  /// QUESTION is this calculated from the subfields or can this go away?
  isAccessibleWithWheelchair?: boolean;
}

export const RoomSchema = createSchemaInstance('Room', {
  name: {
    type: String,
    optional: true,
    accessibility: {
      deprecated: true
    }
  },
  isAccessibleWithWheelchair: {
    type: Boolean,
    optional: true,
    accessibility: {
      machineData: true
    }
  }
});
