export class ComingSoonCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 
                        xl:w-110 overflow-hidden flex items-center justify-center p-16">
                <div class="bg-gray-800 rounded-xl p-6">
                    <img src="assets/images/coming_soon.png" alt="More Wikis Coming Soon" 
                         class="w-full h-auto object-contain">
                </div>
            </div>
        `;
    }
}

customElements.define("coming-soon-card", ComingSoonCard);