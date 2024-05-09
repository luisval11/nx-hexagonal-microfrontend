export class XFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>Made by Luis Valero</p>
        </footer>
        `;
    }
}

customElements.define('x-footer', XFooter);