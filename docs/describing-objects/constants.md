# Constants

<style>
    .source-link {
      float: right;
    }
  </style>

Besides [interfaces](./interfaces.md) and [bare types](./type-aliases.md), A11yJSON defines the following constants.

Some lack proper formatting in the documentation. Fixes in [`tools/generate-overview.ts`](https://github.com/sozialhelden/a11yjson/blob/master/tools/generate-overview.ts) are welcome!

### <a id="AccelerationSchema">AccelerationSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L182)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 844,
  "name": "AccelerationSchema",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 182,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L182"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SimpleSchema",
    "qualifiedName": "SimpleSchema",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SimpleSchema` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="AccelerationSchemaDefinition">AccelerationSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L178)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 843,
  "name": "AccelerationSchemaDefinition",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Validates a acceleration quantity object and will only accept acceleration units, eg.\nmeter/second^2, miles/hour^2. Useful to describe the acceleration of a vehicle, or the\nacceleration that a person is subjected to."
      }
    ]
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 178,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L178"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SchemaDefinition",
    "qualifiedName": "SchemaDefinition",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SchemaDefinition` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="AccessTypes">AccessTypes</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/AccessType.ts#L1)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 50,
  "name": "AccessTypes",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "AccessType.ts",
      "line": 1,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/AccessType.ts#L1"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "private"
        },
        {
          "type": "literal",
          "value": "public"
        },
        {
          "type": "literal",
          "value": "customers"
        },
        {
          "type": "literal",
          "value": "permissive"
        },
        {
          "type": "literal",
          "value": "yes"
        },
        {
          "type": "literal",
          "value": "no"
        },
        {
          "type": "literal",
          "value": "permit"
        },
        {
          "type": "literal",
          "value": "designated"
        },
        {
          "type": "literal",
          "value": "delivery"
        },
        {
          "type": "literal",
          "value": "emergency"
        },
        {
          "type": "literal",
          "value": "residents"
        },
        {
          "type": "literal",
          "value": "employees"
        },
        {
          "type": "literal",
          "value": "disabled"
        },
        {
          "type": "literal",
          "value": "yes"
        },
        {
          "type": "literal",
          "value": "no"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 15 strings:
<ul>
<li>`private`</li>

<li>`public`</li>

<li>`customers`</li>

<li>`permissive`</li>

<li>`yes`</li>

<li>`no`</li>

<li>`permit`</li>

<li>`designated`</li>

<li>`delivery`</li>

<li>`emergency`</li>

<li>`residents`</li>

<li>`employees`</li>

<li>`disabled`</li>

<li>`yes`</li>

<li>`no`</li>
</ul>



### <a id="BaseQuantitySchema">BaseQuantitySchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L140)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 838,
  "name": "BaseQuantitySchema",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 140,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L140"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SimpleSchema",
    "qualifiedName": "SimpleSchema",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SimpleSchema` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="BrightnessSchema">BrightnessSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L226)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 858,
  "name": "BrightnessSchema",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 226,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L226"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SimpleSchema",
    "qualifiedName": "SimpleSchema",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SimpleSchema` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="BrightnessSchemaDefinition">BrightnessSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L225)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 857,
  "name": "BrightnessSchemaDefinition",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Validates a brightness descriptor and will only accept brightness units, eg. nits or lumens."
      }
    ]
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 225,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L225"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SchemaDefinition",
    "qualifiedName": "SchemaDefinition",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SchemaDefinition` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="DeskInteractions">DeskInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Desk.ts#L11)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 200,
  "name": "DeskInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Desk.ts",
      "line": 11,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Desk.ts#L11"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "changeHeight"
        },
        {
          "type": "literal",
          "value": "savePreset"
        },
        {
          "type": "literal",
          "value": "enqueue"
        },
        {
          "type": "literal",
          "value": "checkIn"
        },
        {
          "type": "literal",
          "value": "checkOut"
        },
        {
          "type": "literal",
          "value": "ringBell"
        },
        {
          "type": "literal",
          "value": "pay"
        },
        {
          "type": "literal",
          "value": "handoverLuggage"
        },
        {
          "type": "literal",
          "value": "handover"
        },
        {
          "type": "literal",
          "value": "getReturn"
        },
        {
          "type": "literal",
          "value": "getFood"
        },
        {
          "type": "literal",
          "value": "getShoppingBag"
        },
        {
          "type": "literal",
          "value": "scan"
        },
        {
          "type": "literal",
          "value": "selfCheckout"
        },
        {
          "type": "literal",
          "value": "open"
        },
        {
          "type": "literal",
          "value": "close"
        },
        {
          "type": "literal",
          "value": "unlock"
        },
        {
          "type": "literal",
          "value": "lock"
        },
        {
          "type": "literal",
          "value": "unlockAndLock"
        },
        {
          "type": "literal",
          "value": "openAndClose"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 20 strings:
<ul>
<li>`changeHeight`</li>

<li>`savePreset`</li>

<li>`enqueue`</li>

<li>`checkIn`</li>

<li>`checkOut`</li>

<li>`ringBell`</li>

<li>`pay`</li>

<li>`handoverLuggage`</li>

<li>`handover`</li>

<li>`getReturn`</li>

<li>`getFood`</li>

<li>`getShoppingBag`</li>

<li>`scan`</li>

<li>`selfCheckout`</li>

<li>`open`</li>

<li>`close`</li>

<li>`unlock`</li>

<li>`lock`</li>

<li>`unlockAndLock`</li>

<li>`openAndClose`</li>
</ul>



### <a id="DirectionAxes">DirectionAxes</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/ActionMode.ts#L27)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 52,
  "name": "DirectionAxes",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Describes a physical direction axis relative to a person’s body."
      }
    ],
    "blockTags": [
      {
        "tag": "@see",
        "content": [
          {
            "kind": "text",
            "text": "https://wisc.pb.unizin.org/app/uploads/sites/123/2018/10/Anatomical-Planes-and-Axes.jpg"
          }
        ]
      }
    ]
  },
  "sources": [
    {
      "fileName": "ActionMode.ts",
      "line": 27,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/ActionMode.ts#L27"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "sagittal"
        },
        {
          "type": "literal",
          "value": "coronal"
        },
        {
          "type": "literal",
          "value": "axial"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 3 strings:
<ul>
<li>`sagittal`</li>

<li>`coronal`</li>

<li>`axial`</li>
</ul>



### <a id="Directions">Directions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/ActionMode.ts#L43)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 54,
  "name": "Directions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Describes physical directions, from the perspective of a person facing forward."
      }
    ]
  },
  "sources": [
    {
      "fileName": "ActionMode.ts",
      "line": 43,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/ActionMode.ts#L43"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "up"
        },
        {
          "type": "literal",
          "value": "down"
        },
        {
          "type": "literal",
          "value": "left"
        },
        {
          "type": "literal",
          "value": "right"
        },
        {
          "type": "literal",
          "value": "forward"
        },
        {
          "type": "literal",
          "value": "backward"
        },
        {
          "type": "literal",
          "value": "clockwise"
        },
        {
          "type": "literal",
          "value": "counterclockwise"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 8 strings:
<ul>
<li>`up`</li>

<li>`down`</li>

<li>`left`</li>

<li>`right`</li>

<li>`forward`</li>

<li>`backward`</li>

<li>`clockwise`</li>

<li>`counterclockwise`</li>
</ul>



### <a id="DoorInteractions">DoorInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Door.ts#L18)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 218,
  "name": "DoorInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Door.ts",
      "line": 18,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Door.ts#L18"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "ringDoorbell"
        },
        {
          "type": "literal",
          "value": "open"
        },
        {
          "type": "literal",
          "value": "close"
        },
        {
          "type": "literal",
          "value": "unlock"
        },
        {
          "type": "literal",
          "value": "lock"
        },
        {
          "type": "literal",
          "value": "unlockAndLock"
        },
        {
          "type": "literal",
          "value": "openAndClose"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 7 strings:
<ul>
<li>`ringDoorbell`</li>

<li>`open`</li>

<li>`close`</li>

<li>`unlock`</li>

<li>`lock`</li>

<li>`unlockAndLock`</li>

<li>`openAndClose`</li>
</ul>



### <a id="EquipmentInteractions">EquipmentInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/EquipmentProperties.ts#L39)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 288,
  "name": "EquipmentInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "EquipmentProperties.ts",
      "line": 39,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/EquipmentProperties.ts#L39"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "use"
        },
        {
          "type": "literal",
          "value": "selectFloor"
        },
        {
          "type": "literal",
          "value": "arriveAtFloor"
        },
        {
          "type": "literal",
          "value": "callEmergency"
        },
        {
          "type": "literal",
          "value": "ride"
        },
        {
          "type": "literal",
          "value": "travel"
        },
        {
          "type": "literal",
          "value": "buy"
        },
        {
          "type": "literal",
          "value": "sell"
        },
        {
          "type": "literal",
          "value": "call"
        },
        {
          "type": "literal",
          "value": "understand"
        },
        {
          "type": "literal",
          "value": "sleep"
        },
        {
          "type": "literal",
          "value": "toggle"
        },
        {
          "type": "literal",
          "value": "engage"
        },
        {
          "type": "literal",
          "value": "flush"
        },
        {
          "type": "literal",
          "value": "scan"
        },
        {
          "type": "literal",
          "value": "handover"
        },
        {
          "type": "literal",
          "value": "enable"
        },
        {
          "type": "literal",
          "value": "disable"
        },
        {
          "type": "literal",
          "value": "locateYourself"
        },
        {
          "type": "literal",
          "value": "findYourDestination"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 20 strings:
<ul>
<li>`use`</li>

<li>`selectFloor`</li>

<li>`arriveAtFloor`</li>

<li>`callEmergency`</li>

<li>`ride`</li>

<li>`travel`</li>

<li>`buy`</li>

<li>`sell`</li>

<li>`call`</li>

<li>`understand`</li>

<li>`sleep`</li>

<li>`toggle`</li>

<li>`engage`</li>

<li>`flush`</li>

<li>`scan`</li>

<li>`handover`</li>

<li>`enable`</li>

<li>`disable`</li>

<li>`locateYourself`</li>

<li>`findYourDestination`</li>
</ul>



### <a id="EquipmentTypes">EquipmentTypes</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/EquipmentProperties.ts#L18)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 286,
  "name": "EquipmentTypes",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "EquipmentProperties.ts",
      "line": 18,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/EquipmentProperties.ts#L18"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "bed"
        },
        {
          "type": "literal",
          "value": "wardrobe"
        },
        {
          "type": "literal",
          "value": "elevator"
        },
        {
          "type": "literal",
          "value": "escalator"
        },
        {
          "type": "literal",
          "value": "movingWalkway"
        },
        {
          "type": "literal",
          "value": "ramp"
        },
        {
          "type": "literal",
          "value": "hoist"
        },
        {
          "type": "literal",
          "value": "stairLift"
        },
        {
          "type": "literal",
          "value": "switch"
        },
        {
          "type": "literal",
          "value": "sitemap"
        },
        {
          "type": "literal",
          "value": "vendingMachine"
        },
        {
          "type": "literal",
          "value": "intercom"
        },
        {
          "type": "literal",
          "value": "powerOutlet"
        },
        {
          "type": "literal",
          "value": "flushMechanism"
        },
        {
          "type": "literal",
          "value": "bodyScanner"
        },
        {
          "type": "literal",
          "value": "luggageScanner"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 16 strings:
<ul>
<li>`bed`</li>

<li>`wardrobe`</li>

<li>`elevator`</li>

<li>`escalator`</li>

<li>`movingWalkway`</li>

<li>`ramp`</li>

<li>`hoist`</li>

<li>`stairLift`</li>

<li>`switch`</li>

<li>`sitemap`</li>

<li>`vendingMachine`</li>

<li>`intercom`</li>

<li>`powerOutlet`</li>

<li>`flushMechanism`</li>

<li>`bodyScanner`</li>

<li>`luggageScanner`</li>
</ul>



### <a id="ForceSchema">ForceSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L189)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 846,
  "name": "ForceSchema",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 189,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L189"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SimpleSchema",
    "qualifiedName": "SimpleSchema",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SimpleSchema` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="ForceSchemaDefinition">ForceSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L188)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 845,
  "name": "ForceSchemaDefinition",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Validates a force quantity object and will only accept force units, eg. newton, or\nkilogram*meter/second^2."
      }
    ]
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 188,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L188"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SchemaDefinition",
    "qualifiedName": "SchemaDefinition",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SchemaDefinition` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="GenericInteractions">GenericInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Accessibility.ts#L49)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 13,
  "name": "GenericInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Accessibility.ts",
      "line": 49,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Accessibility.ts#L49"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "watchMovies"
        },
        {
          "type": "literal",
          "value": "watchPlays"
        },
        {
          "type": "literal",
          "value": "explore"
        },
        {
          "type": "literal",
          "value": "visit"
        },
        {
          "type": "literal",
          "value": "roam"
        },
        {
          "type": "literal",
          "value": "read"
        },
        {
          "type": "literal",
          "value": "rent"
        },
        {
          "type": "literal",
          "value": "watch"
        },
        {
          "type": "literal",
          "value": "see"
        },
        {
          "type": "literal",
          "value": "listen"
        },
        {
          "type": "literal",
          "value": "getFood"
        },
        {
          "type": "literal",
          "value": "eat"
        },
        {
          "type": "literal",
          "value": "pay"
        },
        {
          "type": "literal",
          "value": "buy"
        },
        {
          "type": "literal",
          "value": "sell"
        },
        {
          "type": "literal",
          "value": "workHere"
        },
        {
          "type": "literal",
          "value": "arrive"
        },
        {
          "type": "literal",
          "value": "checkIn"
        },
        {
          "type": "literal",
          "value": "checkOut"
        },
        {
          "type": "literal",
          "value": "useLockers"
        },
        {
          "type": "literal",
          "value": "change"
        },
        {
          "type": "literal",
          "value": "use"
        },
        {
          "type": "literal",
          "value": "book"
        },
        {
          "type": "literal",
          "value": "play"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 24 strings:
<ul>
<li>`watchMovies`</li>

<li>`watchPlays`</li>

<li>`explore`</li>

<li>`visit`</li>

<li>`roam`</li>

<li>`read`</li>

<li>`rent`</li>

<li>`watch`</li>

<li>`see`</li>

<li>`listen`</li>

<li>`getFood`</li>

<li>`eat`</li>

<li>`pay`</li>

<li>`buy`</li>

<li>`sell`</li>

<li>`workHere`</li>

<li>`arrive`</li>

<li>`checkIn`</li>

<li>`checkOut`</li>

<li>`useLockers`</li>

<li>`change`</li>

<li>`use`</li>

<li>`book`</li>

<li>`play`</li>
</ul>



### <a id="GrabBarsInteractions">GrabBarsInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/GrabBars.ts#L6)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 337,
  "name": "GrabBarsInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "GrabBars.ts",
      "line": 6,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/GrabBars.ts#L6"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "localizeYourself"
        },
        {
          "type": "literal",
          "value": "findYourDestination"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 2 strings:
<ul>
<li>`localizeYourself`</li>

<li>`findYourDestination`</li>
</ul>



### <a id="HertzSchema">HertzSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L214)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 854,
  "name": "HertzSchema",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 214,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L214"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SimpleSchema",
    "qualifiedName": "SimpleSchema",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SimpleSchema` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="HertzSchemaDefinition">HertzSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L213)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 853,
  "name": "HertzSchemaDefinition",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Validates a frequency quantity object and will only accept frequency units, eg. hertz."
      }
    ]
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 213,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L213"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SchemaDefinition",
    "qualifiedName": "SchemaDefinition",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SchemaDefinition` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="IntercomInteractions">IntercomInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Intercom.ts#L13)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 371,
  "name": "IntercomInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Intercom.ts",
      "line": 13,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Intercom.ts#L13"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "ring"
        },
        {
          "type": "literal",
          "value": "call"
        },
        {
          "type": "literal",
          "value": "hangUp"
        },
        {
          "type": "literal",
          "value": "open"
        },
        {
          "type": "literal",
          "value": "close"
        },
        {
          "type": "literal",
          "value": "identify"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 6 strings:
<ul>
<li>`ring`</li>

<li>`call`</li>

<li>`hangUp`</li>

<li>`open`</li>

<li>`close`</li>

<li>`identify`</li>
</ul>



### <a id="LengthSchema">LengthSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L164)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 840,
  "name": "LengthSchema",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 164,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L164"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SimpleSchema",
    "qualifiedName": "SimpleSchema",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SimpleSchema` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="LengthSchemaDefinition">LengthSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L163)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 839,
  "name": "LengthSchemaDefinition",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Validates a length quantity object and will only accept length units, eg. meter, centimeter or\ninch."
      }
    ]
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 163,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L163"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SchemaDefinition",
    "qualifiedName": "SchemaDefinition",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SchemaDefinition` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="MassSchema">MassSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L202)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 850,
  "name": "MassSchema",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 202,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L202"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SimpleSchema",
    "qualifiedName": "SimpleSchema",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SimpleSchema` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="MassSchemaDefinition">MassSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L201)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 849,
  "name": "MassSchemaDefinition",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Validates a mass quantity object and will only accept mass/weight units, eg. kilogram, gram or\npound."
      }
    ]
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 201,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L201"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SchemaDefinition",
    "qualifiedName": "SchemaDefinition",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SchemaDefinition` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="MediaInteractions">MediaInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Media.ts#L12)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 397,
  "name": "MediaInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Media.ts",
      "line": 12,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Media.ts#L12"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "watch"
        },
        {
          "type": "literal",
          "value": "listen"
        },
        {
          "type": "literal",
          "value": "feel"
        },
        {
          "type": "literal",
          "value": "discover"
        },
        {
          "type": "literal",
          "value": "open"
        },
        {
          "type": "literal",
          "value": "close"
        },
        {
          "type": "literal",
          "value": "rent"
        },
        {
          "type": "literal",
          "value": "recognize"
        },
        {
          "type": "literal",
          "value": "browse"
        },
        {
          "type": "literal",
          "value": "read"
        },
        {
          "type": "literal",
          "value": "interact"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 11 strings:
<ul>
<li>`watch`</li>

<li>`listen`</li>

<li>`feel`</li>

<li>`discover`</li>

<li>`open`</li>

<li>`close`</li>

<li>`rent`</li>

<li>`recognize`</li>

<li>`browse`</li>

<li>`read`</li>

<li>`interact`</li>
</ul>



### <a id="MediaTypes">MediaTypes</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Media.ts#L27)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 399,
  "name": "MediaTypes",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Media.ts",
      "line": 27,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Media.ts#L27"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "document"
        },
        {
          "type": "literal",
          "value": "menu"
        },
        {
          "type": "literal",
          "value": "guide"
        },
        {
          "type": "literal",
          "value": "tour"
        },
        {
          "type": "literal",
          "value": "presentation"
        },
        {
          "type": "literal",
          "value": "exhibit"
        },
        {
          "type": "literal",
          "value": "movie"
        },
        {
          "type": "literal",
          "value": "play"
        },
        {
          "type": "literal",
          "value": "screen"
        },
        {
          "type": "literal",
          "value": "website"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 10 strings:
<ul>
<li>`document`</li>

<li>`menu`</li>

<li>`guide`</li>

<li>`tour`</li>

<li>`presentation`</li>

<li>`exhibit`</li>

<li>`movie`</li>

<li>`play`</li>

<li>`screen`</li>

<li>`website`</li>
</ul>



### <a id="MirrorInteractions">MirrorInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Mirror.ts#L6)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 424,
  "name": "MirrorInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Mirror.ts",
      "line": 6,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Mirror.ts#L6"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "turn"
        },
        {
          "type": "literal",
          "value": "adjust"
        },
        {
          "type": "literal",
          "value": "move"
        },
        {
          "type": "literal",
          "value": "clean"
        },
        {
          "type": "literal",
          "value": "use"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 5 strings:
<ul>
<li>`turn`</li>

<li>`adjust`</li>

<li>`move`</li>

<li>`clean`</li>

<li>`use`</li>
</ul>



### <a id="Operators">Operators</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L69)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 792,
  "name": "Operators",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "The allowed operators for comparison quantities"
      }
    ]
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 69,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L69"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "<"
        },
        {
          "type": "literal",
          "value": "<="
        },
        {
          "type": "literal",
          "value": "=="
        },
        {
          "type": "literal",
          "value": ">="
        },
        {
          "type": "literal",
          "value": ">"
        },
        {
          "type": "literal",
          "value": "="
        },
        {
          "type": "literal",
          "value": "~"
        },
        {
          "type": "literal",
          "value": "~="
        },
        {
          "type": "literal",
          "value": "!="
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 9 strings:
<ul>
<li>`<`</li>

<li>`<=`</li>

<li>`==`</li>

<li>`>=`</li>

<li>`>`</li>

<li>`=`</li>

<li>`~`</li>

<li>`~=`</li>

<li>`!=`</li>
</ul>



### <a id="ParkingInteractions">ParkingInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Parking.ts#L9)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 433,
  "name": "ParkingInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Parking.ts",
      "line": 9,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Parking.ts#L9"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "park"
        },
        {
          "type": "literal",
          "value": "enterVehicle"
        },
        {
          "type": "literal",
          "value": "exitVehicle"
        },
        {
          "type": "literal",
          "value": "arrive"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 4 strings:
<ul>
<li>`park`</li>

<li>`enterVehicle`</li>

<li>`exitVehicle`</li>

<li>`arrive`</li>
</ul>



### <a id="PaymentInteractions">PaymentInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Payment.ts#L5)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 461,
  "name": "PaymentInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Payment.ts",
      "line": 5,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Payment.ts#L5"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "pay"
        },
        {
          "type": "literal",
          "value": "checkIn"
        },
        {
          "type": "literal",
          "value": "logIn"
        },
        {
          "type": "literal",
          "value": "logOut"
        },
        {
          "type": "literal",
          "value": "register"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 5 strings:
<ul>
<li>`pay`</li>

<li>`checkIn`</li>

<li>`logIn`</li>

<li>`logOut`</li>

<li>`register`</li>
</ul>



### <a id="QueueSystemInteractions">QueueSystemInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/QueueSystem.ts#L7)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 872,
  "name": "QueueSystemInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "QueueSystem.ts",
      "line": 7,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/QueueSystem.ts#L7"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "enqueue"
        },
        {
          "type": "literal",
          "value": "skipQueue"
        },
        {
          "type": "literal",
          "value": "wait"
        },
        {
          "type": "literal",
          "value": "leaveQueue"
        },
        {
          "type": "literal",
          "value": "arrive"
        },
        {
          "type": "literal",
          "value": "checkIn"
        },
        {
          "type": "literal",
          "value": "checkOut"
        },
        {
          "type": "literal",
          "value": "getTicket"
        },
        {
          "type": "literal",
          "value": "getOnesTurn"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 9 strings:
<ul>
<li>`enqueue`</li>

<li>`skipQueue`</li>

<li>`wait`</li>

<li>`leaveQueue`</li>

<li>`arrive`</li>

<li>`checkIn`</li>

<li>`checkOut`</li>

<li>`getTicket`</li>

<li>`getOnesTurn`</li>
</ul>



### <a id="RestroomSignIcons">RestroomSignIcons</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Restroom.ts#L15)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 604,
  "name": "RestroomSignIcons",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Restroom.ts",
      "line": 15,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Restroom.ts#L15"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "allGender"
        },
        {
          "type": "literal",
          "value": "female"
        },
        {
          "type": "literal",
          "value": "male"
        },
        {
          "type": "literal",
          "value": "personInWheelchair"
        },
        {
          "type": "literal",
          "value": "changingTable"
        },
        {
          "type": "literal",
          "value": "baby"
        },
        {
          "type": "literal",
          "value": "family"
        },
        {
          "type": "literal",
          "value": "urinal"
        },
        {
          "type": "literal",
          "value": "washBasin"
        },
        {
          "type": "literal",
          "value": "toiletBowl"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 10 strings:
<ul>
<li>`allGender`</li>

<li>`female`</li>

<li>`male`</li>

<li>`personInWheelchair`</li>

<li>`changingTable`</li>

<li>`baby`</li>

<li>`family`</li>

<li>`urinal`</li>

<li>`washBasin`</li>

<li>`toiletBowl`</li>
</ul>



### <a id="RoomInteractions">RoomInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Room.ts#L8)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 633,
  "name": "RoomInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Room.ts",
      "line": 8,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Room.ts#L8"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "enter"
        },
        {
          "type": "literal",
          "value": "exit"
        },
        {
          "type": "literal",
          "value": "stand"
        },
        {
          "type": "literal",
          "value": "sit"
        },
        {
          "type": "literal",
          "value": "see"
        },
        {
          "type": "literal",
          "value": "sleep"
        },
        {
          "type": "literal",
          "value": "play"
        },
        {
          "type": "literal",
          "value": "wait"
        },
        {
          "type": "literal",
          "value": "storeThings"
        },
        {
          "type": "literal",
          "value": "lookAround"
        },
        {
          "type": "literal",
          "value": "openWindow"
        },
        {
          "type": "literal",
          "value": "closeWindow"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 12 strings:
<ul>
<li>`enter`</li>

<li>`exit`</li>

<li>`stand`</li>

<li>`sit`</li>

<li>`see`</li>

<li>`sleep`</li>

<li>`play`</li>

<li>`wait`</li>

<li>`storeThings`</li>

<li>`lookAround`</li>

<li>`openWindow`</li>

<li>`closeWindow`</li>
</ul>



### <a id="SeatInteractions">SeatInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Seat.ts#L16)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 643,
  "name": "SeatInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Seat.ts",
      "line": 16,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Seat.ts#L16"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "sit"
        },
        {
          "type": "literal",
          "value": "fold"
        },
        {
          "type": "literal",
          "value": "unfold"
        },
        {
          "type": "literal",
          "value": "move"
        },
        {
          "type": "literal",
          "value": "adjust"
        },
        {
          "type": "literal",
          "value": "adjustHeight"
        },
        {
          "type": "literal",
          "value": "adjustSeatingSurface"
        },
        {
          "type": "literal",
          "value": "adjustSeatingAngle"
        },
        {
          "type": "literal",
          "value": "adjustArmRests"
        },
        {
          "type": "literal",
          "value": "adjustHeadRest"
        },
        {
          "type": "literal",
          "value": "adjustLegRest"
        },
        {
          "type": "literal",
          "value": "adjustBackRest"
        },
        {
          "type": "literal",
          "value": "adjustFootRest"
        },
        {
          "type": "literal",
          "value": "adjustSeatBelt"
        },
        {
          "type": "literal",
          "value": "adjustSeatBeltLength"
        },
        {
          "type": "literal",
          "value": "adjustSeatBeltHeight"
        },
        {
          "type": "literal",
          "value": "adjustSeatBeltAngle"
        },
        {
          "type": "literal",
          "value": "adjustSeatBeltPosition"
        },
        {
          "type": "literal",
          "value": "adjustSeatBeltTension"
        },
        {
          "type": "literal",
          "value": "adjustSeatBeltLock"
        },
        {
          "type": "literal",
          "value": "connectSeatbelt"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 21 strings:
<ul>
<li>`sit`</li>

<li>`fold`</li>

<li>`unfold`</li>

<li>`move`</li>

<li>`adjust`</li>

<li>`adjustHeight`</li>

<li>`adjustSeatingSurface`</li>

<li>`adjustSeatingAngle`</li>

<li>`adjustArmRests`</li>

<li>`adjustHeadRest`</li>

<li>`adjustLegRest`</li>

<li>`adjustBackRest`</li>

<li>`adjustFootRest`</li>

<li>`adjustSeatBelt`</li>

<li>`adjustSeatBeltLength`</li>

<li>`adjustSeatBeltHeight`</li>

<li>`adjustSeatBeltAngle`</li>

<li>`adjustSeatBeltPosition`</li>

<li>`adjustSeatBeltTension`</li>

<li>`adjustSeatBeltLock`</li>

<li>`connectSeatbelt`</li>
</ul>



### <a id="ShowerInteractions">ShowerInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Shower.ts#L12)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 697,
  "name": "ShowerInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Shower.ts",
      "line": 12,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Shower.ts#L12"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "transfer"
        },
        {
          "type": "literal",
          "value": "wash"
        },
        {
          "type": "literal",
          "value": "useShampoo"
        },
        {
          "type": "literal",
          "value": "useShowerGel"
        },
        {
          "type": "literal",
          "value": "useSoap"
        },
        {
          "type": "literal",
          "value": "useConditioner"
        },
        {
          "type": "literal",
          "value": "useShowerCurtain"
        },
        {
          "type": "literal",
          "value": "useShowerHead"
        },
        {
          "type": "literal",
          "value": "useSupport"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 9 strings:
<ul>
<li>`transfer`</li>

<li>`wash`</li>

<li>`useShampoo`</li>

<li>`useShowerGel`</li>

<li>`useSoap`</li>

<li>`useConditioner`</li>

<li>`useShowerCurtain`</li>

<li>`useShowerHead`</li>

<li>`useSupport`</li>
</ul>



### <a id="SignageInteractions">SignageInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Signage.ts#L7)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 672,
  "name": "SignageInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Signage.ts",
      "line": 7,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Signage.ts#L7"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "locateYourself"
        },
        {
          "type": "literal",
          "value": "findYourDestination"
        },
        {
          "type": "literal",
          "value": "useSitemap"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 3 strings:
<ul>
<li>`locateYourself`</li>

<li>`findYourDestination`</li>

<li>`useSitemap`</li>
</ul>



### <a id="SlopeSchema">SlopeSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L220)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 856,
  "name": "SlopeSchema",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 220,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L220"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SimpleSchema",
    "qualifiedName": "SimpleSchema",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SimpleSchema` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="SlopeSchemaDefinition">SlopeSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L219)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 855,
  "name": "SlopeSchemaDefinition",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Validates a slope quantity object and will only accept units to descrie a slope, eg. degrees."
      }
    ]
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 219,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L219"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SchemaDefinition",
    "qualifiedName": "SchemaDefinition",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SchemaDefinition` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="SmoothnessTypeValues">SmoothnessTypeValues</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Surface.ts#L169)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 741,
  "name": "SmoothnessTypeValues",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Surface.ts",
      "line": 169,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Surface.ts#L169"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "excellent"
        },
        {
          "type": "literal",
          "value": "good"
        },
        {
          "type": "literal",
          "value": "intermediate"
        },
        {
          "type": "literal",
          "value": "bad"
        },
        {
          "type": "literal",
          "value": "horrible"
        },
        {
          "type": "literal",
          "value": "impassable"
        },
        {
          "type": "literal",
          "value": "very_bad"
        },
        {
          "type": "literal",
          "value": "very_horrible"
        },
        {
          "type": "literal",
          "value": "very_good"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 9 strings:
<ul>
<li>`excellent`</li>

<li>`good`</li>

<li>`intermediate`</li>

<li>`bad`</li>

<li>`horrible`</li>

<li>`impassable`</li>

<li>`very_bad`</li>

<li>`very_horrible`</li>

<li>`very_good`</li>
</ul>



### <a id="SpeedSchema">SpeedSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L171)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 842,
  "name": "SpeedSchema",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 171,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L171"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SimpleSchema",
    "qualifiedName": "SimpleSchema",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SimpleSchema` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="SpeedSchemaDefinition">SpeedSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L170)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 841,
  "name": "SpeedSchemaDefinition",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Validates a speed quantity object and will only accept speed units, eg. meter/second, miles/hour\nor similar."
      }
    ]
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 170,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L170"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SchemaDefinition",
    "qualifiedName": "SchemaDefinition",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SchemaDefinition` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="SurfaceTypeValues">SurfaceTypeValues</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Surface.ts#L6)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 739,
  "name": "SurfaceTypeValues",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Surface.ts",
      "line": 6,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Surface.ts#L6"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "acrylic"
        },
        {
          "type": "literal",
          "value": "aluminium"
        },
        {
          "type": "literal",
          "value": "anti-slip"
        },
        {
          "type": "literal",
          "value": "artificial"
        },
        {
          "type": "literal",
          "value": "artificial_grass"
        },
        {
          "type": "literal",
          "value": "artificial_turf"
        },
        {
          "type": "literal",
          "value": "asfalto"
        },
        {
          "type": "literal",
          "value": "ash"
        },
        {
          "type": "literal",
          "value": "asphalt"
        },
        {
          "type": "literal",
          "value": "astroturf"
        },
        {
          "type": "literal",
          "value": "bamboo"
        },
        {
          "type": "literal",
          "value": "bare_rock"
        },
        {
          "type": "literal",
          "value": "bark"
        },
        {
          "type": "literal",
          "value": "barkchips"
        },
        {
          "type": "literal",
          "value": "bedrock"
        },
        {
          "type": "literal",
          "value": "bitumen"
        },
        {
          "type": "literal",
          "value": "bituminous"
        },
        {
          "type": "literal",
          "value": "block"
        },
        {
          "type": "literal",
          "value": "boardwalk"
        },
        {
          "type": "literal",
          "value": "boulders"
        },
        {
          "type": "literal",
          "value": "brick"
        },
        {
          "type": "literal",
          "value": "brick_weave"
        },
        {
          "type": "literal",
          "value": "bricks"
        },
        {
          "type": "literal",
          "value": "bushes"
        },
        {
          "type": "literal",
          "value": "carpet"
        },
        {
          "type": "literal",
          "value": "cement"
        },
        {
          "type": "literal",
          "value": "chalk"
        },
        {
          "type": "literal",
          "value": "chipseal"
        },
        {
          "type": "literal",
          "value": "cinder"
        },
        {
          "type": "literal",
          "value": "clay"
        },
        {
          "type": "literal",
          "value": "cobblestone"
        },
        {
          "type": "literal",
          "value": "compacted"
        },
        {
          "type": "literal",
          "value": "compacted_gravel"
        },
        {
          "type": "literal",
          "value": "composite"
        },
        {
          "type": "literal",
          "value": "con"
        },
        {
          "type": "literal",
          "value": "concrete"
        },
        {
          "type": "literal",
          "value": "concrete_slab"
        },
        {
          "type": "literal",
          "value": "concrete_slabs"
        },
        {
          "type": "literal",
          "value": "construction"
        },
        {
          "type": "literal",
          "value": "coral"
        },
        {
          "type": "literal",
          "value": "coral_sand"
        },
        {
          "type": "literal",
          "value": "crushed_limestone"
        },
        {
          "type": "literal",
          "value": "crushed_shells"
        },
        {
          "type": "literal",
          "value": "debris"
        },
        {
          "type": "literal",
          "value": "decoturf"
        },
        {
          "type": "literal",
          "value": "dirt"
        },
        {
          "type": "literal",
          "value": "earth"
        },
        {
          "type": "literal",
          "value": "enrobé"
        },
        {
          "type": "literal",
          "value": "fine_gravel"
        },
        {
          "type": "literal",
          "value": "fine_sand"
        },
        {
          "type": "literal",
          "value": "flagstone"
        },
        {
          "type": "literal",
          "value": "footway"
        },
        {
          "type": "literal",
          "value": "glass"
        },
        {
          "type": "literal",
          "value": "goudron"
        },
        {
          "type": "literal",
          "value": "granite"
        },
        {
          "type": "literal",
          "value": "grass"
        },
        {
          "type": "literal",
          "value": "grass_paver"
        },
        {
          "type": "literal",
          "value": "grass_scrub"
        },
        {
          "type": "literal",
          "value": "grassland"
        },
        {
          "type": "literal",
          "value": "grating"
        },
        {
          "type": "literal",
          "value": "gravel"
        },
        {
          "type": "literal",
          "value": "green"
        },
        {
          "type": "literal",
          "value": "grit"
        },
        {
          "type": "literal",
          "value": "ground"
        },
        {
          "type": "literal",
          "value": "hardcore"
        },
        {
          "type": "literal",
          "value": "ice"
        },
        {
          "type": "literal",
          "value": "ice_road"
        },
        {
          "type": "literal",
          "value": "interlock"
        },
        {
          "type": "literal",
          "value": "iron"
        },
        {
          "type": "literal",
          "value": "laterite"
        },
        {
          "type": "literal",
          "value": "lawn"
        },
        {
          "type": "literal",
          "value": "leaves"
        },
        {
          "type": "literal",
          "value": "limerock"
        },
        {
          "type": "literal",
          "value": "limestone"
        },
        {
          "type": "literal",
          "value": "linoleum"
        },
        {
          "type": "literal",
          "value": "loose_gravel"
        },
        {
          "type": "literal",
          "value": "marble"
        },
        {
          "type": "literal",
          "value": "marble_plate"
        },
        {
          "type": "literal",
          "value": "meadow"
        },
        {
          "type": "literal",
          "value": "metal"
        },
        {
          "type": "literal",
          "value": "metal_grid"
        },
        {
          "type": "literal",
          "value": "mixed"
        },
        {
          "type": "literal",
          "value": "moss"
        },
        {
          "type": "literal",
          "value": "mud"
        },
        {
          "type": "literal",
          "value": "mulch"
        },
        {
          "type": "literal",
          "value": "native"
        },
        {
          "type": "literal",
          "value": "natural"
        },
        {
          "type": "literal",
          "value": "none"
        },
        {
          "type": "literal",
          "value": "oil"
        },
        {
          "type": "literal",
          "value": "overgrown"
        },
        {
          "type": "literal",
          "value": "path"
        },
        {
          "type": "literal",
          "value": "paved"
        },
        {
          "type": "literal",
          "value": "pavement"
        },
        {
          "type": "literal",
          "value": "paving"
        },
        {
          "type": "literal",
          "value": "paving_stone"
        },
        {
          "type": "literal",
          "value": "paving_stones"
        },
        {
          "type": "literal",
          "value": "peat"
        },
        {
          "type": "literal",
          "value": "pebbles"
        },
        {
          "type": "literal",
          "value": "pebblestone"
        },
        {
          "type": "literal",
          "value": "plank"
        },
        {
          "type": "literal",
          "value": "plastic"
        },
        {
          "type": "literal",
          "value": "plates"
        },
        {
          "type": "literal",
          "value": "rasin"
        },
        {
          "type": "literal",
          "value": "residential"
        },
        {
          "type": "literal",
          "value": "rock"
        },
        {
          "type": "literal",
          "value": "rocks"
        },
        {
          "type": "literal",
          "value": "rocky"
        },
        {
          "type": "literal",
          "value": "roman_paving"
        },
        {
          "type": "literal",
          "value": "rubber"
        },
        {
          "type": "literal",
          "value": "rubbercrumb"
        },
        {
          "type": "literal",
          "value": "rubble"
        },
        {
          "type": "literal",
          "value": "salt"
        },
        {
          "type": "literal",
          "value": "sand"
        },
        {
          "type": "literal",
          "value": "sandstone"
        },
        {
          "type": "literal",
          "value": "sawdust"
        },
        {
          "type": "literal",
          "value": "scree"
        },
        {
          "type": "literal",
          "value": "scrub"
        },
        {
          "type": "literal",
          "value": "sealed"
        },
        {
          "type": "literal",
          "value": "sett"
        },
        {
          "type": "literal",
          "value": "shell"
        },
        {
          "type": "literal",
          "value": "shells"
        },
        {
          "type": "literal",
          "value": "shingle"
        },
        {
          "type": "literal",
          "value": "slabs"
        },
        {
          "type": "literal",
          "value": "snow"
        },
        {
          "type": "literal",
          "value": "soil"
        },
        {
          "type": "literal",
          "value": "spur"
        },
        {
          "type": "literal",
          "value": "steel"
        },
        {
          "type": "literal",
          "value": "stepping_stones"
        },
        {
          "type": "literal",
          "value": "stone"
        },
        {
          "type": "literal",
          "value": "stones"
        },
        {
          "type": "literal",
          "value": "synthetic"
        },
        {
          "type": "literal",
          "value": "tactile_paving"
        },
        {
          "type": "literal",
          "value": "tar"
        },
        {
          "type": "literal",
          "value": "tared"
        },
        {
          "type": "literal",
          "value": "tarmac"
        },
        {
          "type": "literal",
          "value": "tartan"
        },
        {
          "type": "literal",
          "value": "terra"
        },
        {
          "type": "literal",
          "value": "terre"
        },
        {
          "type": "literal",
          "value": "tile"
        },
        {
          "type": "literal",
          "value": "tiles"
        },
        {
          "type": "literal",
          "value": "timber"
        },
        {
          "type": "literal",
          "value": "track"
        },
        {
          "type": "literal",
          "value": "trail"
        },
        {
          "type": "literal",
          "value": "trees"
        },
        {
          "type": "literal",
          "value": "tuff"
        },
        {
          "type": "literal",
          "value": "turf"
        },
        {
          "type": "literal",
          "value": "undefined"
        },
        {
          "type": "literal",
          "value": "unhewn_cobblestone"
        },
        {
          "type": "literal",
          "value": "unpaved"
        },
        {
          "type": "literal",
          "value": "unpaved2"
        },
        {
          "type": "literal",
          "value": "unpaved33"
        },
        {
          "type": "literal",
          "value": "unpaved_minor"
        },
        {
          "type": "literal",
          "value": "unsealed"
        },
        {
          "type": "literal",
          "value": "water"
        },
        {
          "type": "literal",
          "value": "wood"
        },
        {
          "type": "literal",
          "value": "wood_chips"
        },
        {
          "type": "literal",
          "value": "woodchips"
        },
        {
          "type": "literal",
          "value": "zebra"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 158 strings:
<ul>
<li>`acrylic`</li>

<li>`aluminium`</li>

<li>`anti-slip`</li>

<li>`artificial`</li>

<li>`artificial_grass`</li>

<li>`artificial_turf`</li>

<li>`asfalto`</li>

<li>`ash`</li>

<li>`asphalt`</li>

<li>`astroturf`</li>

<li>`bamboo`</li>

<li>`bare_rock`</li>

<li>`bark`</li>

<li>`barkchips`</li>

<li>`bedrock`</li>

<li>`bitumen`</li>

<li>`bituminous`</li>

<li>`block`</li>

<li>`boardwalk`</li>

<li>`boulders`</li>

<li>`brick`</li>

<li>`brick_weave`</li>

<li>`bricks`</li>

<li>`bushes`</li>

<li>`carpet`</li>

<li>`cement`</li>

<li>`chalk`</li>

<li>`chipseal`</li>

<li>`cinder`</li>

<li>`clay`</li>

<li>`cobblestone`</li>

<li>`compacted`</li>

<li>`compacted_gravel`</li>

<li>`composite`</li>

<li>`con`</li>

<li>`concrete`</li>

<li>`concrete_slab`</li>

<li>`concrete_slabs`</li>

<li>`construction`</li>

<li>`coral`</li>

<li>`coral_sand`</li>

<li>`crushed_limestone`</li>

<li>`crushed_shells`</li>

<li>`debris`</li>

<li>`decoturf`</li>

<li>`dirt`</li>

<li>`earth`</li>

<li>`enrobé`</li>

<li>`fine_gravel`</li>

<li>`fine_sand`</li>

<li>`flagstone`</li>

<li>`footway`</li>

<li>`glass`</li>

<li>`goudron`</li>

<li>`granite`</li>

<li>`grass`</li>

<li>`grass_paver`</li>

<li>`grass_scrub`</li>

<li>`grassland`</li>

<li>`grating`</li>

<li>`gravel`</li>

<li>`green`</li>

<li>`grit`</li>

<li>`ground`</li>

<li>`hardcore`</li>

<li>`ice`</li>

<li>`ice_road`</li>

<li>`interlock`</li>

<li>`iron`</li>

<li>`laterite`</li>

<li>`lawn`</li>

<li>`leaves`</li>

<li>`limerock`</li>

<li>`limestone`</li>

<li>`linoleum`</li>

<li>`loose_gravel`</li>

<li>`marble`</li>

<li>`marble_plate`</li>

<li>`meadow`</li>

<li>`metal`</li>

<li>`metal_grid`</li>

<li>`mixed`</li>

<li>`moss`</li>

<li>`mud`</li>

<li>`mulch`</li>

<li>`native`</li>

<li>`natural`</li>

<li>`none`</li>

<li>`oil`</li>

<li>`overgrown`</li>

<li>`path`</li>

<li>`paved`</li>

<li>`pavement`</li>

<li>`paving`</li>

<li>`paving_stone`</li>

<li>`paving_stones`</li>

<li>`peat`</li>

<li>`pebbles`</li>

<li>`pebblestone`</li>

<li>`plank`</li>

<li>`plastic`</li>

<li>`plates`</li>

<li>`rasin`</li>

<li>`residential`</li>

<li>`rock`</li>

<li>`rocks`</li>

<li>`rocky`</li>

<li>`roman_paving`</li>

<li>`rubber`</li>

<li>`rubbercrumb`</li>

<li>`rubble`</li>

<li>`salt`</li>

<li>`sand`</li>

<li>`sandstone`</li>

<li>`sawdust`</li>

<li>`scree`</li>

<li>`scrub`</li>

<li>`sealed`</li>

<li>`sett`</li>

<li>`shell`</li>

<li>`shells`</li>

<li>`shingle`</li>

<li>`slabs`</li>

<li>`snow`</li>

<li>`soil`</li>

<li>`spur`</li>

<li>`steel`</li>

<li>`stepping_stones`</li>

<li>`stone`</li>

<li>`stones`</li>

<li>`synthetic`</li>

<li>`tactile_paving`</li>

<li>`tar`</li>

<li>`tared`</li>

<li>`tarmac`</li>

<li>`tartan`</li>

<li>`terra`</li>

<li>`terre`</li>

<li>`tile`</li>

<li>`tiles`</li>

<li>`timber`</li>

<li>`track`</li>

<li>`trail`</li>

<li>`trees`</li>

<li>`tuff`</li>

<li>`turf`</li>

<li>`undefined`</li>

<li>`unhewn_cobblestone`</li>

<li>`unpaved`</li>

<li>`unpaved2`</li>

<li>`unpaved33`</li>

<li>`unpaved_minor`</li>

<li>`unsealed`</li>

<li>`water`</li>

<li>`wood`</li>

<li>`wood_chips`</li>

<li>`woodchips`</li>

<li>`zebra`</li>
</ul>



### <a id="TemperatureSchema">TemperatureSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L236)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 860,
  "name": "TemperatureSchema",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 236,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L236"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SimpleSchema",
    "qualifiedName": "SimpleSchema",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SimpleSchema` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="TemperatureSchemaDefinition">TemperatureSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L232)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 859,
  "name": "TemperatureSchemaDefinition",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Validates a temperature quantity object and will only accept temperature units, eg. degrees\ncelsius ("
      },
      {
        "kind": "code",
        "text": "`degC`"
      },
      {
        "kind": "text",
        "text": "), degrees Fahrenheit ("
      },
      {
        "kind": "code",
        "text": "`degF`"
      },
      {
        "kind": "text",
        "text": ") or kelvin ("
      },
      {
        "kind": "code",
        "text": "`K`"
      },
      {
        "kind": "text",
        "text": ")."
      }
    ]
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 232,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L232"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SchemaDefinition",
    "qualifiedName": "SchemaDefinition",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SchemaDefinition` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="TimeIntervalSchema">TimeIntervalSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L195)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 848,
  "name": "TimeIntervalSchema",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 195,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L195"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SimpleSchema",
    "qualifiedName": "SimpleSchema",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SimpleSchema` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="TimeIntervalSchemaDefinition">TimeIntervalSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L194)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 847,
  "name": "TimeIntervalSchemaDefinition",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Validates a timer interval object and will only accept time units, eg. seconds, minutes or hours."
      }
    ]
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 194,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L194"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SchemaDefinition",
    "qualifiedName": "SchemaDefinition",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SchemaDefinition` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="ToiletInteractions">ToiletInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Toilet.ts#L10)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 757,
  "name": "ToiletInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Toilet.ts",
      "line": 10,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Toilet.ts#L10"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "use"
        },
        {
          "type": "literal",
          "value": "flush"
        },
        {
          "type": "literal",
          "value": "secondaryFlush"
        },
        {
          "type": "literal",
          "value": "spray"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 4 strings:
<ul>
<li>`use`</li>

<li>`flush`</li>

<li>`secondaryFlush`</li>

<li>`spray`</li>
</ul>



### <a id="Urgencies">Urgencies</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/PerceptionMode.ts#L28)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 473,
  "name": "Urgencies",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "PerceptionMode.ts",
      "line": 28,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/PerceptionMode.ts#L28"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "alert"
        },
        {
          "type": "literal",
          "value": "alarm"
        },
        {
          "type": "literal",
          "value": "warning"
        },
        {
          "type": "literal",
          "value": "info"
        },
        {
          "type": "literal",
          "value": "debug"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 5 strings:
<ul>
<li>`alert`</li>

<li>`alarm`</li>

<li>`warning`</li>

<li>`info`</li>

<li>`debug`</li>
</ul>



### <a id="VolumeSchema">VolumeSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L208)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 852,
  "name": "VolumeSchema",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 208,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L208"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SimpleSchema",
    "qualifiedName": "SimpleSchema",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SimpleSchema` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="VolumeSchemaDefinition">VolumeSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L207)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 851,
  "name": "VolumeSchemaDefinition",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Validates a sound volume quantity object and will only accept sound volume units, eg. decibel."
      }
    ]
  },
  "sources": [
    {
      "fileName": "Quantity.ts",
      "line": 207,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Quantity.ts#L207"
    }
  ],
  "type": {
    "type": "reference",
    "name": "SchemaDefinition",
    "qualifiedName": "SchemaDefinition",
    "package": "simpl-schema"
  },
  "defaultValue": "..."
}
```
</details>


`SchemaDefinition` from the [`simpl-schema` NPM package](https://www.npmjs.com/package/simpl-schema).


### <a id="WashBashinInteractions">WashBashinInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WashBasin.ts#L5)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 884,
  "name": "WashBashinInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "WashBasin.ts",
      "line": 5,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/WashBasin.ts#L5"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "changeTemperature"
        },
        {
          "type": "literal",
          "value": "changeWaterPressure"
        },
        {
          "type": "literal",
          "value": "useWater"
        },
        {
          "type": "literal",
          "value": "getHotWater"
        },
        {
          "type": "literal",
          "value": "getColdWater"
        },
        {
          "type": "literal",
          "value": "getCarbonizedWater"
        },
        {
          "type": "literal",
          "value": "useWaterJet"
        },
        {
          "type": "literal",
          "value": "useWaterSpray"
        },
        {
          "type": "literal",
          "value": "useSoap"
        },
        {
          "type": "literal",
          "value": "getTowel"
        },
        {
          "type": "literal",
          "value": "getPaperTowel"
        },
        {
          "type": "literal",
          "value": "useAirDryer"
        },
        {
          "type": "literal",
          "value": "sanitizeHands"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 13 strings:
<ul>
<li>`changeTemperature`</li>

<li>`changeWaterPressure`</li>

<li>`useWater`</li>

<li>`getHotWater`</li>

<li>`getColdWater`</li>

<li>`getCarbonizedWater`</li>

<li>`useWaterJet`</li>

<li>`useWaterSpray`</li>

<li>`useSoap`</li>

<li>`getTowel`</li>

<li>`getPaperTowel`</li>

<li>`useAirDryer`</li>

<li>`sanitizeHands`</li>
</ul>



### <a id="WheelchairAccessibilityGrades">WheelchairAccessibilityGrades</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Accessibility.ts#L28)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 11,
  "name": "WheelchairAccessibilityGrades",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "comment": {
    "summary": [
      {
        "kind": "text",
        "text": "Describes the general wheelchair accessibility of the place. This is a human-rated value.\nIt SHOULD conform to the traffic light system found in OpenStreetMap and Wheelmap.org."
      }
    ]
  },
  "sources": [
    {
      "fileName": "Accessibility.ts",
      "line": 28,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/Accessibility.ts#L28"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "fully"
        },
        {
          "type": "literal",
          "value": "partially"
        },
        {
          "type": "literal",
          "value": "not"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 3 strings:
<ul>
<li>`fully`</li>

<li>`partially`</li>

<li>`not`</li>
</ul>



### <a id="WifiInteractions">WifiInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WifiAccessibility.ts#L6)</span>




<details>
<summary>JSON</summary>
```json
{
  "id": 902,
  "name": "WifiInteractions",
  "kind": 32,
  "kindString": "Variable",
  "flags": {
    "isConst": true
  },
  "sources": [
    {
      "fileName": "WifiAccessibility.ts",
      "line": 6,
      "character": 13,
      "url": "https://github.com/sozialhelden/a11yjson/blob/aa801f9/src/WifiAccessibility.ts#L6"
    }
  ],
  "type": {
    "type": "typeOperator",
    "operator": "readonly",
    "target": {
      "type": "tuple",
      "elements": [
        {
          "type": "literal",
          "value": "login"
        },
        {
          "type": "literal",
          "value": "register"
        },
        {
          "type": "literal",
          "value": "getPassword"
        },
        {
          "type": "literal",
          "value": "getGuestPass"
        },
        {
          "type": "literal",
          "value": "getTerms"
        },
        {
          "type": "literal",
          "value": "acceptTerms"
        }
      ]
    }
  },
  "defaultValue": "..."
}
```
</details>


Read-only tuple with 6 strings:
<ul>
<li>`login`</li>

<li>`register`</li>

<li>`getPassword`</li>

<li>`getGuestPass`</li>

<li>`getTerms`</li>

<li>`acceptTerms`</li>
</ul>

