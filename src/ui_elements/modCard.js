export class ModCard extends HTMLElement {
    downloads = 0;

    connectedCallback() {
        this.render();
        this.loadDownloads();
    }

    render() {
        // Get attributes or use defaults
        const logoSrc = this.getAttribute("logo-src") || "assets/images/logos/" + this.id + ".png";
        const iconSrc = this.getAttribute("icon-src") || "assets/images/icons/" + this.id + ".png";
        const modName = this.getAttribute("mod-name") || this.textContent || "Mod Name";
        const mcVersions = this.getAttribute("mc-versions") || "1.20.1";
        const modLoader = this.getAttribute("mod-loader") || "NeoForge";
        const description = this.getAttribute("description") || "An amazing Minecraft mod.";
        const curseforgeUrl = `https://www.curseforge.com/minecraft/mc-mods/${this.getAttribute("modId")}` || "#";
        const modrinthUrl = `https://modrinth.com/mod/${this.getAttribute("modId")}` || "#";

        // Clear existing content
        this.innerHTML = '';

        // Create the card HTML
        this.innerHTML = `
            <div class="bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 xl:w-110 transform hover:scale-105 transition-all duration-300 flex flex-col">
                <!-- Logo Section -->
                <div class="text-center mb-6 p-6 pb-0">
                    <!-- Wide Logo -->
                    <div class="mx-auto mb-4 h-16 rounded-xl overflow-hidden flex items-center justify-center select-none">
                        <img src="${logoSrc}" alt="${modName} Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl hidden items-center justify-center">
                            <span class="text-white font-bold text-lg">${modName.toUpperCase()}</span>
                        </div>
                    </div>
                    
                    <!-- Icon and Title Row -->
                    <div class="flex items-center justify-center gap-3 mb-3">
                        <div class="w-12 h-12 rounded-lg overflow-hidden shadow-md bg-gray-700/30 flex items-center justify-center flex-shrink-0 select-none">
                            <img src="${iconSrc}" alt="${modName} Icon" class="w-full h-full object-cover rounded-lg" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg hidden items-center justify-center">
                                <i class="fas fa-cube text-lg text-white"></i>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-white ">${modName}</h2>
                    </div>
                    
                    <!-- Badges Section -->
                    <div class="flex flex-wrap justify-center gap-2 mb-2 select-none">
                        <span class="px-3 py-1 bg-gradient-to-r from-green-600 to-green-500 text-white text-xs font-semibold rounded-full shadow-sm">
                            MC ${mcVersions}
                        </span>
                        ${this.renderLoaderBadges(modLoader)}
                    </div>
                </div>

                <!-- Description -->
                <div class="mb-6 px-6">
                    <p class="text-gray-300 text-center leading-relaxed">${description}</p>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-1 gap-4 mb-6 text-center px-6">
                    <div class="bg-gray-700/50 rounded-lg p-3">
                        <div id="download-count" class="text-green-400 font-bold text-lg">Loading...</div>
                        <div class="text-gray-400 text-xs select-none">Downloads</div>
                    </div>
                </div>

                <!-- Buttons -->
                <div class="grid grid-cols-2 mt-auto">
                    <button onclick="window.open('${curseforgeUrl}', '_blank')"
                            class="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold py-3 px-4 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5 rounded-bl-2xl">
                        <i class="fab fa-dev text-lg"></i>
                        <span>CurseForge</span>
                    </button>
                    <button onclick="window.open('${modrinthUrl}', '_blank')"
                            class="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-semibold py-3 px-4 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5 rounded-br-2xl">
                        <i class="fas fa-download text-lg"></i>
                        <span>Modrinth</span>
                    </button>
                </div>
            </div>
        `;
    }

    renderLoaderBadges(loaderString) {
        // Split by common separators and clean up
        const loaders = loaderString
            .split(/[\/|,&+]/) // Split by /, |, ,, &, or +
            .map(loader => loader.trim())
            .filter(loader => loader.length > 0);

        if (loaders.length === 1) {
            // Single loader - normal rounded badge
            return `
                <span class="px-3 py-1 bg-gradient-to-r ${this.getLoaderBadgeClass(loaders[0])} text-white text-xs font-semibold rounded-full shadow-sm">
                    ${loaders[0]}
                </span>
            `;
        }

        // Multiple loaders - combined badge
        return `
            <div class="flex items-center shadow-sm">
                ${loaders
            .map((loader, index) => {
                const isFirst = index === 0;
                const isLast = index === loaders.length - 1;
                let roundingClass = '';

                if (isFirst && isLast) {
                    roundingClass = 'rounded-full';
                } else if (isFirst) {
                    roundingClass = 'rounded-l-full';
                } else if (isLast) {
                    roundingClass = 'rounded-r-full';
                }

                return `<span class="px-3 py-1 bg-gradient-to-r ${this.getLoaderBadgeClass(loader)} text-white text-xs font-semibold ${roundingClass} border-r border-white/20 last:border-r-0">
                                ${loader}
                         </span>`;
            }).join('')}
            </div>
        `;
    }

    getLoaderBadgeClass(loader) {
        switch (loader.toLowerCase()) {
            case "fabric":
                return "from-purple-600 to-purple-500";
            case "neoforge":
            case "neo forge":
                return "from-orange-600 to-red-500";
            case "forge":
                return "from-red-600 to-red-500";
            case "quilt":
                return "from-pink-600 to-pink-500";
            default:
                return "from-gray-600 to-gray-500";
        }
    }

    // Load downloads and update the UI when each one completes
    async loadDownloads() {
        this.getCurseforgeDownloads().then(r => {
            this.downloads += r || 0;
            this.updateDownloadDisplay();
        });

        this.getModrinthDownloads().then(r => {
            this.downloads += r || 0;
            this.updateDownloadDisplay();
        });
    }

    updateDownloadDisplay() {
        const downloadElement = this.querySelector('#download-count');
        if (downloadElement) downloadElement.textContent = this.formatDownloadCount(this.downloads);
    }

    formatDownloadCount(count) {
        if (count < 1000) {
            return count.toString();
        } else if (count < 1000000) {
            const k = (count / 1000).toFixed(1);
            return k.endsWith('.0') ? k.slice(0, -2) + 'K' : k + 'K';
        } else if (count < 1000000000) {
            const m = (count / 1000000).toFixed(1);
            return m.endsWith('.0') ? m.slice(0, -2) + 'M' : m + 'M';
        } else {
            const b = (count / 1000000000).toFixed(1);
            return b.endsWith('.0') ? b.slice(0, -2) + 'B' : b + 'B';
        }
    }

    // Getters for Downloads from Modrinth & Curseforge
    async getModrinthDownloads() {
        const modrinthId = this.getAttribute("modrinth-id");
        if (!modrinthId) {
            console.warn("No modrinth-id attribute provided");
            return null;
        }

        try {
            const response = await fetch(`https://api.modrinth.com/v2/project/${modrinthId}`);
            if (!response.ok) throw new Error(`Modrinth API error: ${response.status}`);

            const data = await response.json();
            console.log(`✓ Modrinth downloads loaded: ${data.downloads}`);
            return data.downloads;
        } catch (error) {
            console.error('Error fetching Modrinth data:', error);
            return null;
        }
    }

    async getCurseforgeDownloads() {
        const curseforgeId = this.getAttribute("curseforge-id");
        if (!curseforgeId) {
            console.warn("No curseforge-id attribute provided");
            return;
        }

        try {
            const result = await this.getDownloadsFromShieldsJSON(curseforgeId);
            if (result) {
                console.log(`✓ Curseforge downloads loaded: ${result.formatted} (≈${result.estimated})`);
                return result.estimated;
            } else {
                console.log("✗ Failed to load Curseforge download count");
            }
        } catch (error) {
            console.error("Error loading Curseforge download count:", error);
        }
    }

    async getDownloadsFromShieldsJSON(modId) {
        const apiUrl = `https://img.shields.io/curseforge/dt/${modId}.json`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Shields JSON API failed: ${response.status}`);
        const data = await response.json();

        if (data.value) {
            // Convert abbreviated numbers back to full numbers
            const match = data.value.match(/([\d.]+)([kMB]?)/);

            if (match) {
                const [, number, suffix] = match;
                const baseNumber = parseFloat(number);

                let multiplier = 1;
                switch (suffix.toLowerCase()) {
                    case "k":
                        multiplier = 1000;
                        break;
                    case "m":
                        multiplier = 1000000;
                        break;
                    case "b":
                        multiplier = 1000000000;
                        break;
                }

                return {formatted: data.value, estimated: Math.round(baseNumber * multiplier)};
            }
        }

        return null;
    }
}