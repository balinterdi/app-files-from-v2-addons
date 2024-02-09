import Component from '@glimmer/component';
import { getOwnConfig } from '@embroider/macros';
import '../styles/layout/containers.css';

export default class CaroKannComponent extends Component {
  get greeting() {
    return `Buenos dias del componente Caro-Kann (${this.device})`;
  }

  get device() {
    return getOwnConfig().device;
  }
}
