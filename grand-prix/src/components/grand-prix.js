import Component from '@glimmer/component';
import { getOwnConfig } from '@embroider/macros';

export default class GrandPrixComponent extends Component {
  get imageSrc() {
    return '/grand-prix/grand-prix-attack.webp';
  }

  get device() {
    return getOwnConfig().device;
  }
}
