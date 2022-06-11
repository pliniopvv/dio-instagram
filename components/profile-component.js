class ProfileComponent extends HTMLElement {
    constructor() {
        super();

        /* <div class="group">
            <img src="./img/instagram-logo.png" class="instagram-logo" alt="instagram logo">
            <div class="profile-photo">
                <img src="./img/perfil-instagram-plinio.jpg" alt="foto de perfil">
            </div>
            <a href="#" class="instagram-login">Continue como pliniopvv</a>
            <a href="#" class="instagram-logout">Remover conta</a>
        </div> */
  
        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.classList.add('group');
        
        const iimg = document.createElement('img');
        iimg.classList.add("instagram-logo");
        iimg.src = "./img/instagram-logo.png";
        
        const pimg = document.createElement('img');
        pimg.src = this.getAttribute("picture");
        const cimg = document.createElement('div');
        cimg.classList.add("profile-photo");
        cimg.appendChild(pimg);

        const a1 = document.createElement('a');
        a1.href = "#"
        a1.classList.add("instagram-login");
        a1.textContent = `Continue como ${this.getAttribute("nick")}`;

        const a2 = document.createElement('a');
        a2.href = "#"
        a2.classList.add("instagram-logout");
        a2.textContent = `Remover conta`;

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
            
            .instagram-logo {
                height: 3rem;
            }
            
            .profile-photo {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                overflow: hidden;
            }
            
            .profile-photo img {
                height: 6rem;
            }
            
            .instagram-login {
                background-color: #0095f6;
                color: #ffffff;
                padding: 8px;
                border-radius: 4px;
            }
            
            .instagram-logout {
                color: #0095f6;
                margin-top: 1rem;
            }
        `;

        container.appendChild(iimg);
        container.appendChild(cimg);
        container.appendChild(a1);
        container.appendChild(a2);

        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

customElements.define('profile-component', ProfileComponent);