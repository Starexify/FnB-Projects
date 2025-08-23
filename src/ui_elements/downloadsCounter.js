import { DownloadsElement } from "../util/downloadsElement.js";

export class DownloadsCounter extends DownloadsElement {
    connectedCallback() {
        this.render();
        this.setupIds();
        this.loadDownloads();
    }

    render() {
        this.innerHTML = `<div id="download-counter" class="text-4xl md:text-5xl font-bold text-purple-400 mb-2">Loading...</div>`;
    }

    setupIds() {
        this.setIds({
            modrinth: ["big-swords-r", "cosmicore", "hexxit-gear-r", "tmml", "mystic-shrubs", "realitymod", "nmt", "bsrxcc"],
            curseforge: ["690473", "1057420", "376883", "1133923", "1074868", "1102155", "1078643", "1144559"]
        });
    }
}