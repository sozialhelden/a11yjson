# Type Aliases

Besides [interfaces](./3-interfaces.md], A11yJSON defines the following bare types.

Some lack proper formatting in the documentation. Fixes in [`tools/generate-overview.ts`](https://github.com/sozialhelden/a11yjson/blob/master/tools/generate-overview.ts) are welcome!

### <a id="Acceleration">Acceleration</a>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="AccessType">AccessType</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":53,"name":"accessTypes"}}}



### <a id="ActionMode">ActionMode</a>

Describes necessary abilities and modes inputting information.

Definition: <pre>{
  "id": 60,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 64,
      "name": "access",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Who has access to this action?"
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 67,
          "character": 2
        }
      ],
      "type": {
        "type": "array",
        "elementType": {
          "type": "reference",
          "id": 54,
          "name": "AccessType"
        }
      }
    },
    {
      "id": 67,
      "name": "activationForce",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Force needed for the described input method."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 82,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 872,
        "name": "Force"
      }
    },
    {
      "id": 68,
      "name": "activationTimeInterval",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Time interval needed for activation/engagement."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 87,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 871,
        "name": "TimeInterval"
      }
    },
    {
      "id": 159,
      "name": "apiDocumentationUrl",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The input API documentation URL."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 542,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 396,
        "name": "LocalizedString"
      }
    },
    {
      "id": 73,
      "name": "attentionSpan",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Attention time needed for activation/engagement."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 112,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 871,
        "name": "TimeInterval"
      }
    },
    {
      "id": 71,
      "name": "bodyHeight",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "A supported body height."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 102,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 866,
        "name": "Length"
      }
    },
    {
      "id": 70,
      "name": "bodyMass",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "A supported body weight."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 97,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 868,
        "name": "Mass"
      }
    },
    {
      "id": 89,
      "name": "brailleKeyboard",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to write textual content with a braille keyboard is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 192,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 88,
      "name": "brailleText",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to read braille is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 187,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 117,
      "name": "burnHazard",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "There is a burn hazard."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 332,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 83,
      "name": "cable",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "A cable is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 162,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 105,
      "name": "capacitive",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The action uses a capacity sensor, for example a touch sensor."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 272,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 77,
      "name": "clap",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Clapping your hands is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 132,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 98,
      "name": "click",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to click a button with a finger is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 237,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 62,
      "name": "description",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Describes the output as human-readable text."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 57,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 396,
        "name": "LocalizedString"
      }
    },
    {
      "id": 125,
      "name": "direction",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The direction of the action, relative to the body."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 372,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 58,
        "name": "Direction"
      }
    },
    {
      "id": 126,
      "name": "directionAxis",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The direction axis of the action, relative to the body."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 377,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 56,
        "name": "DirectionAxis"
      }
    },
    {
      "id": 99,
      "name": "doubleClick",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to click a button with a finger is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 242,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 123,
      "name": "drag",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to drag an object is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 362,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 138,
      "name": "dragAndDropGesture",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to do a virtual drag-and-drop finger/mouse gesture is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 437,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 164,
      "name": "educationLevel",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Education level needed to understand the action.",
        "text": "http://www.ibe.unesco.org/en/glossary-curriculum-terminology/l/levels-education\n\n- early childhood education (level 0)\n- primary education (level 1)\n- lower secondary education (level 2)\n- upper secondary education (level 3)\n- postsecondary non-tertiary education (level 4)\n- short-cycle tertiary education (level 5)\n- bachelor’s or equivalent level (level 6)\n- master’s or equivalent level (level 7)\n- doctor or equivalent level (level 8).\n"
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 581,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "qualifiedName": "Number",
        "package": "typescript",
        "name": "Number"
      }
    },
    {
      "id": 145,
      "name": "eyeTracker",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use an eye tracker is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 472,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 151,
      "name": "faceRecognition",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The input uses face recognition."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 502,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 74,
      "name": "feedback",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "How is feedback given for an input?"
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 117,
          "character": 2
        }
      ],
      "type": {
        "type": "array",
        "elementType": {
          "type": "reference",
          "id": 471,
          "name": "PerceptionMode"
        }
      }
    },
    {
      "id": 152,
      "name": "fingerprintScan",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The input uses a fingerprint scanner."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 507,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 94,
      "name": "handwriting",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to write textual content by hand is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 217,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 87,
      "name": "haptic",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Haptic input is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 182,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 144,
      "name": "headPointer",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a head pointer is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 467,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 82,
      "name": "headphone",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Headphones are supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 157,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 112,
      "name": "highContrast",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The input has high contrast elements, for example around buttons."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 307,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 85,
      "name": "instructionsUrl",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "URL describing how to use the input mechanism."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 172,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 396,
        "name": "LocalizedString"
      }
    },
    {
      "id": 153,
      "name": "irisScan",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The input uses an iris scanner."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 512,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 161,
      "name": "isEasyToFind",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`true` if the item is easy to find, `false` if people might face difficulties trying to\nfind the item, or `undefined` if this is unknown or irrelevant."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 554,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 160,
      "name": "isEasyToUnderstand",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`true` if the input is easy to understand, `false` if people might face difficulties trying to\nunderstand how the input works, or `undefined` if this is unknown or irrelevant."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 548,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 120,
      "name": "joystick",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a joystick is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 347,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 95,
      "name": "keyboard",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to write textual content by typing on a keyboard is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 222,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 96,
      "name": "keypad",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to write numbers by typing on a keypad is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 227,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 122,
      "name": "knob",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The action uses a knob."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 357,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 111,
      "name": "knurled",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The input has a knurled surface, for example around buttons."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 302,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 63,
      "name": "languages",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Input languages supported."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 62,
          "character": 2
        }
      ],
      "type": {
        "type": "array",
        "elementType": {
          "type": "reference",
          "id": 910,
          "name": "IetfLanguageTag"
        }
      }
    },
    {
      "id": 92,
      "name": "leftHanded",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "You can or must give input with your left hand."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 207,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 133,
      "name": "lick",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to lick an object with your tongue is supported or needed (e.g. a lollipop)"
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 412,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 76,
      "name": "morseCode",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Morse code input is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 127,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 97,
      "name": "mouse",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a mouse is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 232,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 131,
      "name": "move",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to move an object is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 402,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 61,
      "name": "name",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Describes which output is meant. Helpful if there are multiple outputs."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 52,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 396,
        "name": "LocalizedString"
      }
    },
    {
      "id": 72,
      "name": "necessaryClimbHeight",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Height you need to be able to climb over (for obstacles)"
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 107,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 866,
        "name": "Length"
      }
    },
    {
      "id": 158,
      "name": "necessaryEyeHeight",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "How tall do you have to be to perceive the content/output/signal."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 537,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 866,
        "name": "Length"
      }
    },
    {
      "id": 157,
      "name": "necessaryGripHeight",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The height you need to grip to perceive the content/output/signal."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 532,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 866,
        "name": "Length"
      }
    },
    {
      "id": 65,
      "name": "optional",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`true` if the action is optional, `false` if it is required."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 72,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 115,
      "name": "paper",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Handling paper is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 322,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 107,
      "name": "pedal",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a pedal is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 282,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 148,
      "name": "photo",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The input makes a photo."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 487,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 127,
      "name": "pinch",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to pinch an object is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 382,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 137,
      "name": "pinchFingerGesture",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a pinch finger gesture is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 432,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 118,
      "name": "press",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to apply force to an object is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 337,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 108,
      "name": "pullSwitch",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a pull switch is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 287,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 109,
      "name": "pullstring",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a pullstring is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 292,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 104,
      "name": "pushButton",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a push button is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 267,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 103,
      "name": "pushSwitch",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a push switch is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 262,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 81,
      "name": "qrCode",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "A QR code is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 152,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 154,
      "name": "raisedText",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`true` if the controls or signs have raised letters, `false` if not."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 517,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 66,
      "name": "required",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`false` if the action is optional, `true` if it is required."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 77,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 143,
      "name": "rhythm",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use rhythm input is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 462,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 93,
      "name": "rightHanded",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "You can or must give input with your right hand."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 212,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 129,
      "name": "rotate",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to rotate an object is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 392,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 139,
      "name": "rotateTwoFingersGesture",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a two-finger rotation gesture is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 442,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 135,
      "name": "scratch",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to scratch is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 422,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 114,
      "name": "screen",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "A screen is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 317,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 80,
      "name": "signLanguage",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use sign language is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 147,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 91,
      "name": "singleHanded",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "You can or must give input with one hand."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 202,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 136,
      "name": "sipAndPuff",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a sip and puff switch is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 427,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 134,
      "name": "smell",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to smell is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 417,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 150,
      "name": "soundRecording",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The input makes a sound recording."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 497,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 75,
      "name": "speak",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to speak is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 122,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 128,
      "name": "squeeze",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to squeeze an object is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 387,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 106,
      "name": "stateCount",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "State count for a button or switch, for example 2 for a toggle button, 3 for a 3-way button."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 277,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "number"
      }
    },
    {
      "id": 140,
      "name": "swipeFingerGesture",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a swipe finger gesture is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 447,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 142,
      "name": "swipeThreeFingersGesture",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a three-finger swipe gesture is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 457,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 141,
      "name": "swipeTwoFingersGesture",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a three-finger swipe gesture is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 452,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 86,
      "name": "tactile",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Tactile input is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 177,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 110,
      "name": "tactileGuides",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The input has tactile guides, for example around buttons."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 297,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 101,
      "name": "tap",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to tap an element with a finger is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 252,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 119,
      "name": "tearApart",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to tear something apart is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 342,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 162,
      "name": "techSufficient",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Technology combinations that are sufficient to make use of the output."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 559,
          "character": 2
        }
      ],
      "type": {
        "type": "array",
        "elementType": {
          "type": "reference",
          "id": 766,
          "name": "TechCombination"
        }
      }
    },
    {
      "id": 163,
      "name": "techSupported",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Technologies that are sufficient to make use of the output."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 564,
          "character": 2
        }
      ],
      "type": {
        "type": "array",
        "elementType": {
          "type": "reference",
          "id": 766,
          "name": "TechCombination"
        }
      }
    },
    {
      "id": 130,
      "name": "tilt",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to tilt an object is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 397,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 132,
      "name": "tongue",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to move an object with your tongue is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 407,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 116,
      "name": "touch",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Touch input is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 327,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 113,
      "name": "touchscreen",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Touchscreen input is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 312,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 102,
      "name": "trackball",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to use a trackball is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 257,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 100,
      "name": "tripleClick",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to click a button with a finger is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 247,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 124,
      "name": "turn",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to turn an object is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 367,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 121,
      "name": "turnKnob",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to turn a knob is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 352,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 90,
      "name": "twoHanded",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "You can or must give input with both hands."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 197,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 84,
      "name": "url",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "URL where you can use the input mechanism, e.g. on your phone."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 167,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 396,
        "name": "LocalizedString"
      }
    },
    {
      "id": 149,
      "name": "video",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The input makes a video."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 492,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 156,
      "name": "visualRecognition",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`true` if the input user interface needs or supports visual input, `false` if not."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 527,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 155,
      "name": "voiceActivation",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`true` if the control is activated by voice, `false` if not."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 522,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 79,
      "name": "walk",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Walking is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 142,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 78,
      "name": "wave",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Waving your hands is supported or needed."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 137,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 69,
      "name": "weight",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "A weight you need to be able to lift."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 92,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 868,
        "name": "Mass"
      }
    },
    {
      "id": 146,
      "name": "wheel",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The input features a wheel."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 477,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 147,
      "name": "wireless",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The input is wireless."
      },
      "sources": [
        {
          "fileName": "ActionMode.ts",
          "line": 482,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    }
  ],
  "groups": [
    {
      "title": "Properties",
      "kind": 1024,
      "children": [
        64,
        67,
        68,
        159,
        73,
        71,
        70,
        89,
        88,
        117,
        83,
        105,
        77,
        98,
        62,
        125,
        126,
        99,
        123,
        138,
        164,
        145,
        151,
        74,
        152,
        94,
        87,
        144,
        82,
        112,
        85,
        153,
        161,
        160,
        120,
        95,
        96,
        122,
        111,
        63,
        92,
        133,
        76,
        97,
        131,
        61,
        72,
        158,
        157,
        65,
        115,
        107,
        148,
        127,
        137,
        118,
        108,
        109,
        104,
        103,
        81,
        154,
        66,
        143,
        93,
        129,
        139,
        135,
        114,
        80,
        91,
        136,
        134,
        150,
        75,
        128,
        106,
        140,
        142,
        141,
        86,
        110,
        101,
        119,
        162,
        163,
        130,
        132,
        116,
        113,
        102,
        100,
        124,
        121,
        90,
        84,
        149,
        156,
        155,
        79,
        78,
        69,
        146,
        147
      ]
    }
  ],
  "sources": [
    {
      "fileName": "ActionMode.ts",
      "line": 48,
      "character": 25
    }
  ]
}</pre>



### <a id="Brightness">Brightness</a>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="DeskInteraction">DeskInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":204,"name":"DeskInteractions"}}}



### <a id="Direction">Direction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":57,"name":"Directions"}}}



### <a id="DirectionAxis">DirectionAxis</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":55,"name":"DirectionAxes"}}}



### <a id="DoorInteraction">DoorInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":222,"name":"DoorInteractions"}}}



### <a id="EquipmentInteraction">EquipmentInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":292,"name":"EquipmentInteractions"}}}



### <a id="EquipmentTypes">EquipmentTypes</a>



Definition: <code>"bed"</code>&nbsp;|&nbsp;<code>"wardrobe"</code>&nbsp;|&nbsp;<code>"elevator"</code>&nbsp;|&nbsp;<code>"escalator"</code>&nbsp;|&nbsp;<code>"movingWalkway"</code>&nbsp;|&nbsp;<code>"ramp"</code>&nbsp;|&nbsp;<code>"hoist"</code>&nbsp;|&nbsp;<code>"stairLift"</code>&nbsp;|&nbsp;<code>"switch"</code>&nbsp;|&nbsp;<code>"sitemap"</code>&nbsp;|&nbsp;<code>"vendingMachine"</code>&nbsp;|&nbsp;<code>"intercom"</code>&nbsp;|&nbsp;<code>"powerOutlet"</code>&nbsp;|&nbsp;<code>"flushMechanism"</code>&nbsp;|&nbsp;<code>"bodyScanner"</code>&nbsp;|&nbsp;<code>"luggageScanner"</code>



### <a id="Force">Force</a>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="GenericInteraction">GenericInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":16,"name":"GenericInteractions"}}}



### <a id="GrabBarsInteraction">GrabBarsInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":341,"name":"GrabBarsInteractions"}}}



### <a id="Hertz">Hertz</a>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="IetfLanguageTag">IetfLanguageTag</a>



Definition: <code>"af"</code>&nbsp;|&nbsp;<code>"af-NA"</code>&nbsp;|&nbsp;<code>"af-ZA"</code>&nbsp;|&nbsp;<code>"agq"</code>&nbsp;|&nbsp;<code>"agq-CM"</code>&nbsp;|&nbsp;<code>"ak"</code>&nbsp;|&nbsp;<code>"ak-GH"</code>&nbsp;|&nbsp;<code>"am"</code>&nbsp;|&nbsp;<code>"am-ET"</code>&nbsp;|&nbsp;<code>"ar"</code>&nbsp;|&nbsp;<code>"ar-001"</code>&nbsp;|&nbsp;<code>"ar-AE"</code>&nbsp;|&nbsp;<code>"ar-BH"</code>&nbsp;|&nbsp;<code>"ar-DJ"</code>&nbsp;|&nbsp;<code>"ar-DZ"</code>&nbsp;|&nbsp;<code>"ar-EG"</code>&nbsp;|&nbsp;<code>"ar-EH"</code>&nbsp;|&nbsp;<code>"ar-ER"</code>&nbsp;|&nbsp;<code>"ar-IL"</code>&nbsp;|&nbsp;<code>"ar-IQ"</code>&nbsp;|&nbsp;<code>"ar-JO"</code>&nbsp;|&nbsp;<code>"ar-KM"</code>&nbsp;|&nbsp;<code>"ar-KW"</code>&nbsp;|&nbsp;<code>"ar-LB"</code>&nbsp;|&nbsp;<code>"ar-LY"</code>&nbsp;|&nbsp;<code>"ar-MA"</code>&nbsp;|&nbsp;<code>"ar-MR"</code>&nbsp;|&nbsp;<code>"ar-OM"</code>&nbsp;|&nbsp;<code>"ar-PS"</code>&nbsp;|&nbsp;<code>"ar-QA"</code>&nbsp;|&nbsp;<code>"ar-SA"</code>&nbsp;|&nbsp;<code>"ar-SD"</code>&nbsp;|&nbsp;<code>"ar-SO"</code>&nbsp;|&nbsp;<code>"ar-SS"</code>&nbsp;|&nbsp;<code>"ar-SY"</code>&nbsp;|&nbsp;<code>"ar-TD"</code>&nbsp;|&nbsp;<code>"ar-TN"</code>&nbsp;|&nbsp;<code>"ar-YE"</code>&nbsp;|&nbsp;<code>"as"</code>&nbsp;|&nbsp;<code>"as-IN"</code>&nbsp;|&nbsp;<code>"asa"</code>&nbsp;|&nbsp;<code>"asa-TZ"</code>&nbsp;|&nbsp;<code>"ast"</code>&nbsp;|&nbsp;<code>"ast-ES"</code>&nbsp;|&nbsp;<code>"az"</code>&nbsp;|&nbsp;<code>"az-Cyrl"</code>&nbsp;|&nbsp;<code>"az-Cyrl-AZ"</code>&nbsp;|&nbsp;<code>"az-Latn"</code>&nbsp;|&nbsp;<code>"az-Latn-AZ"</code>&nbsp;|&nbsp;<code>"bas"</code>&nbsp;|&nbsp;<code>"bas-CM"</code>&nbsp;|&nbsp;<code>"be"</code>&nbsp;|&nbsp;<code>"be-BY"</code>&nbsp;|&nbsp;<code>"bem"</code>&nbsp;|&nbsp;<code>"bem-ZM"</code>&nbsp;|&nbsp;<code>"bez"</code>&nbsp;|&nbsp;<code>"bez-TZ"</code>&nbsp;|&nbsp;<code>"bg"</code>&nbsp;|&nbsp;<code>"bg-BG"</code>&nbsp;|&nbsp;<code>"bm"</code>&nbsp;|&nbsp;<code>"bm-ML"</code>&nbsp;|&nbsp;<code>"bn"</code>&nbsp;|&nbsp;<code>"bn-BD"</code>&nbsp;|&nbsp;<code>"bn-IN"</code>&nbsp;|&nbsp;<code>"bo"</code>&nbsp;|&nbsp;<code>"bo-CN"</code>&nbsp;|&nbsp;<code>"bo-IN"</code>&nbsp;|&nbsp;<code>"br"</code>&nbsp;|&nbsp;<code>"br-FR"</code>&nbsp;|&nbsp;<code>"brx"</code>&nbsp;|&nbsp;<code>"brx-IN"</code>&nbsp;|&nbsp;<code>"bs"</code>&nbsp;|&nbsp;<code>"bs-Cyrl"</code>&nbsp;|&nbsp;<code>"bs-Cyrl-BA"</code>&nbsp;|&nbsp;<code>"bs-Latn"</code>&nbsp;|&nbsp;<code>"bs-Latn-BA"</code>&nbsp;|&nbsp;<code>"ca"</code>&nbsp;|&nbsp;<code>"ca-AD"</code>&nbsp;|&nbsp;<code>"ca-ES"</code>&nbsp;|&nbsp;<code>"ca-ES-VALENCIA"</code>&nbsp;|&nbsp;<code>"ca-FR"</code>&nbsp;|&nbsp;<code>"ca-IT"</code>&nbsp;|&nbsp;<code>"ccp"</code>&nbsp;|&nbsp;<code>"ccp-BD"</code>&nbsp;|&nbsp;<code>"ccp-IN"</code>&nbsp;|&nbsp;<code>"ce"</code>&nbsp;|&nbsp;<code>"ce-RU"</code>&nbsp;|&nbsp;<code>"cgg"</code>&nbsp;|&nbsp;<code>"cgg-UG"</code>&nbsp;|&nbsp;<code>"chr"</code>&nbsp;|&nbsp;<code>"chr-US"</code>&nbsp;|&nbsp;<code>"ckb"</code>&nbsp;|&nbsp;<code>"ckb-IQ"</code>&nbsp;|&nbsp;<code>"ckb-IR"</code>&nbsp;|&nbsp;<code>"cs"</code>&nbsp;|&nbsp;<code>"cs-CZ"</code>&nbsp;|&nbsp;<code>"cu"</code>&nbsp;|&nbsp;<code>"cu-RU"</code>&nbsp;|&nbsp;<code>"cy"</code>&nbsp;|&nbsp;<code>"cy-GB"</code>&nbsp;|&nbsp;<code>"da"</code>&nbsp;|&nbsp;<code>"da-DK"</code>&nbsp;|&nbsp;<code>"da-GL"</code>&nbsp;|&nbsp;<code>"dav"</code>&nbsp;|&nbsp;<code>"dav-KE"</code>&nbsp;|&nbsp;<code>"de"</code>&nbsp;|&nbsp;<code>"de-AT"</code>&nbsp;|&nbsp;<code>"de-BE"</code>&nbsp;|&nbsp;<code>"de-CH"</code>&nbsp;|&nbsp;<code>"de-DE"</code>&nbsp;|&nbsp;<code>"de-IT"</code>&nbsp;|&nbsp;<code>"de-LI"</code>&nbsp;|&nbsp;<code>"de-LU"</code>&nbsp;|&nbsp;<code>"dje"</code>&nbsp;|&nbsp;<code>"dje-NE"</code>&nbsp;|&nbsp;<code>"dsb"</code>&nbsp;|&nbsp;<code>"dsb-DE"</code>&nbsp;|&nbsp;<code>"dua"</code>&nbsp;|&nbsp;<code>"dua-CM"</code>&nbsp;|&nbsp;<code>"dyo"</code>&nbsp;|&nbsp;<code>"dyo-SN"</code>&nbsp;|&nbsp;<code>"dz"</code>&nbsp;|&nbsp;<code>"dz-BT"</code>&nbsp;|&nbsp;<code>"ebu"</code>&nbsp;|&nbsp;<code>"ebu-KE"</code>&nbsp;|&nbsp;<code>"ee"</code>&nbsp;|&nbsp;<code>"ee-GH"</code>&nbsp;|&nbsp;<code>"ee-TG"</code>&nbsp;|&nbsp;<code>"el"</code>&nbsp;|&nbsp;<code>"el-CY"</code>&nbsp;|&nbsp;<code>"el-GR"</code>&nbsp;|&nbsp;<code>"en"</code>&nbsp;|&nbsp;<code>"en-001"</code>&nbsp;|&nbsp;<code>"en-150"</code>&nbsp;|&nbsp;<code>"en-AG"</code>&nbsp;|&nbsp;<code>"en-AI"</code>&nbsp;|&nbsp;<code>"en-AS"</code>&nbsp;|&nbsp;<code>"en-AT"</code>&nbsp;|&nbsp;<code>"en-AU"</code>&nbsp;|&nbsp;<code>"en-BB"</code>&nbsp;|&nbsp;<code>"en-BE"</code>&nbsp;|&nbsp;<code>"en-BI"</code>&nbsp;|&nbsp;<code>"en-BM"</code>&nbsp;|&nbsp;<code>"en-BS"</code>&nbsp;|&nbsp;<code>"en-BW"</code>&nbsp;|&nbsp;<code>"en-BZ"</code>&nbsp;|&nbsp;<code>"en-CA"</code>&nbsp;|&nbsp;<code>"en-CC"</code>&nbsp;|&nbsp;<code>"en-CH"</code>&nbsp;|&nbsp;<code>"en-CK"</code>&nbsp;|&nbsp;<code>"en-CM"</code>&nbsp;|&nbsp;<code>"en-CX"</code>&nbsp;|&nbsp;<code>"en-CY"</code>&nbsp;|&nbsp;<code>"en-DE"</code>&nbsp;|&nbsp;<code>"en-DG"</code>&nbsp;|&nbsp;<code>"en-DK"</code>&nbsp;|&nbsp;<code>"en-DM"</code>&nbsp;|&nbsp;<code>"en-ER"</code>&nbsp;|&nbsp;<code>"en-FI"</code>&nbsp;|&nbsp;<code>"en-FJ"</code>&nbsp;|&nbsp;<code>"en-FK"</code>&nbsp;|&nbsp;<code>"en-FM"</code>&nbsp;|&nbsp;<code>"en-GB"</code>&nbsp;|&nbsp;<code>"en-GD"</code>&nbsp;|&nbsp;<code>"en-GG"</code>&nbsp;|&nbsp;<code>"en-GH"</code>&nbsp;|&nbsp;<code>"en-GI"</code>&nbsp;|&nbsp;<code>"en-GM"</code>&nbsp;|&nbsp;<code>"en-GU"</code>&nbsp;|&nbsp;<code>"en-GY"</code>&nbsp;|&nbsp;<code>"en-HK"</code>&nbsp;|&nbsp;<code>"en-IE"</code>&nbsp;|&nbsp;<code>"en-IL"</code>&nbsp;|&nbsp;<code>"en-IM"</code>&nbsp;|&nbsp;<code>"en-IN"</code>&nbsp;|&nbsp;<code>"en-IO"</code>&nbsp;|&nbsp;<code>"en-JE"</code>&nbsp;|&nbsp;<code>"en-JM"</code>&nbsp;|&nbsp;<code>"en-KE"</code>&nbsp;|&nbsp;<code>"en-KI"</code>&nbsp;|&nbsp;<code>"en-KN"</code>&nbsp;|&nbsp;<code>"en-KY"</code>&nbsp;|&nbsp;<code>"en-LC"</code>&nbsp;|&nbsp;<code>"en-LR"</code>&nbsp;|&nbsp;<code>"en-LS"</code>&nbsp;|&nbsp;<code>"en-MG"</code>&nbsp;|&nbsp;<code>"en-MH"</code>&nbsp;|&nbsp;<code>"en-MO"</code>&nbsp;|&nbsp;<code>"en-MP"</code>&nbsp;|&nbsp;<code>"en-MS"</code>&nbsp;|&nbsp;<code>"en-MT"</code>&nbsp;|&nbsp;<code>"en-MU"</code>&nbsp;|&nbsp;<code>"en-MW"</code>&nbsp;|&nbsp;<code>"en-MY"</code>&nbsp;|&nbsp;<code>"en-NA"</code>&nbsp;|&nbsp;<code>"en-NF"</code>&nbsp;|&nbsp;<code>"en-NG"</code>&nbsp;|&nbsp;<code>"en-NL"</code>&nbsp;|&nbsp;<code>"en-NR"</code>&nbsp;|&nbsp;<code>"en-NU"</code>&nbsp;|&nbsp;<code>"en-NZ"</code>&nbsp;|&nbsp;<code>"en-PG"</code>&nbsp;|&nbsp;<code>"en-PH"</code>&nbsp;|&nbsp;<code>"en-PK"</code>&nbsp;|&nbsp;<code>"en-PN"</code>&nbsp;|&nbsp;<code>"en-PR"</code>&nbsp;|&nbsp;<code>"en-PW"</code>&nbsp;|&nbsp;<code>"en-RW"</code>&nbsp;|&nbsp;<code>"en-SB"</code>&nbsp;|&nbsp;<code>"en-SC"</code>&nbsp;|&nbsp;<code>"en-SD"</code>&nbsp;|&nbsp;<code>"en-SE"</code>&nbsp;|&nbsp;<code>"en-SG"</code>&nbsp;|&nbsp;<code>"en-SH"</code>&nbsp;|&nbsp;<code>"en-SI"</code>&nbsp;|&nbsp;<code>"en-SL"</code>&nbsp;|&nbsp;<code>"en-SS"</code>&nbsp;|&nbsp;<code>"en-SX"</code>&nbsp;|&nbsp;<code>"en-SZ"</code>&nbsp;|&nbsp;<code>"en-TC"</code>&nbsp;|&nbsp;<code>"en-TK"</code>&nbsp;|&nbsp;<code>"en-TO"</code>&nbsp;|&nbsp;<code>"en-TT"</code>&nbsp;|&nbsp;<code>"en-TV"</code>&nbsp;|&nbsp;<code>"en-TZ"</code>&nbsp;|&nbsp;<code>"en-UG"</code>&nbsp;|&nbsp;<code>"en-UM"</code>&nbsp;|&nbsp;<code>"en-US"</code>&nbsp;|&nbsp;<code>"en-US-POSIX"</code>&nbsp;|&nbsp;<code>"en-VC"</code>&nbsp;|&nbsp;<code>"en-VG"</code>&nbsp;|&nbsp;<code>"en-VI"</code>&nbsp;|&nbsp;<code>"en-VU"</code>&nbsp;|&nbsp;<code>"en-WS"</code>&nbsp;|&nbsp;<code>"en-ZA"</code>&nbsp;|&nbsp;<code>"en-ZM"</code>&nbsp;|&nbsp;<code>"en-ZW"</code>&nbsp;|&nbsp;<code>"eo"</code>&nbsp;|&nbsp;<code>"eo-001"</code>&nbsp;|&nbsp;<code>"es"</code>&nbsp;|&nbsp;<code>"es-419"</code>&nbsp;|&nbsp;<code>"es-AR"</code>&nbsp;|&nbsp;<code>"es-BO"</code>&nbsp;|&nbsp;<code>"es-BR"</code>&nbsp;|&nbsp;<code>"es-BZ"</code>&nbsp;|&nbsp;<code>"es-CL"</code>&nbsp;|&nbsp;<code>"es-CO"</code>&nbsp;|&nbsp;<code>"es-CR"</code>&nbsp;|&nbsp;<code>"es-CU"</code>&nbsp;|&nbsp;<code>"es-DO"</code>&nbsp;|&nbsp;<code>"es-EA"</code>&nbsp;|&nbsp;<code>"es-EC"</code>&nbsp;|&nbsp;<code>"es-ES"</code>&nbsp;|&nbsp;<code>"es-GQ"</code>&nbsp;|&nbsp;<code>"es-GT"</code>&nbsp;|&nbsp;<code>"es-HN"</code>&nbsp;|&nbsp;<code>"es-IC"</code>&nbsp;|&nbsp;<code>"es-MX"</code>&nbsp;|&nbsp;<code>"es-NI"</code>&nbsp;|&nbsp;<code>"es-PA"</code>&nbsp;|&nbsp;<code>"es-PE"</code>&nbsp;|&nbsp;<code>"es-PH"</code>&nbsp;|&nbsp;<code>"es-PR"</code>&nbsp;|&nbsp;<code>"es-PY"</code>&nbsp;|&nbsp;<code>"es-SV"</code>&nbsp;|&nbsp;<code>"es-US"</code>&nbsp;|&nbsp;<code>"es-UY"</code>&nbsp;|&nbsp;<code>"es-VE"</code>&nbsp;|&nbsp;<code>"et"</code>&nbsp;|&nbsp;<code>"et-EE"</code>&nbsp;|&nbsp;<code>"eu"</code>&nbsp;|&nbsp;<code>"eu-ES"</code>&nbsp;|&nbsp;<code>"ewo"</code>&nbsp;|&nbsp;<code>"ewo-CM"</code>&nbsp;|&nbsp;<code>"fa"</code>&nbsp;|&nbsp;<code>"fa-AF"</code>&nbsp;|&nbsp;<code>"fa-IR"</code>&nbsp;|&nbsp;<code>"ff"</code>&nbsp;|&nbsp;<code>"ff-Latn"</code>&nbsp;|&nbsp;<code>"ff-Latn-BF"</code>&nbsp;|&nbsp;<code>"ff-Latn-CM"</code>&nbsp;|&nbsp;<code>"ff-Latn-GH"</code>&nbsp;|&nbsp;<code>"ff-Latn-GM"</code>&nbsp;|&nbsp;<code>"ff-Latn-GN"</code>&nbsp;|&nbsp;<code>"ff-Latn-GW"</code>&nbsp;|&nbsp;<code>"ff-Latn-LR"</code>&nbsp;|&nbsp;<code>"ff-Latn-MR"</code>&nbsp;|&nbsp;<code>"ff-Latn-NE"</code>&nbsp;|&nbsp;<code>"ff-Latn-NG"</code>&nbsp;|&nbsp;<code>"ff-Latn-SL"</code>&nbsp;|&nbsp;<code>"ff-Latn-SN"</code>&nbsp;|&nbsp;<code>"fi"</code>&nbsp;|&nbsp;<code>"fi-FI"</code>&nbsp;|&nbsp;<code>"fil"</code>&nbsp;|&nbsp;<code>"fil-PH"</code>&nbsp;|&nbsp;<code>"fo"</code>&nbsp;|&nbsp;<code>"fo-DK"</code>&nbsp;|&nbsp;<code>"fo-FO"</code>&nbsp;|&nbsp;<code>"fr"</code>&nbsp;|&nbsp;<code>"fr-BE"</code>&nbsp;|&nbsp;<code>"fr-BF"</code>&nbsp;|&nbsp;<code>"fr-BI"</code>&nbsp;|&nbsp;<code>"fr-BJ"</code>&nbsp;|&nbsp;<code>"fr-BL"</code>&nbsp;|&nbsp;<code>"fr-CA"</code>&nbsp;|&nbsp;<code>"fr-CD"</code>&nbsp;|&nbsp;<code>"fr-CF"</code>&nbsp;|&nbsp;<code>"fr-CG"</code>&nbsp;|&nbsp;<code>"fr-CH"</code>&nbsp;|&nbsp;<code>"fr-CI"</code>&nbsp;|&nbsp;<code>"fr-CM"</code>&nbsp;|&nbsp;<code>"fr-DJ"</code>&nbsp;|&nbsp;<code>"fr-DZ"</code>&nbsp;|&nbsp;<code>"fr-FR"</code>&nbsp;|&nbsp;<code>"fr-GA"</code>&nbsp;|&nbsp;<code>"fr-GF"</code>&nbsp;|&nbsp;<code>"fr-GN"</code>&nbsp;|&nbsp;<code>"fr-GP"</code>&nbsp;|&nbsp;<code>"fr-GQ"</code>&nbsp;|&nbsp;<code>"fr-HT"</code>&nbsp;|&nbsp;<code>"fr-KM"</code>&nbsp;|&nbsp;<code>"fr-LU"</code>&nbsp;|&nbsp;<code>"fr-MA"</code>&nbsp;|&nbsp;<code>"fr-MC"</code>&nbsp;|&nbsp;<code>"fr-MF"</code>&nbsp;|&nbsp;<code>"fr-MG"</code>&nbsp;|&nbsp;<code>"fr-ML"</code>&nbsp;|&nbsp;<code>"fr-MQ"</code>&nbsp;|&nbsp;<code>"fr-MR"</code>&nbsp;|&nbsp;<code>"fr-MU"</code>&nbsp;|&nbsp;<code>"fr-NC"</code>&nbsp;|&nbsp;<code>"fr-NE"</code>&nbsp;|&nbsp;<code>"fr-PF"</code>&nbsp;|&nbsp;<code>"fr-PM"</code>&nbsp;|&nbsp;<code>"fr-RE"</code>&nbsp;|&nbsp;<code>"fr-RW"</code>&nbsp;|&nbsp;<code>"fr-SC"</code>&nbsp;|&nbsp;<code>"fr-SN"</code>&nbsp;|&nbsp;<code>"fr-SY"</code>&nbsp;|&nbsp;<code>"fr-TD"</code>&nbsp;|&nbsp;<code>"fr-TG"</code>&nbsp;|&nbsp;<code>"fr-TN"</code>&nbsp;|&nbsp;<code>"fr-VU"</code>&nbsp;|&nbsp;<code>"fr-WF"</code>&nbsp;|&nbsp;<code>"fr-YT"</code>&nbsp;|&nbsp;<code>"fur"</code>&nbsp;|&nbsp;<code>"fur-IT"</code>&nbsp;|&nbsp;<code>"fy"</code>&nbsp;|&nbsp;<code>"fy-NL"</code>&nbsp;|&nbsp;<code>"ga"</code>&nbsp;|&nbsp;<code>"ga-IE"</code>&nbsp;|&nbsp;<code>"gd"</code>&nbsp;|&nbsp;<code>"gd-GB"</code>&nbsp;|&nbsp;<code>"gl"</code>&nbsp;|&nbsp;<code>"gl-ES"</code>&nbsp;|&nbsp;<code>"gsw"</code>&nbsp;|&nbsp;<code>"gsw-CH"</code>&nbsp;|&nbsp;<code>"gsw-FR"</code>&nbsp;|&nbsp;<code>"gsw-LI"</code>&nbsp;|&nbsp;<code>"gu"</code>&nbsp;|&nbsp;<code>"gu-IN"</code>&nbsp;|&nbsp;<code>"guz"</code>&nbsp;|&nbsp;<code>"guz-KE"</code>&nbsp;|&nbsp;<code>"gv"</code>&nbsp;|&nbsp;<code>"gv-IM"</code>&nbsp;|&nbsp;<code>"ha"</code>&nbsp;|&nbsp;<code>"ha-GH"</code>&nbsp;|&nbsp;<code>"ha-NE"</code>&nbsp;|&nbsp;<code>"ha-NG"</code>&nbsp;|&nbsp;<code>"haw"</code>&nbsp;|&nbsp;<code>"haw-US"</code>&nbsp;|&nbsp;<code>"he"</code>&nbsp;|&nbsp;<code>"he-IL"</code>&nbsp;|&nbsp;<code>"hi"</code>&nbsp;|&nbsp;<code>"hi-IN"</code>&nbsp;|&nbsp;<code>"hr"</code>&nbsp;|&nbsp;<code>"hr-BA"</code>&nbsp;|&nbsp;<code>"hr-HR"</code>&nbsp;|&nbsp;<code>"hsb"</code>&nbsp;|&nbsp;<code>"hsb-DE"</code>&nbsp;|&nbsp;<code>"hu"</code>&nbsp;|&nbsp;<code>"hu-HU"</code>&nbsp;|&nbsp;<code>"hy"</code>&nbsp;|&nbsp;<code>"hy-AM"</code>&nbsp;|&nbsp;<code>"ia"</code>&nbsp;|&nbsp;<code>"ia-001"</code>&nbsp;|&nbsp;<code>"id"</code>&nbsp;|&nbsp;<code>"id-ID"</code>&nbsp;|&nbsp;<code>"ig"</code>&nbsp;|&nbsp;<code>"ig-NG"</code>&nbsp;|&nbsp;<code>"ii"</code>&nbsp;|&nbsp;<code>"ii-CN"</code>&nbsp;|&nbsp;<code>"is"</code>&nbsp;|&nbsp;<code>"is-IS"</code>&nbsp;|&nbsp;<code>"it"</code>&nbsp;|&nbsp;<code>"it-CH"</code>&nbsp;|&nbsp;<code>"it-IT"</code>&nbsp;|&nbsp;<code>"it-SM"</code>&nbsp;|&nbsp;<code>"it-VA"</code>&nbsp;|&nbsp;<code>"ja"</code>&nbsp;|&nbsp;<code>"ja-JP"</code>&nbsp;|&nbsp;<code>"jgo"</code>&nbsp;|&nbsp;<code>"jgo-CM"</code>&nbsp;|&nbsp;<code>"jmc"</code>&nbsp;|&nbsp;<code>"jmc-TZ"</code>&nbsp;|&nbsp;<code>"jv"</code>&nbsp;|&nbsp;<code>"jv-ID"</code>&nbsp;|&nbsp;<code>"ka"</code>&nbsp;|&nbsp;<code>"ka-GE"</code>&nbsp;|&nbsp;<code>"kab"</code>&nbsp;|&nbsp;<code>"kab-DZ"</code>&nbsp;|&nbsp;<code>"kam"</code>&nbsp;|&nbsp;<code>"kam-KE"</code>&nbsp;|&nbsp;<code>"kde"</code>&nbsp;|&nbsp;<code>"kde-TZ"</code>&nbsp;|&nbsp;<code>"kea"</code>&nbsp;|&nbsp;<code>"kea-CV"</code>&nbsp;|&nbsp;<code>"khq"</code>&nbsp;|&nbsp;<code>"khq-ML"</code>&nbsp;|&nbsp;<code>"ki"</code>&nbsp;|&nbsp;<code>"ki-KE"</code>&nbsp;|&nbsp;<code>"kk"</code>&nbsp;|&nbsp;<code>"kk-KZ"</code>&nbsp;|&nbsp;<code>"kkj"</code>&nbsp;|&nbsp;<code>"kkj-CM"</code>&nbsp;|&nbsp;<code>"kl"</code>&nbsp;|&nbsp;<code>"kl-GL"</code>&nbsp;|&nbsp;<code>"kln"</code>&nbsp;|&nbsp;<code>"kln-KE"</code>&nbsp;|&nbsp;<code>"km"</code>&nbsp;|&nbsp;<code>"km-KH"</code>&nbsp;|&nbsp;<code>"kn"</code>&nbsp;|&nbsp;<code>"kn-IN"</code>&nbsp;|&nbsp;<code>"ko"</code>&nbsp;|&nbsp;<code>"ko-KP"</code>&nbsp;|&nbsp;<code>"ko-KR"</code>&nbsp;|&nbsp;<code>"kok"</code>&nbsp;|&nbsp;<code>"kok-IN"</code>&nbsp;|&nbsp;<code>"ks"</code>&nbsp;|&nbsp;<code>"ks-IN"</code>&nbsp;|&nbsp;<code>"ksb"</code>&nbsp;|&nbsp;<code>"ksb-TZ"</code>&nbsp;|&nbsp;<code>"ksf"</code>&nbsp;|&nbsp;<code>"ksf-CM"</code>&nbsp;|&nbsp;<code>"ksh"</code>&nbsp;|&nbsp;<code>"ksh-DE"</code>&nbsp;|&nbsp;<code>"ku"</code>&nbsp;|&nbsp;<code>"ku-TR"</code>&nbsp;|&nbsp;<code>"kw"</code>&nbsp;|&nbsp;<code>"kw-GB"</code>&nbsp;|&nbsp;<code>"ky"</code>&nbsp;|&nbsp;<code>"ky-KG"</code>&nbsp;|&nbsp;<code>"lag"</code>&nbsp;|&nbsp;<code>"lag-TZ"</code>&nbsp;|&nbsp;<code>"lb"</code>&nbsp;|&nbsp;<code>"lb-LU"</code>&nbsp;|&nbsp;<code>"lg"</code>&nbsp;|&nbsp;<code>"lg-UG"</code>&nbsp;|&nbsp;<code>"lkt"</code>&nbsp;|&nbsp;<code>"lkt-US"</code>&nbsp;|&nbsp;<code>"ln"</code>&nbsp;|&nbsp;<code>"ln-AO"</code>&nbsp;|&nbsp;<code>"ln-CD"</code>&nbsp;|&nbsp;<code>"ln-CF"</code>&nbsp;|&nbsp;<code>"ln-CG"</code>&nbsp;|&nbsp;<code>"lo"</code>&nbsp;|&nbsp;<code>"lo-LA"</code>&nbsp;|&nbsp;<code>"lrc"</code>&nbsp;|&nbsp;<code>"lrc-IQ"</code>&nbsp;|&nbsp;<code>"lrc-IR"</code>&nbsp;|&nbsp;<code>"lt"</code>&nbsp;|&nbsp;<code>"lt-LT"</code>&nbsp;|&nbsp;<code>"lu"</code>&nbsp;|&nbsp;<code>"lu-CD"</code>&nbsp;|&nbsp;<code>"luo"</code>&nbsp;|&nbsp;<code>"luo-KE"</code>&nbsp;|&nbsp;<code>"luy"</code>&nbsp;|&nbsp;<code>"luy-KE"</code>&nbsp;|&nbsp;<code>"lv"</code>&nbsp;|&nbsp;<code>"lv-LV"</code>&nbsp;|&nbsp;<code>"mas"</code>&nbsp;|&nbsp;<code>"mas-KE"</code>&nbsp;|&nbsp;<code>"mas-TZ"</code>&nbsp;|&nbsp;<code>"mer"</code>&nbsp;|&nbsp;<code>"mer-KE"</code>&nbsp;|&nbsp;<code>"mfe"</code>&nbsp;|&nbsp;<code>"mfe-MU"</code>&nbsp;|&nbsp;<code>"mg"</code>&nbsp;|&nbsp;<code>"mg-MG"</code>&nbsp;|&nbsp;<code>"mgh"</code>&nbsp;|&nbsp;<code>"mgh-MZ"</code>&nbsp;|&nbsp;<code>"mgo"</code>&nbsp;|&nbsp;<code>"mgo-CM"</code>&nbsp;|&nbsp;<code>"mi"</code>&nbsp;|&nbsp;<code>"mi-NZ"</code>&nbsp;|&nbsp;<code>"mk"</code>&nbsp;|&nbsp;<code>"mk-MK"</code>&nbsp;|&nbsp;<code>"ml"</code>&nbsp;|&nbsp;<code>"ml-IN"</code>&nbsp;|&nbsp;<code>"mn"</code>&nbsp;|&nbsp;<code>"mn-MN"</code>&nbsp;|&nbsp;<code>"mr"</code>&nbsp;|&nbsp;<code>"mr-IN"</code>&nbsp;|&nbsp;<code>"ms"</code>&nbsp;|&nbsp;<code>"ms-BN"</code>&nbsp;|&nbsp;<code>"ms-MY"</code>&nbsp;|&nbsp;<code>"ms-SG"</code>&nbsp;|&nbsp;<code>"mt"</code>&nbsp;|&nbsp;<code>"mt-MT"</code>&nbsp;|&nbsp;<code>"mua"</code>&nbsp;|&nbsp;<code>"mua-CM"</code>&nbsp;|&nbsp;<code>"my"</code>&nbsp;|&nbsp;<code>"my-MM"</code>&nbsp;|&nbsp;<code>"mzn"</code>&nbsp;|&nbsp;<code>"mzn-IR"</code>&nbsp;|&nbsp;<code>"naq"</code>&nbsp;|&nbsp;<code>"naq-NA"</code>&nbsp;|&nbsp;<code>"nb"</code>&nbsp;|&nbsp;<code>"nb-NO"</code>&nbsp;|&nbsp;<code>"nb-SJ"</code>&nbsp;|&nbsp;<code>"nd"</code>&nbsp;|&nbsp;<code>"nd-ZW"</code>&nbsp;|&nbsp;<code>"nds"</code>&nbsp;|&nbsp;<code>"nds-DE"</code>&nbsp;|&nbsp;<code>"nds-NL"</code>&nbsp;|&nbsp;<code>"ne"</code>&nbsp;|&nbsp;<code>"ne-IN"</code>&nbsp;|&nbsp;<code>"ne-NP"</code>&nbsp;|&nbsp;<code>"nl"</code>&nbsp;|&nbsp;<code>"nl-AW"</code>&nbsp;|&nbsp;<code>"nl-BE"</code>&nbsp;|&nbsp;<code>"nl-BQ"</code>&nbsp;|&nbsp;<code>"nl-CW"</code>&nbsp;|&nbsp;<code>"nl-NL"</code>&nbsp;|&nbsp;<code>"nl-SR"</code>&nbsp;|&nbsp;<code>"nl-SX"</code>&nbsp;|&nbsp;<code>"nmg"</code>&nbsp;|&nbsp;<code>"nmg-CM"</code>&nbsp;|&nbsp;<code>"nn"</code>&nbsp;|&nbsp;<code>"nn-NO"</code>&nbsp;|&nbsp;<code>"nnh"</code>&nbsp;|&nbsp;<code>"nnh-CM"</code>&nbsp;|&nbsp;<code>"nus"</code>&nbsp;|&nbsp;<code>"nus-SS"</code>&nbsp;|&nbsp;<code>"nyn"</code>&nbsp;|&nbsp;<code>"nyn-UG"</code>&nbsp;|&nbsp;<code>"om"</code>&nbsp;|&nbsp;<code>"om-ET"</code>&nbsp;|&nbsp;<code>"om-KE"</code>&nbsp;|&nbsp;<code>"or"</code>&nbsp;|&nbsp;<code>"or-IN"</code>&nbsp;|&nbsp;<code>"os"</code>&nbsp;|&nbsp;<code>"os-GE"</code>&nbsp;|&nbsp;<code>"os-RU"</code>&nbsp;|&nbsp;<code>"pa"</code>&nbsp;|&nbsp;<code>"pa-Arab"</code>&nbsp;|&nbsp;<code>"pa-Arab-PK"</code>&nbsp;|&nbsp;<code>"pa-Guru"</code>&nbsp;|&nbsp;<code>"pa-Guru-IN"</code>&nbsp;|&nbsp;<code>"pl"</code>&nbsp;|&nbsp;<code>"pl-PL"</code>&nbsp;|&nbsp;<code>"prg"</code>&nbsp;|&nbsp;<code>"prg-001"</code>&nbsp;|&nbsp;<code>"ps"</code>&nbsp;|&nbsp;<code>"ps-AF"</code>&nbsp;|&nbsp;<code>"pt"</code>&nbsp;|&nbsp;<code>"pt-AO"</code>&nbsp;|&nbsp;<code>"pt-BR"</code>&nbsp;|&nbsp;<code>"pt-CH"</code>&nbsp;|&nbsp;<code>"pt-CV"</code>&nbsp;|&nbsp;<code>"pt-GQ"</code>&nbsp;|&nbsp;<code>"pt-GW"</code>&nbsp;|&nbsp;<code>"pt-LU"</code>&nbsp;|&nbsp;<code>"pt-MO"</code>&nbsp;|&nbsp;<code>"pt-MZ"</code>&nbsp;|&nbsp;<code>"pt-PT"</code>&nbsp;|&nbsp;<code>"pt-ST"</code>&nbsp;|&nbsp;<code>"pt-TL"</code>&nbsp;|&nbsp;<code>"qu"</code>&nbsp;|&nbsp;<code>"qu-BO"</code>&nbsp;|&nbsp;<code>"qu-EC"</code>&nbsp;|&nbsp;<code>"qu-PE"</code>&nbsp;|&nbsp;<code>"rm"</code>&nbsp;|&nbsp;<code>"rm-CH"</code>&nbsp;|&nbsp;<code>"rn"</code>&nbsp;|&nbsp;<code>"rn-BI"</code>&nbsp;|&nbsp;<code>"ro"</code>&nbsp;|&nbsp;<code>"ro-MD"</code>&nbsp;|&nbsp;<code>"ro-RO"</code>&nbsp;|&nbsp;<code>"rof"</code>&nbsp;|&nbsp;<code>"rof-TZ"</code>&nbsp;|&nbsp;<code>"root"</code>&nbsp;|&nbsp;<code>"ru"</code>&nbsp;|&nbsp;<code>"ru-BY"</code>&nbsp;|&nbsp;<code>"ru-KG"</code>&nbsp;|&nbsp;<code>"ru-KZ"</code>&nbsp;|&nbsp;<code>"ru-MD"</code>&nbsp;|&nbsp;<code>"ru-RU"</code>&nbsp;|&nbsp;<code>"ru-UA"</code>&nbsp;|&nbsp;<code>"rw"</code>&nbsp;|&nbsp;<code>"rw-RW"</code>&nbsp;|&nbsp;<code>"rwk"</code>&nbsp;|&nbsp;<code>"rwk-TZ"</code>&nbsp;|&nbsp;<code>"sah"</code>&nbsp;|&nbsp;<code>"sah-RU"</code>&nbsp;|&nbsp;<code>"saq"</code>&nbsp;|&nbsp;<code>"saq-KE"</code>&nbsp;|&nbsp;<code>"sbp"</code>&nbsp;|&nbsp;<code>"sbp-TZ"</code>&nbsp;|&nbsp;<code>"sd"</code>&nbsp;|&nbsp;<code>"sd-PK"</code>&nbsp;|&nbsp;<code>"se"</code>&nbsp;|&nbsp;<code>"se-FI"</code>&nbsp;|&nbsp;<code>"se-NO"</code>&nbsp;|&nbsp;<code>"se-SE"</code>&nbsp;|&nbsp;<code>"seh"</code>&nbsp;|&nbsp;<code>"seh-MZ"</code>&nbsp;|&nbsp;<code>"ses"</code>&nbsp;|&nbsp;<code>"ses-ML"</code>&nbsp;|&nbsp;<code>"sg"</code>&nbsp;|&nbsp;<code>"sg-CF"</code>&nbsp;|&nbsp;<code>"shi"</code>&nbsp;|&nbsp;<code>"shi-Latn"</code>&nbsp;|&nbsp;<code>"shi-Latn-MA"</code>&nbsp;|&nbsp;<code>"shi-Tfng"</code>&nbsp;|&nbsp;<code>"shi-Tfng-MA"</code>&nbsp;|&nbsp;<code>"si"</code>&nbsp;|&nbsp;<code>"si-LK"</code>&nbsp;|&nbsp;<code>"sk"</code>&nbsp;|&nbsp;<code>"sk-SK"</code>&nbsp;|&nbsp;<code>"sl"</code>&nbsp;|&nbsp;<code>"sl-SI"</code>&nbsp;|&nbsp;<code>"smn"</code>&nbsp;|&nbsp;<code>"smn-FI"</code>&nbsp;|&nbsp;<code>"sn"</code>&nbsp;|&nbsp;<code>"sn-ZW"</code>&nbsp;|&nbsp;<code>"so"</code>&nbsp;|&nbsp;<code>"so-DJ"</code>&nbsp;|&nbsp;<code>"so-ET"</code>&nbsp;|&nbsp;<code>"so-KE"</code>&nbsp;|&nbsp;<code>"so-SO"</code>&nbsp;|&nbsp;<code>"sq"</code>&nbsp;|&nbsp;<code>"sq-AL"</code>&nbsp;|&nbsp;<code>"sq-MK"</code>&nbsp;|&nbsp;<code>"sq-XK"</code>&nbsp;|&nbsp;<code>"sr"</code>&nbsp;|&nbsp;<code>"sr-Cyrl"</code>&nbsp;|&nbsp;<code>"sr-Cyrl-BA"</code>&nbsp;|&nbsp;<code>"sr-Cyrl-ME"</code>&nbsp;|&nbsp;<code>"sr-Cyrl-RS"</code>&nbsp;|&nbsp;<code>"sr-Cyrl-XK"</code>&nbsp;|&nbsp;<code>"sr-Latn"</code>&nbsp;|&nbsp;<code>"sr-Latn-BA"</code>&nbsp;|&nbsp;<code>"sr-Latn-ME"</code>&nbsp;|&nbsp;<code>"sr-Latn-RS"</code>&nbsp;|&nbsp;<code>"sr-Latn-XK"</code>&nbsp;|&nbsp;<code>"sv"</code>&nbsp;|&nbsp;<code>"sv-AX"</code>&nbsp;|&nbsp;<code>"sv-FI"</code>&nbsp;|&nbsp;<code>"sv-SE"</code>&nbsp;|&nbsp;<code>"sw"</code>&nbsp;|&nbsp;<code>"sw-CD"</code>&nbsp;|&nbsp;<code>"sw-KE"</code>&nbsp;|&nbsp;<code>"sw-TZ"</code>&nbsp;|&nbsp;<code>"sw-UG"</code>&nbsp;|&nbsp;<code>"ta"</code>&nbsp;|&nbsp;<code>"ta-IN"</code>&nbsp;|&nbsp;<code>"ta-LK"</code>&nbsp;|&nbsp;<code>"ta-MY"</code>&nbsp;|&nbsp;<code>"ta-SG"</code>&nbsp;|&nbsp;<code>"te"</code>&nbsp;|&nbsp;<code>"te-IN"</code>&nbsp;|&nbsp;<code>"teo"</code>&nbsp;|&nbsp;<code>"teo-KE"</code>&nbsp;|&nbsp;<code>"teo-UG"</code>&nbsp;|&nbsp;<code>"tg"</code>&nbsp;|&nbsp;<code>"tg-TJ"</code>&nbsp;|&nbsp;<code>"th"</code>&nbsp;|&nbsp;<code>"th-TH"</code>&nbsp;|&nbsp;<code>"ti"</code>&nbsp;|&nbsp;<code>"ti-ER"</code>&nbsp;|&nbsp;<code>"ti-ET"</code>&nbsp;|&nbsp;<code>"tk"</code>&nbsp;|&nbsp;<code>"tk-TM"</code>&nbsp;|&nbsp;<code>"to"</code>&nbsp;|&nbsp;<code>"to-TO"</code>&nbsp;|&nbsp;<code>"tr"</code>&nbsp;|&nbsp;<code>"tr-CY"</code>&nbsp;|&nbsp;<code>"tr-TR"</code>&nbsp;|&nbsp;<code>"tt"</code>&nbsp;|&nbsp;<code>"tt-RU"</code>&nbsp;|&nbsp;<code>"twq"</code>&nbsp;|&nbsp;<code>"twq-NE"</code>&nbsp;|&nbsp;<code>"tzm"</code>&nbsp;|&nbsp;<code>"tzm-MA"</code>&nbsp;|&nbsp;<code>"ug"</code>&nbsp;|&nbsp;<code>"ug-CN"</code>&nbsp;|&nbsp;<code>"uk"</code>&nbsp;|&nbsp;<code>"uk-UA"</code>&nbsp;|&nbsp;<code>"ur"</code>&nbsp;|&nbsp;<code>"ur-IN"</code>&nbsp;|&nbsp;<code>"ur-PK"</code>&nbsp;|&nbsp;<code>"uz"</code>&nbsp;|&nbsp;<code>"uz-Arab"</code>&nbsp;|&nbsp;<code>"uz-Arab-AF"</code>&nbsp;|&nbsp;<code>"uz-Cyrl"</code>&nbsp;|&nbsp;<code>"uz-Cyrl-UZ"</code>&nbsp;|&nbsp;<code>"uz-Latn"</code>&nbsp;|&nbsp;<code>"uz-Latn-UZ"</code>&nbsp;|&nbsp;<code>"vai"</code>&nbsp;|&nbsp;<code>"vai-Latn"</code>&nbsp;|&nbsp;<code>"vai-Latn-LR"</code>&nbsp;|&nbsp;<code>"vai-Vaii"</code>&nbsp;|&nbsp;<code>"vai-Vaii-LR"</code>&nbsp;|&nbsp;<code>"vi"</code>&nbsp;|&nbsp;<code>"vi-VN"</code>&nbsp;|&nbsp;<code>"vo"</code>&nbsp;|&nbsp;<code>"vo-001"</code>&nbsp;|&nbsp;<code>"vun"</code>&nbsp;|&nbsp;<code>"vun-TZ"</code>&nbsp;|&nbsp;<code>"wae"</code>&nbsp;|&nbsp;<code>"wae-CH"</code>&nbsp;|&nbsp;<code>"wo"</code>&nbsp;|&nbsp;<code>"wo-SN"</code>&nbsp;|&nbsp;<code>"xh"</code>&nbsp;|&nbsp;<code>"xh-ZA"</code>&nbsp;|&nbsp;<code>"xog"</code>&nbsp;|&nbsp;<code>"xog-UG"</code>&nbsp;|&nbsp;<code>"yav"</code>&nbsp;|&nbsp;<code>"yav-CM"</code>&nbsp;|&nbsp;<code>"yi"</code>&nbsp;|&nbsp;<code>"yi-001"</code>&nbsp;|&nbsp;<code>"yo"</code>&nbsp;|&nbsp;<code>"yo-BJ"</code>&nbsp;|&nbsp;<code>"yo-NG"</code>&nbsp;|&nbsp;<code>"yue"</code>&nbsp;|&nbsp;<code>"yue-Hans"</code>&nbsp;|&nbsp;<code>"yue-Hans-CN"</code>&nbsp;|&nbsp;<code>"yue-Hant"</code>&nbsp;|&nbsp;<code>"yue-Hant-HK"</code>&nbsp;|&nbsp;<code>"zgh"</code>&nbsp;|&nbsp;<code>"zgh-MA"</code>&nbsp;|&nbsp;<code>"zh"</code>&nbsp;|&nbsp;<code>"zh-Hans"</code>&nbsp;|&nbsp;<code>"zh-Hans-CN"</code>&nbsp;|&nbsp;<code>"zh-Hans-HK"</code>&nbsp;|&nbsp;<code>"zh-Hans-MO"</code>&nbsp;|&nbsp;<code>"zh-Hans-SG"</code>&nbsp;|&nbsp;<code>"zh-Hant"</code>&nbsp;|&nbsp;<code>"zh-Hant-HK"</code>&nbsp;|&nbsp;<code>"zh-Hant-MO"</code>&nbsp;|&nbsp;<code>"zh-Hant-TW"</code>&nbsp;|&nbsp;<code>"zu"</code>&nbsp;|&nbsp;<code>"zu-ZA"</code>



### <a id="IetfLanguageTagOrSignLanguageCode">IetfLanguageTagOrSignLanguageCode</a>

We assume that IETF language tags will be extended with sign language codes (as proposed by
http://www.evertype.com/standards/iso639/sign-language.html) eventually, so our language tags
support them already.

Definition: <a href="#IetfLanguageTag">IetfLanguageTag</a>&nbsp;|&nbsp;<a href="#SignLanguageCode">SignLanguageCode</a>



### <a id="IntercomInteraction">IntercomInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":375,"name":"IntercomInteractions"}}}



### <a id="Length">Length</a>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="LocalizedString">LocalizedString</a>



Definition: <a href="#Record">Record</a>



### <a id="Mass">Mass</a>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="MediaInteraction">MediaInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":397,"name":"MediaInteractions"}}}



### <a id="MirrorInteraction">MirrorInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":422,"name":"MirrorInteractions"}}}



### <a id="Operator">Operator</a>

The allowed operators for comparison quantities

Definition: <code>"<"</code>&nbsp;|&nbsp;<code>"<="</code>&nbsp;|&nbsp;<code>"=="</code>&nbsp;|&nbsp;<code>">="</code>&nbsp;|&nbsp;<code>">"</code>&nbsp;|&nbsp;<code>"="</code>&nbsp;|&nbsp;<code>"~"</code>&nbsp;|&nbsp;<code>"~="</code>&nbsp;|&nbsp;<code>"!="</code>



### <a id="ParkingInteraction">ParkingInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":431,"name":"ParkingInteractions"}}}



### <a id="Paymentnteraction">Paymentnteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":459,"name":"PaymentInteractions"}}}



### <a id="PerceptionMode">PerceptionMode</a>

Describes necessary abilities and modes for interpreting information output, signals, or
content.

Definition: <pre>{
  "id": 472,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 489,
      "name": "acceleration",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Feedback force applied to the user."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 116,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 874,
        "name": "Acceleration"
      }
    },
    {
      "id": 479,
      "name": "activationSignal",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is an activation/engagement signal."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 66,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 482,
      "name": "alarm",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is an alarm."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 81,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 496,
      "name": "ambientNoiseLevel",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Ambient noise level in dB(A) relative to a reference pressure of 0.00002 Pa. Median over a\n10-second period at least."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 152,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 867,
        "name": "Volume"
      }
    },
    {
      "id": 536,
      "name": "ambientTemperature",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ambient temperature around the output."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 366,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 876,
        "name": "Temperature"
      }
    },
    {
      "id": 524,
      "name": "animation",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is animated."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 306,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 554,
      "name": "apiDocumentationUrl",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The input API documentation URL."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 456,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 508,
      "name": "attentionSpan",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Attention time span needed to understand the output."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 213,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 871,
        "name": "TimeInterval"
      }
    },
    {
      "id": 498,
      "name": "audibleClick",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output has an acoustic click feedback."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 162,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 513,
      "name": "audioDescription",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output has  audio description."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 238,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 559,
      "name": "audioIsComprehensible",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`true` if the system’s audio quality is good enough for understanding speech, `false` if it is\ndifficult."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 483,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 544,
      "name": "backgroundColors",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Background output HTML colors (for example, the background behind a text or icon)."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 406,
          "character": 2
        }
      ],
      "type": {
        "type": "array",
        "elementType": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    },
    {
      "id": 499,
      "name": "backgroundMusic",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "There is background music playing."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 167,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 501,
      "name": "beep",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output uses one or more beeps as signal."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 177,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 502,
      "name": "bing",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output uses one or more bing-like signals."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 182,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 540,
      "name": "blackAndWhite",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output uses black and white colors."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 386,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 529,
      "name": "braille",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to read braille is supported or needed."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 331,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 494,
      "name": "breathing",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The light looks like it is breathing."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 141,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 495,
      "name": "brightness",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output's brightness."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 146,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 869,
        "name": "Brightness"
      }
    },
    {
      "id": 549,
      "name": "byod",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`true` if you can or have to perceive the content with a device that you own."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 431,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 547,
      "name": "cable",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "A cable is supported or needed."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 421,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 537,
      "name": "chart",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output uses one or more charts."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 371,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 541,
      "name": "colorCode",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output uses a discrete color code."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 391,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 542,
      "name": "colorGradient",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output uses a color gradient."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 396,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 560,
      "name": "contentWarning",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Lists potential content warnings you have to expect here. User interfaces should not show the\ncontent warning directly, but should instead show a button to show the content warning."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 489,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 396,
        "name": "LocalizedString"
      }
    },
    {
      "id": 511,
      "name": "dedicatedScreenForSubtitles",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output has a dedicated screen for subtitles."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 228,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 474,
      "name": "description",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Describes the content/output/signal as human-readable text."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 41,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 396,
        "name": "LocalizedString"
      }
    },
    {
      "id": 507,
      "name": "duration",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Time interval in which the output is active."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 208,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 871,
        "name": "TimeInterval"
      }
    },
    {
      "id": 516,
      "name": "educationLevel",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Education level needed to understand the output.",
        "text": "http://www.ibe.unesco.org/en/glossary-curriculum-terminology/l/levels-education\n\n- early childhood education (level 0)\n- primary education (level 1)\n- lower secondary education (level 2)\n- upper secondary education (level 3)\n- postsecondary non-tertiary education (level 4)\n- short-cycle tertiary education (level 5)\n- bachelor’s or equivalent level (level 6)\n- master’s or equivalent level (level 7)\n- doctor or equivalent level (level 8).\n"
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 265,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "qualifiedName": "Number",
        "package": "typescript",
        "name": "Number"
      }
    },
    {
      "id": 518,
      "name": "flash",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is a flashing light."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 275,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 519,
      "name": "flashingHazard",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`true` if the output is a flashing hazard, `false` if there is explicitly no flashing hazard\nand someone / something ensures this. This can be relevant for people with epilepsy."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 281,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 539,
      "name": "fontSize",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Font size used in the output."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 381,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 866,
        "name": "Length"
      }
    },
    {
      "id": 488,
      "name": "force",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Feedback force applied to the user."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 111,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 872,
        "name": "Force"
      }
    },
    {
      "id": 487,
      "name": "forceFeedback",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The content/output/signal has active force feedback."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 106,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 543,
      "name": "foregroundColors",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Foreground output HTML colors (for example, the text or icon color)."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 401,
          "character": 2
        }
      ],
      "type": {
        "type": "array",
        "elementType": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    },
    {
      "id": 525,
      "name": "framerate",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The framerate of animations."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 311,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 875,
        "name": "Hertz"
      }
    },
    {
      "id": 520,
      "name": "frequency",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The frequency of the output, for tones or flashes."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 286,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 875,
        "name": "Hertz"
      }
    },
    {
      "id": 492,
      "name": "fullBody",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The content/output/signal affects your full body."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 131,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 517,
      "name": "handwritten",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The content is handwritten."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 270,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 504,
      "name": "haptic",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is haptic."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 192,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 497,
      "name": "hapticClick",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output has a haptic click feedback."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 157,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 546,
      "name": "headphone",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Headphones are supported or needed."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 416,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 534,
      "name": "heat",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Heat perception is supported or needed."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 356,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 538,
      "name": "highContrast",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is displayed in high contrast."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 376,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 481,
      "name": "info",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is an information without high urgency."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 76,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 553,
      "name": "instructionsUrl",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "URL describing how to make use of the content/output/signal."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 451,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 396,
        "name": "LocalizedString"
      }
    },
    {
      "id": 556,
      "name": "isEasyToFind",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`true` if the input is easy to find."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 467,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 555,
      "name": "isEasyToUnderstand",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`true` if the input is easy to understand, `false` if people might face difficulties trying to\nunderstand how the input works, or `undefined` if this is unknown or irrelevant."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 462,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 475,
      "name": "languages",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Content languages supported."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 46,
          "character": 2
        }
      ],
      "type": {
        "type": "array",
        "elementType": {
          "type": "reference",
          "id": 910,
          "name": "IetfLanguageTag"
        }
      }
    },
    {
      "id": 493,
      "name": "led",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is an LED."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 136,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 484,
      "name": "light",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is a light."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 91,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 521,
      "name": "morse",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output uses morse code."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 291,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 500,
      "name": "music",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output uses music."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 172,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 473,
      "name": "name",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Describes which output is meant. Helpful if there are multiple signals/outputs/content\nlements."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 36,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 396,
        "name": "LocalizedString"
      }
    },
    {
      "id": 558,
      "name": "necessaryEyeHeight",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "How tall do you have to be to perceive the content/output/signal."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 477,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 866,
        "name": "Length"
      }
    },
    {
      "id": 557,
      "name": "necessaryGripHeight",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The height you need to grip to perceive the content/output/signal."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 472,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 866,
        "name": "Length"
      }
    },
    {
      "id": 510,
      "name": "needsHighConcentration",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output needs high concentration to understand."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 223,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 523,
      "name": "numbers",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output uses one or more numbers."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 301,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 476,
      "name": "optional",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`true` if the perception is optional, `false` if it is required."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 51,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 532,
      "name": "paper",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is displayed on a paper."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 346,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 522,
      "name": "pictograms",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output uses one or more pictograms."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 296,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 503,
      "name": "pitchedTone",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output uses a pitched tone as signal."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 187,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 515,
      "name": "plainLanguageOption",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output has a plain language option."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 248,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 533,
      "name": "printer",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is from a printer."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 351,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 545,
      "name": "qrCode",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "A QR code is supported or needed."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 411,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 548,
      "name": "radio",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "A radio connection is supported or needed (e.g. WiFi, Bluetooth, NFC, etc.)"
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 426,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 486,
      "name": "read",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to read is supported or needed."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 101,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 514,
      "name": "realTimeCaptioning",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output has realtime captioning."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 243,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 477,
      "name": "required",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`false` if the perception is optional, `true` if it is required."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 56,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 505,
      "name": "rhythmic",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is rhythmic."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 197,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 531,
      "name": "screen",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is displayed on a screen."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 341,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 527,
      "name": "signLanguage",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to understand sign language is supported or needed."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 321,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 509,
      "name": "smell",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to smell is supported or needed."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 218,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 526,
      "name": "sound",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is acoustic."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 316,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 491,
      "name": "soundVolume",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The content/output/signal has active vibration feedback."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 126,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 867,
        "name": "Volume"
      }
    },
    {
      "id": 478,
      "name": "speech",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The ability to understand speech is supported or needed."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 61,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 506,
      "name": "static",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "`true` if the output is usually static and does not change over time, `false` if it is dynamic\nand changes over time."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 203,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 512,
      "name": "subtitles",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output has subtitles."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 233,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 528,
      "name": "tactile",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is tactile."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 326,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 530,
      "name": "tactileGuides",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output has tactile guides, for example around buttons."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 336,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 550,
      "name": "techSufficient",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Technology combinations that are sufficient to make use of the content/output/signal."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 436,
          "character": 2
        }
      ],
      "type": {
        "type": "array",
        "elementType": {
          "type": "reference",
          "id": 766,
          "name": "TechCombination"
        }
      }
    },
    {
      "id": 551,
      "name": "techSupported",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "Technologies that are sufficient to make use of the content/output/signal."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 441,
          "character": 2
        }
      ],
      "type": {
        "type": "array",
        "elementType": {
          "type": "reference",
          "id": 766,
          "name": "TechCombination"
        }
      }
    },
    {
      "id": 535,
      "name": "temperature",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The temperature of the output."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 361,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 876,
        "name": "Temperature"
      }
    },
    {
      "id": 480,
      "name": "urgent",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is urgent."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 71,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 552,
      "name": "url",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "URL where you can see or make use of the content/output/signal, e.g. on your phone."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 446,
          "character": 2
        }
      ],
      "type": {
        "type": "reference",
        "id": 396,
        "name": "LocalizedString"
      }
    },
    {
      "id": 490,
      "name": "vibration",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The content/output/signal has active vibration feedback."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 121,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 485,
      "name": "visual",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is visual."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 96,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    },
    {
      "id": 483,
      "name": "warning",
      "kind": 1024,
      "kindString": "Property",
      "flags": {
        "isOptional": true
      },
      "comment": {
        "shortText": "The output is a warning."
      },
      "sources": [
        {
          "fileName": "PerceptionMode.ts",
          "line": 86,
          "character": 2
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "boolean"
      }
    }
  ],
  "groups": [
    {
      "title": "Properties",
      "kind": 1024,
      "children": [
        489,
        479,
        482,
        496,
        536,
        524,
        554,
        508,
        498,
        513,
        559,
        544,
        499,
        501,
        502,
        540,
        529,
        494,
        495,
        549,
        547,
        537,
        541,
        542,
        560,
        511,
        474,
        507,
        516,
        518,
        519,
        539,
        488,
        487,
        543,
        525,
        520,
        492,
        517,
        504,
        497,
        546,
        534,
        538,
        481,
        553,
        556,
        555,
        475,
        493,
        484,
        521,
        500,
        473,
        558,
        557,
        510,
        523,
        476,
        532,
        522,
        503,
        515,
        533,
        545,
        548,
        486,
        514,
        477,
        505,
        531,
        527,
        509,
        526,
        491,
        478,
        506,
        512,
        528,
        530,
        550,
        551,
        535,
        480,
        552,
        490,
        485,
        483
      ]
    }
  ],
  "sources": [
    {
      "fileName": "PerceptionMode.ts",
      "line": 31,
      "character": 29
    }
  ]
}</pre>



### <a id="QueueSystemInteraction">QueueSystemInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":877,"name":"QueueSystemInteractions"}}}



### <a id="RestroomSignIcon">RestroomSignIcon</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":603,"name":"restroomSignIcons"}}}



### <a id="RoomInteraction">RoomInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":632,"name":"RoomInteractions"}}}



### <a id="SeatInteraction">SeatInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":657,"name":"SeatInteractions"}}}



### <a id="ShowerInteraction">ShowerInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":712,"name":"ShowerInteractions"}}}



### <a id="SignLanguageCode">SignLanguageCode</a>

We assume that IETF language tags will be extended with sign language codes (as proposed by
http://www.evertype.com/standards/iso639/sign-language.html) eventually, so our language tags
support them already.

Definition: <code>"ase"</code>&nbsp;|&nbsp;<code>"sgn-ase"</code>&nbsp;|&nbsp;<code>"sgn-ase-US"</code>&nbsp;|&nbsp;<code>"sgn-GH-EP"</code>&nbsp;|&nbsp;<code>"sgn-DZ"</code>&nbsp;|&nbsp;<code>"sgn-US"</code>&nbsp;|&nbsp;<code>"sgn-AR"</code>&nbsp;|&nbsp;<code>"sgn-AM"</code>&nbsp;|&nbsp;<code>"sgn-AU-NT"</code>&nbsp;|&nbsp;<code>"sgn-AU"</code>&nbsp;|&nbsp;<code>"sgn-AT"</code>&nbsp;|&nbsp;<code>"sgn-ID-BA"</code>&nbsp;|&nbsp;<code>"sgn-BE-VLG"</code>&nbsp;|&nbsp;<code>"sgn-BE-WAL"</code>&nbsp;|&nbsp;<code>"sgn-BO"</code>&nbsp;|&nbsp;<code>"sgn-BR"</code>&nbsp;|&nbsp;<code>"sgn-GB"</code>&nbsp;|&nbsp;<code>"sgn-BG"</code>&nbsp;|&nbsp;<code>"sgn-ES-CT"</code>&nbsp;|&nbsp;<code>"sgn-TD"</code>&nbsp;|&nbsp;<code>"sgn-CL"</code>&nbsp;|&nbsp;<code>"sgn-CN"</code>&nbsp;|&nbsp;<code>"sgn-CO"</code>&nbsp;|&nbsp;<code>"sgn-CR"</code>&nbsp;|&nbsp;<code>"sgn-CZ"</code>&nbsp;|&nbsp;<code>"sgn-DK"</code>&nbsp;|&nbsp;<code>"sgn-NL"</code>&nbsp;|&nbsp;<code>"sgn-EC"</code>&nbsp;|&nbsp;<code>"sgn-SV"</code>&nbsp;|&nbsp;<code>"sgn-CA-NU"</code>&nbsp;|&nbsp;<code>"sgn-ET"</code>&nbsp;|&nbsp;<code>"sgn-FI"</code>&nbsp;|&nbsp;<code>"sgn-CA-QC"</code>&nbsp;|&nbsp;<code>"sgn-FR"</code>&nbsp;|&nbsp;<code>"sgn-DE"</code>&nbsp;|&nbsp;<code>"sgn-GH"</code>&nbsp;|&nbsp;<code>"sgn-GR"</code>&nbsp;|&nbsp;<code>"sgn-GT"</code>&nbsp;|&nbsp;<code>"sgn-US-HI"</code>&nbsp;|&nbsp;<code>"sgn-HK"</code>&nbsp;|&nbsp;<code>"sgn-IS"</code>&nbsp;|&nbsp;<code>"sgn-ID"</code>&nbsp;|&nbsp;<code>"sgn-IN"</code>&nbsp;|&nbsp;<code>"sgn-IE"</code>&nbsp;|&nbsp;<code>"sgn-IL"</code>&nbsp;|&nbsp;<code>"sgn-IT"</code>&nbsp;|&nbsp;<code>"sgn-JM"</code>&nbsp;|&nbsp;<code>"sgn-JP"</code>&nbsp;|&nbsp;<code>"sgn-JO"</code>&nbsp;|&nbsp;<code>"sgn-KE"</code>&nbsp;|&nbsp;<code>"sgn-KR"</code>&nbsp;|&nbsp;<code>"sgn-MY-B"</code>&nbsp;|&nbsp;<code>"sgn-LV"</code>&nbsp;|&nbsp;<code>"sgn-LY"</code>&nbsp;|&nbsp;<code>"sgn-LT"</code>&nbsp;|&nbsp;<code>"sgn-FR-69"</code>&nbsp;|&nbsp;<code>"sgn-MY"</code>&nbsp;|&nbsp;<code>"sgn-MT"</code>&nbsp;|&nbsp;<code>"sgn-US-MA"</code>&nbsp;|&nbsp;<code>"sgn-MX-YUC"</code>&nbsp;|&nbsp;<code>"sgn-MX"</code>&nbsp;|&nbsp;<code>"sgn-VA"</code>&nbsp;|&nbsp;<code>"sgn-MN"</code>&nbsp;|&nbsp;<code>"sgn-MA"</code>&nbsp;|&nbsp;<code>"sgn-NA"</code>&nbsp;|&nbsp;<code>"sgn-NP"</code>&nbsp;|&nbsp;<code>"sgn-NZ"</code>&nbsp;|&nbsp;<code>"sgn-NI"</code>&nbsp;|&nbsp;<code>"sgn-NG"</code>&nbsp;|&nbsp;<code>"sgn-NO"</code>&nbsp;|&nbsp;<code>"sgn-CA-NS"</code>&nbsp;|&nbsp;<code>"sgn-GB-KEN"</code>&nbsp;|&nbsp;<code>"sgn-MY-P"</code>&nbsp;|&nbsp;<code>"sgn-IR"</code>&nbsp;|&nbsp;<code>"sgn-PE"</code>&nbsp;|&nbsp;<code>"sgn-PH"</code>&nbsp;|&nbsp;<code>"sgn-US-SD"</code>&nbsp;|&nbsp;<code>"sgn-PL"</code>&nbsp;|&nbsp;<code>"sgn-PT"</code>&nbsp;|&nbsp;<code>"sgn-CO-SAP"</code>&nbsp;|&nbsp;<code>"sgn-PR"</code>&nbsp;|&nbsp;<code>"sgn-SB"</code>&nbsp;|&nbsp;<code>"sgn-RO"</code>&nbsp;|&nbsp;<code>"sgn-RU"</code>&nbsp;|&nbsp;<code>"sgn-SA"</code>&nbsp;|&nbsp;<code>"sgn-SE-crp"</code>&nbsp;|&nbsp;<code>"sgn-SG"</code>&nbsp;|&nbsp;<code>"sgn-SK"</code>&nbsp;|&nbsp;<code>"sgn-ZA"</code>&nbsp;|&nbsp;<code>"sgn-ES"</code>&nbsp;|&nbsp;<code>"sgn-LK"</code>&nbsp;|&nbsp;<code>"sgn-SE"</code>&nbsp;|&nbsp;<code>"sgn-CH-GE"</code>&nbsp;|&nbsp;<code>"sgn-CH-ZH"</code>&nbsp;|&nbsp;<code>"sgn-CH-TI"</code>&nbsp;|&nbsp;<code>"sgn-TW"</code>&nbsp;|&nbsp;<code>"sgn-TZ"</code>&nbsp;|&nbsp;<code>"sgn-TH"</code>&nbsp;|&nbsp;<code>"sgn-TN"</code>&nbsp;|&nbsp;<code>"sgn-TR"</code>&nbsp;|&nbsp;<code>"sgn-UG"</code>&nbsp;|&nbsp;<code>"sgn-UA"</code>&nbsp;|&nbsp;<code>"sgn-BR-MA"</code>&nbsp;|&nbsp;<code>"sgn-UY"</code>&nbsp;|&nbsp;<code>"sgn-VE"</code>&nbsp;|&nbsp;<code>"sgn-IL-yid"</code>&nbsp;|&nbsp;<code>"sgn-YU"</code>&nbsp;|&nbsp;<code>"sgn-ZM"</code>&nbsp;|&nbsp;<code>"sgn-ZW"</code>&nbsp;|&nbsp;<code>"sgn-afr-ZA"</code>&nbsp;|&nbsp;<code>"sgn-chi-TW"</code>&nbsp;|&nbsp;<code>"sgn-dan-DK"</code>&nbsp;|&nbsp;<code>"sgn-dut-BE"</code>&nbsp;|&nbsp;<code>"sgn-dut-NL"</code>&nbsp;|&nbsp;<code>"sgn-eng-GB"</code>&nbsp;|&nbsp;<code>"sgn-eng-IE"</code>&nbsp;|&nbsp;<code>"sgn-eng-US"</code>&nbsp;|&nbsp;<code>"sgn-fin-FI"</code>&nbsp;|&nbsp;<code>"sgn-fre-BE"</code>&nbsp;|&nbsp;<code>"sgn-fre-CA"</code>&nbsp;|&nbsp;<code>"sgn-fre-FR"</code>&nbsp;|&nbsp;<code>"sgn-jpn-JP"</code>&nbsp;|&nbsp;<code>"sgn-nor-NO"</code>&nbsp;|&nbsp;<code>"sgn-por-PT"</code>&nbsp;|&nbsp;<code>"sgn-swe-SE"</code>



### <a id="SignageInteraction">SignageInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":686,"name":"SignageInteractions"}}}



### <a id="Slope">Slope</a>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="SmokingPolicy">SmokingPolicy</a>

Describes the smoking policy for visitors of a place.

Definition: <code>"dedicatedToSmoking"</code>&nbsp;|&nbsp;<code>"allowedEverywhere"</code>&nbsp;|&nbsp;<code>"inSeparateArea"</code>&nbsp;|&nbsp;<code>"inIsolatedArea"</code>&nbsp;|&nbsp;<code>"prohibited"</code>&nbsp;|&nbsp;<code>"onlyOutside"</code>



### <a id="SmoothnessType">SmoothnessType</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":756,"name":"SmoothnessTypeValues"}}}



### <a id="Speed">Speed</a>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="SurfaceType">SurfaceType</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":754,"name":"SurfaceTypeValues"}}}



### <a id="Temperature">Temperature</a>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="TimeInterval">TimeInterval</a>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="ToiletInteraction">ToiletInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":772,"name":"ToiletInteractions"}}}



### <a id="Volume">Volume</a>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="WashBashinInteraction">WashBashinInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":891,"name":"WashBashinInteractions"}}}



### <a id="WifiInteraction">WifiInteraction</a>



Definition: {"type":"indexedAccess","indexType":{"type":"intrinsic","name":"number"},"objectType":{"type":"query","queryType":{"type":"reference","id":914,"name":"WifiInteractions"}}}

