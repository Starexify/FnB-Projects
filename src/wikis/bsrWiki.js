document.addEventListener("DOMContentLoaded", () => {
    /* ---------------- Base Buttons ---------------- */
    const curseforgeUrl = "https://www.curseforge.com/minecraft/mc-mods/big-swords-r";
    const modrinthUrl   = "https://modrinth.com/mod/big-swords-r";

    const downloadBtn = document.getElementById("download-btn");
    const backBtn     = document.getElementById("back-btn");
    if (downloadBtn && backBtn) {
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

    /* ---------------- Local Minecraft Assets Texture Function ---------------- */
    function wikiIcon(name) {
        if (!name) return "";

        // If already a full URL, leave it untouched
        if (name.startsWith("http://") || name.startsWith("https://")) {
            return name;
        }

        // Base local path (relative to project root / bundler)
        const basePath = "/src/assets/images/minecraft_assets/";

        // If starts with "wiki_", strip the prefix
        if (name.startsWith("wiki_")) {
            const fileName = name.substring(5); // Remove "wiki_"
            return `${basePath}${fileName}`;
        }

        // Default to PNG; GIF fallback handled via onerror in <img>
        return `${basePath}${name}.png`;
    }

    /* ---------------- Big Swords R Changelog Data ---------------- */
    const changelog = [
        {
            version: "1.0.0-beta [1.21] – Aug 17, 2024",
            type: "beta",
            sections: [
                {
                    title: "Minor Changes",
                    changes: [
                        "Moved items to normal creative tabs (kept the mod tab)",
                        "Removed debug messages",
                        "Glaive won't charge when looking at creep blocks"
                    ]
                }
            ]
        },
        {
            version: "1.1.0-alpha [1.21] – Aug 17, 2024",
            type: "alpha",
            sections: [
                {
                    title: "Misc",
                    changes: [
                        "Integrated the 16x ResourcePack directly into the mod"
                    ]
                }
            ]
        },
        {
            version: "1.0.0-alpha [1.21] – Aug 17, 2024",
            type: "alpha",
            sections: [
                {
                    title: "Big Swords",
                    changes: [
                        "Wooden Big Sword: Damage: 6; Attack Speed: 1.2; Durability: 118",
                        "Stone Big Sword: Damage: 7; Attack Speed: 1.2; Durability: 262",
                        "Iron Big Sword: Damage: 8; Attack Speed: 1.2; Durability: 500",
                        "Golden Big Sword: Damage: 6; Attack Speed 1,2; Durability: 64",
                        "Diamond Big Sword: Damage: 9; Attack Speed: 1.2; Durability: 3122",
                        "Netherite Big Sword: Damage: 10; Attack Speed: 1.2; Durability: 4062",
                        "Patchwork Big Sword: Damage: 4; Attack Speed 1,2; Durability: 60",
                        "Skull Big Sword: Damage: 5; Attack Speed 1,2; Durability: 206",
                        "Quartz Big Sword: Damage: 7; Attack Speed 1,2; Durability: 374",
                        "Obsidian Big Sword: Damage: 9; Attack Speed 1,2; Durability: 2,342"
                    ]
                },
                {
                    title: "Glaives (Rework)",
                    changes: [
                        "Note: Added a special attack (similarly to the old AS), that deals damage from 5 blocks away (damage is lower or equal to the glaive's damage), the charge damage is shown in the item.",
                        "Wooden Glaive: Special Attack: 3 - 4",
                        "Stone Glaive: Special Attack: 3.5 - 4.5",
                        "Iron Glaive: Special Attack: 4 - 5",
                        "Golden Glaive: Special Attack: 3 - 4",
                        "Diamond Glaive: Special Attack: 4.5 - 5.5",
                        "Netherite Glaive: Special Attack: 5.5 - 6.5",
                        "Biomass Glaive: Special Attack: 4 - 4.5",
                        "Livingsmetal Glaive: Special Attack: 4.5 - 5.5"
                    ]
                }
            ]
        }
    ];


    /* ---------------- Big Swords Wiki Items Data ---------------- */
    const swords = [
        {
            name: "Wooden Big Sword",
            id: "wooden_big_sword",
            damage: 7,
            hearts: 3.5,
            speed: 1.2,
            durability: 118,
            description: "",
            craftingType: "crafting", // or "smithing"
            recipe: {
                pattern: [
                    [ [""], ["planks"], ["planks"] ],
                    [ ["planks"], ["planks"], ["planks"] ],
                    [ "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/giant_wooden_stick.png", "planks", "" ]
                ]
            },
            materials: "6 Wood Planks + 1 Giant Wooden Stick",
            specialNotes: ""
        },
        {
            name: "Stone Big Sword",
            id: "stone_big_sword",
            damage: 8,
            hearts: 4,
            speed: 1.2,
            durability: 262,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    [ [""], ["cobbled"], ["cobbled"] ],
                    [ ["cobbled"], ["cobbled"], ["cobbled"] ],
                    [ "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/giant_wooden_stick.png", "cobbled", "" ]
                ]
            },
            materials: "6 Cobblestone + 1 Giant Wooden Stick",
            specialNotes: ""
        },
        {
            name: "Iron Big Sword",
            id: "iron_big_sword",
            damage: 9,
            hearts: 4.5,
            speed: 1.2,
            durability: 500,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/giant_wooden_stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", ""]
                ]
            },
            materials: "6 Iron Ingots + 1 Giant Wooden Stick",
            specialNotes: ""
        },
        {
            name: "Golden Big Sword",
            id: "golden_big_sword",
            damage: 7,
            hearts: 3.5,
            speed: 1.2,
            durability: 64,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/giant_wooden_stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                ]
            },
            materials: "6 Gold Ingots + 1 Giant Wooden Stick",
            specialNotes: ""
        },
        {
            name: "Diamond Big Sword",
            id: "diamond_big_sword",
            damage: 10,
            hearts: 5,
            speed: 1.2,
            durability: 3122,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/giant_wooden_stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", ""]
                ]
            },
            materials: "6 Diamonds + 1 Giant Wooden Stick",
            specialNotes: ""
        },
        {
            name: "Netherite Big Sword",
            id: "netherite_big_sword",
            damage: 11,
            hearts: 5.5,
            speed: 1.2,
            durability: 4062,
            description: "",
            craftingType: "smithing",
            recipe: {
                base: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/diamond_big_sword.png",
                addition: "block_of_netherite",
                template: "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/netherite_upgrade_smithing_template.png"
            },
            materials: "Netherite Upgrade Smithing Template + Diamond Big Sword + Block of Netherite",
            specialNotes: ""
        },
        {
            name: "Patchwork Big Sword",
            id: "patchwork_big_sword",
            damage: 6,
            hearts: 3,
            speed: 1.6,
            durability: 60,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/rotten_flesh.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/rotten_flesh.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/rotten_flesh.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/rotten_flesh.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/rotten_flesh.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/rotten_flesh.png", ""]
                ]
            },
            materials: "6 Rotten Flesh + 1 Bone",
            specialNotes: ""
        },
        {
            name: "Skull Big Sword",
            id: "skull_big_sword",
            damage: 7,
            hearts: 3.5,
            speed: 1.4,
            durability: 206,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png"],
                    ["bone_block", "skeleton_skull", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/giant_wooden_stick.png", "bone_block", ""]
                ]
            },
            materials: "3 Bones + 2 Bone Blocks + 1 Giant Wooden Stick",
            specialNotes: ""
        },
        {
            name: "Quartz Big Sword",
            id: "quartz_big_sword",
            damage: 8,
            hearts: 4,
            speed: 1.2,
            durability: 374,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/quartz.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/quartz.png"],
                    ["block_of_quartz", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/quartz.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/quartz.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/giant_blaze_rod.png", "block_of_quartz", ""]
                ]
            },
            materials: "4 Nether Quartz + 2 Block of Quartz + 1 Giant Blaze Rod",
            specialNotes: ""
        },
        {
            name: "Obsidian Big Sword",
            id: "obsidian_big_sword",
            damage: 11,
            hearts: 5.5,
            speed: 1.2,
            durability: 2342,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "obsidian", "obsidian"],
                    ["obsidian", "https://github.com/Starexify/BigSwordsR/raw/1.21.5-neo/src/main/resources/assets/big_swords/textures/item/diamond_big_sword.png", "obsidian"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/giant_blaze_rod.png", "obsidian", ""]
                ]
            },
            materials: "6 Obsidian + 1 Diamond Big Sword + 1 Giant Blaze Rod",
            specialNotes: ""
        },
        {
            name: "Ender Big Sword",
            id: "ender_big_sword",
            damage: 13,
            hearts: 6.5,
            speed: 1.2,
            durability: 6092,
            description: "",
            craftingType: "smithing",
            recipe: {
                base: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/diamond_big_sword.png",
                addition: "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/ender_eye.png",
                template: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/ender_upgrade_smithing_template.png"
            },
            materials: "Ender Upgrade (found in End Cities) + Diamond Big Sword + Eye of Ender",
            specialNotes: ""
        },
        {
            name: "Livingmetal Big Sword",
            id: "livingmetal_big_sword",
            damage: 10,
            hearts: 5,
            speed: 1.2,
            durability: 750,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/giant_wooden_stick.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", ""]
                ]
            },
            materials: "6 Livingmetal Ingots + 1 Giant Livingmetal Handle",
            specialNotes: ""
        },
        {
            name: "Biomass Big Sword",
            id: "biomass_big_sword",
            damage: 9,
            hearts: 4.5,
            speed: 1.2,
            durability: 376,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/nether_brick.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/giant_wooden_stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/nether_brick.png", ""]
                ]
            },
            materials: "4 Biomass + 2 Nether Bricks + 1 Giant Wooden Stick",
            specialNotes: ""
        }
    ];

    /* ---------------- Handles Data ---------------- */
    const handles = [
        {
            name: "Giant Wooden Stick",
            id: "giant_wooden_stick",
            icon: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/giant_wooden_stick.png",
            description: "Used to craft most of the swords.",
            recipe: {
                pattern: [
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""]
                ]
            }
        },
        {
            name: "Giant Blaze Rod",
            id: "giant_blaze_rod",
            icon: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/giant_blaze_rod.png",
            description: "Used to craft the big obsidian sword and big quartz sword.",
            recipe: {
                pattern: [
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/blaze_rod.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/blaze_rod.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/blaze_rod.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/blaze_rod.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/blaze_rod.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/blaze_rod.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/blaze_rod.png", ""]
                ]
            }
        },
        {
            name: "Giant Livingmetal Handle",
            id: "giant_livingmetal_handle",
            icon: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/giant_livingmetal_handle.png",
            description: "Used to craft the big livingmetal sword.",
            recipe: {
                pattern: [
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", ""]
                ]
            }
        }
    ];

    /* ---------------- Upgrades Data ---------------- */
    const upgrades = [
        {
            name: "Ender Upgrade",
            id: "ender_upgrade",
            image: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/ender_upgrade_smithing_template.png",
            location: "End City chests",
            chance: "35% per chest",

            duplication: {
                description: "Can be duplicated, similar to Netherite Upgrade, using 7 Obsidian, an Eye of Ender and an Ender Upgrade Template like in the following recipe:",
                recipe: {
                    pattern: [
                        ["obsidian", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/ender_upgrade_smithing_template.png", "obsidian"],
                        ["obsidian", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/ender_eye.png", "obsidian"],
                        ["obsidian", "obsidian", "obsidian"]
                    ]
                }
            }
        }
    ];

    /* ---------------- Shields Data ---------------- */
    const shields = [
        {
            name: "Wooden Shield",
            id: "wooden_shield",
            durability: 118,
            perk: "Arrow Catch",
            perkDesc: "Has a 40% chance",
            weakness: "Flammable",
            weaknessDesc: "Fire deals more damage to the shield",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["planks", "planks", "planks"],
                    ["planks", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/leather.png", "planks"],
                    ["", "planks", ""]
                ]
            },
            description: "",
            extraAbility: "Fire Aspect I deals 3 times the blocked damage - Fire Aspect II deals 5 times the blocked damage - Fire Projectiles deal 4 times the blocked damage"
        },
        {
            name: "Gilded Wooden Shield",
            id: "gilded_wooden_shield",
            durability: 232,
            perk: "Arrow Catch",
            perkDesc: "Has a 70% chance",
            weakness: "Flammable",
            weaknessDesc: "Fire deals more damage to the shield",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/wooden_shield.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                ]
            },
            description: "",
            extraAbility: "Fire Aspect I deals 3 times the blocked damage - Fire Aspect II deals 5 times the blocked damage - Fire Projectiles deal 4 times the blocked damage"
        },
        {
            name: "Stone Shield",
            id: "stone_shield",
            durability: 131,
            perk: "Fire Resistant",
            perkDesc: "Fire deals 0 damage to shield (Projectiles/FireAspect)",
            weakness: "Shattered Defense",
            weaknessDesc: "Shield fails to fully block explosions, meaning explosions deal damage to the holder",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["cobbled", "cobbled", "cobbled"],
                    ["cobbled", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/leather.png", "cobbled"],
                    ["", "cobbled", ""]
                ]
            },
            description: ""
        },
        {
            name: "Gilded Stone Shield",
            id: "gilded_stone_shield",
            durability: 262,
            perk: "Fire Resistant",
            perkDesc: "Fire deals 0 damage to shield (Projectiles/FireAspect)",
            weakness: "Shattered Defense",
            weaknessDesc: "Shield fails to fully block explosions, meaning explosions deal damage to the holder",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/stone_shield.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Iron Shield",
            id: "iron_shield",
            durability: 250,
            perk: "Explosion Resistant",
            perkDesc: "Explosions deal 50% less damage to the shield",
            weakness: "Rusting",
            weaknessDesc: "The shield decays if held underwater",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/leather.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Gilded Iron Shield",
            id: "gilded_iron_shield",
            durability: 375,
            perk: "Explosion Resistant",
            perkDesc: "Explosions deal 100% less damage to the shield",
            weakness: "Rusting",
            weaknessDesc: "The shield decays if held underwater",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/iron_shield.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Diamond Shield",
            id: "diamond_shield",
            durability: 781,
            perk: "Counter Reflect",
            perkDesc: "Has a 50% chance to reflect projectile back to attacker",
            weakness: "Reflective Impact",
            weaknessDesc: "The reflected projectiles deal 2x more damage than normal",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/leather.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Gilded Diamond Shield",
            id: "gilded_diamond_shield",
            durability: 908,
            perk: "Counter Reflect",
            perkDesc: "Has a 70% chance to reflect projectile back to attacker",
            weakness: "Reflective Impact",
            weaknessDesc: "The reflected projectiles deal 2x more damage than normal",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/diamond_shield.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Netherite Shield",
            id: "netherite_shield",
            durability: 1016,
            perk: "Reflecting Guard",
            perkDesc: "45% chance to reflect 30% back to attacker",
            weakness: "Reflecting Pause",
            weaknessDesc: "15% to put shield on 8s cooldown when reflecting damage",
            craftingType: "smithing",
            recipe: {
                base: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/diamond_shield.png",
                addition: "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/netherite_ingot.png",
                template: "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/netherite_upgrade_smithing_template.png"
            },
            description: ""
        },
        {
            name: "Gilded Netherite Shield",
            id: "gilded_netherite_shield",
            durability: 1238,
            perk: "Reflecting Guard",
            perkDesc: "45% chance to reflect 50% back to attacker",
            weakness: "Reflecting Pause",
            weaknessDesc: "10% if Gilded to put shield on 4s cooldown when reflecting damage",
            craftingTypes: ["crafting", "smithing"],
            recipes: {
                crafting: {
                    pattern: [
                        ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                        ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/netherite_shield.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                        ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                    ]
                },
                smithing: {
                    template: "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/netherite_upgrade_smithing_template.png",
                    base: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/gilded_diamond_shield.png",
                    addition: "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/netherite_ingot.png"
                }
            },
            description: ""
        },
        {
            name: "Ender Shield",
            id: "ender_shield",
            durability: 1523,
            perk: "Teleport Displace",
            perkDesc: "20% chance to teleport enemy 7 to 10 blocks away (Doesn't work on skeletons or wither for obvious reasons)",
            weakness: "Ender Damage",
            weaknessDesc: "Ender entities bypass the blocking",
            craftingType: "smithing",
            recipe: {
                base: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/netherite_shield.png",
                addition: "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/ender_eye.png",
                template: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/ender_upgrade_smithing_template.png"
            },
            description: ""
        },
        {
            name: "Gilded Ender Shield",
            id: "gilded_ender_shield",
            durability: 1856,
            perk: "Teleport Displace",
            perkDesc: "40% chance to teleport enemy 7 to 10 blocks away (Doesn't work on skeletons or wither for obvious reasons)",
            weakness: "Ender Damage",
            weaknessDesc: "Ender entities bypass the blocking",
            craftingTypes: ["crafting", "smithing"],
            recipes: {
                crafting: {
                    pattern: [
                        ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                        ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/ender_shield.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                        ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                    ]
                },
                smithing: {
                    template: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/ender_upgrade_smithing_template.png",
                    base: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/gilded_netherite_shield.png",
                    addition: "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/ender_eye.png"
                }
            },
            description: ""
        },
        {
            name: "Biomass Shield",
            id: "biomass_shield",
            durability: 282,
            perk: "Vitality Transfer",
            perkDesc: "45% chance to heal player equal to 30% of the damage blocked",
            weakness: "Life Leech",
            weaknessDesc: "15% chance to damage player equal to 40% blocked damage",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/leather.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Gilded Biomass Shield",
            id: "gilded_biomass_shield",
            durability: 376,
            perk: "Vitality Transfer",
            perkDesc: "45% chance to heal player equal to 50% of the damage blocked",
            weakness: "Life Leech",
            weaknessDesc: "15% chance to damage player equal to 20% blocked damage",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass_shield.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Livingmetal Shield",
            id: "livingmetal_shield",
            durability: 375,
            perk: "Experience Infusion",
            perkDesc: "25% chance to heal player at cost of XP (1 heart per XP)",
            weakness: "Experience Drain",
            weaknessDesc: "20% chance to drain additional experience",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/leather.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Gilded Livingmetal Shield",
            id: "gilded_livingmetal_shield",
            durability: 937,
            perk: "Experience Infusion",
            perkDesc: "40% chance to heal player at cost of XP (1 heart per XP)",
            weakness: "Experience Drain",
            weaknessDesc: "15% chance to drain additional experience",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/diamond_shield.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Quartz Shield",
            id: "quartz_shield",
            durability: 187,
            perk: "Quartz Barrier",
            perkDesc: "15% chance to give the holder 4 absorption hearts for 30 seconds",
            weakness: "Hunger Toll",
            weaknessDesc: "30% chance to consume the holders hunger in exchange",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/quartz.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/quartz.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/quartz.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/quartz.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/leather.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/quartz.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/quartz.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Gilded Quartz Shield",
            id: "gilded_quartz_shield",
            durability: 374,
            perk: "Quartz Barrier",
            perkDesc: "25% chance to give the holder 4 absorption hearts for 30 seconds",
            weakness: "Hunger Toll",
            weaknessDesc: "20% chance to consume the holders hunger in exchange",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/quartz_shield.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Skull Shield",
            id: "skull_shield",
            durability: 206,
            perk: "Fear",
            perkDesc: "15% chance to change the attackers target to the closest target",
            weakness: "Brittle Bones",
            weaknessDesc: "35% blocking receive x3 damage",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png", "skeleton_skull", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/leather.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Gilded skull Shield",
            id: "gilded_skull_shield",
            durability: 360,
            perk: "Fear",
            perkDesc: "25% chance to change the attackers target to the closest target",
            weakness: "Brittle Bones",
            weaknessDesc: "15% blocking receive x3 damage",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "wither_skeleton_skull", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/skull_shield.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Patchwork Shield",
            id: "patchwork_shield",
            durability: 60,
            perk: "Necrotic Weakness",
            perkDesc: "25% chance to give Weakness I to the attacker",
            weakness: "Rotten Defense",
            weaknessDesc: "50% chance for failing the block",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/rotten_flesh.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/rotten_flesh.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/rotten_flesh.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/rotten_flesh.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/rotten_flesh.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/rotten_flesh.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/rotten_flesh.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Gilded Patchwork Shield",
            id: "gilded_patchwork_shield",
            durability: 90,
            perk: "Necrotic Weakness",
            perkDesc: "50% chance to give Weakness I to the attacker",
            weakness: "Rotten Defense",
            weaknessDesc: "25% chance for failing the block",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/patchwork_shield.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                ]
            },
            description: ""
        },
    ];
    /* ---------------- Glaives Data ---------------- */
    const glaives = [
        {
            name: "Wooden Glaive",
            id: "wooden_glaive",
            damage: 3,
            hearts: 1.5,
            speed: 1.8,
            specialAttackMin: 3,
            specialAttackMax: 4,
            durability: 59,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["planks", "planks", ""],
                    ["planks", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "planks"],
                    ["", "planks", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"]
                ]
            },
            materials: "5 Wood Planks + 2 Sticks",
            specialNotes: ""
        },
        {
            name: "Stone Glaive",
            id: "stone_glaive",
            damage: 4,
            hearts: 2,
            speed: 1.8,
            specialAttackMin: 3,
            specialAttackMax: 4,
            durability: 131,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["cobbled", "cobbled", ""],
                    ["cobbled", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "cobbled"],
                    ["", "cobbled", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"]
                ]
            },
            materials: "5 Cobblestone + 2 Sticks",
            specialNotes: ""
        },
        {
            name: "Iron Glaive",
            id: "iron_glaive",
            damage: 5,
            hearts: 2.5,
            speed: 1.8,
            specialAttackMin: 4,
            specialAttackMax: 5,
            durability: 250,
            description: "An iron glaive offering a good balance of damage and durability.",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", ""],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"]
                ]
            },
            materials: "5 Iron Ingots + 2 Sticks",
            specialNotes: ""
        },
        {
            name: "Golden Glaive",
            id: "golden_glaive",
            damage: 3,
            hearts: 1.5,
            speed: 1.8,
            specialAttackMin: 3,
            specialAttackMax: 4,
            durability: 32,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"]
                ]
            },
            materials: "5 Gold Ingots + 2 Sticks",
            specialNotes: ""
        },
        {
            name: "Diamond Glaive",
            id: "diamond_glaive",
            damage: 6,
            hearts: 3,
            speed: 1.8,
            specialAttackMin: 4,
            specialAttackMax: 5,
            durability: 1561,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", ""],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"]
                ]
            },
            materials: "5 Diamonds + 2 Sticks",
            specialNotes: ""
        },
        {
            name: "Netherite Glaive",
            id: "netherite_glaive",
            damage: 7,
            hearts: 3.5,
            speed: 1.8,
            specialAttackMin: 5,
            specialAttackMax: 6,
            durability: 2031,
            description: "",
            craftingType: "smithing",
            recipe: {
                base: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/diamond_glaive.png",
                addition: "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/netherite_ingot.png",
                template: "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/netherite_upgrade_smithing_template.png"
            },
            materials: "Netherite Upgrade Smithing Template + Diamond Glaive + Netherite Ingot",
            specialNotes: ""
        },
        {
            name: "Biomass Glaive",
            id: "biomass_glaive",
            damage: 5,
            hearts: 2.5,
            speed: 1.8,
            specialAttackMin: 5,
            specialAttackMax: 6,
            durability: 188,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", ""],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/nether_brick.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/nether_brick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"]
                ]
            },
            materials: "3 Biomass + 2 Nether Bricks + 2 Sticks",
            specialNotes: ""
        },
        {
            name: "Livingmetal Glaive",
            id: "livingmetal_glaive",
            damage: 5,
            hearts: 2.5,
            speed: 1.8,
            specialAttackMin: 4,
            specialAttackMax: 5,
            durability: 375,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", ""],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"]
                ]
            },
            materials: "5 Livingmetal Ingots + 2 Sticks",
            specialNotes: ""
        }
    ];

    /* ---------------- Scythes Data ---------------- */
    const scythes = [
        {
            name: "Wooden Scythe",
            id: "wooden_scythe",
            damage: 2,
            hearts: 1,
            speed: 2.0,
            specialAttackMin: 2,
            specialAttackMax: 3,
            durability: 59,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["planks", "planks", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "planks"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "", ""]
                ]
            },
            materials: "3 Wood Planks + 3 Sticks",
            specialNotes: ""
        },
        {
            name: "Stone Scythe",
            id: "stone_scythe",
            damage: 3,
            hearts: 1.5,
            speed: 2.0,
            specialAttackMin: 2,
            specialAttackMax: 3,
            durability: 131,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["cobbled", "cobbled", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "cobbled"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "", ""]
                ]
            },
            materials: "3 Cobblestone + 3 Sticks",
            specialNotes: ""
        },
        {
            name: "Iron Scythe",
            id: "iron_scythe",
            damage: 4,
            hearts: 2,
            speed: 2.0,
            specialAttackMin: 3,
            specialAttackMax: 4,
            durability: 250,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "", ""]
                ]
            },
            materials: "3 Iron Ingots + 3 Sticks",
            specialNotes: ""
        },
        {
            name: "Golden Scythe",
            id: "golden_scythe",
            damage: 2,
            hearts: 1,
            speed: 2.0,
            specialAttackMin: 2,
            specialAttackMax: 3,
            durability: 32,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""]
                ]
            },
            materials: "3 Gold Ingots + 3 Sticks",
            specialNotes: ""
        },
        {
            name: "Diamond Scythe",
            id: "diamond_scythe",
            damage: 5,
            hearts: 2.5,
            speed: 2.0,
            specialAttackMin: 3,
            specialAttackMax: 4,
            durability: 1561,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/diamond.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "", ""]
                ]
            },
            materials: "3 Diamonds + 3 Sticks",
            specialNotes: ""
        },
        {
            name: "Netherite Scythe",
            id: "netherite_scythe",
            damage: 6,
            hearts: 3,
            speed: 2.0,
            specialAttackMin: 4,
            specialAttackMax: 5,
            durability: 2031,
            description: "",
            craftingType: "smithing",
            recipe: {
                base: "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/diamond_scythe.png",
                addition: "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/netherite_ingot.png",
                template: "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/netherite_upgrade_smithing_template.png"
            },
            materials: "Netherite Upgrade Smithing Template + Diamond Scythe + Netherite Ingot",
            specialNotes: ""
        },
        {
            name: "Biomass Scythe",
            id: "biomass_scythe",
            damage: 4,
            hearts: 2,
            speed: 2.0,
            specialAttackMin: 3,
            specialAttackMax: 3,
            durability: 188,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "", ""]
                ]
            },
            materials: "3 Biomass + 3 Sticks",
            specialNotes: ""
        },
        {
            name: "Livingmetal Scythe",
            id: "livingmetal_scythe",
            damage: 4,
            hearts: 2,
            speed: 2.0,
            specialAttackMin: 3,
            specialAttackMax: 4,
            durability: 375,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "", ""]
                ]
            },
            materials: "3 Livingmetal Ingots + 3 Sticks",
            specialNotes: ""
        },
        {
            name: "Bone Scythe",
            id: "bone_scythe",
            damage: 1,
            hearts: 0.5,
            speed: 2.0,
            specialAttackMin: 2,
            specialAttackMax: 2,
            durability: 30,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png", "bone_block"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/bone.png", "", ""]
                ]
            },
            materials: "5 Bones + 1 Bone Block",
            specialNotes: ""
        },
        {
            name: "Soul Reaper",
            id: "soul_reaper",
            damage: 1,
            hearts: 0.5,
            speed: 2.0,
            specialAttackMin: 9,
            specialAttackMax: 10,
            durability: 206,
            description: "Grim Reaper's favorite weapon",
            craftingType: "none",
            recipe: {
                description: "This weapon can only be obtained during the Halloween Event.",
                link: "events"
            },
            materials: "Halloween Event Exclusive",
            specialNotes: ""
        }
    ];

    /* ---------------- Biomass and Blood Data ---------------- */
    const biomassData = {
        bloodVial: {
            name: "Blood Vial",
            id: "vial",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["glass", "glass", "glass"],
                    ["glass", "", "glass"],
                    ["", "glass", ""]
                ]
            },
            materials: "6 Glass",
            description: "Used to collect blood from mobs and create biomass items."
        },
        biomassSeed: {
            name: "Biomass Seed",
            id: "biomass_seed",
            craftingType: "none",
            recipe: {
                description: "Hold a Blood Vial in your off-hand and Torchflower Seeds in your main hand, then right-click.",
                link: ""
            },
            materials: "1 Blood Vial + Torchflower Seeds",
            legacyRecipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/fermented_spider_eye.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/nether_wart.png", ""],
                    ["", "", ""],
                    ["", "", ""]
                ]
            },
            legacyId: "wiki_legacy_biomass_seed.png"
        },
        creepBall: {
            name: "Creep Ball",
            id: "creep_ball",
            craftingType: "none",
            recipe: {
                description: "Hold a Blood Vial in your off-hand and a Slimeball in your main hand, then right-click.",
                link: ""
            },
            materials: "1 Blood Vial + 1 Slimeball",
            legacyRecipe: {
                pattern: [
                    ["spider_rotten", "rotten_spider", "spider_rotten"],
                    ["rotten_spider", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/slime_ball.png", "rotten_spider"],
                    ["spider_rotten", "rotten_spider", "spider_rotten"]
                ]
            },
            legacyId: "wiki_legacy_creep_ball.png"
        },
        creepBlock: {
            name: "Creep Block",
            id: "creep_block",
            craftingType: "none",
            recipe: {
                description: "Right-click with a Creep Ball on a Soul Sand.",
                link: ""
            },
            materials: "1 Soul Sand + 1 Creep Ball"
        },
        biomassBlock: {
            name: "Biomass Block",
            id: "biomass_block",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"]
                ]
            },
            materials: "9 Biomass",
            description: ""
        }
    };

    const biomassArmor = [
        {
            name: "Biomass Helmet",
            id: "biomass_helmet",
            type: "armor",
            armor: 3,
            durability: 319,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["", "", ""]
                ]
            },
            materials: "5 Biomass",
            description: ""
        },
        {
            name: "Biomass Chestplate",
            id: "biomass_chestplate",
            type: "armor",
            armor: 7,
            durability: 464,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"]
                ]
            },
            materials: "8 Biomass",
            description: ""
        },
        {
            name: "Biomass Leggings",
            id: "biomass_leggings",
            type: "armor",
            armor: 5,
            durability: 435,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"]
                ]
            },
            materials: "7 Biomass",
            description: ""
        },
        {
            name: "Biomass Boots",
            id: "biomass_boots",
            type: "armor",
            armor: 2,
            durability: 377,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "", ""],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"]
                ]
            },
            materials: "4 Biomass",
            description: ""
        }
    ];

    const biomassTools = [
        {
            name: "Biomass Pickaxe",
            id: "biomass_pickaxe",
            type: "tool",
            damage: 4,
            hearts: 2,
            speed: 1.2,
            durability: 188,
            miningLevel: "Iron",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""]
                ]
            },
            materials: "3 Biomass + 2 Sticks",
            description: ""
        },
        {
            name: "Biomass Axe",
            id: "biomass_axe",
            type: "tool",
            damage: 9,
            hearts: 4.5,
            speed: 1,
            durability: 188,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", ""],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""]
                ]
            },
            materials: "3 Biomass + 2 Sticks",
            description: ""
        },
        {
            name: "Biomass Shovel",
            id: "biomass_shovel",
            type: "tool",
            damage: 4,
            hearts: 2,
            speed: 1.0,
            durability: 188,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""]
                ]
            },
            materials: "1 Biomass + 2 Sticks",
            description: ""
        },
        {
            name: "Biomass Hoe",
            id: "biomass_hoe",
            type: "tool",
            damage: 1,
            hearts: 0.5,
            speed: 3.5,
            durability: 188,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""]
                ]
            },
            materials: "2 Biomass + 2 Sticks",
            description: ""
        }
    ];

    const biomassWeapons = [
        {
            name: "Biomass Sword",
            id: "biomass_sword",
            type: "weapon",
            damage: 6,
            hearts: 3,
            speed: 1.6,
            durability: 188,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", ""],
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""]
                ]
            },
            materials: "2 Biomass + 1 Stick",
            description: ""
        },
        {
            name: "Biomass Big Sword",
            id: "biomass_big_sword",
            type: "weapon",
            damage: 9,
            hearts: 4.5,
            speed: 1.2,
            durability: 376,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/nether_brick.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/giant_wooden_stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/nether_brick.png", ""]
                ]
            },
            materials: "4 Biomass + 2 Nether Bricks + 1 Giant Wooden Stick",
            specialNotes: ""
        },
        {
            name: "Biomass Glaive",
            id: "biomass_glaive",
            type: "weapon",
            damage: 5,
            hearts: 2.5,
            speed: 1.8,
            specialAttackMin: 5,
            specialAttackMax: 6,
            durability: 188,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", ""],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/nether_brick.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/nether_brick.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"]
                ]
            },
            materials: "3 Biomass + 2 Nether Bricks + 2 Sticks",
            specialNotes: ""
        },
        {
            name: "Biomass Scythe",
            id: "biomass_scythe",
            type: "weapon",
            damage: 4,
            hearts: 2,
            speed: 2.0,
            specialAttackMin: 3,
            specialAttackMax: 3,
            durability: 188,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "", ""]
                ]
            },
            materials: "3 Biomass + 3 Sticks",
            specialNotes: ""
        },
    ];
    const biomassShields = [
        {
            name: "Biomass Shield",
            id: "biomass_shield",
            durability: 282,
            perk: "Vitality Transfer",
            perkDesc: "45% chance to heal player equal to 30% of the damage blocked",
            weakness: "Life Leech",
            weaknessDesc: "15% chance to damage player equal to 40% blocked damage",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/leather.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png"],
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Gilded Biomass Shield",
            id: "gilded_biomass_shield",
            durability: 376,
            perk: "Vitality Transfer",
            perkDesc: "45% chance to heal player equal to 50% of the damage blocked",
            weakness: "Life Leech",
            weaknessDesc: "15% chance to damage player equal to 20% blocked damage",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/biomass_shield.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                ]
            },
            description: ""
        },
        ];


    /* ---------------- Livingmetal & Souls Data ---------------- */
    const livingmetalData = {
        soul: {
            name: "Soul",
            id: "wiki_soul",
            description: "Spirit essence dropped from mobs killed with Soul Stealer enchantment."
        },
        livingmetalIngot: {
            name: "Livingmetal Ingot",
            id: "livingmetal_ingot",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "wiki_soul.gif", ""],
                    ["wiki_soul.gif", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/iron_ingot.png", "wiki_soul.gif"],
                    ["", "wiki_soul.gif", ""]
                ]
            },
            materials: "1 Iron Ingot + 4 Souls",
            description: ""
        }
    };

    const livingmetalArmor = [
        {
            name: "Livingmetal Helmet",
            id: "livingmetal_helmet",
            type: "armor",
            armor: 3,
            toughness: 0.5,
            durability: 319,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["", "", ""]
                ]
            },
            materials: "5 Livingmetal Ingots",
            description: "",
            specialNotes: ""
        },
        {
            name: "Livingmetal Chestplate",
            id: "livingmetal_chestplate",
            type: "armor",
            armor: 7,
            toughness: 0.5,
            durability: 464,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"]
                ]
            },
            materials: "8 Livingmetal Ingots",
            description: "",
            specialNotes: ""
        },
        {
            name: "Livingmetal Leggings",
            id: "livingmetal_leggings",
            type: "armor",
            armor: 5,
            toughness: 0.5,
            durability: 435,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"]
                ]
            },
            materials: "7 Livingmetal Ingots",
            description: "",
            specialNotes: ""
        },
        {
            name: "Livingmetal Boots",
            id: "livingmetal_boots",
            type: "armor",
            armor: 3,
            toughness: 0.5,
            durability: 377,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "", ""],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"]
                ]
            },
            materials: "4 Livingmetal Ingots",
            description: "",
            specialNotes: ""
        }
    ];

    const livingmetalTools = [
        {
            name: "Livingmetal Pickaxe",
            id: "livingmetal_pickaxe",
            type: "tool",
            damage: 4,
            hearts: 2,
            speed: 1.2,
            durability: 375,
            miningLevel: "Iron",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""]
                ]
            },
            materials: "3 Livingmetal Ingots + 2 Sticks",
            description: "",
            specialNotes: ""
        },
        {
            name: "Livingmetal Axe",
            id: "livingmetal_axe",
            type: "tool",
            damage: 9,
            hearts: 4.5,
            speed: 1,
            durability: 375,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", ""],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""]
                ]
            },
            materials: "3 Livingmetal Ingots + 2 Sticks",
            description: "",
            specialNotes: ""
        },
        {
            name: "Livingmetal Shovel",
            id: "livingmetal_shovel",
            type: "tool",
            damage: 5,
            hearts: 2.5,
            speed: 1.0,
            durability: 375,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""]
                ]
            },
            materials: "1 Livingmetal Ingot + 2 Sticks",
            description: "",
            specialNotes: ""
        },
        {
            name: "Livingmetal Hoe",
            id: "livingmetal_hoe",
            type: "tool",
            damage: 1,
            hearts: 0.5,
            speed: 4.0,
            durability: 375,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""]
                ]
            },
            materials: "2 Livingmetal Ingots + 2 Sticks",
            description: "",
            specialNotes: ""
        },
        {
            name: "Livingmetal Sword",
            id: "livingmetal_sword",
            type: "weapon",
            damage: 6,
            hearts: 3,
            speed: 6.4,
            durability: 375,
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", ""],
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", ""],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", ""]
                ]
            },
            materials: "2 Livingmetal Ingots + 1 Stick",
            description: "",
            specialNotes: ""
        }
    ];

    const livingmetalWeapons = [
        {
            name: "Livingmetal Big Sword",
            id: "livingmetal_big_sword",
            damage: 10,
            hearts: 5,
            speed: 1.2,
            durability: 750,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/giant_wooden_stick.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", ""]
                ]
            },
            materials: "6 Livingmetal Ingots + 1 Giant Livingmetal Handle",
            specialNotes: ""
        },
        {
            name: "Livingmetal Glaive",
            id: "livingmetal_glaive",
            damage: 5,
            hearts: 2.5,
            speed: 1.8,
            specialAttackMin: 4,
            specialAttackMax: 5,
            durability: 375,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", ""],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"]
                ]
            },
            materials: "5 Livingmetal Ingots + 2 Sticks",
            specialNotes: ""
        },
        {
            name: "Livingmetal Scythe",
            id: "livingmetal_scythe",
            damage: 4,
            hearts: 2,
            speed: 2.0,
            specialAttackMin: 3,
            specialAttackMax: 4,
            durability: 375,
            description: "",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "https://github.com/Starexify/BigSwordsR/raw/1.21-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/stick.png", "", ""]
                ]
            },
            materials: "3 Livingmetal Ingots + 3 Sticks",
            specialNotes: ""
        }
    ];

    const livingmetalShields = [
        {
            name: "Livingmetal Shield",
            id: "livingmetal_shield",
            durability: 375,
            perk: "Experience Infusion",
            perkDesc: "25% chance to heal player at cost of XP (1 heart per XP)",
            weakness: "Experience Drain",
            weaknessDesc: "20% chance to drain additional experience",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/leather.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png"],
                    ["", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/livingmetal_ingot.png", ""]
                ]
            },
            description: ""
        },
        {
            name: "Gilded Livingmetal Shield",
            id: "gilded_livingmetal_shield",
            durability: 937,
            perk: "Experience Infusion",
            perkDesc: "40% chance to heal player at cost of XP (1 heart per XP)",
            weakness: "Experience Drain",
            weaknessDesc: "15% chance to drain additional experience",
            craftingType: "crafting",
            recipe: {
                pattern: [
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", "https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/diamond_shield.png", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png"],
                    ["", "https://github.com/misode/mcmeta/raw/assets/assets/minecraft/textures/item/gold_ingot.png", ""]
                ]
            },
            description: ""
        },
    ];

    /* ---------------- Achievements Data ---------------- */
    const achievements = [
        {
            id: "1st_big_sword",
            title: "Big Swords",
            description: "Your very first Big Sword",
            icon: "wooden_big_sword",
            parent: null,
            type: "normal",
            requirements: "Pick up a Big Sword"
        },
        {
            id: "1st_glaive",
            title: "Glaives",
            description: "Your very first Glaive",
            icon: "wooden_glaive",
            parent: null,
            type: "normal",
            requirements: "Pick up a Glaive"
        },
        {
            id: "1st_shield",
            title: "Shields",
            description: "Your very first Shield",
            icon: "wooden_shield",
            parent: null,
            type: "normal",
            requirements: "Pick up a Shield (vanilla Shield does not count)"
        },
        {
            id: "1st_scythe",
            title: "Scythes",
            description: "Your very first Scythe",
            icon: "wooden_scythe",
            parent: null,
            type: "normal",
            requirements: "Pick up a Scythe"
        },
        {
            id: "soul",
            title: "Soul Harvesting",
            description: "Claim the essence of your first fallen foe",
            icon: "wiki_soul.gif",
            parent: null,
            type: "normal",
            requirements: "Pick up a Soul"
        },
        {
            id: "creep_a_block",
            title: "Creep-A-Block",
            description: "Use a Creep Ball on Soul Sand to create a Creep Block",
            icon: "wiki_creep_block.png",
            parent: null,
            type: "normal",
            requirements: "Right-click with a Creep Ball on Soul Sand to create a Creep Block"
        },
        {
            id: "till_creep_blocks",
            title: "Till Creep Blocks",
            description: "Use a Glaive on Creep Blocks to till them and start your biomass farm",
            icon: "wiki_creep_block.png",
            parent: "creep_a_block",
            type: "normal",
            requirements: "Right-click with a Glaive on Creep Block to `dig` and be able to plant biomass on it"
        },
        {
            id: "debris_big_sword",
            title: "Equipped with Debris",
            description: "Obtain the mighty Netherite Big Sword",
            icon: "netherite_big_sword",
            parent: "1st_big_sword",
            type: "challenge",
            requirements: "Pick up a Netherite Big Sword"
        },
        {
            id: "ender_big_sword",
            title: "Blade of the Void",
            description: "The Endermen last resort",
            icon: "ender_big_sword",
            parent: "debris_big_sword",
            type: "challenge",
            requirements: "Pick up a Ender Big Sword"
        },
        {
            id: "debris_glaive",
            title: "Equipped with Debris",
            description: "Obtain the imposing Netherite Glaive",
            icon: "netherite_glaive",
            parent: "1st_glaive",
            type: "challenge",
            requirements: "Pick up a Netherite Glaive"
        },
        {
            id: "debris_shield",
            title: "Protected with Debris",
            description: "Obtain the unyielding Netherite Shield",
            icon: "netherite_shield",
            parent: "1st_shield",
            type: "challenge",
            requirements: "Pick up a Netherite Shield"
        },
        {
            id: "ender_shield",
            title: "Protected with Debris",
            description: "Obtain the teleporting Ender Shield",
            icon: "ender_shield",
            parent: "debris_shield",
            type: "challenge",
            requirements: "Pick up a Ender Shield"
        },
        {
            id: "debris_scythe",
            title: "Harvest Enemies with Debris",
            description: "Obtain the unyielding Netherite Scythe",
            icon: "netherite_scythe",
            parent: "1st_scythe",
            type: "challenge",
            requirements: "Pick up a Netherite Scythe"
        },
        {
            id: "reaper_scythe",
            title: "Grim Reaper's Touch",
            description: "Reap them of their souls",
            icon: "soul_reaper",
            parent: "1st_scythe",
            type: "challenge",
            requirements: "Pick up a Soul Reaper"
        },
    ];



    /* ---------------- Render Changelog ---------------- */
    function renderChangelog() {
        const container = document.getElementById("changelog-container");
        if (!container) return;

        const colorMap = {
            alpha: "amber",
            beta: "blue",
            release: "green",
            hotfix: "red",
            port: "purple",
            bugfix: "orange"
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



    /* ---------------- Generate Heart Display Function ---------------- */
    function generateHeartDisplay(hearts) {
        const fullHearts = Math.floor(hearts);
        const hasHalfHeart = hearts % 1 !== 0;
        let heartHtml = '';

        for (let i = 0; i < fullHearts; i++) {
            heartHtml += '<img src="https://minecraft.wiki/images/Heart_%28icon%29.png?faf83" alt="heart" class="inline w-3 h-3">';
        }

        if (hasHalfHeart) {
            heartHtml += '<img src="https://minecraft.wiki/images/Half_Heart_%28icon%29.png?cb16e" alt="half heart" class="inline w-3 h-3">';
        }

        return heartHtml;
    }

    /* ---------------- Generate Recipe Display Function ---------------- */
    function generateRecipeDisplay(item) {
        // Helper for smithing
        function resolveSmithingItem(itemRef) {
            if (!itemRef) return null;
            if (itemRef.startsWith("http")) return itemRef;
            return `/src/assets/images/minecraft_assets/${itemRef}.png`;
        }

        // Check if item has multiple crafting types
        if (item.craftingTypes && Array.isArray(item.craftingTypes)) {
            let allRecipes = '';

            item.craftingTypes.forEach((type, index) => {
                if (index > 0) {
                    allRecipes += '<div class="my-4 border-t border-gray-300 dark:border-gray-700 pt-4"></div>';
                }

                if (type === "smithing") {
                    const smithingRecipe = item.recipes.smithing;
                    const template = resolveSmithingItem(smithingRecipe.template);
                    const base = resolveSmithingItem(smithingRecipe.base);
                    const addition = resolveSmithingItem(smithingRecipe.addition);

                    allRecipes += `
                    <p class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Smithing Recipe</p>
                    <div class="flex items-center justify-center">
                        <div class="flex items-center space-x-2">
                            <div class="recipe-slot">
                                ${template ? `
                                    <img src="${template}" class="w-full h-full image-render-pixel"
                                         onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                                ` : ""}
                            </div>
                            <span class="text-xl">+</span>
                            <div class="recipe-slot">
                                ${base ? `
                                    <img src="${base}" class="w-full h-full image-render-pixel"
                                         onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                                ` : ""}
                            </div>
                            <span class="text-xl">+</span>
                            <div class="recipe-slot">
                                ${addition ? `
                                    <img src="${addition}" class="w-full h-full image-render-pixel"
                                         onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                                ` : ""}
                            </div>
                        </div>
                        <div class="recipe-arrow mx-4">→</div>
                        <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                            <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${item.id}.png"
                                 class="w-12 h-12 image-render-pixel">
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
                            let itemUrl = "";

                            if (Array.isArray(cell)) {
                                itemUrl = wikiIcon(cell[0]);
                            } else if (cell) {
                                itemUrl = wikiIcon(cell);
                            }

                            allRecipes += '<div class="recipe-slot">';
                            if (itemUrl) {
                                allRecipes += `
                                <img src="${itemUrl}" class="w-full h-full image-render-pixel"
                                     onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                            `;
                            }
                            allRecipes += '</div>';
                        }
                    }

                    allRecipes += `
                        </div>
                        <div class="recipe-arrow">→</div>
                        <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                            <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${item.id}.png"
                                 class="w-12 h-12 image-render-pixel">
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
                                ${input ? `
                                    <img src="${input}" class="w-full h-full image-render-pixel"
                                         onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                                ` : ""}
                            </div>
                            <span class="text-xl">🔥</span>
                        </div>
                        <div class="recipe-arrow mx-4">→</div>
                        <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                            <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${item.id}.png"
                                 class="w-12 h-12 image-render-pixel">
                        </div>
                    </div>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">Smelted in Furnace${furnaceRecipe.experience ? ` (${furnaceRecipe.experience} XP)` : ''}</p>
                `;
                } else if (type === "none") {
                    const noneRecipe = item.recipes.none;

                    allRecipes += `
                    <div class="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                        <h5 class="font-semibold text-amber-700 dark:text-amber-400 mb-2">📜 How to Obtain</h5>
                        <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">
                            ${noneRecipe.description}
                        </p>
                        ${noneRecipe.link ? `
                            <button onclick="showPage('${noneRecipe.link}')" 
                                    class="inline-flex items-center px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-md font-medium transition-colors">
                                <span class="mr-1">📖</span>
                                Learn More
                            </button>
                        ` : ''}
                    </div>
                `;
                }
            });

            return allRecipes;
        }

        /* ---------- SINGLE SMITHING ---------- */
        if (item.craftingType === "smithing") {
            const template = resolveSmithingItem(item.recipe.template);
            const base = resolveSmithingItem(item.recipe.base);
            const addition = resolveSmithingItem(item.recipe.addition);

            return `
            <div class="flex items-center justify-center">
                <div class="flex items-center space-x-2">
                    <div class="recipe-slot">
                        ${template ? `
                            <img src="${template}" class="w-full h-full image-render-pixel"
                                 onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                        ` : ""}
                    </div>
                    <span class="text-xl">+</span>
                    <div class="recipe-slot">
                        ${base ? `
                            <img src="${base}" class="w-full h-full image-render-pixel"
                                 onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                        ` : ""}
                    </div>
                    <span class="text-xl">+</span>
                    <div class="recipe-slot">
                        ${addition ? `
                            <img src="${addition}" class="w-full h-full image-render-pixel"
                                 onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                        ` : ""}
                    </div>
                </div>
                <div class="recipe-arrow mx-4">→</div>
                <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                    <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${item.id}.png"
                         class="w-12 h-12 image-render-pixel">
                </div>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">Crafted in Smithing Table</p>
        `;
        }

        /* ---------- SINGLE FURNACE ---------- */
        if (item.craftingType === "furnace") {
            const input = wikiIcon(item.recipe.input);

            return `
            <div class="flex items-center justify-center">
                <div class="flex items-center space-x-2">
                    <div class="recipe-slot">
                        ${input ? `
                            <img src="${input}" class="w-full h-full image-render-pixel"
                                 onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                        ` : ""}
                    </div>
                    <span class="text-xl">🔥</span>
                </div>
                <div class="recipe-arrow mx-4">→</div>
                <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                    <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${item.id}.png"
                         class="w-12 h-12 image-render-pixel">
                </div>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">Smelted in Furnace${item.recipe.experience ? ` (${item.recipe.experience} XP)` : ''}</p>
        `;
        }

        /* ---------- SINGLE NONE (SPECIAL OBTAINING) ---------- */
        if (item.craftingType === "none") {
            return `
            <div class="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <h5 class="font-semibold text-amber-700 dark:text-amber-400 mb-2">📜 How to Obtain</h5>
                <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    ${item.recipe.description}
                </p>
                ${item.recipe.link ? `
                    <button onclick="showPage('${item.recipe.link}')" 
                            class="inline-flex items-center px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-md font-medium transition-colors">
                        <span class="mr-1">📖</span>
                        Learn More
                    </button>
                ` : ''}
            </div>
        `;
        }

        /* ---------- SINGLE CRAFTING ---------- */
        let recipeHtml = '<div class="flex items-center justify-center"><div class="recipe-grid">';

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const cell = item.recipe.pattern[row]?.[col];
                let itemUrl = "";

                if (Array.isArray(cell)) {
                    itemUrl = wikiIcon(cell[0]);
                } else if (cell) {
                    itemUrl = wikiIcon(cell);
                }

                recipeHtml += '<div class="recipe-slot">';
                if (itemUrl) {
                    recipeHtml += `
                    <img src="${itemUrl}" class="w-full h-full image-render-pixel"
                         onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                `;
                }
                recipeHtml += '</div>';
            }
        }

        recipeHtml += `
        </div>
        <div class="recipe-arrow">→</div>
        <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
            <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${item.id}.png"
                 class="w-12 h-12 image-render-pixel">
        </div>
    </div>
    `;

        return recipeHtml;
    }

    /* ---------------- Events Data ---------------- */
    const eventsData = {
        soulReaper: {
            name: "Soul Reaper",
            id: "soul_reaper",
            type: "weapon",
            damage: 8,
            hearts: 4,
            speed: 1.0,
            specialAttackMin: 7,
            specialAttackMax: 8,
            durability: 500,
            craftingType: "none",
            recipe: {
                description: "This exclusive scythe can only be obtained during the Halloween Event (October 31st) by hunting and killing Skeletons. The more skeletons you defeat, the higher your chance of obtaining this rare weapon.",
                link: "" // No link needed since we're already on events page
            },
            materials: "Halloween Event Exclusive - Skeleton Drops",
            description: "An exclusive Halloween scythe with enhanced reaping power.",
            specialNotes: "Only obtainable on October 31st by killing Skeletons during the Halloween Event."
        }
    };

    /* ---------------- Render Handles ---------------- */
    function renderHandles() {
        const container = document.getElementById("handles-list");
        if (!container) return;

        handles.forEach(handle => {
            const card = document.createElement("div");
            card.className =
                "bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4";

            card.innerHTML = `
            <div class="flex items-center mb-3">
                <img
                    src="${wikiIcon(handle.icon)}"
                    class="w-12 h-12 image-render-pixel mr-3"
                    onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')"
                >
                <div>
                    <h5 class="font-semibold text-gray-800 dark:text-gray-200">
                        ${handle.name}
                    </h5>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        ${handle.description}
                    </p>
                </div>
            </div>

            <div class="recipe-grid">
                ${handle.recipe.pattern.flat().map(cell => `
                    <div class="recipe-slot">
                        ${cell ? `
                            <img
                                src="${wikiIcon(cell)}"
                                class="w-full h-full image-render-pixel"
                                onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')"
                            >
                        ` : ""}
                    </div>
                `).join("")}
            </div>
        `;

            container.appendChild(card);
        });
    }

    /* ---------------- Render Upgrades ---------------- */
    function renderUpgrades() {
        const container = document.getElementById("upgrades-list");
        if (!container) return;

        container.innerHTML = "";

        upgrades.forEach(upgrade => {
            const box = document.createElement("div");
            box.className =
                "bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4 space-y-4";

            let html = `
        <div class="flex items-center gap-4">
            <img
                src="${wikiIcon(upgrade.image)}"
                class="w-12 h-12 image-render-pixel"
                onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')"
            >
            <div>
                <h5 class="font-semibold text-gray-800 dark:text-gray-200">
                    ${upgrade.name}
                </h5>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Found in <strong>${upgrade.location}</strong><br>
                    Spawn chance: <strong>${upgrade.chance}</strong>
                </p>
            </div>
        </div>
        `;

            if (upgrade.duplication) {
                html += `
            <div class="pt-3 border-t border-gray-300 dark:border-gray-700">
                <p class="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Duplication Recipe
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    ${upgrade.duplication.description}
                </p>

                <div class="flex items-center justify-center">
                    <div class="recipe-grid">
                        ${upgrade.duplication.recipe.pattern.flat().map(cell => `
                            <div class="recipe-slot">
                                ${cell ? `
                                    <img
                                        src="${wikiIcon(cell)}"
                                        class="w-full h-full image-render-pixel"
                                        onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')"
                                    >
                                ` : ""}
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
            `;
            }

            box.innerHTML = html;
            container.appendChild(box);
        });
    }

    /* ---------------- Render Swords Statistics Table ---------------- */
    function renderStatsTable() {
        const tbody = document.getElementById("stats-table-body");
        if (!tbody) return;

        tbody.innerHTML = "";

        swords.forEach(sword => {
            const row = document.createElement("tr");
            row.className = "odd:bg-gray-50 dark:odd:bg-gray-900";

            row.innerHTML = `
            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 flex items-center">
                <img
                    src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${sword.id}.png"
                    alt="${sword.name}"
                    class="w-4 h-4 mr-2 image-render-pixel"
                >
                ${sword.name}
            </td>

            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center">
                ${sword.damage}
                ${generateHeartDisplay(sword.hearts)}
                × ${sword.hearts}
            </td>

            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center">
                ${sword.speed}
            </td>

            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center">
                ${sword.durability}
            </td>
        `;

            tbody.appendChild(row);
        });
    }

    /* ---------------- Render Glaive Statistics Table ---------------- */
    function renderGlaiveStatsTable() {
        const tbody = document.getElementById("glaive-stats-table-body");
        if (!tbody) return;

        tbody.innerHTML = "";

        glaives.forEach(glaive => {
            const row = document.createElement("tr");
            row.className = "odd:bg-gray-50 dark:odd:bg-gray-900";

            row.innerHTML = `
            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 flex items-center">
                <img
                    src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${glaive.id}.png"
                    alt="${glaive.name}"
                    class="w-4 h-4 mr-2 image-render-pixel"
                >
                ${glaive.name}
            </td>

            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center">
                ${glaive.damage}
                ${generateHeartDisplay(glaive.hearts)}
                × ${glaive.hearts}
            </td>

            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center">
                ${glaive.speed}
            </td>

            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center text-purple-600 dark:text-purple-400 font-semibold">
                ${glaive.specialAttackMin} - ${glaive.specialAttackMax}
            </td>

            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center">
                ${glaive.durability}
            </td>
        `;

            tbody.appendChild(row);
        });
    }

    /* ---------------- Render Scythe Statistics Table ---------------- */
    function renderScytheStatsTable() {
        const tbody = document.getElementById("scythe-stats-table-body");
        if (!tbody) return;

        tbody.innerHTML = "";

        scythes.forEach(scythe => {
            const row = document.createElement("tr");
            row.className = "odd:bg-gray-50 dark:odd:bg-gray-900";

            row.innerHTML = `
            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 flex items-center">
                <img
                    src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${scythe.id}.png"
                    alt="${scythe.name}"
                    class="w-4 h-4 mr-2 image-render-pixel"
                >
                ${scythe.name}
            </td>

            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center">
                ${scythe.damage}
                ${generateHeartDisplay(scythe.hearts)}
                × ${scythe.hearts}
            </td>

            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center">
                ${scythe.speed}
            </td>

            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center text-purple-600 dark:text-purple-400 font-semibold">
                ${scythe.specialAttackMin} - ${scythe.specialAttackMax}
            </td>

            <td class="border-b border-gray-200 dark:border-gray-700 px-3 py-2 text-center">
                ${scythe.durability}
            </td>
        `;

            tbody.appendChild(row);
        });
    }

    /* ---------------- Render Sword Variants ---------------- */
    function renderSwordVariants() {
        const grid = document.getElementById("sword-variants-grid");
        if (!grid) return;

        grid.innerHTML = swords.map(sword => `
        <a href="#sword-${sword.id}"
           class="text-center block cursor-pointer">
            <img
                src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${sword.id}.png"
                alt="${sword.name}"
                class="w-12 h-12 mx-auto image-render-pixel border p-1
                       bg-gray-100 dark:bg-gray-800
                       hover:scale-105 transition">
            <span class="text-xs text-gray-600 dark:text-gray-400">
                ${sword.name.replace(" Big Sword", "")}
            </span>
        </a>
    `).join("");
    }

    /* ---------------- Render Shield Variants ---------------- */
    function renderShieldVariants() {
        const grid = document.getElementById("shield-variants-grid");
        if (!grid) return;

        grid.innerHTML = shields.map(shield => `
        <a href="#shield-${shield.id}"
           class="text-center block cursor-pointer">
            <img
                src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${shield.id}.png"
                alt="${shield.name}"
                class="w-12 h-12 mx-auto image-render-pixel border p-1
                       bg-gray-100 dark:bg-gray-800
                       hover:scale-105 transition">
            <span class="text-xs text-gray-600 dark:text-gray-400">
                ${shield.name}
            </span>
        </a>
    `).join("");
    }

    /* ---------------- Render Glaive Variants ---------------- */
    function renderGlaiveVariants() {
        const grid = document.getElementById("glaive-variants-grid");
        if (!grid) return;

        grid.innerHTML = glaives.map(glaive => `
        <a href="#glaive-${glaive.id}"
           class="text-center block cursor-pointer">
            <img
                src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${glaive.id}.png"
                alt="${glaive.name}"
                class="w-12 h-12 mx-auto image-render-pixel border p-1
                       bg-gray-100 dark:bg-gray-800
                       hover:scale-105 transition">
            <span class="text-xs text-gray-600 dark:text-gray-400">
                ${glaive.name.replace(" Glaive", "")}
            </span>
        </a>
    `).join("");
    }

    /* ---------------- Render Scythe Variants ---------------- */
    function renderScytheVariants() {
        const grid = document.getElementById("scythe-variants-grid");
        if (!grid) return;

        grid.innerHTML = scythes.map(scythe => `
        <a href="#scythe-${scythe.id}"
           class="text-center block cursor-pointer">
            <img
                src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${scythe.id}.png"
                alt="${scythe.name}"
                class="w-12 h-12 mx-auto image-render-pixel border p-1
                       bg-gray-100 dark:bg-gray-800
                       hover:scale-105 transition">
            <span class="text-xs text-gray-600 dark:text-gray-400">
                ${scythe.name.replace(" Scythe", "")}
            </span>
        </a>
    `).join("");
    }

    /* ---------------- Render Biomass Page ---------------- */
    function renderBiomassPage() {
        // Blood Vial Recipe
        const bloodVialContainer = document.getElementById("blood-vial-recipe");
        if (bloodVialContainer) {
            bloodVialContainer.innerHTML = `
            <div class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 inline-block">
                <p class="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Blood Vial Crafting</p>
                ${generateRecipeDisplay(biomassData.bloodVial)}
            </div>
        `;
        }

        // Blood Collection GIF
        const bloodGifContainer = document.getElementById("blood-collection-gif");
        if (bloodGifContainer) {
            bloodGifContainer.innerHTML = `
            <img src="https://github.com/Starexify/Starexify/raw/main/resources/Minecraft/BigSwords/wiki/blood_vial_store.gif?raw=true" 
                 alt="Blood Collection Process" 
                 class="max-w-full h-auto rounded-lg border border-gray-300 dark:border-gray-600">
            <p class="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                Collecting blood with a Glaive special attack
            </p>
        `;
        }

        // Biomass Seeds Recipe
        const seedsContainer = document.getElementById("biomass-seeds-recipe");
        if (seedsContainer) {
            seedsContainer.innerHTML = `
            <div class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 inline-block">
                ${generateRecipeDisplay(biomassData.biomassSeed)}
            </div>
        `;
        }

        // Creep Ball Recipe
        const creepBallContainer = document.getElementById("creep-ball-recipe");
        if (creepBallContainer) {
            creepBallContainer.innerHTML = `
            <div class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 inline-block">
                ${generateRecipeDisplay(biomassData.creepBall)}
            </div>
        `;
        }

        // Creep Block Recipe
        const creepBlockContainer = document.getElementById("creep-block-recipe");
        if (creepBlockContainer) {
            creepBlockContainer.innerHTML = `
            <div class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 inline-block">
                <p class="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Creep Block Crafting</p>
                ${generateRecipeDisplay(biomassData.creepBlock)}
            </div>
        `;
        }

        // Biomass Farming GIF
        const farmingGifContainer = document.getElementById("biomass-farming-gif");
        if (farmingGifContainer) {
            farmingGifContainer.innerHTML = `
            <img src="https://github.com/Starexify/Starexify/raw/main/resources/Minecraft/BigSwords/wiki/biomass_farming.gif?raw=true" 
                 alt="Biomass Farming Process" 
                 class="max-w-full h-auto rounded-lg border border-gray-300 dark:border-gray-600">
            <p class="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                Complete biomass farming process from start to finish
            </p>
        `;
        }

        function generateLegacyRecipe(item, itemId) {
            let recipeHtml = '<div class="flex items-center justify-center"><div class="recipe-grid">';

            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    const cell = item.legacyRecipe.pattern[row]?.[col];
                    let itemUrl = "";

                    if (Array.isArray(cell)) {
                        itemUrl = wikiIcon(cell[0]);
                    } else if (cell) {
                        itemUrl = wikiIcon(cell);
                    }

                    recipeHtml += '<div class="recipe-slot">';
                    if (itemUrl) {
                        recipeHtml += `
            <img src="${itemUrl}" class="w-full h-full image-render-pixel"
                 onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
        `;
                    }
                    recipeHtml += '</div>';
                }
            }

            // Use legacyId if it exists, otherwise use the regular id
            const outputId = item.legacyId || itemId;

            // Helper function to resolve item URL
            function resolveItemUrl(id) {
                if (!id) return null;

                // If starts with "wiki_", use local assets
                if (id.startsWith("wiki_")) {
                    const fileName = id.substring(5); // Remove "wiki_"
                    return `/src/assets/images/minecraft_assets/${fileName}`;
                }

                // If full URL, return as is
                if (id.startsWith("http")) {
                    return id;
                }

                // Otherwise use GitHub with .png fallback to .gif
                return `https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${id}.png`;
            }

            const outputUrl = resolveItemUrl(outputId);

            recipeHtml += `
    </div>
    <div class="recipe-arrow">→</div>
    <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
        <img src="${outputUrl}"
             class="w-12 h-12 image-render-pixel"
             onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
    </div>
</div>
`;

            return recipeHtml;
        }

        // Legacy Recipes GIF
        const legacyGifContainer = document.getElementById("legacy-recipes-gif");
        if (legacyGifContainer) {
            legacyGifContainer.innerHTML = `
            <img src="https://github.com/Starexify/Starexify/raw/main/resources/BigSwordsR/biomass_example.gif?raw=true" 
                 alt="Legacy Crafting Recipes" 
                 class="max-w-full h-auto rounded-lg border border-gray-300 dark:border-gray-600">
            <p class="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                Legacy crafting recipes (older versions only)
            </p>
        `;
        }

        // Legacy Biomass Seeds
        const legacySeedsContainer = document.getElementById("legacy-biomass-seeds");
        if (legacySeedsContainer) {
            legacySeedsContainer.innerHTML = `
            <div class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-3">Legacy Biomass Seed</h4>
                ${generateLegacyRecipe(biomassData.biomassSeed, "biomass_seed")}
            </div>
        `;
        }

        // Legacy Creep Ball
        const legacyCreepContainer = document.getElementById("legacy-creep-ball");
        if (legacyCreepContainer) {
            legacyCreepContainer.innerHTML = `
            <div class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-3">Legacy Creep Ball</h4>
                ${generateLegacyRecipe(biomassData.creepBall, "creep_ball")}
            </div>
        `;
        }

        // Render Individual Equipment
        renderIndividualBiomassArmor();
        renderIndividualBiomassTools();
        renderIndividualBiomassWeapons();
        renderIndividualBiomassShields();
    }

    /* ---------------- Render Livingmetal Page ---------------- */
    function renderLivingmetalPage() {
        // Soul Display
        const soulDisplay = document.getElementById("soul-display");
        if (soulDisplay) {
            soulDisplay.innerHTML = `
            <div class="text-center">
                <img src="/src/assets/images/minecraft_assets/soul.png" 
                     alt="Soul" 
                     class="w-24 h-24 mx-auto image-render-pixel"
                     onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                <p class="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-2">Soul</p>
                <p class="text-xs text-gray-600 dark:text-gray-400">${livingmetalData.soul.description}</p>
            </div>
        `;
        }

        // Livingmetal Ingot Recipe
        const ingotContainer = document.getElementById("livingmetal-ingot-recipe");
        if (ingotContainer) {
            ingotContainer.innerHTML = `
            <div class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 inline-block">
                <p class="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Livingmetal Ingot Crafting</p>
                ${generateRecipeDisplay(livingmetalData.livingmetalIngot)}
            </div>
        `;
        }
    }

    /* ---------------- Render Events Page ---------------- */
    function renderEventsPage() {
        const soulReaperContainer = document.getElementById("soul-reaper-details");
        if (!soulReaperContainer) return;

        const item = eventsData.soulReaper;

        soulReaperContainer.innerHTML = `
        <!-- Item Header -->
        <div class="bg-purple-50 dark:bg-purple-900/30 px-6 py-4 border-b border-gray-300 dark:border-gray-700">
            <div class="flex items-center">
                <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${item.id}.png"
                     alt="${item.name}" 
                     class="w-16 h-16 mr-4 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${item.name}</h3>
                    <p class="text-gray-600 dark:text-gray-400">${item.description}</p>
                </div>
            </div>
        </div>

        <!-- Item Content -->
        <div class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
                <!-- Stats Table -->
                <div>
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Statistics</h4>
                    <table class="w-full text-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                        <tbody>
                            <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                <th class="text-left px-3 py-2 font-medium">Attack Damage</th>
                                <td class="px-3 py-2 text-red-600 font-semibold">
                                    ${item.damage} ${generateHeartDisplay(item.hearts)} × ${item.hearts}
                                </td>
                            </tr>
                            <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                <th class="text-left px-3 py-2 font-medium">Attack Speed</th>
                                <td class="px-3 py-2 text-blue-600 font-semibold">${item.speed}</td>
                            </tr>
                            <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                <th class="text-left px-3 py-2 font-medium">Special Attack</th>
                                <td class="px-3 py-2 text-purple-600 font-semibold">${item.specialAttackMin} - ${item.specialAttackMax}</td>
                            </tr>
                            <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                <th class="text-left px-3 py-2 font-medium">Durability</th>
                                <td class="px-3 py-2 font-semibold">${item.durability}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- How to Obtain -->
                <div>
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">How to Obtain</h4>
                    <div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <strong>Source:</strong> ${item.materials}
                        </p>
                        ${generateRecipeDisplay(item)}
                    </div>
                </div>
            </div>

            <!-- Special Notes -->
            ${item.specialNotes ? `
            <div class="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Special Properties</h4>
                <div class="bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <p class="text-gray-700 dark:text-gray-300">${item.specialNotes}</p>
                </div>
            </div>
            ` : ''}
        </div>
    `;
    }

    /* ---------------- Generate Legacy Recipe Display ---------------- */
    function generateLegacyRecipe(item, itemId) {
        let recipeHtml = '<div class="flex items-center justify-center"><div class="recipe-grid">';

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const cell = item.legacyRecipe.pattern[row]?.[col];
                let itemUrl = "";

                if (Array.isArray(cell)) {
                    itemUrl = wikiIcon(cell[0]);
                } else if (cell) {
                    itemUrl = wikiIcon(cell);
                }

                recipeHtml += '<div class="recipe-slot">';
                if (itemUrl) {
                    recipeHtml += `
                    <img src="${itemUrl}" class="w-full h-full image-render-pixel"
                         onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                `;
                }
                recipeHtml += '</div>';
            }
        }

        recipeHtml += `
        </div>
        <div class="recipe-arrow">→</div>
        <div class="w-16 h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
            <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${itemId}.png"
                 class="w-12 h-12 image-render-pixel">
        </div>
    </div>
    `;

        return recipeHtml;
    }


    /* ---------------- Render Shields Perks & Weaknesses ---------------- */
    function renderShieldPerks() {
        const container = document.getElementById("shield-perks-weaknesses");
        if (!container) return;

        container.innerHTML = shields.map(shield => `
        <div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
            <h4 class="font-semibold mb-2">${shield.name}</h4>
            <p class="text-green-600 dark:text-green-400">
                <strong>Perk:</strong> ${shield.perk} – ${shield.perkDesc}
            </p>
            <p class="text-red-600 dark:text-red-400">
                <strong>Weakness:</strong> ${shield.weakness} – ${shield.weaknessDesc}
            </p>
        </div>
    `).join("");
    }

    /* ---------------- Populate Individual Sword Sections ---------------- */
    const swordDetailsContainer = document.getElementById("sword-details");
    if (swordDetailsContainer) {
        swords.forEach(sword => {
            const section = document.createElement("div");
            section.className = "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden";
            section.id = `sword-${sword.id}`;

            section.innerHTML = `
                <!-- Sword Header -->
                <div class="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                    <div class="flex items-center">
                        <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${sword.id}.png" 
                             alt="${sword.name}" class="w-16 h-16 mr-4 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${sword.name}</h3>
                            <p class="text-gray-600 dark:text-gray-400">${sword.description}</p>
                        </div>
                    </div>
                </div>

                <!-- Sword Content -->
                <div class="p-6">
                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Stats Table -->
                        <div>
                            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Statistics</h4>
                            <table class="w-full text-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                                <tbody>
                                    <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                        <th class="text-left px-3 py-2 font-medium">Attack Damage</th>
                                        <td class="px-3 py-2 text-red-600 font-semibold">
                                            ${sword.damage} ${generateHeartDisplay(sword.hearts)} × ${sword.hearts}
                                        </td>
                                    </tr>
                                    <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                        <th class="text-left px-3 py-2 font-medium">Attack Speed</th>
                                        <td class="px-3 py-2 text-blue-600 font-semibold">${sword.speed}</td>
                                    </tr>
                                    <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                        <th class="text-left px-3 py-2 font-medium">Durability</th>
                                        <td class="px-3 py-2 font-semibold">${sword.durability}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Crafting Recipe -->
                        <div>
                            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                ${sword.craftingType === "smithing" ? "Smithing Recipe" : "Crafting Recipe"}
                            </h4>
                            <div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                                <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    <strong>Materials:</strong> ${sword.materials}
                                </p>
                                ${generateRecipeDisplay(sword)}
                            </div>
                        </div>
                    </div>

                    <!-- Additional Information -->
                    ${sword.specialNotes ? `
                    <div class="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Special Properties</h4>
                        <div class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                            <p class="text-gray-700 dark:text-gray-300">${sword.specialNotes}</p>
                        </div>
                    </div>
                    ` : ''}
                </div>
            `;

            swordDetailsContainer.appendChild(section);
        });
    }

    /* ---------------- Render Individual Shields ---------------- */
    function renderIndividualShields() {
        const container = document.getElementById("shield-details");
        if (!container) return;

        container.innerHTML = shields.map(shield => `
        <div id="shield-${shield.id}" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <!-- Shield Header -->
            <div class="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                <div class="flex items-center">
                    <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${shield.id}.png"
                         alt="${shield.name}" 
                         class="w-16 h-16 mr-4 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${shield.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400">${shield.description}</p>
                    </div>
                </div>
            </div>

            <!-- Shield Content -->
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Stats Table -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Statistics</h4>
                        <table class="w-full text-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                            <tbody>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Durability</th>
                                    <td class="px-3 py-2 font-semibold">${shield.durability}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Crafting Recipe -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Crafting Recipe</h4>
                        <div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                            ${generateRecipeDisplay(shield)}
                        </div>
                    </div>
                </div>

                <!-- Perks & Weaknesses -->
                <div class="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Perks & Weaknesses</h4>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
                            <p class="text-green-700 dark:text-green-400">
                                <strong>⚡ Perk: ${shield.perk}</strong><br>
                                <span class="text-sm">${shield.perkDesc}</span>
                            </p>
                        </div>
                        <div class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
                            <p class="text-red-700 dark:text-red-400">
                                <strong>⚠ Weakness: ${shield.weakness}</strong><br>
                                <span class="text-sm">${shield.weaknessDesc}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Extra Ability (only shown if exists) -->
                ${shield.extraAbility ? `
                <div class="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Extra Ability</h4>
                    <div class="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                        <p class="text-gray-700 dark:text-gray-300">${shield.extraAbility}</p>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `).join("");
    }

    /* ---------------- Render Individual Glaives ---------------- */
    function renderIndividualGlaives() {
        const container = document.getElementById("glaive-details");
        if (!container) return;

        container.innerHTML = glaives.map(glaive => `
        <div id="glaive-${glaive.id}" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <!-- Glaive Header -->
            <div class="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                <div class="flex items-center">
                    <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${glaive.id}.png"
                         alt="${glaive.name}" 
                         class="w-16 h-16 mr-4 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${glaive.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400">${glaive.description}</p>
                    </div>
                </div>
            </div>

            <!-- Glaive Content -->
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Stats Table -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Statistics</h4>
                        <table class="w-full text-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                            <tbody>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Attack Damage</th>
                                    <td class="px-3 py-2 text-red-600 font-semibold">
                                        ${glaive.damage} ${generateHeartDisplay(glaive.hearts)} × ${glaive.hearts}
                                    </td>
                                </tr>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Attack Speed</th>
                                    <td class="px-3 py-2 text-blue-600 font-semibold">${glaive.speed}</td>
                                </tr>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Special Attack</th>
                                    <td class="px-3 py-2 text-purple-600 font-semibold">${glaive.specialAttackMin} - ${glaive.specialAttackMax}</td>
                                </tr>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Durability</th>
                                    <td class="px-3 py-2 font-semibold">${glaive.durability}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Crafting Recipe -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            ${glaive.craftingType === "smithing" ? "Smithing Recipe" : "Crafting Recipe"}
                        </h4>
                        <div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <strong>Materials:</strong> ${glaive.materials}
                            </p>
                            ${generateRecipeDisplay(glaive)}
                        </div>
                    </div>
                </div>

                <!-- Additional Information -->
                ${glaive.specialNotes ? `
                <div class="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Special Properties</h4>
                    <div class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <p class="text-gray-700 dark:text-gray-300">${glaive.specialNotes}</p>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `).join("");
    }

    /* ---------------- Render Individual Scythes ---------------- */
    function renderIndividualScythes() {
        const container = document.getElementById("scythe-details");
        if (!container) return;

        container.innerHTML = scythes.map(scythe => `
        <div id="scythe-${scythe.id}" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <!-- Scythe Header -->
            <div class="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                <div class="flex items-center">
                    <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${scythe.id}.png"
                         alt="${scythe.name}" 
                         class="w-16 h-16 mr-4 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${scythe.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400">${scythe.description}</p>
                    </div>
                </div>
            </div>

            <!-- Scythe Content -->
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Stats Table -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Statistics</h4>
                        <table class="w-full text-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                            <tbody>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Attack Damage</th>
                                    <td class="px-3 py-2 text-red-600 font-semibold">
                                        ${scythe.damage} ${generateHeartDisplay(scythe.hearts)} × ${scythe.hearts}
                                    </td>
                                </tr>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Attack Speed</th>
                                    <td class="px-3 py-2 text-blue-600 font-semibold">${scythe.speed}</td>
                                </tr>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Special Attack</th>
                                    <td class="px-3 py-2 text-purple-600 font-semibold">${scythe.specialAttackMin} - ${scythe.specialAttackMax}</td>
                                </tr>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Durability</th>
                                    <td class="px-3 py-2 font-semibold">${scythe.durability}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Crafting Recipe -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            ${scythe.craftingType === "smithing" ? "Smithing Recipe" : "Crafting Recipe"}
                        </h4>
                        <div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <strong>Materials:</strong> ${scythe.materials}
                            </p>
                            ${generateRecipeDisplay(scythe)}
                        </div>
                    </div>
                </div>

                <!-- Additional Information -->
                ${scythe.specialNotes ? `
                <div class="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Special Properties</h4>
                    <div class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <p class="text-gray-700 dark:text-gray-300">${scythe.specialNotes}</p>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `).join("");
    }

    /* ---------------- Render Individual Biomass Armor ---------------- */
    function renderIndividualBiomassArmor() {
        const container = document.getElementById("biomass-armor-details");
        if (!container) return;

        container.innerHTML = biomassArmor.map(item => `
        <div id="biomass-${item.id}" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <!-- Item Header -->
            <div class="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                <div class="flex items-center">
                    <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${item.id}.png"
                         alt="${item.name}" 
                         class="w-16 h-16 mr-4 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${item.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400">${item.description}</p>
                    </div>
                </div>
            </div>

            <!-- Item Content -->
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Stats Table -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Statistics</h4>
                        <table class="w-full text-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                            <tbody>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Armor</th>
                                    <td class="px-3 py-2 text-blue-600 font-semibold">${item.armor}</td>
                                </tr>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Armor Toughness</th>
                                    <td class="px-3 py-2 font-semibold">${item.toughness}</td>
                                </tr>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Durability</th>
                                    <td class="px-3 py-2 font-semibold">${item.durability}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Crafting Recipe -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Crafting Recipe</h4>
                        <div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <strong>Materials:</strong> ${item.materials}
                            </p>
                            ${generateRecipeDisplay(item)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
    }

    /* ---------------- Render Individual Biomass Tools ---------------- */
    function renderIndividualBiomassTools() {
        const container = document.getElementById("biomass-tools-details");
        if (!container) return;

        container.innerHTML = biomassTools.map(item => `
        <div id="biomass-${item.id}" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <!-- Item Header -->
            <div class="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                <div class="flex items-center">
                    <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${item.id}.png"
                         alt="${item.name}" 
                         class="w-16 h-16 mr-4 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${item.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400">${item.description}</p>
                    </div>
                </div>
            </div>

            <!-- Item Content -->
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Stats Table -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Statistics</h4>
                        <table class="w-full text-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                            <tbody>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Attack Damage</th>
                                    <td class="px-3 py-2 text-red-600 font-semibold">
                                        ${item.damage} ${generateHeartDisplay(item.hearts)} × ${item.hearts}
                                    </td>
                                </tr>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Attack Speed</th>
                                    <td class="px-3 py-2 text-blue-600 font-semibold">${item.speed}</td>
                                </tr>
                                ${item.miningLevel ? `
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Mining Level</th>
                                    <td class="px-3 py-2 font-semibold">${item.miningLevel}</td>
                                </tr>
                                ` : ''}
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Durability</th>
                                    <td class="px-3 py-2 font-semibold">${item.durability}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Crafting Recipe -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Crafting Recipe</h4>
                        <div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <strong>Materials:</strong> ${item.materials}
                            </p>
                            ${generateRecipeDisplay(item)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
    }

    /* ---------------- Render Individual Biomass Weapons ---------------- */
    function renderIndividualBiomassWeapons() {
        const container = document.getElementById("biomass-weapons-details");
        if (!container) return;

        container.innerHTML = biomassWeapons.map(item => `
        <div id="biomass-${item.id}" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <!-- Item Header -->
            <div class="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                <div class="flex items-center">
                    <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${item.id}.png"
                         alt="${item.name}" 
                         class="w-16 h-16 mr-4 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${item.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400">${item.description}</p>
                    </div>
                </div>
            </div>

            <!-- Item Content -->
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Stats Table -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Statistics</h4>
                        <table class="w-full text-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                            <tbody>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Attack Damage</th>
                                    <td class="px-3 py-2 text-red-600 font-semibold">
                                        ${item.damage} ${generateHeartDisplay(item.hearts)} × ${item.hearts}
                                    </td>
                                </tr>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Attack Speed</th>
                                    <td class="px-3 py-2 text-blue-600 font-semibold">${item.speed}</td>
                                </tr>
                                ${item.specialAttackMin ? `
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Special Attack</th>
                                    <td class="px-3 py-2 text-purple-600 font-semibold">${item.specialAttackMin} - ${item.specialAttackMax}</td>
                                </tr>
                                ` : ''}
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Durability</th>
                                    <td class="px-3 py-2 font-semibold">${item.durability}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Crafting Recipe -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Crafting Recipe</h4>
                        <div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <strong>Materials:</strong> ${item.materials}
                            </p>
                            ${generateRecipeDisplay(item)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
    }

    /* ---------------- Render Individual Biomass Shields ---------------- */
    function renderIndividualBiomassShields() {
        const container = document.getElementById("biomass-shield-details");
        if (!container) return;

        container.innerHTML = biomassShields.map(shield => `
        <div id="biomass-${shield.id}" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <!-- Shield Header -->
            <div class="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                <div class="flex items-center">
                    <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${shield.id}.png"
                         alt="${shield.name}" 
                         class="w-16 h-16 mr-4 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${shield.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400">${shield.description}</p>
                    </div>
                </div>
            </div>

            <!-- Shield Content -->
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Stats Table -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Statistics</h4>
                        <table class="w-full text-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                            <tbody>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Durability</th>
                                    <td class="px-3 py-2 font-semibold">${shield.durability}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Crafting Recipe -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Crafting Recipe</h4>
                        <div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                            ${generateRecipeDisplay(shield)}
                        </div>
                    </div>
                </div>

                <!-- Perks & Weaknesses -->
                <div class="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Perks & Weaknesses</h4>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
                            <p class="text-green-700 dark:text-green-400">
                                <strong>⚡ Perk: ${shield.perk}</strong><br>
                                <span class="text-sm">${shield.perkDesc}</span>
                            </p>
                        </div>
                        <div class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
                            <p class="text-red-700 dark:text-red-400">
                                <strong>⚠ Weakness: ${shield.weakness}</strong><br>
                                <span class="text-sm">${shield.weaknessDesc}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Extra Ability (only shown if exists) -->
                ${shield.extraAbility ? `
                <div class="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Extra Ability</h4>
                    <div class="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                        <p class="text-gray-700 dark:text-gray-300">${shield.extraAbility}</p>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `).join("");
    }

    /* ---------------- Render Individual Livingmetal Armor ---------------- */
    function renderIndividualLivingmetalArmor() {
        const container = document.getElementById("livingmetal-armor-details");
        if (!container) return;

        container.innerHTML = livingmetalArmor.map(item => `
        <div id="livingmetal-${item.id}" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <!-- Item Header -->
            <div class="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                <div class="flex items-center">
                    <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${item.id}.png"
                         alt="${item.name}" 
                         class="w-16 h-16 mr-4 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${item.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400">${item.description}</p>
                    </div>
                </div>
            </div>

            <!-- Item Content -->
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Stats Table -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Statistics</h4>
                        <table class="w-full text-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                            <tbody>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Armor</th>
                                    <td class="px-3 py-2 text-blue-600 font-semibold">${item.armor}</td>
                                </tr>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Durability</th>
                                    <td class="px-3 py-2 font-semibold">${item.durability}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Crafting Recipe -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Crafting Recipe</h4>
                        <div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <strong>Materials:</strong> ${item.materials}
                            </p>
                            ${generateRecipeDisplay(item)}
                        </div>
                    </div>
                </div>

                ${item.specialNotes ? `
                <div class="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Special Properties</h4>
                    <div class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <p class="text-gray-700 dark:text-gray-300">${item.specialNotes}</p>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `).join("");
    }

    /* ---------------- Render Individual Livingmetal Tools ---------------- */
    function renderIndividualLivingmetalTools() {
        const container = document.getElementById("livingmetal-tools-details");
        if (!container) return;

        container.innerHTML = livingmetalTools.map(item => `
        <div id="livingmetal-${item.id}" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <!-- Item Header -->
            <div class="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                <div class="flex items-center">
                    <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${item.id}.png"
                         alt="${item.name}" 
                         class="w-16 h-16 mr-4 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${item.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400">${item.description}</p>
                    </div>
                </div>
            </div>

            <!-- Item Content -->
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Stats Table -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Statistics</h4>
                        <table class="w-full text-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                            <tbody>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Attack Damage</th>
                                    <td class="px-3 py-2 text-red-600 font-semibold">
                                        ${item.damage} ${generateHeartDisplay(item.hearts)} × ${item.hearts}
                                    </td>
                                </tr>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Attack Speed</th>
                                    <td class="px-3 py-2 text-blue-600 font-semibold">${item.speed}</td>
                                </tr>
                                ${item.miningLevel ? `
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Mining Level</th>
                                    <td class="px-3 py-2 font-semibold">${item.miningLevel}</td>
                                </tr>
                                ` : ''}
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Durability</th>
                                    <td class="px-3 py-2 font-semibold">${item.durability}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Crafting Recipe -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Crafting Recipe</h4>
                        <div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <strong>Materials:</strong> ${item.materials}
                            </p>
                            ${generateRecipeDisplay(item)}
                        </div>
                    </div>
                </div>

                ${item.specialNotes ? `
                <div class="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Special Properties</h4>
                    <div class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <p class="text-gray-700 dark:text-gray-300">${item.specialNotes}</p>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `).join("");
    }

    /* ---------------- Render Individual Livingmetal Weapons ---------------- */
    function renderIndividualLivingmetalWeapons() {
        const container = document.getElementById("livingmetal-weapons-details");
        if (!container) return;

        container.innerHTML = livingmetalWeapons.map(item => `
        <div id="livingmetal-${item.id}" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <!-- Item Header -->
            <div class="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                <div class="flex items-center">
                    <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${item.id}.png"
                         alt="${item.name}" 
                         class="w-16 h-16 mr-4 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${item.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400">${item.description}</p>
                    </div>
                </div>
            </div>

            <!-- Item Content -->
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Stats Table -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Statistics</h4>
                        <table class="w-full text-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                            <tbody>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Attack Damage</th>
                                    <td class="px-3 py-2 text-red-600 font-semibold">
                                        ${item.damage} ${generateHeartDisplay(item.hearts)} × ${item.hearts}
                                    </td>
                                </tr>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Attack Speed</th>
                                    <td class="px-3 py-2 text-blue-600 font-semibold">${item.speed}</td>
                                </tr>
                                ${item.specialAttackMin ? `
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Special Attack</th>
                                    <td class="px-3 py-2 text-purple-600 font-semibold">${item.specialAttackMin} - ${item.specialAttackMax}</td>
                                </tr>
                                ` : ''}
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Durability</th>
                                    <td class="px-3 py-2 font-semibold">${item.durability}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Crafting Recipe -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Crafting Recipe</h4>
                        <div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <strong>Materials:</strong> ${item.materials}
                            </p>
                            ${generateRecipeDisplay(item)}
                        </div>
                    </div>
                </div>

                ${item.specialNotes ? `
                <div class="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Special Properties</h4>
                    <div class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <p class="text-gray-700 dark:text-gray-300">${item.specialNotes}</p>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `).join("");
    }

    /* ---------------- Render Individual Livingmetal Shields ---------------- */
    function renderIndividualLivingmetalShields() {
        const container = document.getElementById("livingmetal-shields-details");
        if (!container) return;

        container.innerHTML = livingmetalShields.map(shield => `
        <div id="livingmetal-${shield.id}" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <!-- Shield Header -->
            <div class="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                <div class="flex items-center">
                    <img src="https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${shield.id}.png"
                         alt="${shield.name}" 
                         class="w-16 h-16 mr-4 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${shield.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400">${shield.description}</p>
                    </div>
                </div>
            </div>

            <!-- Shield Content -->
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Stats Table -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Statistics</h4>
                        <table class="w-full text-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                            <tbody>
                                <tr class="odd:bg-gray-50 dark:odd:bg-gray-800">
                                    <th class="text-left px-3 py-2 font-medium">Durability</th>
                                    <td class="px-3 py-2 font-semibold">${shield.durability}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Crafting Recipe -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Crafting Recipe</h4>
                        <div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                            ${generateRecipeDisplay(shield)}
                        </div>
                    </div>
                </div>

                <!-- Perks & Weaknesses -->
                <div class="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Perks & Weaknesses</h4>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
                            <p class="text-green-700 dark:text-green-400">
                                <strong>⚡ Perk: ${shield.perk}</strong><br>
                                <span class="text-sm">${shield.perkDesc}</span>
                            </p>
                        </div>
                        <div class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
                            <p class="text-red-700 dark:text-red-400">
                                <strong>⚠ Weakness: ${shield.weakness}</strong><br>
                                <span class="text-sm">${shield.weaknessDesc}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Extra Ability (only shown if exists) -->
                ${shield.extraAbility ? `
                <div class="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Extra Ability</h4>
                    <div class="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                        <p class="text-gray-700 dark:text-gray-300">${shield.extraAbility}</p>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `).join("");
    }

    /* ---------------- Render Achievements ---------------- */
    function renderAchievements() {
        const container = document.getElementById("achievements-container");
        if (!container) return;

        // Count achievements by type
        const total = achievements.length;
        const normal = achievements.filter(a => a.type === "normal").length;
        const challenge = achievements.filter(a => a.type === "challenge").length;

        document.getElementById("total-achievements").textContent = total;
        document.getElementById("normal-achievements").textContent = normal;
        document.getElementById("challenge-achievements").textContent = challenge;

        // Helper function to resolve icon URL
        function resolveIconUrl(iconId) {
            if (!iconId) return "";

            if (iconId.startsWith("wiki_")) {
                const fileName = iconId.substring(5);
                return `/src/assets/images/minecraft_assets/${fileName}`;
            }

            if (iconId.startsWith("http")) {
                return iconId;
            }

            return `https://github.com/Starexify/BigSwordsR/raw/1.21.4-neo/src/main/resources/assets/big_swords/textures/item/${iconId}.png`;
        }

        // Render achievements
        container.innerHTML = achievements.map(achievement => {
            const isChallenge = achievement.type === "challenge";
            const borderColor = isChallenge
                ? "border-purple-300 dark:border-purple-700"
                : "border-gray-300 dark:border-gray-700";
            const bgColor = isChallenge
                ? "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
                : "bg-white dark:bg-gray-800";
            const headerBg = isChallenge
                ? "bg-purple-100 dark:bg-purple-900/50"
                : "bg-gray-50 dark:bg-gray-900";

            return `
            <div class="${bgColor} border ${borderColor} rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div class="${headerBg} px-4 py-3 border-b ${borderColor}">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <img src="${resolveIconUrl(achievement.icon)}"
                                 alt="${achievement.title}"
                                 class="w-12 h-12 image-render-pixel border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-1 rounded"
                                 onerror="this.onerror=null; this.src=this.src.replace('.png','.gif')">
                            <div>
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                                    ${achievement.title}
                                    ${isChallenge ? '<span class="ml-2 text-purple-600 dark:text-purple-400">💎</span>' : ''}
                                </h3>
                                <p class="text-sm text-gray-600 dark:text-gray-400 italic">${achievement.description}</p>
                            </div>
                        </div>
                        ${achievement.parent ? `
                            <div class="text-xs text-gray-500 dark:text-gray-400 hidden md:block">
                                <span class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                                    Parent: ${achievements.find(a => a.id === achievement.parent)?.title || achievement.parent}
                                </span>
                            </div>
                        ` : ''}
                    </div>
                </div>
                <div class="px-4 py-3">
                    <div class="flex items-start">
                        <span class="text-gray-600 dark:text-gray-400 font-semibold mr-2 text-sm">Requirements:</span>
                        <p class="text-gray-700 dark:text-gray-300 text-sm">${achievement.requirements}</p>
                    </div>
                </div>
            </div>
        `;
        }).join("");
    }

    ///Smelt recipe grid ex.
    // {
    //     name: "Smelted Item",
    //         id: "smelted_item",
    //     craftingType: "furnace",
    //     recipe: {
    //     input: "iron_ore",
    //         experience: 0.7  // Optional
    // },
    //     materials: "1 Iron Ore"
    // }

            ///Multiple Recipes ex.
    // {
    //     name: "Special Item",
    //         id: "special_item",
    //     craftingTypes: ["crafting", "furnace", "none"],
    //     recipes: {
    //     crafting: {
    //         pattern: [...]
    //     },
    //     furnace: {
    //         input: "raw_material",
    //             experience: 1.0
    //     },
    //     none: {
    //         description: "Can also be found in dungeon chests.",
    //             link: ""  // No link needed
    //     }
    // },
    //     materials: "Various methods"
    // }


    renderChangelog();

    renderSwordVariants();
    renderHandles();
    renderUpgrades();
    renderStatsTable();

    /* ---------------- Init Shields Page ---------------- */
    function initShieldsWiki() {
        renderShieldVariants();
        renderShieldPerks();
        renderIndividualShields();
    }

    /* ---------------- Init Glaives Page ---------------- */
    function initGlaivesWiki() {
        renderGlaiveVariants();
        renderGlaiveStatsTable();
        renderIndividualGlaives();
    }

    /* ---------------- Init Scythes Page ---------------- */
    function initScythesWiki() {
        renderScytheVariants();
        renderScytheStatsTable();
        renderIndividualScythes();
    }

    /* ---------------- Init Biomass Page ---------------- */
    function initBiomassWiki() {
        renderBiomassPage();
        renderIndividualBiomassArmor();
        renderIndividualBiomassTools();
        renderIndividualBiomassWeapons();
        renderIndividualBiomassShields();
    }

    /* ---------------- Init Livingmetal Page ---------------- */
    function initLivingmetalWiki() {
        renderLivingmetalPage();
        renderIndividualLivingmetalArmor();
        renderIndividualLivingmetalTools();
        renderIndividualLivingmetalWeapons();
        renderIndividualLivingmetalShields();
    }

    /* ---------------- Init Events Page ---------------- */
    function initEventsWiki() {
        renderEventsPage();
    }

    /* ---------------- Init Achievements Page ---------------- */
    function initAchievementsWiki() {
        renderAchievements();
    }

    initShieldsWiki();
    initGlaivesWiki();
    initScythesWiki();
    initBiomassWiki();
    initLivingmetalWiki();
    initEventsWiki();
    initAchievementsWiki();

    /* ---------------- Add smooth scrolling to anchor links ---------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });



    /* ---------------- Add cycling image functionality for multiple material variants ---------------- */
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

// If you already have a global init:
    document.addEventListener("DOMContentLoaded", initShieldsWiki);

});