# Static Website Study Association Sticky

Study Association Sticky's website is a static website built in React with GatsbyJS. It uses contentful as a CMS. `markdown to jsx` is used for converting incoming markdown from contenful to jsx, which allows for dynamic inserting of components via contentful through markdown (pretty neat, right?). `styled-components` is used for CSS-in-JS styling of components.

## Installation

1. Install Node Version Manager [nvm](https://github.com/creationix/nvm).
2. Install the required version of Node.JS (v13.11.0) by running `nvm install --latest-npm` in the project directory.
3. Install dependencies with `npm install`.
4. Create .env file: `cp sample.env .env`.
5. Fill .env with the required api keys from [contentful](https://app.contentful.com/).
   Ask someone in the CommIT for the right keys to use.

## Development

We use our own custom Semantic UI theme, which you have to build first: `npm run build-semantic`.
If you want to watch for changes in the theme, also run `npm run watch-semantic`.

If you get an error about file watchers, try this <https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers>

Then just run `npm run develop` to start a shiny development server with hot reloading.

## Contentful queries

You can debug queries by typing localhost:8000/___graphql in your explorer.

## Deployment

Also pretty simple, run `npm run build` and copy the files to a server.

## Automatic deployment

As part of the build script, artifacts are pushed to AWS. Then a deployment script is triggered on the server that attempts to download the
latest build from AWS and deploy it. This is triggered on both development and production. However, this deploy script will error early if the
branch name does not match `master` or `development` respectively. Thus, it is expected that the deploy on production fails with the error:

```
fatal error: An error occurred (404) when calling the HeadObject operation: Key ".tar.gz" does not exist
```

...because grepping for master did not match anything. If you want to deploy on production you must merge to master.
