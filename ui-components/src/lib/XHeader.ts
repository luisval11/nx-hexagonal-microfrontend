export class XHeader extends HTMLElement {
  public static observedAttributes = ['title'];

  connectedCallback() {
    console.log('Appended and connected to document');
  }

  disconnectedCallback() {
    console.log('Disconnected from document');
  }

  attributeChangedCallback(name: string, old: string, value: string) {
    console.log(`Element's attribute ${name} was ${old} and is now ${value}`);
    this.innerHTML = `
    <head>
      <style>
        .tracking-in-expand {
          font-size: 3rem;
          font-weight: 500;
          text-align: center;
          font-family: 'Roboto', sans-serif;
          -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
                  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        }
        @-webkit-keyframes tracking-in-expand {
          0% {
            letter-spacing: -0.5em;
            opacity: 0;
          }
          40% {
            opacity: 0.6;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes tracking-in-expand {
          0% {
            letter-spacing: -0.5em;
            opacity: 0;
          }
          40% {
            opacity: 0.6;
          }
          100% {
            opacity: 1;
          }
        }
      </style>
    </head>
    <header>
    <h1 class="tracking-in-expand">Welcome to ${this.title}!</h1>
    </header>`;
  }
}
customElements.define('x-header', XHeader);
