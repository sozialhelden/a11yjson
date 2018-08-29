# ac-format — A Unified Accessibility Data Schema

This repository contains TypeScript types of a unified data format describing the accessibility of places and facilities relevant for mobility.

It is the result of looking at many accessibility datasets that we got from organizations all over the world. Our aim is to allow any other accessibility API data format to be convertible to this harmonized format.

By describing physical properties of things, its aim is to make the world more accessible for everybody — which is much easier if everybody who shares accessibility data uses the same language!

The data format is used by [accessibility.cloud](https://www.accessibility.cloud), one of the biggest data exchange providers for accessibility data, by [Wheelmap.org](https://wheelmap.org/beta), and many others.

## Schema

The data schema is defined as TypeScript types. Data can be validated using [SimpleSchema](https://github.com/aldeed/simple-schema-js).

## Physical quantities, rating scales and personal profiles

Unfortunately, many datasets claim that places are (not) accessible for arbitrary categories of people.

Some wheelchair users can climb stairs, some can not – and there are wheelchairs of many sizes. If a person is blind, it does not automatically follow that they can hear speech output or read braille.

### Example with information that can be misleading or difficult to interpret

- An attribute that says that ‘The staff is trained in accomodating people with disabilities’
- An attribute that claims that ‘the place is accessible for blind people’
- An attribute that claims that ‘the place is accessible for people who use wheelchairs’
- A rating that says ‘Wheelchair users gave this place 3 stars’

### Example with more helpful, measurable data points

- ‘The entrance has an automatic door’
- ‘The entrance has one step with 4cm height
- ‘There is a braille sitemap with raised letters and shapes’
- ‘There are side rails with braille navigation’
- ‘All floors have tactile paving’
- ‘All elevators have speech output, but no braille controls’
- ‘The audition hall has an induction loop’
- ‘The menu has a photo of each dish’

While we need datasets and UIs that are easy to understand, the data itself should define measurable properties of a place only. Interpretation should be a separated step. **Describe places, not people!**

## Quantities

While analyzing accessibility data sets, we often encountered unclear definitions of quantities. Should a length be defined in imperial or metric units, and which prefix is to be used – centimeters or meters, for example? The format allows to use any units that are supported by [js-quantities](https://github.com/gentooboontoo/js-quantities) as input.

Each attribute definition contains a preferred unit, and when saving quantities, you have to save them together with a unit. You can not only define fixed quantities, but also constraints. This allows for fuzzy quantities when the measurement method is imprecise, for example when a person just guesses the width of a door.

Additionally to value and unit, you can save an accuracy value and the original data value to debug conversion errors if they happen.

## For developers: starting points in the code

Start here for the base type describing a place:
https://github.com/sozialhelden/ac-format/blob/master/src/place-info.ts

…and here for accessibility:
https://github.com/sozialhelden/ac-format/blob/master/src/accessibility.ts

## What if I want to make my data available, but my infrastructure does not support JavaScript/SimpleSchema/your nesting…?

If you want to make your data available on accessibility.cloud or like our list of attributes, it is enough if your own data format is as close as possible to the attribute names / nesting described here. The more platforms use this, the easier it is to share accessibility data. accessibility.cloud can import data from any other schema/format and has a way to transform attributes from your format to ac-format on data import. We encourage you to implement as many attributes as possible!

## Contributing

This project is not complete and will never be. We're open to your suggestions and comments, no matter if you share data yourself or want to consume them from [accessibility.cloud](https://www.accessibility.cloud) – [send an email to us](support@accessibility.cloud) or create an issue or pull request!

## Builds

[![Build Status](https://travis-ci.org/sozialhelden/ac-format.svg?branch=master)](https://travis-ci.org/sozialhelden/ac-format)
