// import copy from 'rollup-plugin-copy';
import babel from "@rollup/plugin-babel";
import { Addon } from "@embroider/addon-dev/rollup";
import copy from "rollup-plugin-copy";

// eslint-disable-next-line no-undef
const device = process.env.DEVICE;

console.log(`Building for ${device}`);

const sourceDir = `src/${device}`;

const addon = new Addon({
  srcDir: sourceDir,
  destDir: "dist",
});

export default {
  // This provides defaults that work well alongside `publicEntrypoints` below.
  // You can augment this if you need to.
  output: addon.output(),

  plugins: [
    addon.publicEntrypoints([
      "components/**/*.js",
      "templates/**/*.js",
      "router.js",
    ]),

    addon.appReexports([
      "components/**/*.js",
      "templates/**/*.js",
      "router.js",
    ]),

    babel({ babelHelpers: "bundled" }),

    // Follow the V2 Addon rules about dependencies. Your code can import from
    // `dependencies` and `peerDependencies` as well as standard Ember-provided
    // package names.
    addon.dependencies(),

    // Ensure that standalone .hbs files are properly integrated as Javascript.
    addon.hbs(),

    addon.gjs(),

    // addons are allowed to contain imports of .css files, which we want rollup
    // to leave alone and keep in the published output.
    addon.keepAssets(["**/*.css"]),

    // Remove leftover build artifacts when starting a new build.
    addon.clean(),

    // Copy templates to the dist folder so they can be used by the app
    // (Not sure if that's a sanctioned way, though)
    // copy({
    //   verbose: true,
    //   targets: [
    //     { src: `${sourceDir}/templates/**/*.hbs`, dest: "dist/templates/" },
    //   ],
    // }),
  ],
};
