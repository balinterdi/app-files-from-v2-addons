'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const PostcssImport = require('postcss-import');
const { Webpack } = require('@embroider/webpack');

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
  });

  return require('@embroider/compat').compatBuild(app, Webpack, {});
};
