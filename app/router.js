import EmberRouter from '@ember/routing/router';
import config from 'app-files-from-v2-addons/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
