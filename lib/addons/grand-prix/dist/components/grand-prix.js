import Component from '@glimmer/component';
import { getOwnConfig } from '@embroider/macros';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("Hello from inside the ({{this.device}}) GrandPrix component! \n\n<div>\n  <img src={{this.imageSrc}} alt=\"Grand Prix\" />\n</div>");

class GrandPrixComponent extends Component {
  get imageSrc() {
    return '/grand-prix/grand-prix-attack.webp';
  }
  get device() {
    return getOwnConfig().device;
  }
}
setComponentTemplate(TEMPLATE, GrandPrixComponent);

export { GrandPrixComponent as default };
//# sourceMappingURL=grand-prix.js.map
