import { NewsArticle } from "./ui_elements/newsArticle.js";

// Articles data - easy to modify and add new ones!
export const articlesData = [
    {
        type: "mod",
        modName: "Hexxit Gear Weaponry",
        version: "v1.0.0 for Fabric & NeoForge 1.21.8",
        title: "The first Hexxit Gear R addon !",
        date: "August 24, 2025",
        description: "The release of the first Hexxit Gear R addon is here! Bringing back the scrapped Scale Sword idea with new features!",
        iconUrl: "assets/images/icons/hgw.png",
        badgeColor: "bg-green-600",
        badgeText: "v1.0.0 for 1.21.8 Released",
        tags: "Mod Release",
        primaryAction: "Download",
        curseforgeUrl: "https://www.curseforge.com/minecraft/mc-mods/hgw/files/all?page=1&pageSize=20&version=1.21.8",
        modrinthUrl: "https://modrinth.com/mod/hgw/versions?g=1.21.8",
        secondaryAction: "Changelog",
        changelogContent: `## Weapons
### Scale Sword
- Special: blocking ability, only works when wearing the full Scale Armor Set
- Blocking Ability: lets you block front attacks when right clicking but uses your armor's durability instead. When the player stops blocking, after being hit 3-4 times it knocks back enemies and goes on cooldown`
    },
    {
        type: "website",
        modName: "F&B Projects Hub",
        title: "The Release Of The Official F&B Website",
        date: "August 23, 2025",
        description: "The launch of the F&B Projects Hub website!",
        badgeColor: "bg-indigo-600",
        badgeText: "📢 Announcement",
        tags: "Website"
    },
    {
        type: "mod",
        modName: "Hexxit Gear R",
        version: "v1.0.0 for Fabric & NeoForge 1.21.8",
        title: "Ported to Latest",
        date: "August 19, 2025",
        description: "This version adjusted the speed of the full Thief set and Hexbiscus no longer appearing when bone mealing.",
        iconUrl: "assets/images/icons/hgr.png",
        badgeColor: "bg-green-600",
        badgeText: "v1.0.0 for 1.21.8 Released",
        tags: "Port,Adjustment,Bug Fixes",
        primaryAction: "Download",
        curseforgeUrl: "https://www.curseforge.com/minecraft/mc-mods/hexxit-gear-r/files/all?page=1&pageSize=20&version=1.21.8",
        modrinthUrl: "https://modrinth.com/mod/hexxit-gear-r/versions?g=1.21.8",
        secondaryAction: "Changelog",
        changelogContent: `## Sets
### Thief Armor 
- No longer gives the Speed potion effect
- Now using attributes like the old method of adding speed to the player
- Added step-up ability

## Fixes
- Bone mealing grass no longer spawns Hexbiscus`
    },
    {
        type: "spoiler",
        modName: "Hexxit Gear Weaponry",
        title: "Sneak Peek: The first Hexxit Gear R addon is Coming Soon!",
        date: "August 19, 2025",
        description: "Scale Sword's great return in the brand new Hexxit Gear R addon is coming to your home !",
        iconUrl: "assets/images/icons/hgw.png",
        badgeColor: "bg-amber-600",
        badgeText: "🎮 Spoiler Alert",
        tags: "Coming Soon,Weapons",
        primaryAction: "Screenshots",
        primaryLink: "https://pbs.twimg.com/media/Gyt2GRgXUAAf9Kg?format=png&name=small"
    }
];

let currentOffset = 0;
const PAGE_SIZE = 9;

function loadArticles(containerId = "news-container", offset = 0, limit = 9, append = false) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found`);
        return;
    }

    if (!append) container.innerHTML = "";

    const slice = articlesData.slice(offset, offset + limit);

    slice.forEach(article => {
        const newsArticle = document.createElement("news-article");

        // Set attributes
        Object.keys(article).forEach(key => {
            if (key !== "tags") newsArticle.setAttribute(key.replace(/([A-Z])/g, "-$1").toLowerCase(), article[key]);
            else newsArticle.setAttribute("tags", article[key]);
        });

        container.appendChild(newsArticle);
    });

    // Handle "Load More" button visibility
    const loadMoreDiv = document.getElementById("load-more");
    const loadMoreBtn = document.getElementById("load-more-btn");

    if (offset + limit < articlesData.length) {
        loadMoreDiv.style.display = "block"; // show button
        loadMoreBtn.onclick = () => {
            loadArticles(containerId, offset + limit, limit, true);
        };
    } else {
        loadMoreDiv.style.display = "none"; // hide button when no more
    }

    return slice.length;
}

document.addEventListener("DOMContentLoaded", () => {
    // Load first 9 articles
    loadArticles("news-container", currentOffset, PAGE_SIZE);

    const loadMoreBtn = document.getElementById("load-more-btn");
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            currentOffset += PAGE_SIZE;
            const added = loadArticles("news-container", currentOffset, PAGE_SIZE, true);

            // Hide button if no more articles
            if (added < PAGE_SIZE) loadMoreBtn.classList.add("hidden");
        });
    }
});

window.customElements.define('news-article', NewsArticle);
