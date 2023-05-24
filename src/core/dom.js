class Dom {
  constructor(selector) {
    this.selector =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
  }

  html(html) {
    this.selector.innerHTML = html;
  }
  append(node) {
    if (node instanceof Dom) {
      node = node.selector;
    }
    if (Element.prototype.append) {
      this.selector.append(node);
    } else {
      this.selector.appendChild(node);
    }
    return this;
  }
  on(event, callback) {
    this.selector.addEventListener(event, callback);
  }
  remove(event, callback) {
    this.selector.removeEventListener(event, callback);
  }
}
const $ = (node) => new Dom(node);

$.create = (tagName, className = "") => {
  const el = document.createElement(tagName);
  if (className) {
    el.className = className;
  }
  return $(el);
};

export default $;
