import AbstractRouter from 'router-abstract';

export default class Router extends AbstractRouter {
  // the abstract router contains setup that is shared between desktop and mobile
}

Router.map(function () {
  this.route('caro-kann');
});
