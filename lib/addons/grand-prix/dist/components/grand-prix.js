import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("Hello from inside the GrandPrix component!");

class GrandPrixComponent extends Component {}
setComponentTemplate(TEMPLATE, GrandPrixComponent);

export { GrandPrixComponent as default };
//# sourceMappingURL=grand-prix.js.map
