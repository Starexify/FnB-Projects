export class FancyTitle extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="inline-block">
            <h1 class="md:text-6xl text-4xl font-bold bg-gradient-to-r from-blue-900 via-purple-700 to-red-950 bg-clip-text text-transparent mb-6 leading-[1.2]">
                ${this.innerText}
            </h1>
        </div>
        `;
    }
}