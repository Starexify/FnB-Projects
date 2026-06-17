export const DownloadService = {
  downloads: 0,
  modrinthIds: [],
  curseforgeIds: [],

  setIds(options = {}) {
    this.downloads = 0;
    this.modrinthIds = Array.isArray(options.modrinth) ? options.modrinth : (options.modrinth ? [options.modrinth] : []);
    this.curseforgeIds = Array.isArray(options.curseforge) ? options.curseforge : (options.curseforge ? [options.curseforge] : []);
    return this;
  },

  async loadDownloads(onUpdate) {
    if (this.curseforgeIds.length > 0) {
      Promise.all(this.curseforgeIds.map(id => this.getCurseforgeDownloadsByID(id)))
          .then(results => {
            const totalCF = results.reduce((sum, count) => sum + (count || 0), 0);
            this.downloads += totalCF;
            onUpdate(this.formatDownloadCount(this.downloads));
          });
    }

    if (this.modrinthIds.length > 0) {
      Promise.all(this.modrinthIds.map(id => this.getModrinthDownloadsByID(id)))
          .then(results => {
            const totalMR = results.reduce((sum, count) => sum + (count || 0), 0);
            this.downloads += totalMR;
            onUpdate(this.formatDownloadCount(this.downloads));
          });
    }
  },

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
  },

  async getCurseforgeDownloadsByID(curseforgeId) {
    if (!curseforgeId) return null;
    try {
      const result = await this.getDownloadsFromShieldsJSON(curseforgeId);
      if (result) {
        console.log(`✓ Curseforge downloads loaded for ${curseforgeId}: ${result.formatted} (≈${result.estimated})`);
        return result.estimated;
      }
      return null;
    } catch (error) {
      console.error(`Error loading Curseforge download count for ${curseforgeId}:`, error);
      return null;
    }
  },

  async getDownloadsFromShieldsJSON(modId) {
    const apiUrl = `https://img.shields.io/curseforge/dt/${modId}.json`;
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`Shields JSON API failed: ${response.status}`);
    const data = await response.json();

    if (data.value) {
      const match = data.value.match(/([\d.]+)([kMB]?)/i);
      if (match) {
        const [, number, suffix] = match;
        const baseNumber = parseFloat(number);
        let multiplier = 1;
        switch (suffix.toLowerCase()) {
          case "k": multiplier = 1000; break;
          case "m": multiplier = 1000000; break;
          case "b": multiplier = 1000000000; break;
        }
        return { formatted: data.value, estimated: Math.round(baseNumber * multiplier) };
      }
    }
    return null;
  },

  formatDownloadCount(count) {
    if (count < 1000) return count.toString();
    if (count < 1000000) {
      const k = (count / 1000).toFixed(1);
      return k.endsWith('.0') ? k.slice(0, -2) + 'K' : k + 'K';
    }
    if (count < 1000000000) {
      const m = (count / 1000000).toFixed(1);
      return m.endsWith('.0') ? m.slice(0, -2) + 'M' : m + 'M';
    }
    const b = (count / 1000000000).toFixed(1);
    return b.endsWith('.0') ? b.slice(0, -2) + 'B' : b + 'B';
  }
}