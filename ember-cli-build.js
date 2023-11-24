'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const PostcssImport = require('postcss-import');
const { Webpack } = require('@embroider/webpack');
const withSideWatch = require('./with-side-watch');

// With the `withSideWatch` solution, this is not even needed.
// process.env.EMBROIDER_REBUILD_ADDONS = 'grand-prix';

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [PostcssImport],
      },
    },

    '@embroider/macros': {
      setConfig: {
        'grand-prix': {
          device: 'desktop',
        },
      },
    },

    trees: {
      app: withSideWatch('app', { watching: ['./grand-prix/src'] }),
    },
  });

  return require('@embroider/compat').compatBuild(app, Webpack, {});
};
