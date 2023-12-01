import { template } from '@ember/template-compiler';
import RouteTemplate from 'ember-route-template';

var caroKann = RouteTemplate(template(`
    <h2>The Caro-Kann Opening</h2>

    <div class="image-container">
      <img src="/grand-prix/assets/images/caro-kann.webp" alt="Caro Kann Opening" />
    </div>
  `, {
    eval () {
        return eval(arguments[0]);
    }
}));

export { caroKann as default };
//# sourceMappingURL=caro-kann.js.map
