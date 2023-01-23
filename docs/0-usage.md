# Usage

## Installing the npm module

```bash
npm install --save @sozialhelden/a11yjson
```

## Basics

A11yJSON's reference provides a documentation of [all available interfaces](./describing-objects/interfaces.md) and has [example A11yJSON objects](./1-example-data.md).

For each interface `X` you find in the reference, the `a11yjson` npm module provides

1. a TypeScript interface `X` (if you use TypeScript)
2. a [SimpleSchema](https://www.npmjs.com/package/simpl-schema) instance named `XSchema` to validate and sanitize objects to be correct A11yJSON

## TypeScript usage

```typescript
import { PlaceInfo } from '@sozialhelden/a11yjson';

const placeInfo: PlaceInfo = {
  geometry: { type: Point, coordinates: [2.376757, 48.898991] },
  properties: {
    category: "cinema",
    name: "Ciné XY",
    accessibility: {
      accessibleWith: {
        guideDog: true,
        wheelchair: true,
      },
      media: [
        {
          type: 'movie',
          interactions: {
            watch: {
              perception: {
                languages: ['fr'],
                dedicatedScreenForSubtitles: true,
                subtitles: true,
                audioDescription: true,
                byod: true,
                educationLevel: 3,
                visual: true,
                realTimeCaptioning: true,
                signLanguage: true,
              }
            }
          }
        }
      ]
    }
  }
}
```

The TypeScript compiler will validate definitions at compile time.

## Validating A11yJSON objects at runtime

The following code imports one interface schema, `PlaceInfoSchema`, from A11yJSON, and validates an object against it.

If the object isn't valid, you get a detailed error object as validation result.

```javascript
import { getPlaceInfoSchemaDefinition } from '@sozialhelden/a11yjson';

const PlaceInfoSchema = new SimpleSchema(getPlaceInfoSchemaDefinition());

// This could be your GeoJSON feature.

const myGeoJSONFeature = {
  geometry: { … }
  properties: { … }
};

// See https://github.com/aldeed/simple-schema-js for the full documentation
// of how validation works.

const validationContext = PlaceInfoSchema.newContext();

// Sanitizes the input object.
// Converts types to match the schema where possible, and converts quantity
// strings like '12 inches' to Quantity objects like { value: 12, unit: 'inch' }.

const sanitizedGeoJSONFeature = PlaceInfoSchema.clean(myGeoJSONFeature);

// Checks if the GeoJSON is a valid A11yJSON’s `PlaceInfo`.

validationContext.validate(sanitizedGeoJSONFeature);

if (!validationContext.isValid()) {
  const errors = validationContext.validationErrors();

  // `errors` is a JSON object with detailled validation infos about each field
  // in the input object.

  console.log(errors);
}
```
