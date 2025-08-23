export class ScrollButton extends HTMLElement {
    connectedCallback() {
        this.render();
        this.button = this.querySelector("div");

        this.button.addEventListener("click", () => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
        });

        this.handleScroll();
        window.addEventListener("scroll", () => this.handleScroll());
    }

    render() {
        this.innerHTML = `<div class="fixed sm:bottom-4 bottom-16 right-4 bg-white dark:bg-slate-900 size-10 rounded-full p-2 ring-1 ring-gray-900/5 dark:ring-white/20 shadow-lg transition-opacity duration-300 hover:bg-slate-600">
          <svg class="size-6 text-rose-800" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>`;
    }

    handleScroll() {
        if (!this.button) return;
        const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

        if (atBottom) this.button.classList.add("opacity-0", "pointer-events-none");
        else this.button.classList.remove("opacity-0", "pointer-events-none");
    }
}
