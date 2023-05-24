import { toCapitalize } from "./utils";

const getEventName = (str) => `on${toCapitalize(str)}`;

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error("Error...");
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((event) => {
      const method = getEventName(event);
      this[method] = this[method].bind(this)
      if (!this[method]) {
        throw new Error(
          `Method: "${method}" is not implemented in ${this.name} Component`
        );
      }
      this.$root.on(event, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((event) => {
      const method = getEventName(event);

      this.$root.remove(event, this[method]);
    });
  }
}
