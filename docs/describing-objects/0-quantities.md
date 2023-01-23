# Quantities

Accessibility survey data often contains unclear or aggregated definitions of quantities.

A11yJSON represents quantities either as string or as [`Quantity`](./interfaces.md#quantity)
object with separate properties for `value` and `unit`. Both of the following definitions are valid and have the same meaning:

```json
{
  "door": {
    "width": "90 cm",
  }
}
```

```json
{
  "door": {
    "width": {
      "value": 90,
      "unit": "cm"
    }
  }
}
```

When you supply a string, any value + unit string that [js-quantities](https://github.com/gentooboontoo/js-quantities) supports as input is valid. Imperial or metric units, both works.

As the data representation is SI-unit based, you can use the resulting data with any system that supports SI units:

- JavaScript: [js-quantities](https://github.com/gentooboontoo/js-quantities)
- C++: [Boost Units](https://www.boost.org/doc/libs/1_69_0/doc/html/boost_units/Examples.html)
- Java: [Unit API](https://github.com/unitsofmeasurement/unit-api)
- Python: [Pint](https://pint.readthedocs.io/en/latest/) and
  [uncertainties](https://pythonhosted.org/uncertainties/)
- Rust: [uom crate](https://docs.rs/uom/0.21.0/uom/)
- Swift: [Quantities package](https://github.com/BradLarson/Quantities)

Besides `value` and `unit`, you can save the original data value as string representation as `rawValue` to debug
conversion errors. When saving quantities, you *have* to specify them including their unit. You can provide measures as fixed quantities, but also with constraints and variance (uwing the `accuracy` field). This helps

- when the measurement method is imprecise
- when a person guesses a length, e.g., the width of a door
- when you want to transform a averaged measurements of more than one object
- when you derive the data from a catalog of criteria (e.g. when the original source states that all collected wheelchair-accessible entrance doors were more than 90cm wide, and only stores a boolean variable for this)
