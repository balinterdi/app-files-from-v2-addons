import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div class=\"image-container\">\n  <img src=\"/grand-prix/assets/images/caro-kann.webp\" alt=\"Caro Kann Opening\" />\n</div>");

var caroKann = setComponentTemplate(TEMPLATE, templateOnly());

export { caroKann as default };
//# sourceMappingURL=caro-kann.js.map
