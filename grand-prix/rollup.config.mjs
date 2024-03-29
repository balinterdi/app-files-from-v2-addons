// import copy from 'rollup-plugin-copy';
import babel from "@rollup/plugin-babel";
import { readFileSync } from "fs";
import { hbsToJS } from "@embroider/core";
import { Addon } from "@embroider/addon-dev/rollup";

// eslint-disable-next-line no-undef
const device = process.env.DEVICE;

console.log(`Building for ${device}`);

const srcDir = `src/${device}`;

const addon = new Addon({
  srcDir,
  destDir: "dist",
});

// function normalizeFileExt(fileName) {
//   return fileName.replace(/(?<!\.d)\.ts|\.hbs|\.gts|\.gjs$/, ".js");
// }

function getMeta(context, id) {
  const meta =
    context.getModuleInfo(id)?.meta?.["rollup-ember-route-templates-plugin"];
  if (meta) {
    return meta;
  } else {
    return null;
  }
}

function routeTemplates() {
  return {
    name: "rollup-ember-route-templates-plugin",
    load(id) {
      console.log("routeTemplates", id);
      if (getMeta(this, id)) {
        const hbsFile = id.replace(/\.js$/, ".hbs");
        let input = readFileSync(hbsFile, "utf8");
        let code = hbsToJS(input);
        return {
          code,
        };
      }
    },
  };
}

export default {
  // This provides defaults that work well alongside `publicEntrypoints` below.
  // You can augment this if you need to.
  output: addon.output(),

  plugins: [
    routeTemplates(["templates/**/*.hbs"]),
    // These are the modules that users should be able to import from your
    // addon. Anything not listed here may get optimized away.
    addon.publicEntrypoints([
      "components/**/*.js",
      "controllers/**/*.js",
      "router.js",
      "routes/**/*.js",
      "templates/**/*.js",
    ]),

    // This seems to be needed for the build step to update `package.json` with
    // `public-assets` which is required for images to work.
    // The docs don't mention it and ember-welcome-page doesn't specify it,
    // so I'm not sure how it works there
    addon.publicAssets("assets"),

    // These are the modules that should get reexported into the traditional
    // "app" tree. Things in here should also be in publicEntrypoints above, but
    // not everything in publicEntrypoints necessarily needs to go here.
    addon.appReexports([
      "components/**/*.js",
      "controllers/**/*.js",
      "router.js",
      "routes/**/*.js",
      "templates/**/*.js",
    ]),

    babel({ babelHelpers: "bundled" }),

    // Follow the V2 Addon rules about dependencies. Your code can import from
    // `dependencies` and `peerDependencies` as well as standard Ember-provided
    // package names.
    addon.dependencies(),

    // Ensure that standalone .hbs files are properly integrated as Javascript.
    addon.hbs(),

    // addons are allowed to contain imports of .css files, which we want rollup
    // to leave alone and keep in the published output.
    addon.keepAssets(["**/*.css"]),

    // Remove leftover build artifacts when starting a new build.
    addon.clean(),

    // Copy Readme and License into published package
    /*
    copy({
      targets: [
        { src: '../README.md', dest: '.' },
        { src: '../LICENSE.md', dest: '.' },
      ],
    }),
    */
  ],
};
