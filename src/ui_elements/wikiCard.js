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

        const isWip = this.hasAttribute("wip");

        // Don't render WIP cards at all
        if (isWip) {
            this.style.display = 'none';
            return;
        }

        // Card wrapper classes
        const cardClasses = `bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 
               xl:w-110 overflow-hidden relative cursor-pointer
               transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 hover:border-blue-500/50
               group`;

        this.innerHTML = `
            <div class="${cardClasses}"
                 onclick="window.open('${linkUrl}','_self')">
                
                <!-- Logo Section (prominent) -->
                <div class="p-8 pb-4 flex items-center justify-center">
                    <div class="h-24 w-full rounded-xl overflow-hidden flex items-center justify-center bg-gray-900/40">
                        <img src="${logoSrc}" alt="${title} Logo"
                             class="max-h-full max-w-full object-contain p-2"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="size-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl hidden items-center justify-center">
                            <span class="text-white font-bold text-2xl">${title.toUpperCase()}</span>
                        </div>
                    </div>
                </div>

                <!-- Content Section -->
                <div class="px-8 pb-8 pt-4 flex flex-col items-center text-center">
                    <!-- Icon + Title -->
                    <div class="flex items-center justify-center gap-3 mb-3">
                        <div class="size-10 rounded-lg overflow-hidden shadow-md bg-gray-700/30 flex items-center justify-center flex-shrink-0">
                            <img src="${iconSrc}" alt="${title} Icon"
                                 class="w-full h-full object-cover rounded-lg"
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="size-full bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg hidden items-center justify-center">
                                <i class="fas fa-book text-sm text-white"></i>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">${title}</h2>
                    </div>
                    
                    <!-- Description -->
                    <p class="text-gray-300 leading-relaxed text-sm mb-6">${description}</p>
                    
                    <!-- View indicator -->
                    <div class="flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Explore Wiki</span>
                        <span class="text-lg transition-transform group-hover:translate-x-1">→</span>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("wiki-card", WikiCard);