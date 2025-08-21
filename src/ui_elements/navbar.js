export class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
        window.addEventListener('resize', () => this.render());
    }

    render() {
        const isMobile = window.innerWidth < 768;
        if (!isMobile) this.renderDesktopNavbar();
        else this.renderMobileNavbar();
    }

    renderDesktopNavbar() {
        const links = this.getLinks();
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const activeIndex = links.findIndex(link => link.href.split("/").pop() === currentPage);

        let html = `
        <div class="flex-col items-center hidden md:flex">
            <div class="dark:bg-slate-800 h-20 px-16 mr-8 mb-7 pl-10 rounded-b-2xl flex items-center select-none text-slate-300 text-xl font-bold">
                <img src="../assets/images/icon.png" alt="F&B Logo" class="w-32 h-32 object-contain mr-8">
        `;

        const pyClasses = ["py-10", "py-8", "py-7", "py-6"];
        const hoverClasses = ["hover:bg-gray-600", "hover:bg-gray-500", "hover:bg-gray-400"];

        links.forEach((link, i) => {
            const distance = Math.abs(i - activeIndex);
            const pyClass = pyClasses[distance] || "py-6";
            const hoverClass = i === activeIndex ? "" : hoverClasses[distance] || "hover:bg-gray-400";

            const hrefAttr = i === activeIndex ? "" : `href="${link.href}"`;
            const extraClasses = i === activeIndex ? "bg-slate-700 text-white" : "";

            html += `<a class="px-4 rounded transition-all duration-200 ${pyClass} ${hoverClass} ${extraClasses}" ${hrefAttr}>
                        ${link.name}
                     </a>`;
        });

        html += `</div></div>`;
        this.innerHTML = html;
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
                <img src="../assets/images/icon.png" alt="F&B Logo" class="w-16 h-16 object-contain">
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

    getLinks() {
        return [
            {
                name: "Home",
                href: "../index.html",
                icon: `<svg class="w-5 h-5 mb-1 text-gray-100 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/></svg>`
            },
            {
                name: "News",
                href: "../news.html",
                icon: `<svg class="w-6 h-6 mb-1 text-gray-100 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M 4 3 C 2.895 3 2 3.895 2 5 L 2 18 C 2 19.657 3.343 21 5 21 L 19 21 C 20.64497 21 22 19.64497 22 18 L 22 8 A 1.0001 1.0001 0 0 0 20.984375 6.9863281 A 1.0001 1.0001 0 0 0 20 8 L 20 18 C 20 18.56503 19.56503 19 19 19 C 18.448 19 18 18.551 18 18 L 18 5 C 18 3.895 17.105 3 16 3 L 4 3 z M 7 6 L 13 6 C 13.552 6 14 6.448 14 7 L 14 8 C 14 8.552 13.552 9 13 9 L 7 9 C 6.448 9 6 8.552 6 8 L 6 7 C 6 6.448 6.448 6 7 6 z M 7 12 L 13 12 C 13.552 12 14 12.448 14 13 C 14 13.552 13.552 14 13 14 L 7 14 C 6.448 14 6 13.552 6 13 C 6 12.448 6.448 12 7 12 z M 7 16 L 13 16 C 13.552 16 14 16.448 14 17 C 14 17.552 13.552 18 13 18 L 7 18 C 6.448 18 6 17.552 6 17 C 6 16.448 6.448 16 7 16 z"/></svg>`
            },
            {
                name: "Projects",
                href: "../projects.html",
                icon: `<svg class="w-6 h-6 mb-1 text-gray-100 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M 5.75 3 A 1.0001 1.0001 0 0 0 4.8867188 3.4960938 L 3.1367188 6.4960938 A 1.0001 1.0001 0 0 0 3 7 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 7 A 1.0001 1.0001 0 0 0 20.863281 6.4960938 L 19.113281 3.4960938 A 1.0001 1.0001 0 0 0 18.25 3 L 5.75 3 z M 6.3242188 5 L 17.675781 5 L 18.841797 7 L 5.1582031 7 L 6.3242188 5 z M 10 9 L 14 9 C 14.552 9 15 9.448 15 10 C 15 10.552 14.552 11 14 11 L 10 11 C 9.448 11 9 10.552 9 10 C 9 9.448 9.448 9 10 9 z"/></svg>`
            },
            {
                name: "Wikis",
                href: "../wikis.html",
                icon: `<svg class="w-6 h-6 mb-1 mr-1 text-gray-100 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M 30 9.214844 C 30 9.386719 29.863281 9.523438 29.6875 9.523438 L 28.007813 9.523438 L 20.390625 25.738281 C 20.339844 25.847656 20.230469 25.917969 20.113281 25.917969 C 20.109375 25.917969 20.109375 25.917969 20.109375 25.917969 C 19.988281 25.917969 19.882813 25.851563 19.828125 25.746094 L 16.214844 18.578125 L 12.3125 25.757813 C 12.257813 25.859375 12.15625 25.917969 12.03125 25.917969 C 11.914063 25.914063 11.808594 25.847656 11.757813 25.742188 L 4.054688 9.523438 L 2.3125 9.523438 C 2.140625 9.523438 2 9.386719 2 9.214844 L 2 8.390625 C 2 8.21875 2.140625 8.082031 2.3125 8.082031 L 8.523438 8.082031 C 8.695313 8.082031 8.835938 8.21875 8.835938 8.390625 L 8.835938 9.214844 C 8.835938 9.386719 8.695313 9.523438 8.523438 9.523438 L 7.1875 9.523438 L 12.503906 21.785156 L 15.269531 16.617188 L 11.761719 9.527344 L 10.917969 9.527344 C 10.746094 9.527344 10.605469 9.386719 10.605469 9.214844 L 10.605469 8.394531 C 10.605469 8.222656 10.746094 8.082031 10.917969 8.082031 L 15.515625 8.082031 C 15.6875 8.082031 15.824219 8.222656 15.824219 8.394531 L 15.824219 9.214844 C 15.824219 9.386719 15.6875 9.523438 15.515625 9.523438 L 14.703125 9.523438 L 16.722656 13.9375 L 19.125 9.523438 L 17.652344 9.523438 C 17.476563 9.523438 17.339844 9.386719 17.339844 9.214844 L 17.339844 8.394531 C 17.339844 8.222656 17.476563 8.082031 17.652344 8.082031 L 22.117188 8.082031 C 22.289063 8.082031 22.425781 8.222656 22.425781 8.394531 L 22.425781 9.214844 C 22.425781 9.386719 22.289063 9.523438 22.117188 9.523438 L 21.136719 9.523438 L 17.632813 15.894531 L 20.488281 21.769531 L 26 9.523438 L 24.253906 9.523438 C 24.082031 9.523438 23.941406 9.386719 23.941406 9.214844 L 23.941406 8.394531 C 23.941406 8.222656 24.082031 8.082031 24.253906 8.082031 L 29.6875 8.082031 C 29.863281 8.082031 30 8.222656 30 8.394531 Z"/></svg>`
            }
        ];
    }
}