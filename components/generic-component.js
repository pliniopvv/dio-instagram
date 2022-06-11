class GenericComponent extends HTMLElement {
    _shadow;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: 'open' });
    }

    set style(stile) {
        const style = document.createElement('style');
        style.textContent = stile;
        shadow.appendChild(style);
    }

    set appendChild(content) {
        this._shadow.appendChild(content);
    }
}

customElements.define('cell-component', CellComponent);