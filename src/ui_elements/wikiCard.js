export class WikiCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const id          = this.id || this.getAttribute("wiki-id") || "";
        const wikiId      = this.getAttribute("wiki-id") || id;
        const modId       = this.getAttribute("modId") || id;
        const title       = this.getAttribute("wiki-title") || this.textContent?.trim() || "Wiki";
        const description = this.getAttribute("description") || "";
        const logoSrc     = this.getAttribute("logo-src") || `assets/images/logos/${id}.png`;
        const iconSrc     = this.getAttribute("icon-src") || `assets/images/icons/${id}.png`;
        const linkUrl     = this.getAttribute("href") || `./wikis/${wikiId}.html`;

        // New: check for WIP attribute
        const isWip = this.hasAttribute("wip");

        // If WIP, disable click + style differently
        const buttonClasses = isWip
            ? `w-full flex items-center justify-center gap-2
                bg-gray-700 text-gray-300
                font-semibold py-4 px-4
                border-t border-gray-700
                rounded-b-2xl select-none
                cursor-not-allowed opacity-60`
            : `group w-full flex items-center justify-center gap-2
                bg-blue-700 hover:bg-blue-800
                text-white font-semibold py-4 px-4
                border-t border-gray-700
                rounded-b-2xl select-none
                transition-colors duration-200`;

        const arrow = isWip
            ? ""
            : `<span class="text-xl font-bold transition-transform duration-200 group-hover:translate-x-1">➜</span>`;

        this.innerHTML = `
            <div class="bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 xl:w-110
                        flex flex-col">
                
                <!-- Logo Section -->
                <div class="text-center mb-6 p-6 pb-0">
                    <div class="mx-auto mb-4 h-16 rounded-xl overflow-hidden flex items-center justify-center select-none">
                        <img src="${logoSrc}" alt="${title} Logo"
                             class="w-full h-full object-contain"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="size-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl hidden items-center justify-center">
                            <span class="text-white font-bold text-lg">${title.toUpperCase()}</span>
                        </div>
                    </div>

                    <!-- Icon + Title -->
                    <div class="flex items-center justify-center gap-3 mb-3">
                        <div class="size-12 rounded-lg overflow-hidden shadow-md bg-gray-700/30 flex items-center justify-center flex-shrink-0 select-none">
                            <img src="${iconSrc}" alt="${title} Icon"
                                 class="w-full h-full object-cover rounded-lg"
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="size-full bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg hidden items-center justify-center">
                                <i class="fas fa-book text-lg text-white"></i>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-white">${title}</h2>
                    </div>
                </div>

                <!-- Description -->
                <div class="mb-6 px-6">
                    <p class="text-gray-300 text-center leading-relaxed">${description}</p>
                </div>

                <!-- Footer Button -->
                <button
                    ${isWip ? "" : `onclick="window.open('${linkUrl}','_self')"` }
                    class="${buttonClasses}">
                    <span>${isWip ? "Wiki WIP" : "View Wiki"}</span>
                    ${arrow}
                </button>
            </div>
        `;
    }
}

customElements.define("wiki-card", WikiCard);

