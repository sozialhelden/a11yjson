# A11yJSON: A harmonized data schema for describing the accessibility of physical places

This repository contains a unified data format that describes the accessibility of places, facilities and services.

It’s the result of looking at accessibility datasets that we got from organizations all over the world. Our aim is to allow any other accessibility API data format to be convertible to this harmonized format in a way that makes the result easier to consume.

Our goal is to make the world more accessible for everybody — which is easier if everybody uses the same (or at least similar) language when sharing accessibility data.

This is the successor of the data schema we use for [accessibility.cloud](https://www.accessibility.cloud), one of the biggest data exchange providers for accessibility data, by [Wheelmap.org](https://wheelmap.org), and other organizations. Some international sources already provide consumable data in this schema. You can find them–in most cases as open data–on https://www.accessibility.cloud.

We wrote the definitions in TypeScript for compile-time validation. It supports validating data records at runtime using [SimpleSchema](https://github.com/aldeed/simple-schema-js). SimpleSchema is convertible to other schemes, if necessary.

## The specification

The format is based on the [GeoJSON format (RFC 7946)](https://tools.ietf.org/html/rfc7946).

We have an [overview of interfaces and types](https://sozialhelden.github.io/ac-format/attributes.html), and [a more extensive TypeDoc-based documentation](https://sozialhelden.github.io/ac-format/).

Some examples:

- Describe places of interest with the [`PlaceInfo`](https://sozialhelden.github.io/ac-format/attributes.html#PlaceInfo) and [`PlaceProperties`](https://sozialhelden.github.io/ac-format/attributes.html#PlaceProperties) interfaces
- Describe the accessibility of a place of interest with the [`Accessibility`](https://sozialhelden.github.io/ac-format/attributes.html#Accessibility) interface
- Places can have restrooms (described in every detail by the [`Restroom`](https://sozialhelden.github.io/ac-format/attributes.html#RestRoom) interface)
- Places can have equipment like elevators or escalators, including realtime operational status information. Use the [`EquipmentProperties`](https://sozialhelden.github.io/ac-format/attributes.html#EquipmentProperties) interface for describing facilities.

Even if you cannot adapt the whole format as part of your own indoor mapping specs, it’s a good idea to adapt single interfaces where you see fit.

## Physical quantities, rating scales and personal profiles

We found a lot of datasets claiming that places are (not) accessible for arbitrary categories of people. As an example, a data source might claim that a place is not accessible for wheelchair users, but does not mention that this is because the entrance has a step. For wheelchair users that can climb a step as long as it’s not too high, a data point like this is misleading.

A solution for better data quality is to let each individual make their own decision about the accessibility of something—if you collect or share data, measure physical attributes of places instead of target group-based data. If possible, also avoid rating scales, as their interpretation is difficult.

## Internationalization (I18n)

You can localize all human-readable strings using JSON objects with IETF language tags as property names and the translations as property values:

```json
{
  "en": "Accessibility",
  "de": "Zugänglichkeit",
  "zh-Hans": "无障碍",
  "ase": "https://www.handspeak.com/word/search/index.php?id=1643"
}
```

This is optional - the specification allows to simply use a string, too.

We encourage you to localize your strings—If available, you can even use IETF sign language tags (like `ase` for American Sign Language) for adding sign language localization using video, image or website URLs.

### Bad examples with better solutions

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

While we need datasets and UIs that have a simple design and are easy to understand, the data itself should define measurable properties of a place only. Interpretation should always be a separated step. **Describe places, not people!**

## Quantities

While analyzing accessibility data sets, we often encountered unclear definitions of quantities. Should we define a length in imperial or metric units, and which prefix should we use – centimeters or meters, for example? ac-format allows us to use any quantity+unit strings that [js-quantities](https://github.com/gentooboontoo/js-quantities) supports as input.

As the measurement data is SI-unit based, you can use them with any code that supports SI units:

- C++: [Boost Units](https://www.boost.org/doc/libs/1_69_0/doc/html/boost_units/Examples.html)
- Java: [Unit API](https://github.com/unitsofmeasurement/unit-api)
- Python: [Pint](https://pint.readthedocs.io/en/latest/) and [uncertainties](https://pythonhosted.org/uncertainties/)
- Rust: [uom crate](https://docs.rs/uom/0.21.0/uom/)
- Swift: [Quantities package](https://github.com/BradLarson/Quantities)

Each attribute definition contains a preferred unit. When saving quantities, you have to specify them with a unit. You can provide measures as fixed quantities, but also with constraints and uncertainty or variance. This allows for fuzzy quantities when the measurement method is imprecise, for example when a person guesses the width of a door, or when you want to transform a data source that has averaged data calculated from measurements of more than one object.

Besides value and unit, you can save the original data value as string representation to debug conversion errors.

## What if I want to make my data available, but my infrastructure does not support JavaScript/SimpleSchema/your nesting…?

If you want to make your data available on accessibility.cloud, it’s enough if your own data format is as close as possible to the attribute names / nesting described here. The more platforms use the same format, the easier it gets to share accessibility data. With accessibility.cloud, it’s possible to import data delivered in different schemas and formats.

We encourage you to implement as many attributes as possible in your project!

## Contributing

This project is not complete and will never be. We're open to your suggestions and comments, no matter if you share data yourself or want to consume them from [accessibility.cloud](https://www.accessibility.cloud) – [send an email to us](support@accessibility.cloud) or create an issue or pull request!

## Builds

[![Build Status](https://travis-ci.org/sozialhelden/ac-format.svg?branch=master)](https://travis-ci.org/sozialhelden/ac-format)
