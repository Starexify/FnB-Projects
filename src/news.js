import { NewsArticle } from "./ui_elements/newsArticle.js";

// Articles data - easy to modify and add new ones!
export const articlesData = [
    {
        type: "mod",
        modName: "Big Swords R",
        version: "v1.1.0 for NeoForge 26.2",
        title: "Copper Shields and More!",
        date: "June 26, 2026",
        description: "The latest version of BSR comes to 26.2 with a brand-new copper shields, an upgraded shields tooltip, and more.",
        iconUrl: "assets/images/icons/bsr.png",
        badgeColor: "bg-green-600",
        badgeText: "v1.1.0 for 26.2 Released",
        tags: "Port,Adjustment,Bug Fixes,New Content",
        primaryAction: "Download",
        curseforgeUrl: "",
        modrinthUrl: "",
        secondaryAction: "Changelog",
        changelogContent: `
## NEW
- added Copper Shield and its oxidized variants (Exposed, Weathered, Oxidized)
- added Gilded Copper and its oxidized variants (Exposed, Weathered, Oxidized)

## Overhaul
- now the shields give a more detailed tooltip when hovering SHIFT over them

## Items

### Wooden Shield
- can now catch arrows with effects and spectral arrows

### Stone Shield
- pickaxes deal 2x damage to the shield

### Iron Shield
- now the shield can degrade when dropped underwater

## Fix
- crafting with a blood vial now drops the item if the holder's inventory is full
- Livingmetal and Biomass Spears can now be enchanted with spear enchantments
- fix Gilded Skull Shield chances
- fix shield model clipping through layered skins

## Extra
- blood vial now plays sounds when filling or emptying it`
    },
    {
        type: "mod",
        modName: "Hexxit Gear Weaponry",
        version: "v1.0.0 for NeoForge 26.2",
        title: "Ported to Latest",
        date: "June 21, 2026",
        description: "The latest version of HGW comes to 26.2.",
        iconUrl: "assets/images/icons/hgw.png",
        badgeColor: "bg-green-600",
        badgeText: "v1.0.0 for 26.2 Released",
        tags: "Port",
        primaryAction: "Download",
        curseforgeUrl: "https://www.curseforge.com/minecraft/mc-mods/hgw/files/8291967",
        modrinthUrl: "https://modrinth.com/mod/hgw/version/T5pEnhUa",
        secondaryAction: "Changelog",
        changelogContent: `
## Extra
- ported to NeoForge 26.2`
    },
    {
        type: "mod",
        modName: "Hexxit Gear R",
        version: "v1.0.0 for NeoForge 26.2",
        title: "Ported to Latest",
        date: "June 20, 2026",
        description: "The latest version of HGR comes to 26.2.",
        iconUrl: "assets/images/icons/hgr.png",
        badgeColor: "bg-green-600",
        badgeText: "v1.0.0 for 26.2 Released",
        tags: "Port",
        primaryAction: "Download",
        curseforgeUrl: "https://www.curseforge.com/minecraft/mc-mods/hexxit-gear-r/files/8286440",
        modrinthUrl: "https://modrinth.com/mod/hexxit-gear-r/version/geyYVMx4",
        secondaryAction: "Changelog",
        changelogContent: `
## Extra
- ported to NeoForge 26.2`
    },
    {
        type: "mod",
        modName: "Big Swords R",
        version: "v1.0.0 for NeoForge 26.2",
        title: "Ported to Latest",
        date: "June 17, 2026",
        description: "The latest version of BSR comes with bug fixes, adjustments but with some new items too.",
        iconUrl: "assets/images/icons/bsr.png",
        badgeColor: "bg-green-600",
        badgeText: "v1.0.0 for 26.2 Released",
        tags: "Port,Adjustment,Bug Fixes, New Content",
        primaryAction: "Download",
        curseforgeUrl: "https://www.curseforge.com/minecraft/mc-mods/big-swords-r/files/8267230",
        modrinthUrl: "https://modrinth.com/mod/big-swords-r/version/ZJLBAClt",
        secondaryAction: "Changelog",
        changelogContent: `
## NEW CONTENT
- added Biomass Spear
- added Livingmetal Spear
- added Copper Scythe
- added Copper Glaive
- added Copper Big Sword

## Balance Changes
### Attack Damage Changes
- Livingmetal Shovel: 5 -> 5.5
- Livingmetal Sword: 6.5 -> 7
- Livingmetal Pickaxe: 4.5 -> 5
- Livingmetal Axe: 9.5 -> 10
- Wooden Big Sword: 7.5 -> 8
- Stone Big Sword: 8.5 -> 9
- Iron Big Sword: 9.5 -> 10
- Golden Big Sword: 7.5 -> 8
- Diamond Big Sword: 10.5 -> 11
- Netherite Big Sword: 11.5 -> 12
- Obsidian Big Sword: 11 -> 10
- Ender Big Sword: 13 -> 14
- Biomass Big Sword: 9.5 -> 10
- Quartz Big Sword: 8.5 -> 9
- Livingmetal Glaive: 5.5 -> 5
- Livingmetal Scythe: 4.5 -> 6
- Bone Sctyhe: 1.5 -> 2
- Soul Reaper: 1.5 -> 2

### Charged Damage Changes
- Diamond Glaive: 4.5-5.5 -> 5-6
- Netherite Glaive: 5.5-6.5 -> 6-7
- Biomass Glaive: 5.4-6 -> 5-6
- Livingmetal Glaive: 4.5-5.5 -> 4-5
- Livingmetal Scythe: 3.5-4.5 -> 5-6
- Stone Glaive: 3.5-4.5 -> 4-5
- Stone Scythe: 2.5-3.5 -> 3-4
- Diamond Scythe: 3.5-4.5 -> 4-5
- Netherite Scythe: 4.5-5.5 -> 5-6
- Biomass Scythe: 3-4.5 -> 3-5

### Drops
- Creepers, Phantoms and Shulkers no longer drop blood
- Breezes, Shulkers and Sulfur Cubes no longer drop souls

## Extra
- renamed 'Biomass Seed' to 'Biomass Seeds'
- ported everything to NeoForge 26.2`
    },
    {
        type: "mod",
        modName: "Big Swords R",
        version: "v1.0.0 for NeoForge 26.1.2",
        title: "Ported to Latest",
        date: "June 16, 2026",
        description: "We're back with a new version of Big Swords R after a long break.",
        iconUrl: "assets/images/icons/bsr.png",
        badgeColor: "bg-green-600",
        badgeText: "v1.0.0 for 26.1.2 Released",
        tags: "Port,Adjustment,Bug Fixes",
        primaryAction: "Download",
        curseforgeUrl: "https://www.curseforge.com/minecraft/mc-mods/big-swords-r/files/8255333",
        modrinthUrl: "https://modrinth.com/mod/big-swords-r/version/AQlpuah1",
        secondaryAction: "Changelog",
        changelogContent: `
### Creep Block
- now uses correct texture when tilled and untilled

### Livingmetal Sword
- lowered attack speed from 6.4 to 1.6 to match the other swords

### Achievements
- Achievement title is now 'Big Swords R' from 'The root of Big Swords R'
- Achievement background is now shown

## Extra
- ported everything to NeoForge 26.1.2`
    },
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
