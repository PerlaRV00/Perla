class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Ramírez Valdés Perla`;
  }
}
customElements.define(
  "mi-footer", MiFooter);