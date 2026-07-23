import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./styles";
import { pageSectionStyles } from "../../../../shared/styles/page-section.styles";
import { template } from "./template";
import {} from './components/capability-section/component';

@customElement('capabilities-showcase')
export class CapabilitiesShowcase extends LitElement {
  static styles = [styles, pageSectionStyles];

  protected render() {
    return template();
  }
}
