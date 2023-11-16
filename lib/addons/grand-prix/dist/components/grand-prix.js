import Component from '@glimmer/component';
import { getOwnConfig } from '@embroider/macros';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("You get no Hello as this is mobile and everything is more compact.\n\n<div>\n  <img src=\"/grand-prix/images/ember-octane.webp\" alt=\"Grand Prix\" />\n</div>");

class GrandPrixComponent extends Component {
  get device() {
    return getOwnConfig().device;
  }
}
setComponentTemplate(TEMPLATE, GrandPrixComponent);

export { GrandPrixComponent as default };
//# sourceMappingURL=grand-prix.js.map
