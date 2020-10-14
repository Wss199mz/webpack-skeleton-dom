
# webpack-skeleton-dom
webpack-skeleton-dom plugin insert dom by html-webpack-plugin hooks
## Installation
The plugin is available via npm:

```js
$ npm i webpack-skeleton-dom
```

## Examples

```js
var webpackSkeletonDom = require('webpack-skeleton-dom');
module.exports = {
 plugins: [
    // Other plugins.
    // WebpackClearConsole plugin removes all statements beginning with console.
    new webpackSkeletonDom(
      {
        skeletonHtml: ''
      }
    )
  ]
}
```
