class CellComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // <div class="instagram-phone">
        //     <img src="./img/instagram-celular.png" alt="celular">
        // </div>
        const container = document.createElement('div');
        container.classList.add('instagram-phone');
        const img = document.createElement('img');
        img.src = this.getAttribute("picture");

        const style = document.createElement('style');
        style.textContent = `
            .instagram-phone {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50%;
            }
            .instagram-phone img {
                height: 50rem;
            }
        `;

        container.appendChild(img);

        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

customElements.define('cell-component', CellComponent);