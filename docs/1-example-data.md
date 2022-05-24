# Example data

## `PlaceInfo`

This JSON describes a tourism office in Saxonia, Germany, as `PlaceInfo` with `PlaceProperties`. It
has wheelchair accessible parking. The restrooms are wheelchair accessible. Despite having a level
entrance (no steps), the building is only partially accessible with a wheelchair:

```json
{
  "geometry": { "type": "Point", "coordinates": [11.14204, 51.78911] },
  "properties": {
    "category": "tourism",
    "name": "Quedlinburg-Information",
    "accessibility": {
      "parking": {
        "forWheelchairUsers": { "isAvailable": true }
      },
      "entrances": [
        { "isLevel": true }
      ],
      "restrooms": [
        { "isAccessibleWithWheelchair": false }
      ],
      "accessibleWith": { "guideDog": true },
      "partiallyAccessibleWith": { "wheelchair": true }
    },
    "infoPageUrl": "http://...",
    "phoneNumber": "+49 3946 905-624",
    "placeWebsiteUrl": "https://www.quedlinburg.de",
    "address": {
      "street": "Markt 4 ",
      "postcode": "06484 ",
      "city": "Quedlinburg",
      "state": "Sachsen-Anhalt",
      "country": "Deutschland",
      "countryCode": "DE"
    },
  }
}
```

### A cinema that is dog-friendly and wheelchair accessible, offering audio descriptions

```json
{
  "geometry": { "type": "Point", "coordinates": [2.376757, 48.898991] },
  "properties": {
    "category": "cinema",
    "name": "Ciné XY",
    "accessibility": {
      "accessibleWith": {
        "guideDog": true,
        "wheelchair": true,
      },
      "offersActivitiesForPeopleWith": {
        "visuallyImpairment": true,
      }
    }
  }
}
```

### A restaurant with a braille menu

```json
{
  "properties": {
    "category": "restaurant",
    "accessibility": {
      "media": [
        { "type": "menu", "isBraille": true }
      ]
    }
  }
}
```

### A museum with a guided tour in German Sign Language

See also ([language code `"gsg"` or `"sgn-gsg"`](https://iso639-3.sil.org/code/gsg)).

```json
{
  "properties": {
    "category": "museum",
    "accessibility": {
      "media": [
        { "type": "tour", "languages": ["sgn-gsg"] }
      ]
    }
  }
}
```

### A museum with tactile models

#### Variant 1

```json
{
  "properties": {
    "category": "museum",
    "accessibility": {
      "media": [
        {
          "type": "exhibit",
          "accessMode": ["tactile"],
          "accessModeSufficient": ["tactile"],
          "name": { "en": "Collection of tactile models" }
        }
      ]
    }
  }
}
```

#### Variant 2

```json
{
  "properties": {
    "category": "museum",
    "accessibility": {
      "media": [
        {
          "type": "exhibit",
          "isTactile": true,
          "name": { "en": "Collection of tactile models" }
        }
      ]
    }
  }
}
```

## `EquipmentInfo`

### An `EquipmentInfo` record for an elevator in Berlin that is in service, including realtime operational status information

```json
{
  "geometry": { "type": "Point", "coordinates": [13.343837, 52.536183] },
  "properties": {
    "category": "elevator",
    "isWorking": true,
    "originalId": "283",
    "originalPlaceInfoId": "900001201",
    "placeInfoId": "HKewiFCNgCCQS3ErP",
    "shortDescription": "Fußgängertunnel U-/S-Bahnsteig ⟷ U-Bahnsteig",
    "description": "Fußgängertunnel, U- und S-Bahnsteig, und U-Bahnsteig",
    "longDescription": "zwischen dem Fußgängertunnel, dem U- und S-Bahnsteig, und dem U-Bahnsteig",
  }
}
```

### A elevator in Hamburg with `accessibility` features that is out of service

```json
{
  "geometry": { "type": "Point", "coordinates": [10.067907, 53.581786] },
  "properties": {
    "category": "elevator",
    "isWorking": false,
    "shortDescription": "Straßenebene ⟷ Schalterhalle",
    "description": "zwischen Straßenebene und Schalterhalle",
    "longDescription": "zwischen der Straßenebene und der Schalterhalle",
    "placeInfoId": "4xaRom9QqMAxgxQnx",
    "accessibility": {
      "hasBrailleText": true,
      "hasSpeech": true,
      "hasDoorsInBothDirections": false
    },
  }
}
```
