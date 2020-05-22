# A standard to describe the accessibility of the physical world.

<!-- ![A11yJSON icon](./images/logo-dark.svg) -->

<!-- [![Build
Status](https://travis-ci.org/sozialhelden/a11yjson.svg?branch=master)](https://travis-ci.org/sozialhelden/a11yjson) -->

A11yJSON is an open standard based on [GeoJSON (RFC 7946)](https://tools.ietf.org/html/rfc7946). Its goal is to make accessibility information more comfortable to exchange.

You can use it to describe the accessibility of…

- real places
- local amenities
- sanitary facilities
- physical media and services
- policies that can be barriers (like dog friendliness)
- escalators and elevators (including their real-time operational status)

A valid A11yJSON data snippet:

```json
{
  "entrances": [
    { name: "30th St", "isMainEntrance": true, "isLevel": false },
    { name: "Side gate", "hasFixedRamp": true }
  ],
  "animalPolicy": {
    "allowsGuideDogs": false
  }
}
```

See the [examples](.docs/1-example-data.md) for more complex definitions, or [interfaces](./docs/3-interfaces.md) for the full spec.

## Is this for me?

A11yJSON can help you if you work with data in…

- Architecture
- Indoor navigation
- Facility management
- Accessibility surveys
- Location-based services
- Outdoor/transit navigation
- Building Information Management (BIM)

We have a [list of projects using A11yJSON](./docs/2-who-uses-a11yjson.md).

## Technically…

A11yJSON provides a collection of [documented interfaces](./docs/3-interfaces.md) for structuring data in your own projects – no matter which language you use.

It comes with a TypeScript library to check your data structures at compile-time.

For web and Node.js, there is [`@sozialhelden/a11yjson`, a npm module](https://www.npmjs.com/package/@sozialhelden/a11yjson). The model validates data at runtime using [`SimpleSchema`](https://github.com/aldeed/simple-schema-js),  sanitizes input, and returns sophisticated error messages for wrong data.

The schema definition API is simple to read, so the schema should be portable to other schema languages (e.g. GraphQL, JSON Schema, …), if necessary. If you have a specific idea, [let's talk](developers@sozialhelden.de)!

## Who is behind A11yJSON?

A11yJSON is made by [Sozialhelden e.V.](https://sozialhelden.de), a non-profit that works on innovative solutions to social issues. It’s based in Berlin, Germany, and known for [Wheelmap.org](https://wheelmap.org), the world’s biggest open online map of accessible places.
