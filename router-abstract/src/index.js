import EmberRouter from '@ember/routing/router';
import { getOwnConfig } from '@embroider/macros';

export default class Router extends EmberRouter {
  location = getOwnConfig().location;
  rootURL = getOwnConfig().rootURL;

  constructor() {
    super(...arguments);

    this.on('routeWillChange', (transition) => {
      let fromName = (transition.from && transition.from.name) || '';
      let toName = (transition.to && transition.to.name) || '';
      window.console.info(
        `Preparing transition from '${fromName}' to '${toName}'`
      );
    });

    this.on('routeDidChange', (transition) => {
      let toName = (transition.to && transition.to.name) || '';
      window.console.info(`Transitioned into '${toName}'`);
    });
  }
}

Router.map(function () {});
