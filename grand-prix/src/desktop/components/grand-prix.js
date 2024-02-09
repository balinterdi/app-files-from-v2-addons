import Component from '@glimmer/component';
import { getOwnConfig } from '@embroider/macros';
import '../styles/layout/containers.css';

export default class GrandPrixComponent extends Component {
  get device() {
    return getOwnConfig().device;
  }
}
