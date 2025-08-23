export class DownloadsElement extends HTMLElement {
    downloads = 0;
    _modrinthIds = [];
    _curseforgeIds = [];

    setModrinthIds(ids) {
        this._modrinthIds = Array.isArray(ids) ? ids : [ids];
        return this;
    }

    setCurseforgeIds(ids) {
        this._curseforgeIds = Array.isArray(ids) ? ids : [ids];
        return this;
    }

    setIds(options = {}) {
        if (options.modrinth) this.setModrinthIds(options.modrinth);
        if (options.curseforge) this.setCurseforgeIds(options.curseforge);
        return this;
    }

    // Load downloads and update the UI when each one completes
    async loadDownloads() {
        const curseforgeIds = this.getCurseforgeIds();
        const modrinthIds = this.getModrinthIds();

        // Process CurseForge IDs
        if (curseforgeIds.length > 0) {
            Promise.all(curseforgeIds.map(id => this.getCurseforgeDownloadsByID(id)))
                .then(results => {
                    const totalCF = results.reduce((sum, count) => sum + (count || 0), 0);
                    this.downloads += totalCF;
                    this.updateDownloadDisplay();
                });
        }

        // Process Modrinth IDs
        if (modrinthIds.length > 0) {
            Promise.all(modrinthIds.map(id => this.getModrinthDownloadsByID(id)))
                .then(results => {
                    const totalMR = results.reduce((sum, count) => sum + (count || 0), 0);
                    this.downloads += totalMR;
                    this.updateDownloadDisplay();
                });
        }
    }

    getCurseforgeIds() {
        // First check if IDs were set programmatically
        if (this._curseforgeIds.length > 0) return this._curseforgeIds;

        // Fall back to attributes
        const singleId = this.getAttribute("curseforge-id");
        const listIds = this.getAttribute("curseforge-ids");

        if (listIds) return listIds.split(',').map(id => id.trim()).filter(id => id.length > 0);
        else if (singleId) return [singleId.trim()];

        return [];
    }

    getModrinthIds() {
        // First check if IDs were set programmatically
        if (this._modrinthIds.length > 0) return this._modrinthIds;

        // Fall back to attributes
        const singleId = this.getAttribute("modrinth-id") || this.getAttribute("modId");
        const listIds = this.getAttribute("modrinth-ids");

        if (listIds) return listIds.split(',').map(id => id.trim()).filter(id => id.length > 0);
        else if (singleId) return [singleId.trim()];

        return [];
    }

    updateDownloadDisplay() {
        const downloadElement = this.querySelector('#download-counter');
        if (downloadElement) downloadElement.textContent = this.formatDownloadCount(this.downloads);
    }

    // Getters for Downloads from Modrinth & Curseforge
    async getModrinthDownloadsByID(modrinthId) {
        if (!modrinthId) return null;

        try {
            const response = await fetch(`https://api.modrinth.com/v2/project/${modrinthId}`);
            if (!response.ok) throw new Error(`Modrinth API error: ${response.status}`);

            const data = await response.json();
            console.log(`✓ Modrinth downloads loaded for ${modrinthId}: ${data.downloads}`);
            return data.downloads;
        } catch (error) {
            console.error(`Error fetching Modrinth data for ${modrinthId}:`, error);
            return null;
        }
    }

    async getCurseforgeDownloadsByID(curseforgeId) {
        if (!curseforgeId) return null;

        try {
            const result = await this.getDownloadsFromShieldsJSON(curseforgeId);
            if (result) {
                console.log(`✓ Curseforge downloads loaded for ${curseforgeId}: ${result.formatted} (≈${result.estimated})`);
                return result.estimated;
            } else {
                console.log(`✗ Failed to load Curseforge download count for ${curseforgeId}`);
                return null;
            }
        } catch (error) {
            console.error(`Error loading Curseforge download count for ${curseforgeId}:`, error);
            return null;
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
}