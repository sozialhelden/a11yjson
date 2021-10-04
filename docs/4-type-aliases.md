# Type Aliases

Besides [interfaces](./3-interfaces.md], A11yJSON defines the following bare types.

Some lack proper formatting in the documentation. Fixes in [`tools/generate-overview.ts`](https://github.com/sozialhelden/a11yjson/blob/master/tools/generate-overview.ts) are welcome!

### <a id="A11yRating">A11yRating</a>



Definition: <code>"yes"</code>&nbsp;|&nbsp;<code>"no"</code>&nbsp;|&nbsp;<code>"partial"</code>&nbsp;|&nbsp;<code>"unknown"</code>



### <a id="Address">Address</a>

A union type between StructuredAddress and string

Definition: <a href="#StructuredAddress">StructuredAddress</a>&nbsp;|&nbsp;<code>string</code>



### <a id="AndRule">AndRule</a>



Definition: <pre>{
  "id": 578,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 579,
      "name": "$and",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/rules/RatingRules.ts",
          "line": 40,
          "character": 6
        }
      ],
      "type": {
        "type": "reference",
        "name": "ReadonlyArray",
        "typeArguments": [
          {
            "type": "reference",
            "name": "Rule",
            "id": 580
          }
        ]
      }
    }
  ],
  "groups": [
    {
      "title": "Variables",
      "kind": 32,
      "children": [
        579
      ]
    }
  ],
  "sources": [
    {
      "fileName": "src/rules/RatingRules.ts",
      "line": 39,
      "character": 14
    }
  ]
}</pre>



### <a id="Comparable">Comparable</a>



Definition: <code>number</code>&nbsp;|&nbsp;<code>string</code>&nbsp;|&nbsp;<a href="#Quantity">Quantity</a>



### <a id="DefinedValue">DefinedValue</a>



Definition: <pre>{
  "id": 549,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 550,
      "name": "$defined",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/rules/RatingRules.ts",
          "line": 11,
          "character": 30
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "true"
      }
    }
  ],
  "groups": [
    {
      "title": "Variables",
      "kind": 32,
      "children": [
        550
      ]
    }
  ],
  "sources": [
    {
      "fileName": "src/rules/RatingRules.ts",
      "line": 11,
      "character": 19
    }
  ]
}</pre>



### <a id="Equals">Equals</a>



Definition: <pre>{
  "id": 564,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 565,
      "name": "$eq",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/rules/RatingRules.ts",
          "line": 16,
          "character": 19
        }
      ],
      "type": {
        "type": "reference",
        "name": "Comparable",
        "id": 541
      }
    }
  ],
  "groups": [
    {
      "title": "Variables",
      "kind": 32,
      "children": [
        565
      ]
    }
  ],
  "sources": [
    {
      "fileName": "src/rules/RatingRules.ts",
      "line": 16,
      "character": 13
    }
  ]
}</pre>



### <a id="EquipmentTypes">EquipmentTypes</a>



Definition: <code>"bed"</code>&nbsp;|&nbsp;<code>"wardrobe"</code>&nbsp;|&nbsp;<code>"elevator"</code>&nbsp;|&nbsp;<code>"escalator"</code>&nbsp;|&nbsp;<code>"movingWalkway"</code>&nbsp;|&nbsp;<code>"ramp"</code>&nbsp;|&nbsp;<code>"hoist"</code>&nbsp;|&nbsp;<code>"stairLift"</code>&nbsp;|&nbsp;<code>"switch"</code>&nbsp;|&nbsp;<code>"sitemap"</code>&nbsp;|&nbsp;<code>"vendingMachine"</code>&nbsp;|&nbsp;<code>"intercom"</code>&nbsp;|&nbsp;<code>"powerOutlet"</code>



### <a id="ExistsValue">ExistsValue</a>



Definition: <pre>{
  "id": 543,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 544,
      "name": "$exists",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/rules/RatingRules.ts",
          "line": 7,
          "character": 28
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
      "title": "Variables",
      "kind": 32,
      "children": [
        544
      ]
    }
  ],
  "sources": [
    {
      "fileName": "src/rules/RatingRules.ts",
      "line": 7,
      "character": 18
    }
  ]
}</pre>



### <a id="ExtendedSchema">ExtendedSchema</a>



Definition: {"type":"intersection","types":[{"type":"reflection","declaration":{"id":70,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"children":[{"id":71,"name":"__schemaType","kind":32,"kindString":"Variable","flags":{},"sources":[{"fileName":"src/SimpleSchemaExtensions.ts","line":155,"character":14}],"type":{"type":"intrinsic","name":"string"}},{"id":72,"name":"__schemaVersion","kind":32,"kindString":"Variable","flags":{},"sources":[{"fileName":"src/SimpleSchemaExtensions.ts","line":156,"character":17}],"type":{"type":"intrinsic","name":"string"}}],"groups":[{"title":"Variables","kind":32,"children":[71,72]}],"sources":[{"fileName":"src/SimpleSchemaExtensions.ts","line":154,"character":28}]}},{"type":"reference","name":"SimpleSchema"}]}



### <a id="FieldTypes">FieldTypes</a>



Definition: <code>"yesno"</code>&nbsp;|&nbsp;<code>"float"</code>&nbsp;|&nbsp;<code>"int"</code>



### <a id="Geometry">Geometry</a>



Definition: <a href="#PointGeometry">PointGeometry</a>



### <a id="GreaterThan">GreaterThan</a>



Definition: <pre>{
  "id": 558,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 559,
      "name": "$gt",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/rules/RatingRules.ts",
          "line": 14,
          "character": 24
        }
      ],
      "type": {
        "type": "reference",
        "name": "Comparable",
        "id": 541
      }
    }
  ],
  "groups": [
    {
      "title": "Variables",
      "kind": 32,
      "children": [
        559
      ]
    }
  ],
  "sources": [
    {
      "fileName": "src/rules/RatingRules.ts",
      "line": 14,
      "character": 18
    }
  ]
}</pre>



### <a id="GreaterThanEquals">GreaterThanEquals</a>



Definition: <pre>{
  "id": 561,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 562,
      "name": "$gte",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/rules/RatingRules.ts",
          "line": 15,
          "character": 31
        }
      ],
      "type": {
        "type": "reference",
        "name": "Comparable",
        "id": 541
      }
    }
  ],
  "groups": [
    {
      "title": "Variables",
      "kind": 32,
      "children": [
        562
      ]
    }
  ],
  "sources": [
    {
      "fileName": "src/rules/RatingRules.ts",
      "line": 15,
      "character": 24
    }
  ]
}</pre>



### <a id="IetfLanguageTag">IetfLanguageTag</a>



Definition: <code>"af"</code>&nbsp;|&nbsp;<code>"af-NA"</code>&nbsp;|&nbsp;<code>"af-ZA"</code>&nbsp;|&nbsp;<code>"agq"</code>&nbsp;|&nbsp;<code>"agq-CM"</code>&nbsp;|&nbsp;<code>"ak"</code>&nbsp;|&nbsp;<code>"ak-GH"</code>&nbsp;|&nbsp;<code>"am"</code>&nbsp;|&nbsp;<code>"am-ET"</code>&nbsp;|&nbsp;<code>"ar"</code>&nbsp;|&nbsp;<code>"ar-001"</code>&nbsp;|&nbsp;<code>"ar-AE"</code>&nbsp;|&nbsp;<code>"ar-BH"</code>&nbsp;|&nbsp;<code>"ar-DJ"</code>&nbsp;|&nbsp;<code>"ar-DZ"</code>&nbsp;|&nbsp;<code>"ar-EG"</code>&nbsp;|&nbsp;<code>"ar-EH"</code>&nbsp;|&nbsp;<code>"ar-ER"</code>&nbsp;|&nbsp;<code>"ar-IL"</code>&nbsp;|&nbsp;<code>"ar-IQ"</code>&nbsp;|&nbsp;<code>"ar-JO"</code>&nbsp;|&nbsp;<code>"ar-KM"</code>&nbsp;|&nbsp;<code>"ar-KW"</code>&nbsp;|&nbsp;<code>"ar-LB"</code>&nbsp;|&nbsp;<code>"ar-LY"</code>&nbsp;|&nbsp;<code>"ar-MA"</code>&nbsp;|&nbsp;<code>"ar-MR"</code>&nbsp;|&nbsp;<code>"ar-OM"</code>&nbsp;|&nbsp;<code>"ar-PS"</code>&nbsp;|&nbsp;<code>"ar-QA"</code>&nbsp;|&nbsp;<code>"ar-SA"</code>&nbsp;|&nbsp;<code>"ar-SD"</code>&nbsp;|&nbsp;<code>"ar-SO"</code>&nbsp;|&nbsp;<code>"ar-SS"</code>&nbsp;|&nbsp;<code>"ar-SY"</code>&nbsp;|&nbsp;<code>"ar-TD"</code>&nbsp;|&nbsp;<code>"ar-TN"</code>&nbsp;|&nbsp;<code>"ar-YE"</code>&nbsp;|&nbsp;<code>"as"</code>&nbsp;|&nbsp;<code>"as-IN"</code>&nbsp;|&nbsp;<code>"asa"</code>&nbsp;|&nbsp;<code>"asa-TZ"</code>&nbsp;|&nbsp;<code>"ast"</code>&nbsp;|&nbsp;<code>"ast-ES"</code>&nbsp;|&nbsp;<code>"az"</code>&nbsp;|&nbsp;<code>"az-Cyrl"</code>&nbsp;|&nbsp;<code>"az-Cyrl-AZ"</code>&nbsp;|&nbsp;<code>"az-Latn"</code>&nbsp;|&nbsp;<code>"az-Latn-AZ"</code>&nbsp;|&nbsp;<code>"bas"</code>&nbsp;|&nbsp;<code>"bas-CM"</code>&nbsp;|&nbsp;<code>"be"</code>&nbsp;|&nbsp;<code>"be-BY"</code>&nbsp;|&nbsp;<code>"bem"</code>&nbsp;|&nbsp;<code>"bem-ZM"</code>&nbsp;|&nbsp;<code>"bez"</code>&nbsp;|&nbsp;<code>"bez-TZ"</code>&nbsp;|&nbsp;<code>"bg"</code>&nbsp;|&nbsp;<code>"bg-BG"</code>&nbsp;|&nbsp;<code>"bm"</code>&nbsp;|&nbsp;<code>"bm-ML"</code>&nbsp;|&nbsp;<code>"bn"</code>&nbsp;|&nbsp;<code>"bn-BD"</code>&nbsp;|&nbsp;<code>"bn-IN"</code>&nbsp;|&nbsp;<code>"bo"</code>&nbsp;|&nbsp;<code>"bo-CN"</code>&nbsp;|&nbsp;<code>"bo-IN"</code>&nbsp;|&nbsp;<code>"br"</code>&nbsp;|&nbsp;<code>"br-FR"</code>&nbsp;|&nbsp;<code>"brx"</code>&nbsp;|&nbsp;<code>"brx-IN"</code>&nbsp;|&nbsp;<code>"bs"</code>&nbsp;|&nbsp;<code>"bs-Cyrl"</code>&nbsp;|&nbsp;<code>"bs-Cyrl-BA"</code>&nbsp;|&nbsp;<code>"bs-Latn"</code>&nbsp;|&nbsp;<code>"bs-Latn-BA"</code>&nbsp;|&nbsp;<code>"ca"</code>&nbsp;|&nbsp;<code>"ca-AD"</code>&nbsp;|&nbsp;<code>"ca-ES"</code>&nbsp;|&nbsp;<code>"ca-ES-VALENCIA"</code>&nbsp;|&nbsp;<code>"ca-FR"</code>&nbsp;|&nbsp;<code>"ca-IT"</code>&nbsp;|&nbsp;<code>"ccp"</code>&nbsp;|&nbsp;<code>"ccp-BD"</code>&nbsp;|&nbsp;<code>"ccp-IN"</code>&nbsp;|&nbsp;<code>"ce"</code>&nbsp;|&nbsp;<code>"ce-RU"</code>&nbsp;|&nbsp;<code>"cgg"</code>&nbsp;|&nbsp;<code>"cgg-UG"</code>&nbsp;|&nbsp;<code>"chr"</code>&nbsp;|&nbsp;<code>"chr-US"</code>&nbsp;|&nbsp;<code>"ckb"</code>&nbsp;|&nbsp;<code>"ckb-IQ"</code>&nbsp;|&nbsp;<code>"ckb-IR"</code>&nbsp;|&nbsp;<code>"cs"</code>&nbsp;|&nbsp;<code>"cs-CZ"</code>&nbsp;|&nbsp;<code>"cu"</code>&nbsp;|&nbsp;<code>"cu-RU"</code>&nbsp;|&nbsp;<code>"cy"</code>&nbsp;|&nbsp;<code>"cy-GB"</code>&nbsp;|&nbsp;<code>"da"</code>&nbsp;|&nbsp;<code>"da-DK"</code>&nbsp;|&nbsp;<code>"da-GL"</code>&nbsp;|&nbsp;<code>"dav"</code>&nbsp;|&nbsp;<code>"dav-KE"</code>&nbsp;|&nbsp;<code>"de"</code>&nbsp;|&nbsp;<code>"de-AT"</code>&nbsp;|&nbsp;<code>"de-BE"</code>&nbsp;|&nbsp;<code>"de-CH"</code>&nbsp;|&nbsp;<code>"de-DE"</code>&nbsp;|&nbsp;<code>"de-IT"</code>&nbsp;|&nbsp;<code>"de-LI"</code>&nbsp;|&nbsp;<code>"de-LU"</code>&nbsp;|&nbsp;<code>"dje"</code>&nbsp;|&nbsp;<code>"dje-NE"</code>&nbsp;|&nbsp;<code>"dsb"</code>&nbsp;|&nbsp;<code>"dsb-DE"</code>&nbsp;|&nbsp;<code>"dua"</code>&nbsp;|&nbsp;<code>"dua-CM"</code>&nbsp;|&nbsp;<code>"dyo"</code>&nbsp;|&nbsp;<code>"dyo-SN"</code>&nbsp;|&nbsp;<code>"dz"</code>&nbsp;|&nbsp;<code>"dz-BT"</code>&nbsp;|&nbsp;<code>"ebu"</code>&nbsp;|&nbsp;<code>"ebu-KE"</code>&nbsp;|&nbsp;<code>"ee"</code>&nbsp;|&nbsp;<code>"ee-GH"</code>&nbsp;|&nbsp;<code>"ee-TG"</code>&nbsp;|&nbsp;<code>"el"</code>&nbsp;|&nbsp;<code>"el-CY"</code>&nbsp;|&nbsp;<code>"el-GR"</code>&nbsp;|&nbsp;<code>"en"</code>&nbsp;|&nbsp;<code>"en-001"</code>&nbsp;|&nbsp;<code>"en-150"</code>&nbsp;|&nbsp;<code>"en-AG"</code>&nbsp;|&nbsp;<code>"en-AI"</code>&nbsp;|&nbsp;<code>"en-AS"</code>&nbsp;|&nbsp;<code>"en-AT"</code>&nbsp;|&nbsp;<code>"en-AU"</code>&nbsp;|&nbsp;<code>"en-BB"</code>&nbsp;|&nbsp;<code>"en-BE"</code>&nbsp;|&nbsp;<code>"en-BI"</code>&nbsp;|&nbsp;<code>"en-BM"</code>&nbsp;|&nbsp;<code>"en-BS"</code>&nbsp;|&nbsp;<code>"en-BW"</code>&nbsp;|&nbsp;<code>"en-BZ"</code>&nbsp;|&nbsp;<code>"en-CA"</code>&nbsp;|&nbsp;<code>"en-CC"</code>&nbsp;|&nbsp;<code>"en-CH"</code>&nbsp;|&nbsp;<code>"en-CK"</code>&nbsp;|&nbsp;<code>"en-CM"</code>&nbsp;|&nbsp;<code>"en-CX"</code>&nbsp;|&nbsp;<code>"en-CY"</code>&nbsp;|&nbsp;<code>"en-DE"</code>&nbsp;|&nbsp;<code>"en-DG"</code>&nbsp;|&nbsp;<code>"en-DK"</code>&nbsp;|&nbsp;<code>"en-DM"</code>&nbsp;|&nbsp;<code>"en-ER"</code>&nbsp;|&nbsp;<code>"en-FI"</code>&nbsp;|&nbsp;<code>"en-FJ"</code>&nbsp;|&nbsp;<code>"en-FK"</code>&nbsp;|&nbsp;<code>"en-FM"</code>&nbsp;|&nbsp;<code>"en-GB"</code>&nbsp;|&nbsp;<code>"en-GD"</code>&nbsp;|&nbsp;<code>"en-GG"</code>&nbsp;|&nbsp;<code>"en-GH"</code>&nbsp;|&nbsp;<code>"en-GI"</code>&nbsp;|&nbsp;<code>"en-GM"</code>&nbsp;|&nbsp;<code>"en-GU"</code>&nbsp;|&nbsp;<code>"en-GY"</code>&nbsp;|&nbsp;<code>"en-HK"</code>&nbsp;|&nbsp;<code>"en-IE"</code>&nbsp;|&nbsp;<code>"en-IL"</code>&nbsp;|&nbsp;<code>"en-IM"</code>&nbsp;|&nbsp;<code>"en-IN"</code>&nbsp;|&nbsp;<code>"en-IO"</code>&nbsp;|&nbsp;<code>"en-JE"</code>&nbsp;|&nbsp;<code>"en-JM"</code>&nbsp;|&nbsp;<code>"en-KE"</code>&nbsp;|&nbsp;<code>"en-KI"</code>&nbsp;|&nbsp;<code>"en-KN"</code>&nbsp;|&nbsp;<code>"en-KY"</code>&nbsp;|&nbsp;<code>"en-LC"</code>&nbsp;|&nbsp;<code>"en-LR"</code>&nbsp;|&nbsp;<code>"en-LS"</code>&nbsp;|&nbsp;<code>"en-MG"</code>&nbsp;|&nbsp;<code>"en-MH"</code>&nbsp;|&nbsp;<code>"en-MO"</code>&nbsp;|&nbsp;<code>"en-MP"</code>&nbsp;|&nbsp;<code>"en-MS"</code>&nbsp;|&nbsp;<code>"en-MT"</code>&nbsp;|&nbsp;<code>"en-MU"</code>&nbsp;|&nbsp;<code>"en-MW"</code>&nbsp;|&nbsp;<code>"en-MY"</code>&nbsp;|&nbsp;<code>"en-NA"</code>&nbsp;|&nbsp;<code>"en-NF"</code>&nbsp;|&nbsp;<code>"en-NG"</code>&nbsp;|&nbsp;<code>"en-NL"</code>&nbsp;|&nbsp;<code>"en-NR"</code>&nbsp;|&nbsp;<code>"en-NU"</code>&nbsp;|&nbsp;<code>"en-NZ"</code>&nbsp;|&nbsp;<code>"en-PG"</code>&nbsp;|&nbsp;<code>"en-PH"</code>&nbsp;|&nbsp;<code>"en-PK"</code>&nbsp;|&nbsp;<code>"en-PN"</code>&nbsp;|&nbsp;<code>"en-PR"</code>&nbsp;|&nbsp;<code>"en-PW"</code>&nbsp;|&nbsp;<code>"en-RW"</code>&nbsp;|&nbsp;<code>"en-SB"</code>&nbsp;|&nbsp;<code>"en-SC"</code>&nbsp;|&nbsp;<code>"en-SD"</code>&nbsp;|&nbsp;<code>"en-SE"</code>&nbsp;|&nbsp;<code>"en-SG"</code>&nbsp;|&nbsp;<code>"en-SH"</code>&nbsp;|&nbsp;<code>"en-SI"</code>&nbsp;|&nbsp;<code>"en-SL"</code>&nbsp;|&nbsp;<code>"en-SS"</code>&nbsp;|&nbsp;<code>"en-SX"</code>&nbsp;|&nbsp;<code>"en-SZ"</code>&nbsp;|&nbsp;<code>"en-TC"</code>&nbsp;|&nbsp;<code>"en-TK"</code>&nbsp;|&nbsp;<code>"en-TO"</code>&nbsp;|&nbsp;<code>"en-TT"</code>&nbsp;|&nbsp;<code>"en-TV"</code>&nbsp;|&nbsp;<code>"en-TZ"</code>&nbsp;|&nbsp;<code>"en-UG"</code>&nbsp;|&nbsp;<code>"en-UM"</code>&nbsp;|&nbsp;<code>"en-US"</code>&nbsp;|&nbsp;<code>"en-US-POSIX"</code>&nbsp;|&nbsp;<code>"en-VC"</code>&nbsp;|&nbsp;<code>"en-VG"</code>&nbsp;|&nbsp;<code>"en-VI"</code>&nbsp;|&nbsp;<code>"en-VU"</code>&nbsp;|&nbsp;<code>"en-WS"</code>&nbsp;|&nbsp;<code>"en-ZA"</code>&nbsp;|&nbsp;<code>"en-ZM"</code>&nbsp;|&nbsp;<code>"en-ZW"</code>&nbsp;|&nbsp;<code>"eo"</code>&nbsp;|&nbsp;<code>"eo-001"</code>&nbsp;|&nbsp;<code>"es"</code>&nbsp;|&nbsp;<code>"es-419"</code>&nbsp;|&nbsp;<code>"es-AR"</code>&nbsp;|&nbsp;<code>"es-BO"</code>&nbsp;|&nbsp;<code>"es-BR"</code>&nbsp;|&nbsp;<code>"es-BZ"</code>&nbsp;|&nbsp;<code>"es-CL"</code>&nbsp;|&nbsp;<code>"es-CO"</code>&nbsp;|&nbsp;<code>"es-CR"</code>&nbsp;|&nbsp;<code>"es-CU"</code>&nbsp;|&nbsp;<code>"es-DO"</code>&nbsp;|&nbsp;<code>"es-EA"</code>&nbsp;|&nbsp;<code>"es-EC"</code>&nbsp;|&nbsp;<code>"es-ES"</code>&nbsp;|&nbsp;<code>"es-GQ"</code>&nbsp;|&nbsp;<code>"es-GT"</code>&nbsp;|&nbsp;<code>"es-HN"</code>&nbsp;|&nbsp;<code>"es-IC"</code>&nbsp;|&nbsp;<code>"es-MX"</code>&nbsp;|&nbsp;<code>"es-NI"</code>&nbsp;|&nbsp;<code>"es-PA"</code>&nbsp;|&nbsp;<code>"es-PE"</code>&nbsp;|&nbsp;<code>"es-PH"</code>&nbsp;|&nbsp;<code>"es-PR"</code>&nbsp;|&nbsp;<code>"es-PY"</code>&nbsp;|&nbsp;<code>"es-SV"</code>&nbsp;|&nbsp;<code>"es-US"</code>&nbsp;|&nbsp;<code>"es-UY"</code>&nbsp;|&nbsp;<code>"es-VE"</code>&nbsp;|&nbsp;<code>"et"</code>&nbsp;|&nbsp;<code>"et-EE"</code>&nbsp;|&nbsp;<code>"eu"</code>&nbsp;|&nbsp;<code>"eu-ES"</code>&nbsp;|&nbsp;<code>"ewo"</code>&nbsp;|&nbsp;<code>"ewo-CM"</code>&nbsp;|&nbsp;<code>"fa"</code>&nbsp;|&nbsp;<code>"fa-AF"</code>&nbsp;|&nbsp;<code>"fa-IR"</code>&nbsp;|&nbsp;<code>"ff"</code>&nbsp;|&nbsp;<code>"ff-Latn"</code>&nbsp;|&nbsp;<code>"ff-Latn-BF"</code>&nbsp;|&nbsp;<code>"ff-Latn-CM"</code>&nbsp;|&nbsp;<code>"ff-Latn-GH"</code>&nbsp;|&nbsp;<code>"ff-Latn-GM"</code>&nbsp;|&nbsp;<code>"ff-Latn-GN"</code>&nbsp;|&nbsp;<code>"ff-Latn-GW"</code>&nbsp;|&nbsp;<code>"ff-Latn-LR"</code>&nbsp;|&nbsp;<code>"ff-Latn-MR"</code>&nbsp;|&nbsp;<code>"ff-Latn-NE"</code>&nbsp;|&nbsp;<code>"ff-Latn-NG"</code>&nbsp;|&nbsp;<code>"ff-Latn-SL"</code>&nbsp;|&nbsp;<code>"ff-Latn-SN"</code>&nbsp;|&nbsp;<code>"fi"</code>&nbsp;|&nbsp;<code>"fi-FI"</code>&nbsp;|&nbsp;<code>"fil"</code>&nbsp;|&nbsp;<code>"fil-PH"</code>&nbsp;|&nbsp;<code>"fo"</code>&nbsp;|&nbsp;<code>"fo-DK"</code>&nbsp;|&nbsp;<code>"fo-FO"</code>&nbsp;|&nbsp;<code>"fr"</code>&nbsp;|&nbsp;<code>"fr-BE"</code>&nbsp;|&nbsp;<code>"fr-BF"</code>&nbsp;|&nbsp;<code>"fr-BI"</code>&nbsp;|&nbsp;<code>"fr-BJ"</code>&nbsp;|&nbsp;<code>"fr-BL"</code>&nbsp;|&nbsp;<code>"fr-CA"</code>&nbsp;|&nbsp;<code>"fr-CD"</code>&nbsp;|&nbsp;<code>"fr-CF"</code>&nbsp;|&nbsp;<code>"fr-CG"</code>&nbsp;|&nbsp;<code>"fr-CH"</code>&nbsp;|&nbsp;<code>"fr-CI"</code>&nbsp;|&nbsp;<code>"fr-CM"</code>&nbsp;|&nbsp;<code>"fr-DJ"</code>&nbsp;|&nbsp;<code>"fr-DZ"</code>&nbsp;|&nbsp;<code>"fr-FR"</code>&nbsp;|&nbsp;<code>"fr-GA"</code>&nbsp;|&nbsp;<code>"fr-GF"</code>&nbsp;|&nbsp;<code>"fr-GN"</code>&nbsp;|&nbsp;<code>"fr-GP"</code>&nbsp;|&nbsp;<code>"fr-GQ"</code>&nbsp;|&nbsp;<code>"fr-HT"</code>&nbsp;|&nbsp;<code>"fr-KM"</code>&nbsp;|&nbsp;<code>"fr-LU"</code>&nbsp;|&nbsp;<code>"fr-MA"</code>&nbsp;|&nbsp;<code>"fr-MC"</code>&nbsp;|&nbsp;<code>"fr-MF"</code>&nbsp;|&nbsp;<code>"fr-MG"</code>&nbsp;|&nbsp;<code>"fr-ML"</code>&nbsp;|&nbsp;<code>"fr-MQ"</code>&nbsp;|&nbsp;<code>"fr-MR"</code>&nbsp;|&nbsp;<code>"fr-MU"</code>&nbsp;|&nbsp;<code>"fr-NC"</code>&nbsp;|&nbsp;<code>"fr-NE"</code>&nbsp;|&nbsp;<code>"fr-PF"</code>&nbsp;|&nbsp;<code>"fr-PM"</code>&nbsp;|&nbsp;<code>"fr-RE"</code>&nbsp;|&nbsp;<code>"fr-RW"</code>&nbsp;|&nbsp;<code>"fr-SC"</code>&nbsp;|&nbsp;<code>"fr-SN"</code>&nbsp;|&nbsp;<code>"fr-SY"</code>&nbsp;|&nbsp;<code>"fr-TD"</code>&nbsp;|&nbsp;<code>"fr-TG"</code>&nbsp;|&nbsp;<code>"fr-TN"</code>&nbsp;|&nbsp;<code>"fr-VU"</code>&nbsp;|&nbsp;<code>"fr-WF"</code>&nbsp;|&nbsp;<code>"fr-YT"</code>&nbsp;|&nbsp;<code>"fur"</code>&nbsp;|&nbsp;<code>"fur-IT"</code>&nbsp;|&nbsp;<code>"fy"</code>&nbsp;|&nbsp;<code>"fy-NL"</code>&nbsp;|&nbsp;<code>"ga"</code>&nbsp;|&nbsp;<code>"ga-IE"</code>&nbsp;|&nbsp;<code>"gd"</code>&nbsp;|&nbsp;<code>"gd-GB"</code>&nbsp;|&nbsp;<code>"gl"</code>&nbsp;|&nbsp;<code>"gl-ES"</code>&nbsp;|&nbsp;<code>"gsw"</code>&nbsp;|&nbsp;<code>"gsw-CH"</code>&nbsp;|&nbsp;<code>"gsw-FR"</code>&nbsp;|&nbsp;<code>"gsw-LI"</code>&nbsp;|&nbsp;<code>"gu"</code>&nbsp;|&nbsp;<code>"gu-IN"</code>&nbsp;|&nbsp;<code>"guz"</code>&nbsp;|&nbsp;<code>"guz-KE"</code>&nbsp;|&nbsp;<code>"gv"</code>&nbsp;|&nbsp;<code>"gv-IM"</code>&nbsp;|&nbsp;<code>"ha"</code>&nbsp;|&nbsp;<code>"ha-GH"</code>&nbsp;|&nbsp;<code>"ha-NE"</code>&nbsp;|&nbsp;<code>"ha-NG"</code>&nbsp;|&nbsp;<code>"haw"</code>&nbsp;|&nbsp;<code>"haw-US"</code>&nbsp;|&nbsp;<code>"he"</code>&nbsp;|&nbsp;<code>"he-IL"</code>&nbsp;|&nbsp;<code>"hi"</code>&nbsp;|&nbsp;<code>"hi-IN"</code>&nbsp;|&nbsp;<code>"hr"</code>&nbsp;|&nbsp;<code>"hr-BA"</code>&nbsp;|&nbsp;<code>"hr-HR"</code>&nbsp;|&nbsp;<code>"hsb"</code>&nbsp;|&nbsp;<code>"hsb-DE"</code>&nbsp;|&nbsp;<code>"hu"</code>&nbsp;|&nbsp;<code>"hu-HU"</code>&nbsp;|&nbsp;<code>"hy"</code>&nbsp;|&nbsp;<code>"hy-AM"</code>&nbsp;|&nbsp;<code>"ia"</code>&nbsp;|&nbsp;<code>"ia-001"</code>&nbsp;|&nbsp;<code>"id"</code>&nbsp;|&nbsp;<code>"id-ID"</code>&nbsp;|&nbsp;<code>"ig"</code>&nbsp;|&nbsp;<code>"ig-NG"</code>&nbsp;|&nbsp;<code>"ii"</code>&nbsp;|&nbsp;<code>"ii-CN"</code>&nbsp;|&nbsp;<code>"is"</code>&nbsp;|&nbsp;<code>"is-IS"</code>&nbsp;|&nbsp;<code>"it"</code>&nbsp;|&nbsp;<code>"it-CH"</code>&nbsp;|&nbsp;<code>"it-IT"</code>&nbsp;|&nbsp;<code>"it-SM"</code>&nbsp;|&nbsp;<code>"it-VA"</code>&nbsp;|&nbsp;<code>"ja"</code>&nbsp;|&nbsp;<code>"ja-JP"</code>&nbsp;|&nbsp;<code>"jgo"</code>&nbsp;|&nbsp;<code>"jgo-CM"</code>&nbsp;|&nbsp;<code>"jmc"</code>&nbsp;|&nbsp;<code>"jmc-TZ"</code>&nbsp;|&nbsp;<code>"jv"</code>&nbsp;|&nbsp;<code>"jv-ID"</code>&nbsp;|&nbsp;<code>"ka"</code>&nbsp;|&nbsp;<code>"ka-GE"</code>&nbsp;|&nbsp;<code>"kab"</code>&nbsp;|&nbsp;<code>"kab-DZ"</code>&nbsp;|&nbsp;<code>"kam"</code>&nbsp;|&nbsp;<code>"kam-KE"</code>&nbsp;|&nbsp;<code>"kde"</code>&nbsp;|&nbsp;<code>"kde-TZ"</code>&nbsp;|&nbsp;<code>"kea"</code>&nbsp;|&nbsp;<code>"kea-CV"</code>&nbsp;|&nbsp;<code>"khq"</code>&nbsp;|&nbsp;<code>"khq-ML"</code>&nbsp;|&nbsp;<code>"ki"</code>&nbsp;|&nbsp;<code>"ki-KE"</code>&nbsp;|&nbsp;<code>"kk"</code>&nbsp;|&nbsp;<code>"kk-KZ"</code>&nbsp;|&nbsp;<code>"kkj"</code>&nbsp;|&nbsp;<code>"kkj-CM"</code>&nbsp;|&nbsp;<code>"kl"</code>&nbsp;|&nbsp;<code>"kl-GL"</code>&nbsp;|&nbsp;<code>"kln"</code>&nbsp;|&nbsp;<code>"kln-KE"</code>&nbsp;|&nbsp;<code>"km"</code>&nbsp;|&nbsp;<code>"km-KH"</code>&nbsp;|&nbsp;<code>"kn"</code>&nbsp;|&nbsp;<code>"kn-IN"</code>&nbsp;|&nbsp;<code>"ko"</code>&nbsp;|&nbsp;<code>"ko-KP"</code>&nbsp;|&nbsp;<code>"ko-KR"</code>&nbsp;|&nbsp;<code>"kok"</code>&nbsp;|&nbsp;<code>"kok-IN"</code>&nbsp;|&nbsp;<code>"ks"</code>&nbsp;|&nbsp;<code>"ks-IN"</code>&nbsp;|&nbsp;<code>"ksb"</code>&nbsp;|&nbsp;<code>"ksb-TZ"</code>&nbsp;|&nbsp;<code>"ksf"</code>&nbsp;|&nbsp;<code>"ksf-CM"</code>&nbsp;|&nbsp;<code>"ksh"</code>&nbsp;|&nbsp;<code>"ksh-DE"</code>&nbsp;|&nbsp;<code>"ku"</code>&nbsp;|&nbsp;<code>"ku-TR"</code>&nbsp;|&nbsp;<code>"kw"</code>&nbsp;|&nbsp;<code>"kw-GB"</code>&nbsp;|&nbsp;<code>"ky"</code>&nbsp;|&nbsp;<code>"ky-KG"</code>&nbsp;|&nbsp;<code>"lag"</code>&nbsp;|&nbsp;<code>"lag-TZ"</code>&nbsp;|&nbsp;<code>"lb"</code>&nbsp;|&nbsp;<code>"lb-LU"</code>&nbsp;|&nbsp;<code>"lg"</code>&nbsp;|&nbsp;<code>"lg-UG"</code>&nbsp;|&nbsp;<code>"lkt"</code>&nbsp;|&nbsp;<code>"lkt-US"</code>&nbsp;|&nbsp;<code>"ln"</code>&nbsp;|&nbsp;<code>"ln-AO"</code>&nbsp;|&nbsp;<code>"ln-CD"</code>&nbsp;|&nbsp;<code>"ln-CF"</code>&nbsp;|&nbsp;<code>"ln-CG"</code>&nbsp;|&nbsp;<code>"lo"</code>&nbsp;|&nbsp;<code>"lo-LA"</code>&nbsp;|&nbsp;<code>"lrc"</code>&nbsp;|&nbsp;<code>"lrc-IQ"</code>&nbsp;|&nbsp;<code>"lrc-IR"</code>&nbsp;|&nbsp;<code>"lt"</code>&nbsp;|&nbsp;<code>"lt-LT"</code>&nbsp;|&nbsp;<code>"lu"</code>&nbsp;|&nbsp;<code>"lu-CD"</code>&nbsp;|&nbsp;<code>"luo"</code>&nbsp;|&nbsp;<code>"luo-KE"</code>&nbsp;|&nbsp;<code>"luy"</code>&nbsp;|&nbsp;<code>"luy-KE"</code>&nbsp;|&nbsp;<code>"lv"</code>&nbsp;|&nbsp;<code>"lv-LV"</code>&nbsp;|&nbsp;<code>"mas"</code>&nbsp;|&nbsp;<code>"mas-KE"</code>&nbsp;|&nbsp;<code>"mas-TZ"</code>&nbsp;|&nbsp;<code>"mer"</code>&nbsp;|&nbsp;<code>"mer-KE"</code>&nbsp;|&nbsp;<code>"mfe"</code>&nbsp;|&nbsp;<code>"mfe-MU"</code>&nbsp;|&nbsp;<code>"mg"</code>&nbsp;|&nbsp;<code>"mg-MG"</code>&nbsp;|&nbsp;<code>"mgh"</code>&nbsp;|&nbsp;<code>"mgh-MZ"</code>&nbsp;|&nbsp;<code>"mgo"</code>&nbsp;|&nbsp;<code>"mgo-CM"</code>&nbsp;|&nbsp;<code>"mi"</code>&nbsp;|&nbsp;<code>"mi-NZ"</code>&nbsp;|&nbsp;<code>"mk"</code>&nbsp;|&nbsp;<code>"mk-MK"</code>&nbsp;|&nbsp;<code>"ml"</code>&nbsp;|&nbsp;<code>"ml-IN"</code>&nbsp;|&nbsp;<code>"mn"</code>&nbsp;|&nbsp;<code>"mn-MN"</code>&nbsp;|&nbsp;<code>"mr"</code>&nbsp;|&nbsp;<code>"mr-IN"</code>&nbsp;|&nbsp;<code>"ms"</code>&nbsp;|&nbsp;<code>"ms-BN"</code>&nbsp;|&nbsp;<code>"ms-MY"</code>&nbsp;|&nbsp;<code>"ms-SG"</code>&nbsp;|&nbsp;<code>"mt"</code>&nbsp;|&nbsp;<code>"mt-MT"</code>&nbsp;|&nbsp;<code>"mua"</code>&nbsp;|&nbsp;<code>"mua-CM"</code>&nbsp;|&nbsp;<code>"my"</code>&nbsp;|&nbsp;<code>"my-MM"</code>&nbsp;|&nbsp;<code>"mzn"</code>&nbsp;|&nbsp;<code>"mzn-IR"</code>&nbsp;|&nbsp;<code>"naq"</code>&nbsp;|&nbsp;<code>"naq-NA"</code>&nbsp;|&nbsp;<code>"nb"</code>&nbsp;|&nbsp;<code>"nb-NO"</code>&nbsp;|&nbsp;<code>"nb-SJ"</code>&nbsp;|&nbsp;<code>"nd"</code>&nbsp;|&nbsp;<code>"nd-ZW"</code>&nbsp;|&nbsp;<code>"nds"</code>&nbsp;|&nbsp;<code>"nds-DE"</code>&nbsp;|&nbsp;<code>"nds-NL"</code>&nbsp;|&nbsp;<code>"ne"</code>&nbsp;|&nbsp;<code>"ne-IN"</code>&nbsp;|&nbsp;<code>"ne-NP"</code>&nbsp;|&nbsp;<code>"nl"</code>&nbsp;|&nbsp;<code>"nl-AW"</code>&nbsp;|&nbsp;<code>"nl-BE"</code>&nbsp;|&nbsp;<code>"nl-BQ"</code>&nbsp;|&nbsp;<code>"nl-CW"</code>&nbsp;|&nbsp;<code>"nl-NL"</code>&nbsp;|&nbsp;<code>"nl-SR"</code>&nbsp;|&nbsp;<code>"nl-SX"</code>&nbsp;|&nbsp;<code>"nmg"</code>&nbsp;|&nbsp;<code>"nmg-CM"</code>&nbsp;|&nbsp;<code>"nn"</code>&nbsp;|&nbsp;<code>"nn-NO"</code>&nbsp;|&nbsp;<code>"nnh"</code>&nbsp;|&nbsp;<code>"nnh-CM"</code>&nbsp;|&nbsp;<code>"nus"</code>&nbsp;|&nbsp;<code>"nus-SS"</code>&nbsp;|&nbsp;<code>"nyn"</code>&nbsp;|&nbsp;<code>"nyn-UG"</code>&nbsp;|&nbsp;<code>"om"</code>&nbsp;|&nbsp;<code>"om-ET"</code>&nbsp;|&nbsp;<code>"om-KE"</code>&nbsp;|&nbsp;<code>"or"</code>&nbsp;|&nbsp;<code>"or-IN"</code>&nbsp;|&nbsp;<code>"os"</code>&nbsp;|&nbsp;<code>"os-GE"</code>&nbsp;|&nbsp;<code>"os-RU"</code>&nbsp;|&nbsp;<code>"pa"</code>&nbsp;|&nbsp;<code>"pa-Arab"</code>&nbsp;|&nbsp;<code>"pa-Arab-PK"</code>&nbsp;|&nbsp;<code>"pa-Guru"</code>&nbsp;|&nbsp;<code>"pa-Guru-IN"</code>&nbsp;|&nbsp;<code>"pl"</code>&nbsp;|&nbsp;<code>"pl-PL"</code>&nbsp;|&nbsp;<code>"prg"</code>&nbsp;|&nbsp;<code>"prg-001"</code>&nbsp;|&nbsp;<code>"ps"</code>&nbsp;|&nbsp;<code>"ps-AF"</code>&nbsp;|&nbsp;<code>"pt"</code>&nbsp;|&nbsp;<code>"pt-AO"</code>&nbsp;|&nbsp;<code>"pt-BR"</code>&nbsp;|&nbsp;<code>"pt-CH"</code>&nbsp;|&nbsp;<code>"pt-CV"</code>&nbsp;|&nbsp;<code>"pt-GQ"</code>&nbsp;|&nbsp;<code>"pt-GW"</code>&nbsp;|&nbsp;<code>"pt-LU"</code>&nbsp;|&nbsp;<code>"pt-MO"</code>&nbsp;|&nbsp;<code>"pt-MZ"</code>&nbsp;|&nbsp;<code>"pt-PT"</code>&nbsp;|&nbsp;<code>"pt-ST"</code>&nbsp;|&nbsp;<code>"pt-TL"</code>&nbsp;|&nbsp;<code>"qu"</code>&nbsp;|&nbsp;<code>"qu-BO"</code>&nbsp;|&nbsp;<code>"qu-EC"</code>&nbsp;|&nbsp;<code>"qu-PE"</code>&nbsp;|&nbsp;<code>"rm"</code>&nbsp;|&nbsp;<code>"rm-CH"</code>&nbsp;|&nbsp;<code>"rn"</code>&nbsp;|&nbsp;<code>"rn-BI"</code>&nbsp;|&nbsp;<code>"ro"</code>&nbsp;|&nbsp;<code>"ro-MD"</code>&nbsp;|&nbsp;<code>"ro-RO"</code>&nbsp;|&nbsp;<code>"rof"</code>&nbsp;|&nbsp;<code>"rof-TZ"</code>&nbsp;|&nbsp;<code>"root"</code>&nbsp;|&nbsp;<code>"ru"</code>&nbsp;|&nbsp;<code>"ru-BY"</code>&nbsp;|&nbsp;<code>"ru-KG"</code>&nbsp;|&nbsp;<code>"ru-KZ"</code>&nbsp;|&nbsp;<code>"ru-MD"</code>&nbsp;|&nbsp;<code>"ru-RU"</code>&nbsp;|&nbsp;<code>"ru-UA"</code>&nbsp;|&nbsp;<code>"rw"</code>&nbsp;|&nbsp;<code>"rw-RW"</code>&nbsp;|&nbsp;<code>"rwk"</code>&nbsp;|&nbsp;<code>"rwk-TZ"</code>&nbsp;|&nbsp;<code>"sah"</code>&nbsp;|&nbsp;<code>"sah-RU"</code>&nbsp;|&nbsp;<code>"saq"</code>&nbsp;|&nbsp;<code>"saq-KE"</code>&nbsp;|&nbsp;<code>"sbp"</code>&nbsp;|&nbsp;<code>"sbp-TZ"</code>&nbsp;|&nbsp;<code>"sd"</code>&nbsp;|&nbsp;<code>"sd-PK"</code>&nbsp;|&nbsp;<code>"se"</code>&nbsp;|&nbsp;<code>"se-FI"</code>&nbsp;|&nbsp;<code>"se-NO"</code>&nbsp;|&nbsp;<code>"se-SE"</code>&nbsp;|&nbsp;<code>"seh"</code>&nbsp;|&nbsp;<code>"seh-MZ"</code>&nbsp;|&nbsp;<code>"ses"</code>&nbsp;|&nbsp;<code>"ses-ML"</code>&nbsp;|&nbsp;<code>"sg"</code>&nbsp;|&nbsp;<code>"sg-CF"</code>&nbsp;|&nbsp;<code>"shi"</code>&nbsp;|&nbsp;<code>"shi-Latn"</code>&nbsp;|&nbsp;<code>"shi-Latn-MA"</code>&nbsp;|&nbsp;<code>"shi-Tfng"</code>&nbsp;|&nbsp;<code>"shi-Tfng-MA"</code>&nbsp;|&nbsp;<code>"si"</code>&nbsp;|&nbsp;<code>"si-LK"</code>&nbsp;|&nbsp;<code>"sk"</code>&nbsp;|&nbsp;<code>"sk-SK"</code>&nbsp;|&nbsp;<code>"sl"</code>&nbsp;|&nbsp;<code>"sl-SI"</code>&nbsp;|&nbsp;<code>"smn"</code>&nbsp;|&nbsp;<code>"smn-FI"</code>&nbsp;|&nbsp;<code>"sn"</code>&nbsp;|&nbsp;<code>"sn-ZW"</code>&nbsp;|&nbsp;<code>"so"</code>&nbsp;|&nbsp;<code>"so-DJ"</code>&nbsp;|&nbsp;<code>"so-ET"</code>&nbsp;|&nbsp;<code>"so-KE"</code>&nbsp;|&nbsp;<code>"so-SO"</code>&nbsp;|&nbsp;<code>"sq"</code>&nbsp;|&nbsp;<code>"sq-AL"</code>&nbsp;|&nbsp;<code>"sq-MK"</code>&nbsp;|&nbsp;<code>"sq-XK"</code>&nbsp;|&nbsp;<code>"sr"</code>&nbsp;|&nbsp;<code>"sr-Cyrl"</code>&nbsp;|&nbsp;<code>"sr-Cyrl-BA"</code>&nbsp;|&nbsp;<code>"sr-Cyrl-ME"</code>&nbsp;|&nbsp;<code>"sr-Cyrl-RS"</code>&nbsp;|&nbsp;<code>"sr-Cyrl-XK"</code>&nbsp;|&nbsp;<code>"sr-Latn"</code>&nbsp;|&nbsp;<code>"sr-Latn-BA"</code>&nbsp;|&nbsp;<code>"sr-Latn-ME"</code>&nbsp;|&nbsp;<code>"sr-Latn-RS"</code>&nbsp;|&nbsp;<code>"sr-Latn-XK"</code>&nbsp;|&nbsp;<code>"sv"</code>&nbsp;|&nbsp;<code>"sv-AX"</code>&nbsp;|&nbsp;<code>"sv-FI"</code>&nbsp;|&nbsp;<code>"sv-SE"</code>&nbsp;|&nbsp;<code>"sw"</code>&nbsp;|&nbsp;<code>"sw-CD"</code>&nbsp;|&nbsp;<code>"sw-KE"</code>&nbsp;|&nbsp;<code>"sw-TZ"</code>&nbsp;|&nbsp;<code>"sw-UG"</code>&nbsp;|&nbsp;<code>"ta"</code>&nbsp;|&nbsp;<code>"ta-IN"</code>&nbsp;|&nbsp;<code>"ta-LK"</code>&nbsp;|&nbsp;<code>"ta-MY"</code>&nbsp;|&nbsp;<code>"ta-SG"</code>&nbsp;|&nbsp;<code>"te"</code>&nbsp;|&nbsp;<code>"te-IN"</code>&nbsp;|&nbsp;<code>"teo"</code>&nbsp;|&nbsp;<code>"teo-KE"</code>&nbsp;|&nbsp;<code>"teo-UG"</code>&nbsp;|&nbsp;<code>"tg"</code>&nbsp;|&nbsp;<code>"tg-TJ"</code>&nbsp;|&nbsp;<code>"th"</code>&nbsp;|&nbsp;<code>"th-TH"</code>&nbsp;|&nbsp;<code>"ti"</code>&nbsp;|&nbsp;<code>"ti-ER"</code>&nbsp;|&nbsp;<code>"ti-ET"</code>&nbsp;|&nbsp;<code>"tk"</code>&nbsp;|&nbsp;<code>"tk-TM"</code>&nbsp;|&nbsp;<code>"to"</code>&nbsp;|&nbsp;<code>"to-TO"</code>&nbsp;|&nbsp;<code>"tr"</code>&nbsp;|&nbsp;<code>"tr-CY"</code>&nbsp;|&nbsp;<code>"tr-TR"</code>&nbsp;|&nbsp;<code>"tt"</code>&nbsp;|&nbsp;<code>"tt-RU"</code>&nbsp;|&nbsp;<code>"twq"</code>&nbsp;|&nbsp;<code>"twq-NE"</code>&nbsp;|&nbsp;<code>"tzm"</code>&nbsp;|&nbsp;<code>"tzm-MA"</code>&nbsp;|&nbsp;<code>"ug"</code>&nbsp;|&nbsp;<code>"ug-CN"</code>&nbsp;|&nbsp;<code>"uk"</code>&nbsp;|&nbsp;<code>"uk-UA"</code>&nbsp;|&nbsp;<code>"ur"</code>&nbsp;|&nbsp;<code>"ur-IN"</code>&nbsp;|&nbsp;<code>"ur-PK"</code>&nbsp;|&nbsp;<code>"uz"</code>&nbsp;|&nbsp;<code>"uz-Arab"</code>&nbsp;|&nbsp;<code>"uz-Arab-AF"</code>&nbsp;|&nbsp;<code>"uz-Cyrl"</code>&nbsp;|&nbsp;<code>"uz-Cyrl-UZ"</code>&nbsp;|&nbsp;<code>"uz-Latn"</code>&nbsp;|&nbsp;<code>"uz-Latn-UZ"</code>&nbsp;|&nbsp;<code>"vai"</code>&nbsp;|&nbsp;<code>"vai-Latn"</code>&nbsp;|&nbsp;<code>"vai-Latn-LR"</code>&nbsp;|&nbsp;<code>"vai-Vaii"</code>&nbsp;|&nbsp;<code>"vai-Vaii-LR"</code>&nbsp;|&nbsp;<code>"vi"</code>&nbsp;|&nbsp;<code>"vi-VN"</code>&nbsp;|&nbsp;<code>"vo"</code>&nbsp;|&nbsp;<code>"vo-001"</code>&nbsp;|&nbsp;<code>"vun"</code>&nbsp;|&nbsp;<code>"vun-TZ"</code>&nbsp;|&nbsp;<code>"wae"</code>&nbsp;|&nbsp;<code>"wae-CH"</code>&nbsp;|&nbsp;<code>"wo"</code>&nbsp;|&nbsp;<code>"wo-SN"</code>&nbsp;|&nbsp;<code>"xh"</code>&nbsp;|&nbsp;<code>"xh-ZA"</code>&nbsp;|&nbsp;<code>"xog"</code>&nbsp;|&nbsp;<code>"xog-UG"</code>&nbsp;|&nbsp;<code>"yav"</code>&nbsp;|&nbsp;<code>"yav-CM"</code>&nbsp;|&nbsp;<code>"yi"</code>&nbsp;|&nbsp;<code>"yi-001"</code>&nbsp;|&nbsp;<code>"yo"</code>&nbsp;|&nbsp;<code>"yo-BJ"</code>&nbsp;|&nbsp;<code>"yo-NG"</code>&nbsp;|&nbsp;<code>"yue"</code>&nbsp;|&nbsp;<code>"yue-Hans"</code>&nbsp;|&nbsp;<code>"yue-Hans-CN"</code>&nbsp;|&nbsp;<code>"yue-Hant"</code>&nbsp;|&nbsp;<code>"yue-Hant-HK"</code>&nbsp;|&nbsp;<code>"zgh"</code>&nbsp;|&nbsp;<code>"zgh-MA"</code>&nbsp;|&nbsp;<code>"zh"</code>&nbsp;|&nbsp;<code>"zh-Hans"</code>&nbsp;|&nbsp;<code>"zh-Hans-CN"</code>&nbsp;|&nbsp;<code>"zh-Hans-HK"</code>&nbsp;|&nbsp;<code>"zh-Hans-MO"</code>&nbsp;|&nbsp;<code>"zh-Hans-SG"</code>&nbsp;|&nbsp;<code>"zh-Hant"</code>&nbsp;|&nbsp;<code>"zh-Hant-HK"</code>&nbsp;|&nbsp;<code>"zh-Hant-MO"</code>&nbsp;|&nbsp;<code>"zh-Hant-TW"</code>&nbsp;|&nbsp;<code>"zu"</code>&nbsp;|&nbsp;<code>"zu-ZA"</code>



### <a id="IetfLanguageTagOrSignLanguageCode">IetfLanguageTagOrSignLanguageCode</a>

We assume that IETF language tags will be extended with sign language codes (as proposed by
http://www.evertype.com/standards/iso639/sign-language.html) eventually, so our language tags
support them already.

Definition: <a href="#IetfLanguageTag">IetfLanguageTag</a>&nbsp;|&nbsp;<a href="#SignLanguageCode">SignLanguageCode</a>



### <a id="KoboAttachment">KoboAttachment</a>



Definition: <pre>{
  "id": 672,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 674,
      "name": "download_url",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 12,
          "character": 14
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 675,
      "name": "filename",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 13,
          "character": 10
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 677,
      "name": "id",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 15,
          "character": 4
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "number"
      }
    },
    {
      "id": 676,
      "name": "instance",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 14,
          "character": 10
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "number"
      }
    },
    {
      "id": 673,
      "name": "mimetype",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 11,
          "character": 10
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 678,
      "name": "xform",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 16,
          "character": 7
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "number"
      }
    }
  ],
  "groups": [
    {
      "title": "Variables",
      "kind": 32,
      "children": [
        674,
        675,
        677,
        676,
        673,
        678
      ]
    }
  ],
  "sources": [
    {
      "fileName": "src/transformers/transformKoboToA11y.ts",
      "line": 10,
      "character": 28
    }
  ]
}</pre>



### <a id="KoboKey">KoboKey</a>



Definition: {"type":"typeOperator","operator":"keyof","target":{"type":"reference","name":"KoboResult"}}



### <a id="KoboResult">KoboResult</a>



Definition: <pre>{
  "id": 682,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 700,
      "name": "__version__",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 40,
          "character": 13
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 686,
      "name": "_attachments",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 26,
          "character": 14
        }
      ],
      "type": {
        "type": "array",
        "elementType": {
          "type": "reference",
          "name": "KoboAttachment",
          "id": 671
        }
      }
    },
    {
      "id": 690,
      "name": "_bamboo_dataset_id",
      "kind": 32,
      "kindString": "Variable",
      "flags": {
        "isOptional": true
      },
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 30,
          "character": 20
        }
      ],
      "type": {
        "type": "union",
        "types": [
          {
            "type": "intrinsic",
            "name": "undefined"
          },
          {
            "type": "intrinsic",
            "name": "string"
          }
        ]
      }
    },
    {
      "id": 685,
      "name": "_geolocation",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 25,
          "character": 14
        }
      ],
      "type": {
        "type": "tuple",
        "elements": [
          {
            "type": "intrinsic",
            "name": "number"
          },
          {
            "type": "intrinsic",
            "name": "number"
          }
        ]
      }
    },
    {
      "id": 683,
      "name": "_id",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 23,
          "character": 5
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "number"
      }
    },
    {
      "id": 687,
      "name": "_notes",
      "kind": 32,
      "kindString": "Variable",
      "flags": {
        "isOptional": true
      },
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 27,
          "character": 8
        }
      ],
      "type": {
        "type": "array",
        "elementType": {
          "type": "intrinsic",
          "name": "unknown"
        }
      }
    },
    {
      "id": 699,
      "name": "_status",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 39,
          "character": 9
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 703,
      "name": "_submission_time",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 43,
          "character": 18
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "unknown"
      }
    },
    {
      "id": 704,
      "name": "_submitted_by",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 44,
          "character": 15
        }
      ],
      "type": {
        "type": "union",
        "types": [
          {
            "type": "intrinsic",
            "name": "unknown"
          },
          {
            "type": "intrinsic",
            "name": "null"
          }
        ]
      }
    },
    {
      "id": 688,
      "name": "_tags",
      "kind": 32,
      "kindString": "Variable",
      "flags": {
        "isOptional": true
      },
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 28,
          "character": 7
        }
      ],
      "type": {
        "type": "array",
        "elementType": {
          "type": "intrinsic",
          "name": "unknown"
        }
      }
    },
    {
      "id": 684,
      "name": "_uuid",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 24,
          "character": 7
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 702,
      "name": "_validation_status",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 42,
          "character": 20
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "unknown"
      }
    },
    {
      "id": 689,
      "name": "_xform_id_string",
      "kind": 32,
      "kindString": "Variable",
      "flags": {
        "isOptional": true
      },
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 29,
          "character": 18
        }
      ],
      "type": {
        "type": "union",
        "types": [
          {
            "type": "intrinsic",
            "name": "undefined"
          },
          {
            "type": "intrinsic",
            "name": "string"
          }
        ]
      }
    },
    {
      "id": 701,
      "name": "deviceid",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 41,
          "character": 10
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 697,
      "name": "end",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 37,
          "character": 5
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 746,
      "name": "feedback/feedback_matrix/no_interaction_problems",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 87,
          "character": 52
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 745,
      "name": "feedback/feedback_matrix/questions_fits_this_place",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 86,
          "character": 54
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 695,
      "name": "formhub/uuid",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 35,
          "character": 16
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 749,
      "name": "has_phone_number",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 90,
          "character": 18
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 738,
      "name": "inquire/are_service_animals_allowed",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 79,
          "character": 39
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 739,
      "name": "inquire/media/has_audio",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 80,
          "character": 27
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 740,
      "name": "inquire/media/has_braille",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 81,
          "character": 29
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 741,
      "name": "inquire/media/has_large_print",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 82,
          "character": 33
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 742,
      "name": "inquire/staff_can_speak_sign_lang",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 83,
          "character": 37
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 743,
      "name": "inquire/staff_has_disabled_training",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 84,
          "character": 39
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 744,
      "name": "inquire/staff_spoken_sign_langs",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 85,
          "character": 35
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 737,
      "name": "inside/has_wide_aisles",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 78,
          "character": 26
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 723,
      "name": "inside/is_quiet",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 64,
          "character": 19
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 722,
      "name": "inside/is_well_lit",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 63,
          "character": 22
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 726,
      "name": "inside/toilet/basin_inside_cabin",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 67,
          "character": 36
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 724,
      "name": "inside/toilet/basin_wheelchair_fits_belows",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 65,
          "character": 46
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 725,
      "name": "inside/toilet/basin_wheelchair_reachable",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 66,
          "character": 44
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 727,
      "name": "inside/toilet/door_width",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 68,
          "character": 28
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 728,
      "name": "inside/toilet/free_space_front",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 69,
          "character": 34
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 729,
      "name": "inside/toilet/free_space_left",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 70,
          "character": 33
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 730,
      "name": "inside/toilet/free_space_right",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 71,
          "character": 34
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 731,
      "name": "inside/toilet/has_arm_rests",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 72,
          "character": 31
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 732,
      "name": "inside/toilet/has_basin",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 73,
          "character": 27
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 733,
      "name": "inside/toilet/has_toilet",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 74,
          "character": 28
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 734,
      "name": "inside/toilet/seat_height",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 75,
          "character": 29
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 735,
      "name": "inside/toilet/stepless_access",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 76,
          "character": 33
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 736,
      "name": "inside/toilet/toilet_photo",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 77,
          "character": 30
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 747,
      "name": "is_wheelchair_accessible",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 88,
          "character": 26
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoPartiallyResult",
        "id": 680
      }
    },
    {
      "id": 694,
      "name": "meta/instanceID",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 34,
          "character": 19
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 709,
      "name": "outside/category/category_sub",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 50,
          "character": 33
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 710,
      "name": "outside/category/category_top",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 51,
          "character": 33
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 712,
      "name": "outside/entrance/has_automatic_door",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 53,
          "character": 39
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 713,
      "name": "outside/entrance/has_door",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 54,
          "character": 29
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 714,
      "name": "outside/entrance/has_entrance",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 55,
          "character": 33
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 711,
      "name": "outside/entrance/has_fixed_ramp",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 52,
          "character": 35
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 715,
      "name": "outside/entrance/has_mobile_ramp",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 56,
          "character": 36
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 716,
      "name": "outside/entrance/has_steps",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 57,
          "character": 30
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 718,
      "name": "outside/entrance/picture",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 59,
          "character": 28
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 719,
      "name": "outside/entrance/steps_count",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 60,
          "character": 32
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 720,
      "name": "outside/entrance/steps_height",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 61,
          "character": 33
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 717,
      "name": "outside/entrance/steps_low_height",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 58,
          "character": 37
        }
      ],
      "type": {
        "type": "reference",
        "name": "YesNoResult",
        "id": 679
      }
    },
    {
      "id": 706,
      "name": "outside/geometry_point",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 47,
          "character": 26
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 721,
      "name": "outside/name",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 62,
          "character": 16
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 750,
      "name": "phone_number",
      "kind": 32,
      "kindString": "Variable",
      "flags": {
        "isOptional": true
      },
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 91,
          "character": 14
        }
      ],
      "type": {
        "type": "union",
        "types": [
          {
            "type": "intrinsic",
            "name": "undefined"
          },
          {
            "type": "intrinsic",
            "name": "string"
          }
        ]
      }
    },
    {
      "id": 692,
      "name": "phonenumber",
      "kind": 32,
      "kindString": "Variable",
      "flags": {
        "isOptional": true
      },
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 32,
          "character": 13
        }
      ],
      "type": {
        "type": "union",
        "types": [
          {
            "type": "intrinsic",
            "name": "undefined"
          },
          {
            "type": "intrinsic",
            "name": "string"
          }
        ]
      }
    },
    {
      "id": 753,
      "name": "place_email_address",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 94,
          "character": 21
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 751,
      "name": "place_phone_number",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 92,
          "character": 20
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 752,
      "name": "place_website_url",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 93,
          "character": 19
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 691,
      "name": "simserial",
      "kind": 32,
      "kindString": "Variable",
      "flags": {
        "isOptional": true
      },
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 31,
          "character": 11
        }
      ],
      "type": {
        "type": "union",
        "types": [
          {
            "type": "intrinsic",
            "name": "undefined"
          },
          {
            "type": "intrinsic",
            "name": "string"
          }
        ]
      }
    },
    {
      "id": 698,
      "name": "start",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 38,
          "character": 7
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 705,
      "name": "subscriberid",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 45,
          "character": 14
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 696,
      "name": "today",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 36,
          "character": 7
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 707,
      "name": "user/user_measuring",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 48,
          "character": 23
        }
      ],
      "type": {
        "type": "union",
        "types": [
          {
            "type": "stringLiteral",
            "value": "inch"
          },
          {
            "type": "stringLiteral",
            "value": "cm"
          }
        ]
      }
    },
    {
      "id": 708,
      "name": "user/user_record_type",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 49,
          "character": 25
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 693,
      "name": "username",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 33,
          "character": 10
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    },
    {
      "id": 748,
      "name": "wheelchair_comment",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/transformers/transformKoboToA11y.ts",
          "line": 89,
          "character": 20
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    }
  ],
  "groups": [
    {
      "title": "Variables",
      "kind": 32,
      "children": [
        700,
        686,
        690,
        685,
        683,
        687,
        699,
        703,
        704,
        688,
        684,
        702,
        689,
        701,
        697,
        746,
        745,
        695,
        749,
        738,
        739,
        740,
        741,
        742,
        743,
        744,
        737,
        723,
        722,
        726,
        724,
        725,
        727,
        728,
        729,
        730,
        731,
        732,
        733,
        734,
        735,
        736,
        747,
        694,
        709,
        710,
        712,
        713,
        714,
        711,
        715,
        716,
        718,
        719,
        720,
        717,
        706,
        721,
        750,
        692,
        753,
        751,
        752,
        691,
        698,
        705,
        696,
        707,
        708,
        693,
        748
      ]
    }
  ],
  "sources": [
    {
      "fileName": "src/transformers/transformKoboToA11y.ts",
      "line": 22,
      "character": 24
    }
  ]
}</pre>



### <a id="Length">Length</a>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="LessThan">LessThan</a>



Definition: <pre>{
  "id": 552,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 553,
      "name": "$lt",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/rules/RatingRules.ts",
          "line": 12,
          "character": 21
        }
      ],
      "type": {
        "type": "reference",
        "name": "Comparable",
        "id": 541
      }
    }
  ],
  "groups": [
    {
      "title": "Variables",
      "kind": 32,
      "children": [
        553
      ]
    }
  ],
  "sources": [
    {
      "fileName": "src/rules/RatingRules.ts",
      "line": 12,
      "character": 15
    }
  ]
}</pre>



### <a id="LessThanEquals">LessThanEquals</a>



Definition: <pre>{
  "id": 555,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 556,
      "name": "$lte",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/rules/RatingRules.ts",
          "line": 13,
          "character": 28
        }
      ],
      "type": {
        "type": "reference",
        "name": "Comparable",
        "id": 541
      }
    }
  ],
  "groups": [
    {
      "title": "Variables",
      "kind": 32,
      "children": [
        556
      ]
    }
  ],
  "sources": [
    {
      "fileName": "src/rules/RatingRules.ts",
      "line": 13,
      "character": 21
    }
  ]
}</pre>



### <a id="LocalizedString">LocalizedString</a>

Localized strings can either be just `String`s, or be `Object`s with IETF language tags
as property names and localized strings as property values.

Definition: <code>string</code>&nbsp;|&nbsp;<pre>{
  "id": 159,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": [
    {
      "id": 160,
      "name": "__index",
      "kind": 8192,
      "kindString": "Index signature",
      "flags": {},
      "parameters": [
        {
          "id": 161,
          "name": "key",
          "kind": 32768,
          "kindString": "Parameter",
          "flags": {},
          "type": {
            "type": "intrinsic",
            "name": "string"
          }
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    }
  ],
  "sources": [
    {
      "fileName": "src/LocalizedString.ts",
      "line": 8,
      "character": 3
    }
  ]
}</pre>



### <a id="MatchRule">MatchRule</a>



Definition: <pre>{
  "id": 571,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": [
    {
      "id": 572,
      "name": "__index",
      "kind": 8192,
      "kindString": "Index signature",
      "flags": {},
      "parameters": [
        {
          "id": 573,
          "name": "key",
          "kind": 32768,
          "kindString": "Parameter",
          "flags": {},
          "type": {
            "type": "intrinsic",
            "name": "string"
          }
        }
      ],
      "type": {
        "type": "reference",
        "name": "MatchValue",
        "id": 569
      }
    }
  ],
  "sources": [
    {
      "fileName": "src/rules/RatingRules.ts",
      "line": 33,
      "character": 16
    }
  ]
}</pre>



### <a id="MatchValue">MatchValue</a>



Definition: <code>string</code>&nbsp;|&nbsp;<code>number</code>&nbsp;|&nbsp;<code>null</code>&nbsp;|&nbsp;<code>boolean</code>&nbsp;|&nbsp;<a href="#DefinedValue">DefinedValue</a>&nbsp;|&nbsp;<a href="#ExistsValue">ExistsValue</a>&nbsp;|&nbsp;<a href="#UnknownOrValue">UnknownOrValue</a>&nbsp;|&nbsp;<a href="#LessThan">LessThan</a>&nbsp;|&nbsp;<a href="#LessThanEquals">LessThanEquals</a>&nbsp;|&nbsp;<a href="#GreaterThan">GreaterThan</a>&nbsp;|&nbsp;<a href="#GreaterThanEquals">GreaterThanEquals</a>&nbsp;|&nbsp;<a href="#Equals">Equals</a>&nbsp;|&nbsp;<a href="#NotEquals">NotEquals</a>



### <a id="NotEquals">NotEquals</a>



Definition: <pre>{
  "id": 567,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 568,
      "name": "$ne",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/rules/RatingRules.ts",
          "line": 17,
          "character": 22
        }
      ],
      "type": {
        "type": "reference",
        "name": "Comparable",
        "id": 541
      }
    }
  ],
  "groups": [
    {
      "title": "Variables",
      "kind": 32,
      "children": [
        568
      ]
    }
  ],
  "sources": [
    {
      "fileName": "src/rules/RatingRules.ts",
      "line": 17,
      "character": 16
    }
  ]
}</pre>



### <a id="Operator">Operator</a>

The allowed operators for comparison quantities

Definition: <code>"<"</code>&nbsp;|&nbsp;<code>"<="</code>&nbsp;|&nbsp;<code>"=="</code>&nbsp;|&nbsp;<code>">="</code>&nbsp;|&nbsp;<code>">"</code>



### <a id="Operators">Operators</a>



Definition: <code>"$eq"</code>&nbsp;|&nbsp;<code>"$lt"</code>&nbsp;|&nbsp;<code>"$lte"</code>&nbsp;|&nbsp;<code>"$gt"</code>&nbsp;|&nbsp;<code>"$gte"</code>&nbsp;|&nbsp;<code>"$ne"</code>



### <a id="OrRule">OrRule</a>



Definition: <pre>{
  "id": 575,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 576,
      "name": "$or",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/rules/RatingRules.ts",
          "line": 37,
          "character": 5
        }
      ],
      "type": {
        "type": "reference",
        "name": "ReadonlyArray",
        "typeArguments": [
          {
            "type": "reference",
            "name": "Rule",
            "id": 580
          }
        ]
      }
    }
  ],
  "groups": [
    {
      "title": "Variables",
      "kind": 32,
      "children": [
        576
      ]
    }
  ],
  "sources": [
    {
      "fileName": "src/rules/RatingRules.ts",
      "line": 36,
      "character": 13
    }
  ]
}</pre>



### <a id="RestroomSignIcon">RestroomSignIcon</a>



Definition: <code>"allGender"</code>&nbsp;|&nbsp;<code>"female"</code>&nbsp;|&nbsp;<code>"male"</code>&nbsp;|&nbsp;<code>"personInWheelchair"</code>&nbsp;|&nbsp;<code>"changingTable"</code>&nbsp;|&nbsp;<code>"baby"</code>&nbsp;|&nbsp;<code>"family"</code>&nbsp;|&nbsp;<code>"urinal"</code>&nbsp;|&nbsp;<code>"washBasin"</code>&nbsp;|&nbsp;<code>"toiletBowl"</code>



### <a id="Rule">Rule</a>



Definition: <a href="#OrRule">OrRule</a>&nbsp;|&nbsp;<a href="#AndRule">AndRule</a>&nbsp;|&nbsp;<a href="#MatchRule">MatchRule</a>



### <a id="RuleEvaluationResult">RuleEvaluationResult</a>



Definition: <code>"true"</code>&nbsp;|&nbsp;<code>"false"</code>&nbsp;|&nbsp;<code>"unknown"</code>



### <a id="SignLanguageCode">SignLanguageCode</a>

We assume that IETF language tags will be extended with sign language codes (as proposed by
http://www.evertype.com/standards/iso639/sign-language.html) eventually, so our language tags
support them already.

Definition: <code>"ase"</code>&nbsp;|&nbsp;<code>"sgn-ase"</code>&nbsp;|&nbsp;<code>"sgn-ase-US"</code>&nbsp;|&nbsp;<code>"sgn-GH-EP"</code>&nbsp;|&nbsp;<code>"sgn-DZ"</code>&nbsp;|&nbsp;<code>"sgn-US"</code>&nbsp;|&nbsp;<code>"sgn-AR"</code>&nbsp;|&nbsp;<code>"sgn-AM"</code>&nbsp;|&nbsp;<code>"sgn-AU-NT"</code>&nbsp;|&nbsp;<code>"sgn-AU"</code>&nbsp;|&nbsp;<code>"sgn-AT"</code>&nbsp;|&nbsp;<code>"sgn-ID-BA"</code>&nbsp;|&nbsp;<code>"sgn-BE-VLG"</code>&nbsp;|&nbsp;<code>"sgn-BE-WAL"</code>&nbsp;|&nbsp;<code>"sgn-BO"</code>&nbsp;|&nbsp;<code>"sgn-BR"</code>&nbsp;|&nbsp;<code>"sgn-GB"</code>&nbsp;|&nbsp;<code>"sgn-BG"</code>&nbsp;|&nbsp;<code>"sgn-ES-CT"</code>&nbsp;|&nbsp;<code>"sgn-TD"</code>&nbsp;|&nbsp;<code>"sgn-CL"</code>&nbsp;|&nbsp;<code>"sgn-CN"</code>&nbsp;|&nbsp;<code>"sgn-CO"</code>&nbsp;|&nbsp;<code>"sgn-CR"</code>&nbsp;|&nbsp;<code>"sgn-CZ"</code>&nbsp;|&nbsp;<code>"sgn-DK"</code>&nbsp;|&nbsp;<code>"sgn-NL"</code>&nbsp;|&nbsp;<code>"sgn-EC"</code>&nbsp;|&nbsp;<code>"sgn-SV"</code>&nbsp;|&nbsp;<code>"sgn-CA-NU"</code>&nbsp;|&nbsp;<code>"sgn-ET"</code>&nbsp;|&nbsp;<code>"sgn-FI"</code>&nbsp;|&nbsp;<code>"sgn-CA-QC"</code>&nbsp;|&nbsp;<code>"sgn-FR"</code>&nbsp;|&nbsp;<code>"sgn-DE"</code>&nbsp;|&nbsp;<code>"sgn-GH"</code>&nbsp;|&nbsp;<code>"sgn-GR"</code>&nbsp;|&nbsp;<code>"sgn-GT"</code>&nbsp;|&nbsp;<code>"sgn-US-HI"</code>&nbsp;|&nbsp;<code>"sgn-HK"</code>&nbsp;|&nbsp;<code>"sgn-IS"</code>&nbsp;|&nbsp;<code>"sgn-ID"</code>&nbsp;|&nbsp;<code>"sgn-IN"</code>&nbsp;|&nbsp;<code>"sgn-IE"</code>&nbsp;|&nbsp;<code>"sgn-IL"</code>&nbsp;|&nbsp;<code>"sgn-IT"</code>&nbsp;|&nbsp;<code>"sgn-JM"</code>&nbsp;|&nbsp;<code>"sgn-JP"</code>&nbsp;|&nbsp;<code>"sgn-JO"</code>&nbsp;|&nbsp;<code>"sgn-KE"</code>&nbsp;|&nbsp;<code>"sgn-KR"</code>&nbsp;|&nbsp;<code>"sgn-MY-B"</code>&nbsp;|&nbsp;<code>"sgn-LV"</code>&nbsp;|&nbsp;<code>"sgn-LY"</code>&nbsp;|&nbsp;<code>"sgn-LT"</code>&nbsp;|&nbsp;<code>"sgn-FR-69"</code>&nbsp;|&nbsp;<code>"sgn-MY"</code>&nbsp;|&nbsp;<code>"sgn-MT"</code>&nbsp;|&nbsp;<code>"sgn-US-MA"</code>&nbsp;|&nbsp;<code>"sgn-MX-YUC"</code>&nbsp;|&nbsp;<code>"sgn-MX"</code>&nbsp;|&nbsp;<code>"sgn-VA"</code>&nbsp;|&nbsp;<code>"sgn-MN"</code>&nbsp;|&nbsp;<code>"sgn-MA"</code>&nbsp;|&nbsp;<code>"sgn-NA"</code>&nbsp;|&nbsp;<code>"sgn-NP"</code>&nbsp;|&nbsp;<code>"sgn-NZ"</code>&nbsp;|&nbsp;<code>"sgn-NI"</code>&nbsp;|&nbsp;<code>"sgn-NG"</code>&nbsp;|&nbsp;<code>"sgn-NO"</code>&nbsp;|&nbsp;<code>"sgn-CA-NS"</code>&nbsp;|&nbsp;<code>"sgn-GB-KEN"</code>&nbsp;|&nbsp;<code>"sgn-MY-P"</code>&nbsp;|&nbsp;<code>"sgn-IR"</code>&nbsp;|&nbsp;<code>"sgn-PE"</code>&nbsp;|&nbsp;<code>"sgn-PH"</code>&nbsp;|&nbsp;<code>"sgn-US-SD"</code>&nbsp;|&nbsp;<code>"sgn-PL"</code>&nbsp;|&nbsp;<code>"sgn-PT"</code>&nbsp;|&nbsp;<code>"sgn-CO-SAP"</code>&nbsp;|&nbsp;<code>"sgn-PR"</code>&nbsp;|&nbsp;<code>"sgn-SB"</code>&nbsp;|&nbsp;<code>"sgn-RO"</code>&nbsp;|&nbsp;<code>"sgn-RU"</code>&nbsp;|&nbsp;<code>"sgn-SA"</code>&nbsp;|&nbsp;<code>"sgn-SE-crp"</code>&nbsp;|&nbsp;<code>"sgn-SG"</code>&nbsp;|&nbsp;<code>"sgn-SK"</code>&nbsp;|&nbsp;<code>"sgn-ZA"</code>&nbsp;|&nbsp;<code>"sgn-ES"</code>&nbsp;|&nbsp;<code>"sgn-LK"</code>&nbsp;|&nbsp;<code>"sgn-SE"</code>&nbsp;|&nbsp;<code>"sgn-CH-GE"</code>&nbsp;|&nbsp;<code>"sgn-CH-ZH"</code>&nbsp;|&nbsp;<code>"sgn-CH-TI"</code>&nbsp;|&nbsp;<code>"sgn-TW"</code>&nbsp;|&nbsp;<code>"sgn-TZ"</code>&nbsp;|&nbsp;<code>"sgn-TH"</code>&nbsp;|&nbsp;<code>"sgn-TN"</code>&nbsp;|&nbsp;<code>"sgn-TR"</code>&nbsp;|&nbsp;<code>"sgn-UG"</code>&nbsp;|&nbsp;<code>"sgn-UA"</code>&nbsp;|&nbsp;<code>"sgn-BR-MA"</code>&nbsp;|&nbsp;<code>"sgn-UY"</code>&nbsp;|&nbsp;<code>"sgn-VE"</code>&nbsp;|&nbsp;<code>"sgn-IL-yid"</code>&nbsp;|&nbsp;<code>"sgn-YU"</code>&nbsp;|&nbsp;<code>"sgn-ZM"</code>&nbsp;|&nbsp;<code>"sgn-ZW"</code>&nbsp;|&nbsp;<code>"sgn-afr-ZA"</code>&nbsp;|&nbsp;<code>"sgn-chi-TW"</code>&nbsp;|&nbsp;<code>"sgn-dan-DK"</code>&nbsp;|&nbsp;<code>"sgn-dut-BE"</code>&nbsp;|&nbsp;<code>"sgn-dut-NL"</code>&nbsp;|&nbsp;<code>"sgn-eng-GB"</code>&nbsp;|&nbsp;<code>"sgn-eng-IE"</code>&nbsp;|&nbsp;<code>"sgn-eng-US"</code>&nbsp;|&nbsp;<code>"sgn-fin-FI"</code>&nbsp;|&nbsp;<code>"sgn-fre-BE"</code>&nbsp;|&nbsp;<code>"sgn-fre-CA"</code>&nbsp;|&nbsp;<code>"sgn-fre-FR"</code>&nbsp;|&nbsp;<code>"sgn-jpn-JP"</code>&nbsp;|&nbsp;<code>"sgn-nor-NO"</code>&nbsp;|&nbsp;<code>"sgn-por-PT"</code>&nbsp;|&nbsp;<code>"sgn-swe-SE"</code>



### <a id="SmokingPolicy">SmokingPolicy</a>

Describes the smoking policy for visitors of a place.

Definition: <code>"dedicatedToSmoking"</code>&nbsp;|&nbsp;<code>"allowedEverywhere"</code>&nbsp;|&nbsp;<code>"inSeparateArea"</code>&nbsp;|&nbsp;<code>"inIsolatedArea"</code>&nbsp;|&nbsp;<code>"prohibited"</code>&nbsp;|&nbsp;<code>"onlyOutside"</code>



### <a id="UnknownOrValue">UnknownOrValue</a>



Definition: <pre>{
  "id": 546,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 547,
      "name": "$unknownOr",
      "kind": 32,
      "kindString": "Variable",
      "flags": {},
      "sources": [
        {
          "fileName": "src/rules/RatingRules.ts",
          "line": 9,
          "character": 34
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
      "title": "Variables",
      "kind": 32,
      "children": [
        547
      ]
    }
  ],
  "sources": [
    {
      "fileName": "src/rules/RatingRules.ts",
      "line": 9,
      "character": 21
    }
  ]
}</pre>



### <a id="Volume">Volume</a>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="YesNoPartiallyResult">YesNoPartiallyResult</a>



Definition: <code>"true"</code>&nbsp;|&nbsp;<code>"partially"</code>&nbsp;|&nbsp;<code>"false"</code>&nbsp;|&nbsp;<code>"undefined"</code>



### <a id="YesNoResult">YesNoResult</a>



Definition: <code>"true"</code>&nbsp;|&nbsp;<code>"false"</code>&nbsp;|&nbsp;<code>"undefined"</code>

