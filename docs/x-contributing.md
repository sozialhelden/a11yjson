# Contributing

We're delighted you're reading this because we need volunteer developers to help this project come
to fruition. 👏

This project is not complete and will never be. We're open to your suggestions and comments, no
matter if you have an idea for A11yJSON, if you want to share data on platforms like Wheelmap, or if you want to consume it in your own apps (for example, from
[accessibility.cloud](https://www.accessibility.cloud)).

[Say hi via email](mailto:support@accessibility.cloud) or [create an issue](https://github.com/sozialhelden/a11yjson/issues/new)!

Please respect our [Code of Conduct](https://github.com/sozialhelden/a11yjson/blob/master/code-of-conduct.md).

Even if you don’t have the resources to contribute code, you can help A11yJSON by spreading the word.

- [Share your support on Twitter](https://twitter.com/share?text=I support A11yJSON, and you should too. RT to spread this!&url=https://a11yjson.org&hashtags=accessibility,a11y,a11yjson,sozialhelden)
- Give the repository a Star [on GitHub](https://github.org/sozialhelden/a11yjson)

## Pull requests

Before you make a pull request, please open an issue so we can discuss the contribution you want to
make.

These steps guide you through contributing to this project:

- Fork the repo
- Clone it and install dependencies

    ```bash
    git clone https://github.com/sozialhelden/a11yjson
    npm install
    ```

- Make and commit your changes.
- Include tests and documentation.
- Ensure that `npm run build` and `npm run test:prod` are still working without errors after your changes.

Finally, send a [GitHub Pull Request](https://github.com/sozialhelden/a11yjson/compare?expand=1)
with a clear list of what you've done (read more [about pull
requests](https://help.github.com/articles/about-pull-requests/)). If possible, your commits should
be atomic (one feature per commit).

## Documentation with `mkdocs-material`

Prerequisites: Have a local Docker installation.

```bash
npm run docs:install        # Installs the mkdocs-material Docker image

npm run docs:live           # Run this while making changes in the docs/ Markdown files

npm run docs:deploy         # Deploys the documentation on GitHub pages
```
