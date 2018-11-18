# A harmonized data schema for describing the accessibility of physical places

This repository contains a unified data format that describes the accessibility of places, facilities and services.

It is the result of looking at many accessibility datasets that we got from organizations all over the world. Our aim is to allow any other accessibility API data format to be convertible to this harmonized format in a way that makes the result easier to consume.

Our goal is to make the world more accessible for everybody — which is easier if everybody uses the same (or at least similar) language when sharing accessibility data.

The schema is used by [accessibility.cloud](https://www.accessibility.cloud), one of the biggest data exchange providers for accessibility data, by [Wheelmap.org](https://wheelmap.org), and other organizations. Consumable data in this schema has been provided by many international sources, which you can find (mostly as open data) on https://www.accessibility.cloud.

The definitions are written in TypeScript for compile-time validation. It supports validating data records at runtime using [SimpleSchema](https://github.com/aldeed/simple-schema-js).

## Physical quantities, rating scales and personal profiles

Unfortunately, many datasets claim that places are (not) accessible for arbitrary categories of people. As an example, some wheelchair can climb stairs, but if an entrance has stairs, the data source claims it is inaccessible, which makes the data unusable for this target group.

The solution to this is to let each individual make their own decision about the accessibility of something – if you collect or share data, try to collect, display and share physical attributes of places instead of target group-based data. If possible, also avoid rating scales, as they can be misinterpreted.

### Example with information that can be misleading or difficult to interpret

- Bad: ‘The place is not accessible in a wheelchair’ - Better: ‘There is one step at the entrance, its height is 2 inches’
- Bad: ‘The sitemap is accessible for blind people’ – Better: ‘The sitemap is available in braille’ or ‘The sitemap has high contrast and uses big fonts’
- Bad: ‘The staff is trained in accomodating people with disabilities’ – Better: Explain which facilities or services exist in detail
- Bad: A rating that says ‘Wheelchair users gave this place 3/5 stars’ – Better: Explain the facilities wheelchair users can find at the place. Is there a step at the entrance? Is there a wheelchair-accessible toilet? Do you need a special key to use it? Etc.

### Examples of helpful, measurable data points

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

While analyzing accessibility data sets, we often encountered unclear definitions of quantities. Should a length be defined in imperial or metric units, and which prefix is to be used – centimeters or meters, for example? ac-format allows you to use any units that are supported by [js-quantities](https://github.com/gentooboontoo/js-quantities) as input.

Each attribute definition contains a preferred unit, and when saving quantities, you cannot specify them without a unit. You can specify fixed quantities, but also constraints and variance. This allows for fuzzy quantities when the measurement method is imprecise, for example when a person just guesses the width of a door, or when you want to transform a data source that just has averaged data calculated from measurements of multiple objects.

Additionally to value and unit, you can save the original data value as string representation to debug conversion errors.

## For developers: starting points in the code

Start here for the base type that describes a place:
https://github.com/sozialhelden/ac-format/blob/master/src/place-info.ts

…and here for accessibility specs:
https://github.com/sozialhelden/ac-format/blob/master/src/accessibility.ts

## What if I want to make my data available, but my infrastructure does not support JavaScript/SimpleSchema/your nesting…?

If you want to make your data available on accessibility.cloud, it is enough if your own data format is as close as possible to the attribute names / nesting described here. The more platforms use this, the easier it gets to share accessibility data. With accessibility.cloud, it’s possible to import data delivered in different schemas and formats. We encourage you to implement as many attributes as possible!

## Contributing

This project is not complete and will never be. We're open to your suggestions and comments, no matter if you share data yourself or want to consume them from [accessibility.cloud](https://www.accessibility.cloud) – [send an email to us](support@accessibility.cloud) or create an issue or pull request!

## Builds

[![Build Status](https://travis-ci.org/sozialhelden/ac-format.svg?branch=master)](https://travis-ci.org/sozialhelden/ac-format)
