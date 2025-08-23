export class NavBar extends HTMLElement {
    PY_CLASSES = ["py-10", "py-8", "py-7", "py-6"];
    HOVER_CLASSES = ["hover:bg-gray-600", "hover:bg-gray-500", "hover:bg-gray-400"];

    connectedCallback() {
        this.render();
        window.addEventListener('resize', () => this.render());
        window.addEventListener('scroll', () => this.handleScroll());
    }

    render() {
        const isMobile = window.innerWidth < 768;
        if (!isMobile) this.renderDesktopNavbar();
        else this.renderMobileNavbar();
    }

    renderDesktopNavbar() {
        const links = this.getLinks();
        const currentPage = this.getFileName(window.location.pathname);
        const activeIndex = links.findIndex(link => this.getFileName(link.href) === currentPage);

        const linksHtml = links.map((link, i) => {
            const distance = Math.abs(i - activeIndex);
            const pyClass = this.PY_CLASSES[distance] || "py-6";
            const hoverClass = i === activeIndex ? "" : this.HOVER_CLASSES[distance] || "hover:bg-gray-400";
            const hrefAttr = i === activeIndex ? "" : `href="${link.href}"`;
            const extraClasses = i === activeIndex ? "bg-slate-700 text-white" : "";

            return `<a class="px-4 rounded transition-all duration-200 ${pyClass} ${hoverClass} ${extraClasses}" ${hrefAttr}>
                ${link.name}
            </a>`;
        }).join("");

        this.innerHTML = `<nav class="sticky top-0 z-50 flex justify-center">
            <div class="nav-container dark:bg-slate-800 h-20 px-16 mr-8 mb-7 pl-10 rounded-b-2xl flex items-center select-none text-slate-300 text-xl font-bold">
                <img src="assets/images/icon.png" alt="F&B Logo" class="size-32 object-contain mr-8">
                ${linksHtml}
            </div>
        </nav>`;

        this.handleScroll();
    }

    renderMobileNavbar() {
        const links = this.getLinks();
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const activeIndex = links.findIndex(link => link.href.split("/").pop() === currentPage);

        const middleIndex = Math.floor(links.length / 2);

        let html = `
        <div class="fixed dark:bg-slate-800 z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-t-full -bottom-1 left-1/2 dark:border-gray-600 text-xs">
            <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
        `;

        links.forEach((link, i) => {
            if (i === middleIndex) html += `
            <div class="flex items-center justify-center">
                <img src="assets/images/icon.png" alt="F&B Logo" class="size-16 object-contain">
            </div>
            `;

            const isActive = i === activeIndex;
            let extraClasses = isActive ? "dark:bg-slate-700" : "hover:bg-gray-50 dark:hover:bg-gray-500";
            if (i === 0) extraClasses += " rounded-tl-full";
            if (i === links.length - 1) extraClasses += " rounded-tr-full";

            html += `
            <a class="inline-flex flex-col items-center justify-center px-5 ${extraClasses} group" ${isActive ? "" : `href="${link.href}"`}>
                ${link.icon}
                ${link.name}
            </a>
            `;
        });

        html += `</div></div>`;
        this.innerHTML = html;
    }

    handleScroll() {
        const scrollY = window.scrollY;
        const maxScroll = 100;
        const maxWidth = 95;
        const scrollProgress = Math.min(scrollY / maxScroll, 1);

        const navContainer = this.querySelector('.nav-container');
        if (!navContainer) return;

        if (scrollProgress > 0) {
            const expandedWidth = 10 + (maxWidth - 10) * scrollProgress;
            navContainer.style.width = `${expandedWidth}%`;

            navContainer.classList.remove("justify-center");
            navContainer.classList.add("justify-between");
        } else {
            navContainer.style.width = "auto";

            navContainer.classList.remove("justify-between");
            navContainer.classList.add("justify-center");
        }

        navContainer.classList.add("transition-all", "duration-300");
    }

    getFileName(path) {
        return path.split("/").pop() || "index.html";
    }

    getLinks() {
        return [
            {
                name: "Home",
                href: "index.html",
                icon: `<svg class="size-5 mb-1 text-gray-100 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/></svg>`
            },
            {
                name: "News",
                href: "news.html",
                icon: `<svg class="size-6 mb-1 text-gray-100 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M 4 3 C 2.895 3 2 3.895 2 5 L 2 18 C 2 19.657 3.343 21 5 21 L 19 21 C 20.64497 21 22 19.64497 22 18 L 22 8 A 1.0001 1.0001 0 0 0 20.984375 6.9863281 A 1.0001 1.0001 0 0 0 20 8 L 20 18 C 20 18.56503 19.56503 19 19 19 C 18.448 19 18 18.551 18 18 L 18 5 C 18 3.895 17.105 3 16 3 L 4 3 z M 7 6 L 13 6 C 13.552 6 14 6.448 14 7 L 14 8 C 14 8.552 13.552 9 13 9 L 7 9 C 6.448 9 6 8.552 6 8 L 6 7 C 6 6.448 6.448 6 7 6 z M 7 12 L 13 12 C 13.552 12 14 12.448 14 13 C 14 13.552 13.552 14 13 14 L 7 14 C 6.448 14 6 13.552 6 13 C 6 12.448 6.448 12 7 12 z M 7 16 L 13 16 C 13.552 16 14 16.448 14 17 C 14 17.552 13.552 18 13 18 L 7 18 C 6.448 18 6 17.552 6 17 C 6 16.448 6.448 16 7 16 z"/></svg>`
            },
            {
                name: "Projects",
                href: "projects.html",
                icon: `<svg class="size-6 mb-1 text-gray-100 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M 5.75 3 A 1.0001 1.0001 0 0 0 4.8867188 3.4960938 L 3.1367188 6.4960938 A 1.0001 1.0001 0 0 0 3 7 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 7 A 1.0001 1.0001 0 0 0 20.863281 6.4960938 L 19.113281 3.4960938 A 1.0001 1.0001 0 0 0 18.25 3 L 5.75 3 z M 6.3242188 5 L 17.675781 5 L 18.841797 7 L 5.1582031 7 L 6.3242188 5 z M 10 9 L 14 9 C 14.552 9 15 9.448 15 10 C 15 10.552 14.552 11 14 11 L 10 11 C 9.448 11 9 10.552 9 10 C 9 9.448 9.448 9 10 9 z"/></svg>`
            },
            {
                name: "Wikis",
                href: "wikis.html",
                icon: `<svg class="size-6 mb-1 text-gray-100 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>`
            }
        ];
    }
}