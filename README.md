# Static Website Study Association Sticky

Study Association Sticky's website is a static website built in React with GatsbyJS. It uses contentful as a CMS. `markdown to jsx` is used for converting incoming markdown from contenful to jsx, which allows for dynamic inserting of components via contentful through markdown (pretty neat, right?). `styled-components` is used for CSS-in-JS styling of components.

## Installation

1. Install Node Version Manager [nvm](https://github.com/creationix/nvm).
2. Install the required version of nodejs by running `nvm install` in the project directory.
3. Install dependencies with `npm i` or `pnpm` (see below).
4. Create .env file: `cp sample.env .env`.
5. Fill .env with the required api keys from [contentful](https://app.contentful.com/).
   Ask someone in the CommIT for the right keys to use.

### PNPM

`gatsby` doesn't play nicely with `pnpm` (see <https://github.com/pnpm/pnpm/issues/991>)
However, these problems can be resolved wih `pnpm i --shamefully-flatten`.

## Development

We use our own custom Semantic UI theme, which you have to build first: `npm run build-semantic`.
If you want to watch for changes in the theme, also run `npm run watch-semantic`.

If you get an error about file watchers, try this <https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers>

Then just run `npm run develop` to start a shiny development server with hot reloading.

## Deployment

Also pretty simple, run `npm run build` and copy the files to a server.
