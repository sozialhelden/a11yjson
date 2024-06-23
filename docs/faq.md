# FAQ

## Is this for me?

If you build an app that digitalizes any aspect of real life, this data format is potentially relevant to you. Why? Because if you are responsible for modeling data, *you decide* if your data format adds new barriers to this real world – or if your app creates a new entrance. Use this power wisely, and ensure that your data design includes everyone from the start. This means: even before the UI around your data model is built. 🦾

A11yJSON can help (or at least inspire) you if you work with data in…

- Architecture
- Indoor navigation
- Facility management
- Accessibility surveys
- Location-based services
- Outdoor/transit navigation
- Building Information Management (BIM)

## Should I use this standard?

Yes, until there is something better. Even if you cannot adapt the whole format as part of your
own indoor mapping specs, it’s a good idea to adapt single data models where you see fit.

Note that A11yJSON does not yet cover the full details of services, tangible products, or events yet. Extensions are welcome!

## How can I link A11yJSON data with another dataset?

A11yJSON is designed to be compatible with other datasets. In general, A11yJSON allows to create more detailed descriptions for objects and places existing somewhere else, and aims to help you collect and augment existing datasets.

### Adding references to other datasets in an A11yJSON data record

For this, we recommend inventing a URI scheme that allows to reference single records in your dataset (like `https://your-organization.com/places/1234` as a persistent URI for a place with the ID `1234`), and adding matching URIs in A11yJSON records using the `sameAs` attribute. This is how [Wheelmap.org](https://wheelmap.org) uses A11yJSON via the [accessibility.cloud](https://accessibility.cloud) API to connect OpenStreetMap places with other data sources.

If your organization maintains an A11yJSON dataset on [accessibility.cloud](https://accessibility.cloud), the [accessibility.cloud API](https://github.com/sozialhelden/accessibility-cloud/blob/main/app/docs/json-api.md) lets you to find accessibility data for a given record in your data source. For this, the record needs to have a URI.

Here is an example API URL for requesting more infos about [`https://openstreetmap.org/way/23576086`](https://openstreetmap.org/way/23576086): `https://accessibility-cloud-v2.freetls.fastly.net/place-infos.json?appToken=APP_TOKEN&sameAs=https://openstreetmap.org/way/23576086` (insert your own `APP_TOKEN` to try it out).

Because accessibility.cloud has more infos about this object, it would respond like this (compacted for brevity):

```json
{
  "type": "FeatureCollection",
  "related": {
    "licenses": {
      "...": "..."
    },
    "images": {
      "...": "..."
    }
  },
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "...": "..."
      },
      "properties": {
        "category": "townhall",
        "name": {
          "de": "Rathaus"
        },
        "sameAs": [
          "https://openstreetmap.org/way/23576086"
        ],
        "accessibility": {
          "accessibleWith": {
            "wheelchair": true
          },
          "entrances": [
            {
              "geometry": {
                "type": "Point",
                "coordinates": [
                  10.898418,
                  48.368721
                ]
              },
              "properties": {
                "isMainEntrance": true,
                "hasFixedRamp": true
              }
            },
            {
              "geometry": {
                "type": "Point",
                "coordinates": [
                  10.898377,
                  48.369305
                ]
              },
              "properties": {
                "isMainEntrance": false,
                "isLevel": true
              }
            }
          ],
          "restrooms": [
            {
              "isAccessibleWithWheelchair": true,
              "entrance": {
                "properties": {
                  "door": {
                    "width": {
                      "value": 90,
                      "unit": "cm",
                      "rawValue": ">= 90 cm",
                      "operator": ">="
                    }
                  }
                }
              },
              "turningSpaceInside": {
                "value": 150,
                "unit": "cm",
                "rawValue": ">= 150 cm",
                "operator": ">="
              },
              "toilet": {
                "grabBars": {
                  "onUsersLeftSide": true,
                  "onUsersRightSide": true
                },
                "heightOfBase": {
                  "value": 65,
                  "unit": "cm"
                }
              },
              "washBasin": {
                "accessibleWithWheelchair": true
              }
            }
          ]
        }
      }
    }
  ]
}
```

To reference accessibility.cloud data records, use an URI scheme like this: `https://ld.accessibility.cloud/[TYPE]/[ID]` (where `[TYPE]` is a data type like PlaceInfo, and `[ID]` is the database record's ID).

And while there is no ‘A11yJSON-LD’ standard yet, [GeoJSON-LD](https://geojson.org/geojson-ld/) points in a direction how A11yJSON data records could be formatted as Linked Data at some point.

## I like OpenStreetMap – what is the relation between A11yJSON and OpenStreetMap accessibility tags?

We created A11yJSON to allow describing detailed accessibility infos for places and objects, and to make the data easy to exchange. OpenStreetMap is a fantastic database for geometry (and accessibility) data – but the data is difficult to consume if you are no expert with its tagging schemes.

For accessibility apps, this is an entry barrier that A11yJSON aims to solve.

Where Wheelmap.org uses A11yJSON in connection with OpenStreetMap, it doesn't aim to replace OSM's tagging, but allows to augment OpenStreetMap data with community-based and professional surveying – without tempering with OpenStreetMap's main dataset. Beyond this, it allows to invent features with new accessibiility criteria that don't fit OpenStreetMap's data structure or that would be difficult to fit into a working tagging proposal.

## Can you add new criteria?

Please [create an issue](https://github.com/sozialhelden/a11yjson/issues/new) so we can discuss how to extend the format. Pull requests are welcome if a discussion happens first. Please ensure your pull requests includes tests!

## I have no resources to convert my dataset to A11yJSON. Are there alternatives to share the data?

If you want to make your data available to others but lack the resources to convert or migrate your data to A11yJSON, there is a way to do this. It’s enough if your data schema has similarities to A11yJSON’s attribute names and nesting.

Whether you use A11yJSON or a similar format, as long as your data is available as CSV, JSON, XML, or over a web API, you can publish the data on [accessibility.cloud](https://accessibility.cloud). The platform makes your data consumable as A11yJSON. The team offers support to help you get your datasets transformed and shared with others. (It’s up to you if you want to share the dataset as open data, or limit access to specific organizations.)

## What does the ‘A11y’ in A11yJSON mean?

Like [I18n and l10n](https://blog.mozilla.org/l10n/2011/12/14/i18n-vs-l10n-whats-the-diff/), a11y is
a shorthand for ‘accessibility’.  11 is the number of letters between the ‘a’ and the ‘y’ in the
word ‘accessiblity’. Voice assistants pronounce it ‘A-one-one-Y’, and some people pronounce it
‘A-eleven-Y’. The most common pronunciation is the phonetic ‘ælaj’. Some find this pronunciation [plain
wrong](https://blog.ai-media.tv/blog/what-does-a11y-mean); others want the numeronym [to
die](https://mosen.org/why-the-a11y-hashtag-needs-to-die/). It’s quicker to type than the full
a-word, though, so our hunch is that it’s here to stay.

## I can't use JavaScript/SimpleSchema. Can I still use A11yJSON?

Of course! Just integrate its [documented data model](./describing-objects/0-model.md) into your own data types.

A11yJSON’s TypeScript schema comes with runtime-types in [`SimpleSchema`](https://github.com/aldeed/simple-schema-js). This allows to auto-generate schemas in other description languages. We’d love to see your contributions as npm modules or libraries for other ecosystems and languages, such as:

- GraphQL
- JSONSchema
- OpenAPI / Swagger
- Interfaces/types in other typed languages