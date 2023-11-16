import Component from '@glimmer/component';
import { getOwnConfig } from '@embroider/macros';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<p>Hello from inside the ({{this.device}}) GrandPrix component!</p>\n\n<div class=\"image-container\">\n  <img src=\"/grand-prix/assets/images/grand-prix-attack.webp\" alt=\"Grand Prix\" />\n</div>");

class GrandPrixComponent extends Component {
  get device() {
    return getOwnConfig().device;
  }
}
setComponentTemplate(TEMPLATE, GrandPrixComponent);

export { GrandPrixComponent as default };
//# sourceMappingURL=grand-prix.js.map
