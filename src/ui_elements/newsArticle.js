export class NewsArticle extends HTMLElement {
    tagColors = {
        "New Features": "bg-blue-600/20 text-blue-300",
        "Mod Release": "bg-green-600/20 text-green-300",
        "Bug Fixes": "bg-red-600/20 text-red-300",
        "Port": "bg-slate-200/20 text-slate-300",
        "Backport": "bg-slate-200/20 text-slate-300",
        "Performance": "bg-green-600/20 text-green-300",
        "Compatibility": "bg-purple-600/20 text-purple-300",
        "Website": "bg-indigo-600/20 text-indigo-300",
        "World Generation": "bg-orange-600/20 text-orange-300",
        "Coming Soon": "bg-amber-600/20 text-amber-300"
    };

    connectedCallback() {
        this.render();
    }

    render() {
        const type = this.getAttribute("type") || "mod";
        const modName = this.getAttribute("mod-name") || "";
        const title = this.getAttribute("title") || "";
        const date = this.getAttribute("date") || "";
        const description = this.getAttribute("description") || "";
        const iconUrl = this.getAttribute("icon-url") || "";
        const iconBg = this.getAttribute("icon-bg") || "";
        const badgeColor = this.getAttribute("badge-color") || "bg-blue-600";
        const badgeText = this.getAttribute("badge-text") || "";
        const tags = this.getAttribute("tags") ? this.getAttribute("tags").split(",") : [];
        const primaryAction = this.getAttribute("primary-action");
        const primaryLink = this.getAttribute("primary-link");
        const secondaryAction = this.getAttribute("secondary-action");
        const secondaryLink = this.getAttribute("secondary-link");

        // Generate icon HTML based on type
        let iconHtml = "";
        if (type === "website") {
            iconHtml = `
                <div class="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <svg class="w-12 h-12" enable-background="new 0 0 50 50" viewBox="0 0 50 50" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="50" width="50"/><circle cx="25" cy="25" fill="none" r="24" stroke="#101828" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><ellipse cx="25" cy="25" fill="none" rx="12" ry="24" stroke="#101828" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M6.365,40.438C10.766,37.729,17.479,36,25,36  c7.418,0,14.049,1.682,18.451,4.325" fill="none" stroke="#101828" stroke-miterlimit="10" stroke-width="2"/><path d="M43.635,9.563C39.234,12.271,32.521,14,25,14  c-7.417,0-14.049-1.682-18.451-4.325" fill="none" stroke="#101828" stroke-miterlimit="10" stroke-width="2"/><line fill="none" stroke="#101828" stroke-miterlimit="10" stroke-width="2" x1="1" x2="49" y1="25" y2="25"/><line fill="none" stroke="#101828" stroke-miterlimit="10" stroke-width="2" x1="25" x2="25" y1="1" y2="49"/></svg>
                </div>
            `;
        } else {
            iconHtml = `<img src="${iconUrl}" alt="" class="w-16 h-16 rounded-lg ${iconBg}">`;
        }

        // Generate tags HTML
        const tagsHtml = tags.map(tag => {
            const trimmedTag = tag.trim();
            let tagColor = "bg-blue-600/20 text-blue-300"; // default

            if (this.tagColors[trimmedTag]) tagColor = this.tagColors[trimmedTag];

            return `<span class="${tagColor} px-2 py-1 rounded text-sm">${trimmedTag}</span>`;
        }).join("");

        // Generate buttonS based on action type
        let primaryButton = "";
        if (primaryAction !== null) {
            if (primaryAction.toLowerCase() === "download") {
                primaryButton = `
                    <button class="${badgeColor} hover:opacity-80 text-white px-4 py-2 rounded font-medium transition-colors download-btn">
                        ${primaryAction}
                    </button>`;
            } else if (primaryAction.toLowerCase() === "screenshots" || primaryAction.toLowerCase() === "screenshot") {
                primaryButton = `
                    <button class="${badgeColor} hover:opacity-80 text-white px-4 py-2 rounded font-medium transition-colors screenshot-btn">
                        ${primaryAction}
                    </button>`;
            } else {
                primaryButton = `
                    <a href="${primaryLink}" class="${badgeColor} hover:opacity-80 text-white px-4 py-2 rounded font-medium transition-colors">
                        ${primaryAction}
                    </a>`;
            }
        }

        let secondaryButton = "";
        if (secondaryAction !== null) {
            if (secondaryAction.toLowerCase() === "changelog") {
                secondaryButton = `
                    <button class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-medium transition-colors changelog-btn">
                        ${secondaryAction}
                    </button>`;
            } else {
                secondaryButton = `
                    <a href="${secondaryLink}" class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-medium transition-colors">
                        ${secondaryAction}
                    </a>`;
            }
        }

        // Special border for spoilers
        const borderClass = type === "spoiler" ? "border-amber-500/50 hover:border-amber-500" : "border-gray-700 hover:border-gray-600";
        const contentBlur = type === "spoiler" ? "blur-md" : "";
        const spoilerOverlay = type === "spoiler" ? `
            <div class="spoiler-overlay absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 z-10">
                <div class="text-center">
                    <div class="bg-amber-500 text-black py-2 rounded-full font-bold text-lg mb-2">
                        SPOILER
                    </div>
                    <p class="text-gray-300 text-sm">Click to reveal content</p>
                </div>
            </div>
        ` : "";

        this.innerHTML = `<article class="bg-gray-800 rounded-lg p-6 border ${borderClass} transition-colors relative">
            ${spoilerOverlay}
            <div class="spoiler-content ${contentBlur} transition-all duration-300">
                <div class="flex items-start gap-4">
                    <div class="flex-shrink-0">
                        ${iconHtml}
                    </div>
                    
                    <div class="flex-grow">
                        <div class="flex flex-wrap items-center gap-3 mb-3">
                            <h2 class="text-xl font-bold text-white">${modName}</h2>
                            <span class="${badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium select-none">${badgeText}</span>
                            <span class="text-gray-400 text-sm">${date}</span>
                        </div>
                        
                        <h3 class="text-lg font-semibold text-gray-200 mb-2">${title}</h3>
                        
                        <p class="text-gray-300 mb-4">${description}</p>
                        
                        <div class="flex flex-wrap gap-2 mb-2 select-none">
                            ${tagsHtml}
                        </div>
                        
                        <div class="flex justify-end select-none">
                            <div class="flex gap-3">
                                ${primaryButton}
                                ${secondaryButton}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        `;

        // Add click handler for spoiler reveal
        if (type === "spoiler") {
            const overlay = this.querySelector('.spoiler-overlay');
            const content = this.querySelector('.spoiler-content');

            if (overlay && content) {
                overlay.addEventListener('click', () => {
                    overlay.style.opacity = '0';
                    overlay.style.pointerEvents = 'none';
                    content.classList.remove('blur-md');

                    // Remove overlay completely after transition
                    setTimeout(() => { overlay.remove(); }, 300);
                });
            }
        }

        // Add click handler for download modal
        if (primaryAction !== null) {
            if (primaryAction.toLowerCase() === "download") {
                const downloadBtn = this.querySelector('.download-btn');

                const curseforgeUrl = this.getAttribute("curseforge-url") || "#";
                const modrinthUrl = this.getAttribute("modrinth-url") || "#";

                if (downloadBtn) {
                    // Show modal and set URLs when download button is clicked
                    downloadBtn.addEventListener("click", () => {
                        let modal = document.getElementById("downloads-modal");
                        if (!modal) {
                            // Create the modal if it doesn't exist
                            modal = document.createElement("div");
                            modal.id = "downloads-modal";
                            modal.className = "fixed inset-0 z-50 flex justify-center items-center hidden";
                            modal.innerHTML = `
                            <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="document.getElementById('downloads-modal').classList.add('hidden')"></div>
                            <div class="relative w-full max-w-2xl px-4">
                                <div class="relative bg-white rounded-2xl shadow-2xl dark:bg-gray-700">
                                    <div class="grid grid-cols-2 h-40 text-white font-semibold text-2xl select-none">
                                        <button id="cfg-btn" class="flex items-center justify-center bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 rounded-l-2xl space-x-2 shadow-lg hover:shadow-orange-500/30 transition-all duration-200 transform hover:-translate-y-0.5">
                                            <svg class="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="m6.307 5.581.391 1.675H0s.112.502.167.558c.168.279.335.614.559.837 1.06 1.228 2.902 1.73 4.409 2.009 1.06.224 2.121.28 3.181.335l1.228 3.293h.67l.391 1.061h-.558l-.949 3.07h9.321l-.949-3.07h-.558l.39-1.061h.67s.558-3.404 2.288-4.967C21.935 7.758 24 7.535 24 7.535V5.581H6.307zm9.377 8.428c-.447.279-.949.279-1.284.503-.223.111-.335.446-.335.446-.223-.502-.502-.67-.837-.781-.335-.112-.949-.056-1.786-.782-.558-.502-.614-1.172-.558-1.507v-.167c0-.056 0-.112.056-.168.111-.334.39-.669.948-.893 0 0-.39.559 0 1.117.224.335.67.502 1.061.279.167-.112.279-.335.335-.503.111-.39.111-.781-.224-1.06-.502-.446-.613-1.06-.279-1.451 0 0 .112.502.614.446.335 0 .335-.111.224-.223-.056-.167-.782-1.228.279-2.009 0 0 .669-.447 1.451-.391-.447.056-.949.335-1.116.782v.055c-.168.447-.056.949.279 1.396.223.335.502.614.614 1.06-.168-.056-.279 0-.391.112a.533.533 0 0 0-.112.502c.056.112.168.223.279.223h.168c.167-.055.279-.279.223-.446.112.111.167.391.112.558 0 .167-.112.335-.168.446-.056.112-.167.224-.223.335-.056.112-.112.224-.112.335 0 .112 0 .279.056.391.223.335.67 0 .782-.279.167-.335.111-.726-.112-1.061 0 0 .391.224.67 1.005.223.67-.168 1.451-.614 1.73z"/>
                                            </svg>
                                            <span>CurseForge</span>
                                        </button>
                                        <button id="mdr-btn" class="flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 rounded-r-2xl space-x-2 shadow-lg hover:shadow-green-500/30 transition-all duration-200 transform hover:-translate-y-0.5">
                                            <span>Modrinth</span>
                                            <svg class="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 514 514">
                                                <path fill-rule="evenodd" d="M504.16 323.56c11.39-42.09 12.16-87.65.04-132.8C467.57 54.23 327.04-26.8 190.33 9.78 84.81 38.02 12.39 128.07 1.69 230.47h43.3c10.3-83.14 69.75-155.74 155.76-178.76 106.3-28.45 215.38 28.96 253.42 129.67l-42.14 11.27c-19.39-46.85-58.46-81.2-104.73-95.83l-7.74 43.84c36.53 13.47 66.16 43.84 77 84.25 15.8 58.89-13.62 119.23-67 144.26l11.53 42.99c70.16-28.95 112.31-101.86 102.34-177.02l41.98-11.23a210.2 210.2 0 0 1-3.86 84.16z"/><path fill-rule="evenodd" d="M322.99 504.22C186.27 540.8 45.75 459.77 9.11 323.24A257.6 257.6 0 0 1 1 275.46h43.27c1.09 11.91 3.2 23.89 6.41 35.83 3.36 12.51 7.77 24.46 13.11 35.78l38.59-23.15a169 169 0 0 1-8.17-23.45c-24.04-89.6 29.2-181.7 118.92-205.71 17-4.55 34.1-6.32 50.8-5.61L256.19 133c-10.46.05-21.08 1.42-31.66 4.25-66.22 17.73-105.52 85.7-87.78 151.84 1.1 4.07 2.38 8.04 3.84 11.9l49.35-29.61-14.87-39.43 46.6-47.87 58.9-12.69 17.05 20.99-27.15 27.5-23.68 7.45-16.92 17.39 8.29 23.07s16.79 17.84 16.82 17.85l23.72-6.31 16.88-18.54 36.86-11.67 10.98 24.7-38.03 46.63-63.73 20.18-28.58-31.82-49.82 29.89c25.54 29.08 63.94 45.23 103.75 41.86l11.53 42.99c-59.41 7.86-117.44-16.73-153.49-61.91l-38.41 23.04c50.61 66.49 138.2 99.43 223.97 76.48 61.74-16.52 109.79-58.6 135.81-111.78l42.64 15.5c-30.89 66.28-89.84 118.94-166.07 139.34"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                            document.body.appendChild(modal);
                        }

                        // Update the onclick handlers with current URLs
                        const cfgBtn = modal.querySelector("#cfg-btn");
                        const mdrBtn = modal.querySelector("#mdr-btn");

                        cfgBtn.onclick = () => {
                            window.open(curseforgeUrl, "_blank");
                            modal.classList.add("hidden");
                        };

                        mdrBtn.onclick = () => {
                            window.open(modrinthUrl, "_blank");
                            modal.classList.add("hidden");
                        };

                        // Show the modal
                        modal.classList.remove("hidden");
                    });
                }
            }
            if (primaryAction.toLowerCase() === "screenshots" || primaryAction.toLowerCase() === "screenshot") {
                const screenshotBtn = this.querySelector(".screenshot-btn");

                if (screenshotBtn) {
                    screenshotBtn.addEventListener("click", () => {
                        let modal = document.getElementById("ss-modal");
                        if (!modal) {
                            modal = document.createElement("div");
                            modal.id = "ss-modal";
                            modal.className = "fixed inset-0 z-50 flex justify-center items-center hidden";
                            modal.innerHTML = `
                            <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="document.getElementById('ss-modal').classList.add('hidden')"></div>
                            <div class="relative bg-white rounded-2xl shadow-2xl p-4 dark:bg-gray-700">
                                <img src="${primaryLink}" class="rounded-md object-contain">
                            </div>
                        `;
                            document.body.appendChild(modal);
                        }

                        modal.classList.remove("hidden");
                    });
                }
            }
        }
        if (secondaryAction !== null && secondaryAction.toLowerCase() === "changelog") {
            const changelogBtn = this.querySelector(".changelog-btn");

            if (changelogBtn) {
                changelogBtn.addEventListener("click", () => {
                    let modal = document.getElementById("changelog-modal");
                    if (!modal) {
                        modal = document.createElement("div");
                        modal.id = "changelog-modal";
                        modal.className = "fixed inset-0 z-50 flex justify-center items-center hidden";
                        modal.innerHTML = `
                            <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="document.getElementById('changelog-modal').classList.add('hidden')"></div>
                            <div class="relative w-full max-w-4xl max-h-[90vh] px-4">
                                <div class="relative bg-white rounded-2xl shadow-2xl dark:bg-gray-800 overflow-hidden">
                                    <div class="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 z-10">
                                        <div class="flex items-center justify-between">
                                            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Changelog ${this.getAttribute("version")}</h2>
                                            <button onclick="document.getElementById('changelog-modal').classList.add('hidden')" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                                        <div id="changelog-content" class="text-gray-900 dark:text-gray-100"></div>
                                    </div>
                                </div>
                            </div>
                        `;
                        document.body.appendChild(modal);
                    }

                    const changelogContent = this.getAttribute("changelog-content") || "No changelog content available.";
                    const contentDiv = modal.querySelector("#changelog-content");

                    // Format the content using your formatChangelogContent function
                    contentDiv.innerHTML = this.formatChangelogContent(changelogContent);

                    modal.classList.remove("hidden");
                });
            }
        }
    }

    formatChangelogContent(content) {
        if (!content || content === "No changelog content available.") {
            return '<p class="text-gray-600 dark:text-gray-400">No changelog content available.</p>';
        }

        // Split by double newlines to get sections
        const sections = content.split('\n\n').filter(section => section.trim());

        return sections.map(section => {
            const lines = section.split('\n').filter(line => line.trim());

            return lines.map(line => {
                const trimmedLine = line.trim();

                // Handle markdown-style headers
                if (trimmedLine.startsWith('## ')) {
                    return `<h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6 first:mt-0">${trimmedLine.substring(3)}</h2>`;
                } else if (trimmedLine.startsWith('### ')) {
                    return `<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 mt-4">${trimmedLine.substring(4)}</h3>`;
                }
                // Handle list items
                else if (trimmedLine.startsWith('- ')) {
                    return `<li class="text-gray-700 dark:text-gray-300 ml-4 mb-1">${trimmedLine.substring(2)}</li>`;
                }
                // Regular paragraphs
                else if (trimmedLine) {
                    return `<p class="text-gray-700 dark:text-gray-300 mb-3">${trimmedLine}</p>`;
                }

                return '';
            }).join('');
        }).join('');
    }
}