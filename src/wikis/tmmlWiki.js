document.addEventListener("DOMContentLoaded", () => {
    /* ---------------- Base Buttons ---------------- */
    const curseforgeUrl = "https://www.curseforge.com/minecraft/mc-mods/tmml";
    const modrinthUrl   = "https://modrinth.com/mod/tmml";

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

    /* ---------------- TMML Changelog Data ---------------- */
    const changelog = [
        {
            version: "verison name – Month day, year",
            type: "beta",
            sections: [
                {
                    title: "WIP",
                    changes: [
                        "WIP"
                    ]
                }
            ]
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

    renderChangelog();

});