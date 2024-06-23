# Accessibility for generic places of interest (PoIs)

To describe a generic place of interest, you can use the
[`PlaceInfo`](../../describing-objects/0-model/#PlaceInfo) type – the main place-of-interest object
type in A11yJSON.

This type builds upon the `Feature` object type defined by [GeoJSON (RFC
7946)](https://tools.ietf.org/html/rfc7946), so if you create an API delivering `PlaceInfo` objects,
it might make sense to deliver them as a [GeoJSON FeatureCollection
object](https://datatracker.ietf.org/doc/html/rfc7946#section-3.3).

If you have no idea what this means: GeoJSON simplifies showing places
on maps, and allows to load the data into common tools for geo-data processing (for example,
[QGIS](https://www.qgis.org/)) and web maps.

## Example: a tourism office

The following JSON describes a tourism office in Saxonia, Germany, as
[`PlaceInfo`](../../describing-objects/0-model/#PlaceInfo) with
[`PlaceProperties`](../../describing-objects/0-model/#PlaceProperties).

The office features wheelchair accessible parking. The restrooms are wheelchair accessible.

Despite having a level entrance (no steps), the building is only partially accessible with a
wheelchair:

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
