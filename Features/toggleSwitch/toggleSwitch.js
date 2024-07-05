class ToggleSwitch extends HTMLElement {
    constructor() {
        super(); // Aufruf des Konstruktors der Basisklasse
        this.attachShadow({ mode: 'open' }); // Erstellen eines Shadow DOM
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
            @import url('./Features/toggleSwitch/toggleSwitch.css');
        </style>
        <label class="toggle">
            <input id="toggleswitch" type="checkbox" checked>
            <span class="roundbutton"></span>
        </label>`;
    }

    isChecked() {
        const checkbox = this.shadowRoot.querySelector('#toggleswitch');
        return checkbox.checked;
    }
}

customElements.define('toggle-switch', ToggleSwitch);

console.log("toggleSwitch.js geladen");