# A standard to describe the accessibility of the physical world.

<!-- [![Build
Status](https://travis-ci.org/sozialhelden/a11yjson.svg?branch=master)](https://travis-ci.org/sozialhelden/a11yjson) -->

<img alt="A11yJSON icon" src="./images/logo-dark.svg" align="right" width="80" height="80" style="margin-left: 10px; margin-bottom: 10px;" /> A11yJSON is an open standard based on [GeoJSON (RFC 7946)](https://tools.ietf.org/html/rfc7946). Its goal is to make accessibility information more comfortable to exchange.

Integrate A11yJSON into data schemas that describe…

- real places
- local amenities, like elevators, escalators, or vending machines
- sanitary facilities
- physical media and services
- policies that can be barriers (like dog friendliness)
- escalators and elevators (including their real-time operational status)

This is a valid A11yJSON data snippet:

```json
{
  "entrances": [
    { "name": "30th St", "isMainEntrance": true, "isLevel": false },
    { "name": "Side gate", "hasFixedRamp": true }
  ],
  "animalPolicy": {
    "allowsGuideDogs": false
  }
}
```

The docs provide examples (for example, a [cinema](./example-data/cinema.md), [canteen](./example-data/canteen.md), an [elevator](./example-data/elevator.md)) for more complex definitions, or the [list of accessibility criteria](describing-objects/0-model.md) to see the format's extent.

## Is this for me?

See the [FAQ](faq.md).

Here is a [list of projects using A11yJSON](1-who-uses-a11yjson.md).

## Technically…

A11yJSON provides a collection of [documented data model](./describing-objects/0-model.md) for structuring data in your projects – no matter which language you use.

It comes with a TypeScript library to check your data structures at compile-time.

For web and Node.js, there is [`@sozialhelden/a11yjson`, a npm module](https://www.npmjs.com/package/@sozialhelden/a11yjson). The model validates data at runtime using [`SimpleSchema`](https://github.com/aldeed/simple-schema-js),  sanitizes input, and returns sophisticated error messages for wrong data.

The schema definition API is simple to read, so the schema should be portable to other schema languages (GraphQL, JSON Schema, …), if necessary. If you have a specific idea, [let’s talk](mailto:developers@sozialhelden.de)!

## Who is behind A11yJSON?

A11yJSON is made by [Sozialhelden e.V.](https://sozialhelden.de), a non-profit that works on innovative solutions to social issues. It’s based in Berlin, Germany, and known for [Wheelmap.org](https://wheelmap.org), the world’s biggest open online map of accessible places.

## Finally…

If you think that A11yJSON deserves attention, consider giving it a [Star on GitHub](https://github.com/sozialhelden/a11yjson/), share the project on social media, and tell your friends! 🙌
