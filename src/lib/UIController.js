const ICONS = {
  modrinth: `<svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 514 514"><path fill-rule="evenodd" d="M504.16 323.56c11.39-42.09 12.16-87.65.04-132.8C467.57 54.23 327.04-26.8 190.33 9.78 84.81 38.02 12.39 128.07 1.69 230.47h43.3c10.3-83.14 69.75-155.74 155.76-178.76 106.3-28.45 215.38 28.96 253.42 129.67l-42.14 11.27c-19.39-46.85-58.46-81.2-104.73-95.83l-7.74 43.84c36.53 13.47 66.16 43.84 77 84.25 15.8 58.89-13.62 119.23-67 144.26l11.53 42.99c70.16-28.95 112.31-101.86 102.34-177.02l41.98-11.23a210.2 210.2 0 0 1-3.86 84.16z"/><path fill-rule="evenodd" d="M322.99 504.22C186.27 540.8 45.75 459.77 9.11 323.24A257.6 257.6 0 0 1 1 275.46h43.27c1.09 11.91 3.2 23.89 6.41 35.83 3.36 12.51 7.77 24.46 13.11 35.78l38.59-23.15a169 169 0 0 1-8.17-23.45c-24.04-89.6 29.2-181.7 118.92-205.71 17-4.55 34.1-6.32 50.8-5.61L256.19 133c-10.46.05-21.08 1.42-31.66 4.25-66.22 17.73-105.52 85.7-87.78 151.84 1.1 4.07 2.38 8.04 3.84 11.9l49.35-29.61-14.87-39.43 46.6-47.87 58.9-12.69 17.05 20.99-27.15 27.5-23.68 7.45-16.92 17.39 8.29 23.07s16.79 17.84 16.82 17.85l23.72-6.31 16.88-18.54 36.86-11.67 10.98 24.7-38.03 46.63-63.73 20.18-28.58-31.82-49.82 29.89c25.54 29.08 63.94 45.23 103.75 41.86l11.53 42.99c-59.41 7.86-117.44-16.73-153.49-61.91l-38.41 23.04c50.61 66.49 138.2 99.43 223.97 76.48 61.74-16.52 109.79-58.6 135.81-111.78l42.64 15.5c-30.89 66.28-89.84 118.94-166.07 139.34"/></svg>`,
  curseforge: `<svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="m6.307 5.581.391 1.675H0s.112.502.167.558c.168.279.335.614.559.837 1.06 1.228 2.902 1.73 4.409 2.009 1.06.224 2.121.28 3.181.335l1.228 3.293h.67l.391 1.061h-.558l-.949 3.07h9.321l-.949-3.07h-.558l.39-1.061h.67s.558-3.404 2.288-4.967C21.935 7.758 24 7.535 24 7.535V5.581H6.307zm9.377 8.428c-.447.279-.949.279-1.284.503-.223.111-.335.446-.335.446-.223-.502-.502-.67-.837-.781-.335-.112-.949-.056-1.786-.782-.558-.502-.614-1.172-.558-1.507v-.167c0-.056 0-.112.056-.168.111-.334.39-.669.948-.893 0 0-.39.559 0 1.117.224.335.67.502 1.061.279.167-.112.279-.335.335-.503.111-.39.111-.781-.224-1.06-.502-.446-.613-1.06-.279-1.451 0 0 .112.502.614.446.335 0 .335-.111.224-.223-.056-.167-.782-1.228.279-2.009 0 0 .669-.447 1.451-.391-.447.056-.949.335-1.116.782v.055c-.168.447-.056.949.279 1.396.223.335.502.614.614 1.06-.168-.056-.279 0-.391.112a.533.533 0 0 0-.112.502c.056.112.168.223.279.223h.168c.167-.055.279-.279.223-.446.112.111.167.391.112.558 0 .167-.112.335-.168.446-.056.112-.167.224-.223.335-.056.112-.112.224-.112.335 0 .112 0 .279.056.391.223.335.67 0 .782-.279.167-.335.111-.726-.112-1.061 0 0 .391.224.67 1.005.223.67-.168 1.451-.614 1.73z"/></svg>`,
  reddit: `<svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30"><path fill-rule="evenodd" d="M 17.662109 2 C 15.565005 2 14 3.7131367 14 5.6621094 L 14 9.0351562 C 11.24971 9.1810926 8.7344872 9.9143634 6.7265625 11.064453 C 5.9527826 10.321405 4.9166871 9.991448 3.9121094 9.9921875 C 2.8229214 9.9929893 1.7094525 10.370413 0.94140625 11.234375 L 0.92382812 11.253906 L 0.90625 11.273438 C 0.16947928 12.194228 -0.12225605 13.427747 0.07421875 14.652344 C 0.25365009 15.770711 0.90137168 16.893419 2.0273438 17.628906 C 2.0199689 17.753058 2 17.874618 2 18 C 2 22.962 7.832 27 15 27 C 22.168 27 28 22.962 28 18 C 28 17.874618 27.980031 17.753058 27.972656 17.628906 C 29.098628 16.893419 29.74635 15.770711 29.925781 14.652344 C 30.122256 13.427747 29.830521 12.194228 29.09375 11.273438 L 29.076172 11.253906 L 29.058594 11.234375 C 28.290448 10.370294 27.177168 9.9929893 26.087891 9.9921875 C 25.08323 9.991448 24.046988 10.321133 23.273438 11.064453 C 21.265513 9.9143634 18.75029 9.1810926 16 9.0351562 L 16 5.6621094 C 16 4.6830821 16.565214 4 17.662109 4 C 18.182797 4 18.817104 4.2609042 19.810547 4.609375 C 20.650361 4.9039572 21.743308 5.2016984 23.140625 5.2910156 C 23.474875 6.2790874 24.402814 7 25.5 7 C 26.875 7 28 5.875 28 4.5 C 28 3.125 26.875 2 25.5 2 C 24.561213 2 23.747538 2.5304211 23.320312 3.3007812 C 22.125831 3.2346294 21.248238 2.9947078 20.472656 2.7226562 C 19.568849 2.4056271 18.738422 2 17.662109 2 z M 3.9121094 11.992188 C 4.3072494 11.991896 4.6826692 12.095595 4.9921875 12.263672 C 3.8881963 13.18517 3.0505713 14.261821 2.5449219 15.4375 C 2.2764358 15.106087 2.114647 14.734002 2.0507812 14.335938 C 1.9430146 13.664243 2.1440212 12.966045 2.4628906 12.552734 C 2.7642172 12.228395 3.3144613 11.992626 3.9121094 11.992188 z M 26.085938 11.992188 C 26.683756 11.992627 27.235874 12.22849 27.537109 12.552734 C 27.855979 12.966045 28.056985 13.664243 27.949219 14.335938 C 27.885353 14.734002 27.723564 15.106087 27.455078 15.4375 C 26.949429 14.261821 26.111804 13.18517 25.007812 12.263672 C 25.316626 12.095792 25.690955 11.991896 26.085938 11.992188 z M 10 14 C 11.105 14 12 14.895 12 16 C 12 17.105 11.105 18 10 18 C 8.895 18 8 17.105 8 16 C 8 14.895 8.895 14 10 14 z M 20 14 C 21.105 14 22 14.895 22 16 C 22 17.105 21.105 18 20 18 C 18.895 18 18 17.105 18 16 C 18 14.895 18.895 14 20 14 z M 20.238281 19.533203 C 19.599281 21.400203 17.556 23 15 23 C 12.444 23 10.400719 21.400969 9.7617188 19.667969 C 10.911719 20.600969 12.828 21.267578 15 21.267578 C 17.172 21.267578 19.088281 20.600203 20.238281 19.533203 z"></path></svg>`,
  twitter: `<svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 30 30"><path fill-rule="evenodd" d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path></svg>`,
  github: `<svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/></svg>`
};

const registry = {
  'footer': applyFooter,
  'download-counter': applyDownloadCounter,
  'nav-bar': applyNavigationBar,
  'scroll-button': applyScrollButton,
  'mod-card': applyModCard
};

function init() {
  const components = document.querySelectorAll('[data-ui]');
  components.forEach(element => {
    const componentName = element.getAttribute('data-ui');
    const renderFunction = registry[componentName];

    if (typeof renderFunction === 'function') {
      renderFunction(element);
      element.removeAttribute('data-ui');
    }
    else {
      console.warn(`UIController: No function registered for component "${componentName}"`);
    }
  });
}

function applyFooter(element) {
  element.innerHTML = `
            <div class="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <div class="flex justify-between">
                    <div class="grid grid-rows-3 gap-1">
                        <span class="text-sm text-gray-500 dark:text-gray-400">© 2024-2026 <a href="https://starexify.github.io/FnB-Projects/src" class="hover:underline">F&B Projects</a>.</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Code licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" class="hover:underline">MIT License</a>.</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Powered by GitHub Pages</span>
                    </div>
                    <div class="footer-container flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://modrinth.com/collection/Z8kWlmg3">
                            ${ICONS.modrinth}
                            <span class="sr-only">Modrinth</span>
                        </a>
                        <a href="https://www.curseforge.com/members/imverybad/projects">
                            ${ICONS.curseforge}
                            <span class="sr-only">Curseforge</span>
                        </a>
                        <a href="https://www.reddit.com/r/Foxirions_Forge">
                            ${ICONS.reddit}
                            <span class="sr-only">Subreddit</span>
                        </a>
                        <a href="https://x.com/FoxiStar9">
                            ${ICONS.twitter}
                            <span class="sr-only">Twitter page</span>
                        </a>
                        <a href="https://github.com/Starexify?tab=repositories">
                            ${ICONS.github}
                            <span class="sr-only">GitHub account</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
}

// Handle Navigation Bar
const PY_CLASSES = ["py-10", "py-8", "py-7", "py-6"];
const HOVER_CLASSES = ["hover:bg-gray-600", "hover:bg-gray-500", "hover:bg-gray-400"];
function applyNavigationBar(element) {
  let isMobile = window.innerWidth < 768;

  const render = () => {
    const currentMobileState = window.innerWidth < 768;
    if (!currentMobileState) renderDesktop(element, getNavLinks());
    else renderMobile(element, getNavLinks());
  };

  const handleScroll = () => {
    const navContainer = element.querySelector('.nav-container');
    if (!navContainer) return;

    const scrollProgress = Math.min(window.scrollY / 100, 1);

    if (scrollProgress > 0) {
      const expandedWidth = 10 + (95 - 10) * scrollProgress;
      navContainer.classList.add("transition-all", "duration-300");

      navContainer.style.width = `${expandedWidth}%`;
      navContainer.classList.remove("justify-center");
      navContainer.classList.add("justify-between");
    }
    else {
      navContainer.classList.remove("transition-all", "duration-300");

      navContainer.style.width = "auto";
      navContainer.classList.remove("justify-between");
      navContainer.classList.add("justify-center");
    }
  };

  const handleResize = () => {
    const currentMobileState = window.innerWidth < 768;
    if (currentMobileState !== isMobile) {
      isMobile = currentMobileState;
      render();
      handleScroll();
    }
  };

  render();
  handleScroll();

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
}

function renderDesktop(element, links) {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const activeIndex = links.findIndex(link => (link.href.split("/").pop() || "index.html") === currentPage);

  const linksHtml = links.map((link, i) => {
    const distance = Math.abs(i - activeIndex);
    const pyClass = PY_CLASSES[distance] || "py-6";
    const hoverClass = i === activeIndex ? "" : HOVER_CLASSES[distance] || "hover:bg-gray-400";
    const hrefAttr = i === activeIndex ? "" : `href="${link.href}"`;
    const extraClasses = i === activeIndex ? "bg-slate-700 text-white" : "";

    return `<a class="px-4 rounded transition-all duration-200 ${pyClass} ${hoverClass} ${extraClasses}" ${hrefAttr}>${link.name}</a>`;
  }).join("");

  element.innerHTML = `
        <div class="nav-container dark:bg-slate-800 h-20 px-16 mr-8 mb-7 pl-10 rounded-b-2xl flex items-center select-none text-slate-300 text-xl font-bold">
            <img src="assets/images/icon.png" alt="F&B Logo" class="size-32 object-contain mr-8">
            ${linksHtml}
        </div>
    `;
}

function renderMobile(element, links) {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const activeIndex = links.findIndex(link => (link.href.split("/").pop() || "index.html") === currentPage);
  const middleIndex = Math.floor(links.length / 2);

  let html = `
    <div class="fixed dark:bg-slate-800 z-50 w-[calc(100%-2rem)] h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:border-gray-600 text-xs shadow-lg overflow-hidden">
        <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
    `;

  links.forEach((link, i) => {
    if (i === middleIndex) {
      html += `
            <div class="flex items-center justify-center">
                <img src="assets/images/icon.png" alt="F&B Logo" class="size-12 object-contain">
            </div>`;
    }

    const isActive = i === activeIndex;
    let extraClasses = isActive ? "dark:bg-slate-700 bg-gray-100" : "hover:bg-gray-50 dark:hover:bg-gray-500";

    html += `
        <a class="inline-flex flex-col items-center justify-center px-5 ${extraClasses} group" ${isActive ? "" : `href="${link.href}"`}>
            ${link.icon}
            ${link.name}
        </a>`;
  });

  html += `</div></div>`;
  element.innerHTML = html;
}

function getNavLinks() {
  return [
    {
      name: "Home", href: "index.html",
      icon: `<svg class="size-5 mb-1 text-gray-100 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/></svg>`
    },
    {
      name: "News", href: "news.html",
      icon: `<svg class="size-6 mb-1 text-gray-100 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M 4 3 C 2.895 3 2 3.895 2 5 L 2 18 C 2 19.657 3.343 21 5 21 L 19 21 C 20.64497 21 22 19.64497 22 18 L 22 8 A 1.0001 1.0001 0 0 0 20.984375 6.9863281 A 1.0001 1.0001 0 0 0 20 8 L 20 18 C 20 18.56503 19.56503 19 19 19 C 18.448 19 18 18.551 18 18 L 18 5 C 18 3.895 17.105 3 16 3 L 4 3 z M 7 6 L 13 6 C 13.552 6 14 6.448 14 7 L 14 8 C 14 8.552 13.552 9 13 9 L 7 9 C 6.448 9 6 8.552 6 8 L 6 7 C 6 6.448 6.448 6 7 6 z M 7 12 L 13 12 C 13.552 12 14 12.448 14 13 C 14 13.552 13.552 14 13 14 L 7 14 C 6.448 14 6 13.552 6 13 C 6 12.448 6.448 12 7 12 z M 7 16 L 13 16 C 13.552 16 14 16.448 14 17 C 14 17.552 13.552 18 13 18 L 7 18 C 6.448 18 6 17.552 6 17 C 6 16.448 6.448 16 7 16 z"/></svg>`
    },
    {
      name: "Projects", href: "projects.html",
      icon: `<svg class="size-6 mb-1 text-gray-100 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M 5.75 3 A 1.0001 1.0001 0 0 0 4.8867188 3.4960938 L 3.1367188 6.4960938 A 1.0001 1.0001 0 0 0 3 7 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 7 A 1.0001 1.0001 0 0 0 20.863281 6.4960938 L 19.113281 3.4960938 A 1.0001 1.0001 0 0 0 18.25 3 L 5.75 3 z M 6.3242188 5 L 17.675781 5 L 18.841797 7 L 5.1582031 7 L 6.3242188 5 z M 10 9 L 14 9 C 14.552 9 15 9.448 15 10 C 15 10.552 14.552 11 14 11 L 10 11 C 9.448 11 9 10.552 9 10 C 9 9.448 9.448 9 10 9 z"/></svg>`
    },
    {
      name: "Wikis", href: "wikis.html",
      icon: `<svg class="size-6 mb-1 text-gray-100 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>`
    }
  ];
}

function applyScrollButton(element) {
  element.innerHTML = `
    <svg class="size-6 text-rose-800" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  `;

  element.classList.add("cursor-pointer");

  element.addEventListener("click", () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight || document.body.scrollHeight,
      behavior: "smooth"
    });
  });

  const handleScrollButtonVisibility = () => {
    // Uses documentElement.scrollHeight to avoid cross-browser calculation stutters
    const totalHeight = document.documentElement.scrollHeight;
    const currentScroll = window.innerHeight + window.scrollY;

    const atBottom = currentScroll >= totalHeight - 15;

    if (atBottom) {
      element.classList.add("opacity-0", "pointer-events-none");
    } else {
      element.classList.remove("opacity-0", "pointer-events-none");
    }
  };

  handleScrollButtonVisibility();
  window.addEventListener("scroll", handleScrollButtonVisibility);

  const handleResizeCleanup = () => {
    window.removeEventListener("scroll", handleScrollButtonVisibility);
    window.removeEventListener("resize", handleResizeCleanup);
    applyScrollButton(element);
  };
  window.addEventListener("resize", handleResizeCleanup);
}

function applyDownloadCounter(element) {
  import("./util/DownloadService.js").then(({ DownloadService }) => {
    DownloadService.setIds({
      modrinth: ["big-swords-r", "cosmicore", "hexxit-gear-r", "tmml", "mystic-shrubs", "realitymod", "nmt", "bsrxcc", "hgw"],
      curseforge: ["690473", "1057420", "376883", "1133923", "1074868", "1102155", "1078643", "1144559", "1206796"]
    });
    DownloadService.loadDownloads(formattedTotal => element.textContent = formattedTotal);
  });
}

function applyModCard(element) {
  const id = element.id || "unknown-mod";
  const logoSrc = element.getAttribute("logo-src") || `assets/images/logos/${id}.png`;
  const iconSrc = element.getAttribute("icon-src") || `assets/images/icons/${id}.png`;
  const modName = element.getAttribute("mod-name") || element.textContent.trim() || "Mod Name";
  const mcVersions = element.getAttribute("mc-versions");
  const modLoader = element.getAttribute("mod-loader");
  const description = element.getAttribute("description") || "";

  const modId = element.getAttribute("modId");
  const cfId = element.getAttribute("curseforge-id");
  const mrId = element.getAttribute("modrinth-id");

  const curseforgeUrl = `https://www.curseforge.com/minecraft/mc-mods/${modId}`;
  const modrinthUrl = `https://modrinth.com/mod/${modId}`;

  const mcBadge = mcVersions ? `<span class="px-3 py-1 bg-linear-to-r from-green-600 to-green-500 text-white text-xs font-semibold rounded-full shadow-sm">MC ${mcVersions}</span>` : "";
  const verBadge = modLoader ? renderLoaderBadges(modLoader) : "";

  const cfButton = cfId ? `
    <button onclick="window.open('${curseforgeUrl}', '_blank')" class="bg-linear-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold py-3 px-4 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5 rounded-bl-2xl">
      <i class="fab fa-dev text-lg"></i>
      <span>CurseForge</span>
    </button>
  ` : "";
  const modrinthButton = mrId ? `
    <button onclick="window.open('${modrinthUrl}', '_blank')" class="bg-linear-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-semibold py-3 px-4 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5 rounded-br-2xl">
      <i class="fas fa-download text-lg"></i>
      <span>Modrinth</span>
    </button>
  ` : "";

  const downloadCount = (cfId || mrId) ? `
    <div class="grid grid-cols-1 gap-4 mb-6 text-center px-6">
      <div class="bg-gray-700/50 rounded-lg p-3">
        <div class="download-counter text-green-400 font-bold text-lg">Loading...</div>
        <div class="text-gray-400 text-xs select-none">Downloads</div>
      </div>
    </div>
  ` : `
    <div class="px-5 pb-4">
      <img src="assets/images/coming_soon.png" alt="Coming Soon">
    </div>
  `;

  element.innerHTML = `
    <div class="bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 xl:w-110 transform hover:scale-105 transition-all duration-300 flex flex-col">
      <div class="text-center mb-6 p-6 pb-0">
        <div class="mx-auto mb-4 h-16 rounded-xl overflow-hidden flex items-center justify-center select-none">
          <img src="${logoSrc}" alt="${modName} Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="size-full bg-linear-to-r from-purple-500 to-blue-500 rounded-xl hidden items-center justify-center">
            <span class="text-white font-bold text-lg">${modName.toUpperCase()}</span>
          </div>
        </div>
        
        <div class="flex items-center justify-center gap-3 mb-3">
          <div class="size-12 rounded-lg overflow-hidden shadow-md bg-gray-700/30 flex items-center justify-center shrink-0 select-none">
            <img src="${iconSrc}" alt="${modName} Icon" class="w-full h-full object-cover rounded-lg" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="size-full bg-linear-to-br from-purple-500 to-blue-500 rounded-lg hidden items-center justify-center">
              <i class="fas fa-cube text-lg text-white"></i>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-white ">${modName}</h2>
        </div>
        
        <div class="flex flex-wrap justify-center gap-2 select-none">
          ${mcBadge}
          ${verBadge}
        </div>
      </div>

      <div class="mb-6 px-6">
        <p class="text-gray-300 text-center leading-relaxed">${description}</p>
      </div>

      ${downloadCount}

      <div class="grid grid-cols-2 mt-auto select-none">
        ${cfButton}
        ${modrinthButton}
      </div>
    </div>
  `;

  if (cfId || mrId) {
    const counterTarget = element.querySelector('.download-counter');
    fetchDownloadsData(cfId, mrId).then(formattedCount => {
      if (counterTarget) counterTarget.textContent = formattedCount;
    }).catch((err) => {
      console.error("Failed loading card counters:", err);
      if (counterTarget) counterTarget.textContent = "Unavailable";
    });
  }
}

async function fetchDownloadsData(cfId, mrId) {
  return import("./util/DownloadService.js").then(async ({ DownloadService }) => {
    let total = 0;
    const promises = [];

    if (cfId) {
      promises.push(DownloadService.getCurseforgeDownloadsByID(cfId).then(count => { if (count) total += count; }));
    }

    if (mrId) {
      promises.push(DownloadService.getModrinthDownloadsByID(mrId).then(count => { if (count) total += count; }));
    }

    return Promise.all(promises).then(() => {return DownloadService.formatDownloadCount(total);});
  });
}

function getLoaderBadgeClass(loader) {
  switch (loader.toLowerCase()) {
    case "fabric": return "from-purple-600 to-purple-500";
    case "neoforge":
    case "neo forge": return "from-orange-600 to-red-500";
    case "forge": return "from-red-600 to-red-500";
    case "quilt": return "from-pink-600 to-pink-500";
    default: return "from-gray-600 to-gray-500";
  }
}

function renderLoaderBadges(loaderString) {
  const loaders = loaderString
      .split(/[\/|,&+]/)
      .map(loader => loader.trim())
      .filter(loader => loader.length > 0);

  if (loaders.length === 1) {
    return `
      <span class="px-3 py-1 bg-linear-to-r ${getLoaderBadgeClass(loaders[0])} text-white text-xs font-semibold rounded-full shadow-sm">
        ${loaders[0]}
      </span>
    `;
  }

  return `
    <div class="flex items-center shadow-sm">
      ${loaders.map((loader, index) => {
    const isFirst = index === 0;
    const isLast = index === loaders.length - 1;
    const roundingClass = isFirst && isLast ? 'rounded-full' : isFirst ? 'rounded-l-full' : isLast ? 'rounded-r-full' : '';

    return `
          <span class="px-3 py-1 bg-linear-to-r ${getLoaderBadgeClass(loader)} text-white text-xs font-semibold ${roundingClass} border-r border-white/20 last:border-r-0">
            ${loader}
          </span>
        `;
  }).join('')}
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => init());