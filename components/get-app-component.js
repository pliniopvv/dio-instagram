class GetAppComponent extends HTMLElement {
    constructor() {
        super();

        /* <div class="get-the-app">
                <p class="get-app">Baixe o aplicativo</p>
                <div class="download">
                    <a href="#" class="app-download"></a>
                    <a href="#" class="app-download"></a>
                </div>
            </div> */
  
        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.classList.add('get-the-app');
        
        const p1 = document.createElement('p');
        p1.classList.add("get-app");
        p1.textContent = `Baixe o aplicativo`;
        
        const div1 = document.createElement('div');
        div1.classList.add("download");

        const a1 = document.createElement('a');
        a1.href = "#"
        a1.classList.add("app-download");

        const a2 = document.createElement('a');
        a2.href = "#"
        a2.classList.add("app-download");

        div1.appendChild(a1);
        div1.appendChild(a2);

        const style = document.createElement('style');
        style.textContent = `
            .get-the-app {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                padding: 1.3rem 0;
            }

            .download {
                display: flex;
                width: 100%;
                justify-content: space-evenly;
                align-items: center;
                padding: 1rem;
            }

            .app-download {
                height: 3rem;
                width: 10rem;
                background-size: cover;
            }

            .app-download:nth-child(1) {
                background-image: url('./img/apple-button.png');
            }

            .app-download:nth-child(2) {
                background-image: url('./img/googleplay-button.png');
            }
        `;

        container.appendChild(p1);
        container.appendChild(div1);

        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

customElements.define('get-app-component', GetAppComponent);