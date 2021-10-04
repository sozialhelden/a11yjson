# Describe objects, not people

Here's the tl/dr. When designing accessibility-related apps or surveys,

- **Describe physical, measurable properties of objects, don't assume people's abilities.**
- **Make the raw information searchable and displayable.**

## Embrace complexity

While building [Wheelmap.org](https://wheelmap.org), we learned that collecting ‘yes/no/partial’ attributes is not enough to be helpful. The world is complex. Personal abilities vary.

UX minimalism and efficiency are often cited when it comes to condensing the number of options in a
UI. After all, doing so leads to better accessibility because your app gets simpler to use!

But it shouldn’t come at the cost of meaning. If you design a restaurant finder, it *should* feel simple and look great, but the accessibility facts you display must be accurate and not misleading. While there is a always a trade-off between high level of detail and simplicity, at least the raw data you collect should include measurable properties. Interpretation can happen later, in a separate step.

## Assume less

While analyzing data sets, we sometimes stumble upon data that characterizes a place as being (not) accessible for a specified target group with the best intentions. Claims include:

- ‘the restaurant is accessible for blind people’
- ‘the station is accessible for people with mobility impairments’
- ‘the museum offers for people with learning impairments’

Superficially, these statements *look* helpful. But they aren’t:

- People might share the same disability – but have different needs. Having a learning impairment doesn’t imply that you need plain language, for example. A wheelchair users might be able to surmount one step as long as it’s not too high (actually, many wheelchair users can.) Being blind [doesn’t mean you can read Braille](https://en.wikipedia.org/wiki/Braille_literacy). Vice-versa, offering Braille books alone doesn't imply that a library is ‘accessible for the blind’.
- A person can have more than one disability. Your UX should reflect this.
- Physical accessibility data can help non-disabled people, too.
- Obviously, you can’t know everyone’s abilities.

A rule of thumb: for good data quality, leave the decision what's accessible to your users. Surveying and showing measurable, countable, observable criteria is better than trying to ‘help’ people by pre-interpreting it.

Doing so has a pleasant side effect: It’s much easier to agree on a countable measurement like “the main entrance has 2 steps” than on a fuzzy term like “partially accessible.”
