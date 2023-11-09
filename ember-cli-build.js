'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
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
