# FAQ

## Should I use this standard?

Yes, until there is something better. Even if you cannot adapt the whole format as part of your
own indoor mapping specs, it’s a good idea to adapt single interfaces where you see fit.

Note that A11yJSON does not yet cover the full details of services, tangible products, or events yet. Extensions are welcome!

## What about Linked Data?

Accessibility data should be shareable in a decentralized fashion, and we think that physical accessibility is a topic that is too important to let one single NGO coordinate it.

Work is happening at the W3C to create a web community standard successor, based on a Linked Data graph. We have co-founded the [W3C Linked Data for Accessibility (LDA)  Community Group](https://www.w3.org/community/lda/), so you can take part in the standardization, too! Community standardizations are no quick processes, though, so using A11yJSON is a safe bet for a while.

## Can you add new criteria?

Please file an issue so we can discuss how to extend the format. Pull requests are welcome if a discussion happens first. Please ensure your pull requests include tests!

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

Of course! Just integrate its [documented interfaces](./3-interfaces.md) into your own data types.

A11yJSON’s TypeScript schema comes with runtime-types in [`SimpleSchema`](https://github.com/aldeed/simple-schema-js). This allows to auto-generate schemas in other description languages. We’d love to see your contributions as npm modules or libraries for other ecosystems and languages, such as:

- GraphQL
- JSONSchema
- OpenAPI / Swagger
- Interfaces/types in other typed languages