import Component from '@glimmer/component';
import { getOwnConfig } from '@embroider/macros';

export default class GrandPrixComponent extends Component {
  get device() {
    return getOwnConfig().device;
  }
}
