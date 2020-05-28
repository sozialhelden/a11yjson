# Contributing

We're delighted you're reading this because we need volunteer developers to help this project come
to fruition. 👏

This project is not complete and will never be. We're open to your suggestions and comments, no
matter if you share data yourself or want to consume it (for example, from
[accessibility.cloud](https://www.accessibility.cloud)). [Say hi via email](mailto:support@accessibility.cloud) or [create an issue](https://github.com/sozialhelden/a11yjson/issues/new)!

Please respect our [Code of Conduct](https://github.com/sozialhelden/a11yjson/blob/master/code-of-conduct.md).

## Pull requests

Before you make a pull request, please open an issue so we can discuss the contribution you want to
make.

These steps guide you through contributing to this project:

- Fork the repo
- Clone it and install dependencies

    git clone https://github.com/sozialhelden/a11yjson npm install

Make and commit your changes. Include tests. Ensure that `npm run build` and `npm run test:prod` are
still working without errors after your changes.

Finally, send a [GitHub Pull Request](https://github.com/sozialhelden/a11yjson/compare?expand=1)
with a clear list of what you've done (read more [about pull
requests](https://help.github.com/articles/about-pull-requests/)). If possible, your commits should
be atomic (one feature per commit).

## Documentation with `mkdocs-material`

1. Install Docker.
2. Install `mkdocs-material`:

        docker pull squidfunk/mkdocs-material

3. Run the local `mkdocs-material` server:

        docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material

4. Build the docs:

        docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material build
