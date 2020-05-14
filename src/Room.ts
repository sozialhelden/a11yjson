import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './SimpleSchemaExtensions';

export interface Room {
  // QUESTION is this calculated from the subfields or can this go away?
  /**
   * `true` if the room's relevant facilities are completely accessible while using a wheelchair,
   * `false` if not, `undefined` if the condition is unknown or difficult to assess.
   */
  isAccessibleWithWheelchair?: boolean;

  /**
   * `true if the room is on an accessible path or on the accessible route`
   * `false` if not, `undefined` if the condition is unknown or difficult to assess.
   */
  hasWheelchairAccessiblePathFromOutside?: boolean;
}

export const RoomSchema = createSchemaInstance('Room', {
  isAccessibleWithWheelchair: {
    type: Boolean,
    optional: true,
    accessibility: {
      machineData: true
    }
  },
  hasWheelchairAccessiblePathFromOutside: {
    type: Boolean,
    optional: true,
    accessibility: {
      machineData: true
    }
  }
});
