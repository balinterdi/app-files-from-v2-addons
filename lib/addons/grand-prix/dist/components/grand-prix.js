import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("Hello from inside the GrandPrix component!\n\n<div>\n  <img src=\"/grand-prix/images/grand-prix-attack.webp\" alt=\"Grand Prix\" />\n</div>");

class GrandPrixComponent extends Component {}
setComponentTemplate(TEMPLATE, GrandPrixComponent);

export { GrandPrixComponent as default };
//# sourceMappingURL=grand-prix.js.map
