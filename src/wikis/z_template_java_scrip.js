/**
 * modWiki.js — Template companion script for a Minecraft mod wiki page.
 *
 * Mirrors the exact render patterns from bsrWiki.js (Big Swords R).
 * Search every TODO comment and replace placeholder values with your mod's data.
 *
 * Sections:
 *   1. Download modal + back button
 *   2. wikiIcon() helper
 *   3. Changelog data + renderChangelog()
 *   4. Item data arrays (one per page)
 *   5. generateHeartDisplay()
 *   6. generateRecipeDisplay()
 *   7. Per-page render functions
 *   8. Initialisation
 */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================================================
       1. DOWNLOAD MODAL + BACK BUTTON
       ================================================================ */
    // TODO: Replace slugs with your mod's actual CurseForge / Modrinth pages.
    const curseforgeUrl = "https://www.curseforge.com/minecraft/mc-mods/YOUR_MOD_SLUG";
    const modrinthUrl   = "https://modrinth.com/mod/YOUR_MOD_SLUG";

    const downloadBtn = document.getElementById("download-btn");
    const backBtn     = document.getElementById("back-btn");

    if (downloadBtn && backBtn) {
        // TODO: Adjust path to your wiki hub page if needed.
        backBtn.addEventListener("click", () => {
            window.location.href = "../wikis.html";
        });

        const modal = document.createElement("div");
        modal.className =
            "fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] hidden";
        modal.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Choose a platform</h2>
            <div class="space-y-3">
              <a href="${curseforgeUrl}" target="_blank"
                 class="block w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium">
                 CurseForge
              </a>
              <a href="${modrinthUrl}" target="_blank"
                 class="block w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium">
                 Modrinth
              </a>
              <button id="close-modal"
                 class="block w-full px-4 py-2 mt-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded-md">
                 Cancel
              </button>
            </div>
          </div>
        `;
        document.body.appendChild(modal);

        const closeModal = () => {
            modal.classList.add("hidden");
            document.body.style.overflow = "";
        };
        downloadBtn.addEventListener("click", () => {
            modal.classList.remove("hidden");
            document.body.style.overflow = "hidden";
        });
        modal.addEventListener("click", e => {
            if (e.target === modal || e.target.id === "close-modal") closeModal();
        });
        document.addEventListener("keydown", e => {
            if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
        });
    }


    /* ================================================================
       2. wikiIcon() HELPER
       Resolves a short asset name to a full image URL.

       Supported input formats:
         - Full URL             → returned as-is
         - "wiki_NAME"         → local asset at /src/assets/images/minecraft_assets/NAME
         - "NAME"              → your mod's GitHub texture path
       ================================================================ */
    function wikiIcon(name) {
        if (!name) return "";

        // Already a full URL — leave untouched
        if (name.startsWith("http://") || name.startsWith("https://")) return name;

        // Local/wiki asset (e.g. animated GIFs, special sprites)
        const basePath = "/src/assets/images/minecraft_assets/";
        if (name.startsWith("wiki_")) {
            const fileName = name.substring(5); // strip "wiki_" prefix
            return `${basePath}${fileName}`;
        }

        // TODO: Replace with your mod's raw GitHub texture path.
        // Pattern: "https://github.com/USER/REPO/raw/BRANCH/src/main/resources/assets/MOD_ID/textures/item/"
        return `https://github.com/YOUR_USER/YOUR_REPO/raw/BRANCH/src/main/resources/assets/MOD_ID/textures/item/${name}.png`;
    }


    /* ================================================================
       3. CHANGELOG DATA + RENDERER
       ================================================================ */

    /**
     * TODO: Fill in your mod's version history, newest entry first.
     *
     * version type options: "alpha" | "beta" | "release" | "hotfix" | "port" | "bugfix"
     */
    const changelog = [
        {
            version: "1.0.0 [1.21.5] - Jan 1, 2025",
            type: "release",
            sections: [
                {
                    title: "Initial Release",
                    changes: [
                        "Added Item A",
                        "Added Item B",
                        "Added Feature C"
                    ]
                }
            ]
        },
        {
            version: "0.1.0-beta [1.21.5] - Dec 1, 2024",
            type: "beta",
            sections: [
                {
                    title: "Beta Changes",
                    changes: [
                        "Fixed bug X",
                        "Tweaked balance of Y"
                    ]
                }
            ]
        }
        // TODO: Add more entries here, newest first
    ];

    function renderChangelog() {
        const container = document.getElementById("changelog-container");
        if (!container) return;

        const colorMap = {
            alpha:   "amber",
            beta:    "blue",
            release: "green",
            hotfix:  "red",
            port:    "purple",
            bugfix:  "orange"
        };

        container.innerHTML = changelog.map(entry => {
            const color = colorMap[entry.type] || "green";

            return `
        <section class="relative pl-8 border-l-2 border-${color}-500">
            <div class="absolute -left-3 top-1 w-6 h-6 rounded-full bg-${color}-500 border-4 border-gray-900 dark:border-gray-800"></div>
            
            <h2 class="text-2xl font-semibold text-${color}-600 dark:text-${color}-400">
                ${entry.version}
            </h2>

            <div class="mt-4 space-y-4">
                ${entry.sections.map(section => `
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            ${section.title}
                        </h3>
                        <ul class="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
                            ${section.changes.map(change => `
                                <li class="flex items-start">
                                    <span class="text-${color}-500 mr-2">•</span>
                                    <span>${change}</span>
                                </li>
                            `).join("")}
                        </ul>
                    </div>
                `).join("")}
            </div>
        </section>
        `;
        }).join("");
    }


    /* ================================================================
       4. ITEM DATA ARRAYS
       Duplicate this block for each page (weapons, shields, materials...).
       ================================================================ */

    /**
     * TODO: Replace with your actual item list.
     *
     * Each item shape (add / remove fields to match your mod):
     * {
     *   name:          string,
     *   id:            string,          // used to build icon URL: wikiIcon(item.id)
     *   damage:        number,          // (weapons / tools)
     *   hearts:        number,          // damage / 2, used for heart icons
     *   speed:         number,
     *   durability:    number,
     *   description:   string,
     *   craftingType:  "crafting" | "smithing" | "furnace" | "none",
     *
     *   // Single recipe - pick the shape that matches craftingType:
     *   recipe: {
     *     // For "crafting":
     *     pattern: [ [c,c,c], [c,c,c], [c,c,c] ],
     *     // Each cell c is: "" | "icon_name" | "full_url" | ["url1","url2"] (cycling)
     *
     *     // For "smithing":
     *     template: string,   // icon name or full URL
     *     base:     string,
     *     addition: string,
     *
     *     // For "furnace":
     *     input:      string,
     *     experience: number,   // optional
     *
     *     // For "none":
     *     description: string,
     *     link:        string   // page id to navigate to, or ""
     *   },
     *
     *   // Multiple recipe types on the same item:
     *   craftingTypes: ["crafting", "smithing"],   // overrides craftingType
     *   recipes: { crafting: { pattern: [...] }, smithing: { template, base, addition } },
     *
     *   materials:    string,
     *   specialNotes: string
     * }
     */
    const items = [
        {
            name: "Example Item A",
            id: "example_item_a",
            damage: 7,
            hearts: 3.5,
            speed: 1.2,
            durability: 250,
            description: "A short flavour-text description.",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", ""]
                ]
            },
            materials: "6 Iron Ingots + 1 Stick",
            specialNotes: ""
        },
        {
            name: "Example Upgraded Item",
            id: "example_upgraded_item",
            damage: 11,
            hearts: 5.5,
            speed: 1.2,
            durability: 4000,
            description: "",
            craftingType: "smithing",
            recipe: {
                template: "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/netherite_upgrade_smithing_template.png",
                base:     "example_item_a",        // icon name or URL of the base item
                addition: "block_of_netherite"     // icon name or URL of the upgrade material
            },
            materials: "Netherite Upgrade Smithing Template + Example Item A + Block of Netherite",
            specialNotes: ""
        },
        {
            name: "Example Special Item",
            id: "example_special_item",
            damage: 9,
            hearts: 4.5,
            speed: 1.0,
            durability: 500,
            description: "Only obtainable through a special event.",
            craftingType: "none",
            recipe: {
                description: "This item can only be obtained during the Halloween Event.",
                link: "events"   // page id to navigate to, or "" for no link
            },
            materials: "Event Exclusive",
            specialNotes: "Only available on October 31st."
        }
        // TODO: Add more items here
    ];


    /* ================================================================
       5. generateHeartDisplay()
       Renders inline heart images (same wiki.minecraft.org URLs as BSR).
       ================================================================ */
    function generateHeartDisplay(hearts) {
        const fullHearts   = Math.floor(hearts);
        const hasHalfHeart = hearts % 1 !== 0;
        let heartHtml = "";

        for (let i = 0; i < fullHearts; i++) {
            heartHtml += '<img src="https://minecraft.wiki/images/Heart_%28icon%29.png?faf83" alt="heart" class="inline w-3 h-3">';
        }
        if (hasHalfHeart) {
            heartHtml += '<img src="https://minecraft.wiki/images/Half_Heart_%28icon%29.png?cb16e" alt="half heart" class="inline w-3 h-3">';
        }

        return heartHtml;
    }


    /* ================================================================
       6. generateRecipeDisplay()
       Central recipe renderer — handles crafting, smithing, furnace, none,
       and multi-type recipes. Mirrors bsrWiki.js exactly.

       TODO: Update outputUrl() to point to your mod's texture folder.
       ================================================================ */
    function generateRecipeDisplay(item) {

        // Helper: resolve smithing slot refs to full URLs
        function resolveSmithingItem(itemRef) {
            if (!itemRef) return null;
            if (itemRef.startsWith("http")) return itemRef;
            return `/src/assets/images/minecraft_assets/${itemRef}.png`;
        }

        // TODO: Replace with your mod's item texture base path.
        function outputUrl(id) {
            return `https://github.com/YOUR_USER/YOUR_REPO/raw/BRANCH/src/main/resources/assets/MOD_ID/textures/item/${id}.png`;
        }

        /* ── MULTI-TYPE (craftingTypes array) ── */
        if (item.craftingTypes && Array.isArray(item.craftingTypes)) {
            let allRecipes = "";

            item.craftingTypes.forEach((type, index) => {
                if (index > 0) {
                    allRecipes += '<div class="my-4 border-t border-gray-300 dark:border-gray-700 pt-4"></div>';
                }

                if (type === "smithing") {
                    const smithingRecipe = item.recipes.smithing;
                    const template  = resolveSmithingItem(smithingRecipe.template);
                    const base      = resolveSmithingItem(smithingRecipe.base);
                    const addition  = resolveSmithingItem(smithingRecipe.addition);

                    allRecipes += `
                    <p class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Smithing Recipe</p>
                    <div class="flex items-center justify-center">
                        <div class="flex items-center space-x-2">
                            <div class="recipe-slot">
                                ${template ? `<img src="${template}" class="w-full h-full image-render-pixel" onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">` : ""}
                            </div>
                            <span class="text-xl">+</span>
                            <div class="recipe-slot">
                                ${base ? `<img src="${base}" class="w-full h-full image-render-pixel" onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">` : ""}
                            </div>
                            <span class="text-xl">+</span>
                            <div class="recipe-slot">
                                ${addition ? `<img src="${addition}" class="w-full h-full image-render-pixel" onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">` : ""}
                            </div>
                        </div>
                        <div class="recipe-arrow mx-4">→</div>
                        <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                            <img src="${outputUrl(item.id)}" class="w-12 h-12 image-render-pixel">
                        </div>
                    </div>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">Crafted in Smithing Table</p>
                    `;

                } else if (type === "crafting") {
                    const craftingRecipe = item.recipes.crafting;
                    allRecipes += `
                    <p class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Crafting Recipe</p>
                    <div class="flex items-center justify-center">
                        <div class="recipe-grid">
                    `;
                    for (let row = 0; row < 3; row++) {
                        for (let col = 0; col < 3; col++) {
                            const cell = craftingRecipe.pattern[row]?.[col];
                            let url = "";
                            if (Array.isArray(cell)) url = wikiIcon(cell[0]);
                            else if (cell)           url = wikiIcon(cell);

                            allRecipes += `<div class="recipe-slot">`;
                            if (url) allRecipes += `<img src="${url}" class="w-full h-full image-render-pixel" onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">`;
                            allRecipes += `</div>`;
                        }
                    }
                    allRecipes += `
                        </div>
                        <div class="recipe-arrow">→</div>
                        <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                            <img src="${outputUrl(item.id)}" class="w-12 h-12 image-render-pixel">
                        </div>
                    </div>
                    `;

                } else if (type === "furnace") {
                    const furnaceRecipe = item.recipes.furnace;
                    const input = wikiIcon(furnaceRecipe.input);
                    allRecipes += `
                    <p class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Smelting Recipe</p>
                    <div class="flex items-center justify-center">
                        <div class="flex items-center space-x-2">
                            <div class="recipe-slot">
                                ${input ? `<img src="${input}" class="w-full h-full image-render-pixel" onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">` : ""}
                            </div>
                            <span class="text-xl">🔥</span>
                        </div>
                        <div class="recipe-arrow mx-4">→</div>
                        <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                            <img src="${outputUrl(item.id)}" class="w-12 h-12 image-render-pixel">
                        </div>
                    </div>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">Smelted in Furnace${furnaceRecipe.experience ? ` (${furnaceRecipe.experience} XP)` : ""}</p>
                    `;

                } else if (type === "none") {
                    const noneRecipe = item.recipes.none;
                    allRecipes += `
                    <div class="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                        <h5 class="font-semibold text-amber-700 dark:text-amber-400 mb-2">📜 How to Obtain</h5>
                        <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">${noneRecipe.description}</p>
                        ${noneRecipe.link ? `
                            <button onclick="showPage('${noneRecipe.link}')"
                                    class="inline-flex items-center px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-md font-medium transition-colors">
                                <span class="mr-1">📖</span>
                                Learn More
                            </button>
                        ` : ""}
                    </div>
                    `;
                }
            });

            return allRecipes;
        }

        /* ── SINGLE SMITHING ── */
        if (item.craftingType === "smithing") {
            const template  = resolveSmithingItem(item.recipe.template);
            const base      = resolveSmithingItem(item.recipe.base);
            const addition  = resolveSmithingItem(item.recipe.addition);

            return `
            <div class="flex items-center justify-center">
                <div class="flex items-center space-x-2">
                    <div class="recipe-slot">
                        ${template ? `<img src="${template}" class="w-full h-full image-render-pixel" onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">` : ""}
                    </div>
                    <span class="text-xl">+</span>
                    <div class="recipe-slot">
                        ${base ? `<img src="${base}" class="w-full h-full image-render-pixel" onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">` : ""}
                    </div>
                    <span class="text-xl">+</span>
                    <div class="recipe-slot">
                        ${addition ? `<img src="${addition}" class="w-full h-full image-render-pixel" onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">` : ""}
                    </div>
                </div>
                <div class="recipe-arrow mx-4">→</div>
                <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                    <img src="${outputUrl(item.id)}" class="w-12 h-12 image-render-pixel">
                </div>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">Crafted in Smithing Table</p>
            `;
        }

        /* ── SINGLE FURNACE ── */
        if (item.craftingType === "furnace") {
            const input = wikiIcon(item.recipe.input);
            return `
            <div class="flex items-center justify-center">
                <div class="flex items-center space-x-2">
                    <div class="recipe-slot">
                        ${input ? `<img src="${input}" class="w-full h-full image-render-pixel" onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">` : ""}
                    </div>
                    <span class="text-xl">🔥</span>
                </div>
                <div class="recipe-arrow mx-4">→</div>
                <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                    <img src="${outputUrl(item.id)}" class="w-12 h-12 image-render-pixel">
                </div>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">Smelted in Furnace${item.recipe.experience ? ` (${item.recipe.experience} XP)` : ""}</p>
            `;
        }

        /* ── SINGLE NONE (special obtain) ── */
        if (item.craftingType === "none") {
            return `
            <div class="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <h5 class="font-semibold text-amber-700 dark:text-amber-400 mb-2">📜 How to Obtain</h5>
                <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">${item.recipe.description}</p>
                ${item.recipe.link ? `
                    <button onclick="showPage('${item.recipe.link}')"
                            class="inline-flex items-center px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-md font-medium transition-colors">
                        <span class="mr-1">📖</span>
                        Learn More
                    </button>
                ` : ""}
            </div>
            `;
        }

        /* ── SINGLE CRAFTING (default) ── */
        let recipeHtml = '<div class="flex items-center justify-center"><div class="recipe-grid">';

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const cell = item.recipe.pattern[row]?.[col];
                let url = "";
                if (Array.isArray(cell)) url = wikiIcon(cell[0]);
                else if (cell)           url = wikiIcon(cell);

                recipeHtml += '<div class="recipe-slot">';
                if (url) {
                    recipeHtml += `<img src="${url}" class="w-full h-full image-render-pixel" onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">`;
                }
                recipeHtml += '</div>';
            }
        }

        recipeHtml += `
        </div>
        <div class="recipe-arrow">→</div>
        <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
            <img src="${outputUrl(item.id)}" class="w-12 h-12 image-render-pixel">
        </div>
        </div>`;

        return recipeHtml;
    }


    /* ================================================================
       7. PER-PAGE RENDER FUNCTIONS
       Duplicate all three functions below for each page in your wiki,
       renaming the element IDs and item array to match.
       ================================================================ */

    /* ── 7a. Variant grid ──────────────────────────────────────────── */
    // TODO: Update element id ("item-variants-grid") and array (items) per page.
    function renderVariants() {
        const grid = document.getElementById("item-variants-grid");
        if (!grid) return;

        grid.innerHTML = items.map(item => `
        <a href="#item-${item.id}" class="text-center block cursor-pointer">
            <img
                src="${wikiIcon(item.id)}"
                alt="${item.name}"
                class="w-12 h-12 mx-auto image-render-pixel border p-1
                       bg-gray-100 dark:bg-gray-800
                       hover:scale-105 transition"
                onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
            <span class="text-xs text-gray-600 dark:text-gray-400">${item.name}</span>
        </a>
    `).join("");
    }

    /* ── 7b. Statistics table ──────────────────────────────────────── */
    // TODO: Update element id and array per page.
    //       Add/remove <td> columns to match your item type's stats.
    function renderStatsTable() {
        const tbody = document.getElementById("item-stats-table-body");
        if (!tbody) return;

        tbody.innerHTML = "";

        items.forEach(item => {
            const row = document.createElement("tr");
            row.className = "odd:bg-gray-50 dark:odd:bg-gray-900";

            row.innerHTML = `
            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 flex items-center">
                <img
                    src="${wikiIcon(item.id)}"
                    alt="${item.name}"
                    class="w-4 h-4 mr-2 image-render-pixel"
                    onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                ${item.name}
            </td>
            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center">
                ${item.damage}
                ${generateHeartDisplay(item.hearts)}
                × ${item.hearts}
            </td>
            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center">
                ${item.speed}
            </td>
            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center">
                ${item.durability}
            </td>
            `;

            tbody.appendChild(row);
        });
    }

    /* ── 7c. Individual item cards ─────────────────────────────────── */
    // TODO: Update element id and array per page.
    function renderIndividualItems() {
        const container = document.getElementById("item-details");
        if (!container) return;

        container.innerHTML = "";

        items.forEach(item => {
            const card = document.createElement("div");
            card.id = `item-${item.id}`;
            card.className =
                "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden";

            card.innerHTML = `
            <!-- Card header -->
            <div class="bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-3">
                <img src="${wikiIcon(item.id)}" alt="${item.name}"
                     class="w-10 h-10 image-render-pixel"
                     onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">${item.name}</h3>
            </div>

            <!-- Card body -->
            <div class="p-4">
                ${item.description ? `<p class="text-gray-700 dark:text-gray-300 mb-4">${item.description}</p>` : ""}

                <!-- Stat badges -->
                <div class="flex flex-wrap gap-2 mb-4">
                    ${item.damage     != null ? `<span class="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">⚔️ Damage: ${item.damage} ${generateHeartDisplay(item.hearts)}</span>` : ""}
                    ${item.speed      != null ? `<span class="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">⚡ Speed: ${item.speed}</span>` : ""}
                    ${item.durability != null ? `<span class="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">🔨 Durability: ${item.durability}</span>` : ""}
                </div>

                <!-- Recipe -->
                <div class="mb-2">
                    <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">
                        ${item.craftingType === "smithing" ? "Smithing" :
                item.craftingType === "furnace"  ? "Smelting" :
                    item.craftingType === "none"     ? "Obtaining" : "Crafting"}
                    </h4>
                    ${generateRecipeDisplay(item)}
                    ${item.materials ? `<p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Materials: ${item.materials}</p>` : ""}
                </div>

                <!-- Special notes -->
                ${item.specialNotes ? `
                <div class="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded p-3 text-sm text-yellow-800 dark:text-yellow-200">
                    ⚠️ ${item.specialNotes}
                </div>` : ""}
            </div>
            `;

            container.appendChild(card);
        });
    }

    /*
     * TODO: Copy and rename the three functions above for each additional
     * wiki page (shields, tools, materials, etc.).
     *
     * Naming conventions matching bsrWiki.js:
     *   renderShieldVariants()    → id="shield-variants-grid"
     *   renderShieldStatsTable()  → id="shield-stats-table-body"
     *   renderIndividualShields() → id="shield-details"
     */


    /* ================================================================
       8. INITIALISATION
       ================================================================ */
    renderChangelog();
    renderVariants();
    renderStatsTable();
    renderIndividualItems();

    /*
     * TODO: Call additional render functions here, e.g.:
     *   renderShieldVariants();
     *   renderShieldStatsTable();
     *   renderIndividualShields();
     */

    /* ── Smooth scrolling for anchor links ── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    /* ── Cycling images in recipe grids (for array cells) ── */
    function setupImageCycling() {
        const recipeSlots = document.querySelectorAll('.recipe-slot img[data-cycle]');
        recipeSlots.forEach(img => {
            const urls = img.dataset.cycle.split(',');
            let currentIndex = 0;
            if (urls.length > 1) {
                setInterval(() => {
                    currentIndex = (currentIndex + 1) % urls.length;
                    img.src = urls[currentIndex];
                }, 2000);
            }
        });
    }
    setTimeout(setupImageCycling, 1000);

});