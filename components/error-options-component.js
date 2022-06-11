class ErrorOptionsComponent extends HTMLElement {
    constructor() {
        super();

        /* <div class="group">
                <p class="not-account">Não é pliniopvv?</p>
                <p class="not-account">
                    <span class="link-blue">Alternar contas</span>
                    ou
                    <span class="link-blue">Inscreva-se</span>
                </p>
        </div> */
  
        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.classList.add('group');
        
        const p1 = document.createElement('p');
        p1.classList.add("not-account");
        p1.textContent = `Não é ${this.getAttribute("nick")}?`;
        
        const a1 = document.createElement('a');
        a1.href = "#"
        a1.classList.add("instagram-login");
        a1.textContent = `Alterar contas`;

        const a2 = document.createElement('a');
        a2.href = "#"
        a2.classList.add("instagram-logout");
        a2.textContent = `Inscreva-se`;

        const p2 = document.createElement('p');
        p2.classList.add("not-account");

        p2.appendChild(a1)
        p2.appendChild(document.createTextNode(" ou "));
        p2.appendChild(a2);

        const style = document.createElement('style');
        style.textContent = `
            .group {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;
                background-color: #ffffff;
                width: 100%;
                padding: 1.3rem 0;
                border: 1px solid lightgray;
            }
            
            .group:nth-child(1) {
                min-height: 19rem;
            }

            .not-account {
                color: rgb(160, 160, 160);
            }
                        
            .link-blue {
                color: #0095f6;
            }
        `;

        container.appendChild(p1);
        container.appendChild(p2);

        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

customElements.define('error-options-component', ErrorOptionsComponent);