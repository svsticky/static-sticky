# Static Website Study Association Sticky
Study Association Sticky's website is a static website built in React with GatsbyJS. It uses contentful as a CMS. `markdown to jsx` is used for converting incoming markdown from contenful to jsx, which allows for dynamic inserting of components via contentful through markdown (pretty neat, right?). `styled-components` is used for CSS-in-JS styling of components. 

## Installation
1. Install Node Version Manager [nvm](https://github.com/creationix/nvm). 
2. Install the required version of nodejs by running `nvm install` in the project directory.
3. Install dependencies with `npm` or `pnpm` (see below).
4. Create .env file: `cp sample.env .env`.
5. Fill .env with the required api keys without quotes from [contentful](https://app.contentful.com/) ( Space Settings > API keys ).
   
### NPM
3. Install dependencies by running `npm i` in the project directory.

### PNPM
`gatsby` and `semantic-ui` don't play nicely with `pnpm` (see https://github.com/pnpm/pnpm/issues/991 and https://github.com/Semantic-Org/Semantic-UI/issues/6706 respectively).
If you want to use a mix, you can do the following

3.1. Remove `gatsby` and `semantic-ui`: `pnpm uninstall gatsby semantic-ui`.
3.2. Install everything else: `pnpm install`.
3.3. Reset changes to dependenciesL `git reset --hard`.
3.4. Install remaining packages: `npm install`.

## Development
Pretty simple, just run `npm run develop` to start a shiny development server with hot reloading.

If you want to watch for changes in the theme, also run `npm run watch-semantic`.

If you get an error about file watchers, try this https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers

## Deployment
Also pretty simple, run `npm run build` and copy the files to a server. 
