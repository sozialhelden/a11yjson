# ac-format — A unified accessibility data schema

This repository contains TypeScript types of a unified data format describing the accessibility of places and facilities. We want this to eventually capture every possible attribute and data point provided by mapping and building related APIs. It is used by [accessibility.cloud](https://www.accessibility.cloud), one of the biggest databases providing accessibility data.

## Starting points in the code

Start here for the base type describing a place:
https://github.com/sozialhelden/ac-format/blob/master/src/place-info.ts

…and here for accessibility:
https://github.com/sozialhelden/ac-format/blob/master/src/accessibility.ts

## Contributing

This project is not complete and will never be. We're open to your suggestions and comments, no matter if you share data yourself or want to consume them from [accessibility.cloud](https://www.accessibility.cloud) – [send an email to us](support@accessibility.cloud) or create an issue or pull request!

## Builds

[![Build Status](https://travis-ci.org/sozialhelden/ac-format.svg?branch=master)](https://travis-ci.org/sozialhelden/ac-format)
