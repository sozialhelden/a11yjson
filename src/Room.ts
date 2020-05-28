import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import { createSchemaInstance } from './SimpleSchemaExtensions';
import { Ground, GroundSchema } from './Ground';
import { LocalizedString, LocalizedStringSchema } from './LocalizedString';
import { MediaSchema, Media } from './Media';
import { Accessibility, AccessibilitySchema } from './Accessibility';
import { Bed, BedSchema } from './Bed';
import { RoomAccessibility, RoomAccessibilitySchema } from './RoomAccessibility';

export interface Room {
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

  /**
   * Object describing the place's ground condition. If there are very different ground conditions, you can create multiple places and nest them.
   */

  ground?: Ground;

  /**
   * the name of the room
   */
  name?: LocalizedString;

  /**
   * Information if at least one chair is accessible with wheelchair
   */
  hasOneOrMoreAccessibleChairs?: boolean;

  /**
   * Information about media.
   * `null` indicates there is no media, `undefined` or missing property indicates that media presence is unknown.
   */
  media?: ArrayLike<Media> | null;

  /**
   * Information about the room's beds
   */
  beds?: ArrayLike<Bed>;
  /**
   * Describes the accessibility dedicated to a room.
   */
  roomAccessibility?: RoomAccessibility;
}

export const RoomSchema = createSchemaInstance('Room', {
  isAccessibleWithWheelchair: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the room accessible with wheelchair?`
    }
  },
  // // Adding accessibility throws test errors without adding test cases ??
  // accessibility: {
  //   type: AccessibilitySchema,
  //   optional: true,
  //   accessibility: {
  //     question: t`Okay, now let\`s map the accessibility.`,
  //     description: t`Describes the overall accessibility of the room.`
  //   }
  // },
  hasOneOrMoreAccessibleChairs: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Does the room have at least one accessible chair?`
    }
  },
  hasWheelchairAccessiblePathFromOutside: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the room on a wheelchair accessible path so you can reach it from outside?`
    }
  },
  ground: {
    type: GroundSchema,
    optional: true,
    accessibility: {
      question: t`In which condition is the ground of the room?`
    }
  },
  name: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`What is the name of this room?`
    }
  },
  media: {
    type: Array,
    optional: true,
    accessibility: {
      question: t`Is there any media available?`,
      questionMore: t`Is there more media available?`,
      description: t`e.g. menus, exhibits, or presentations.`
    }
  },
  'media.$': {
    type: MediaSchema
  },
  beds: {
    type: BedSchema,
    optional: true,
    accessibility: {
      question: t`Describe the room’s beds if available.`
    }
  },
  'beds.$': {
    type: BedSchema
  },
  roomAccessibility: {
    type: RoomAccessibilitySchema,
    optional: true,
    accessibility: {
      question: t`Describe the room’s individual accessibility.`
    }
  }
});
