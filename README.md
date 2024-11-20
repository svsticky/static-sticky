# Static Website Study Association Sticky

Study Association Sticky's website is a static website built in React with GatsbyJS. It uses contentful as a CMS. `markdown to jsx` is used for converting incoming markdown from contenful to jsx, which allows for dynamic inserting of components via contentful through markdown (pretty neat, right?). `styled-components` is used for CSS-in-JS styling of components.

## Installation

1. Make sure you have the [Docker engine](https://docs.docker.com/engine/), as well as [Visual studio code](https://code.visualstudio.com/) with the [Devcontainers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extention installed.
2. open the project in a dev containter. The default shortcut for this (in VS Code) is: <kbd>CTRL</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>, and then typing `open folder` in container. You may have to select the project folder. If this takes longer than expected, please read the warning below.
3. Open a terminal in the dev container. You can do this by pressing `Terminal` (in the hotbar), then `New terminal`. Alternatively, you can use the default keybinds: <kbd>CTRL</kbd>+<kbd>Shift</kbd>+<kbd>`</kbd>.
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
