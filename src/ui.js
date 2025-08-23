import { ModCard } from './ui_elements/modCard.js';
import { ScrollButton } from "./ui_elements/scrollButton.js";
import { FnBFooter } from "./ui_elements/fnbFooter.js";
import { NavBar } from "./ui_elements/navbar.js";
import { FancyTitle } from "./ui_elements/fancyTitle.js";
import { DownloadsCounter } from "./ui_elements/downloadsCounter.js";

window.customElements.define('mod-card', ModCard);
window.customElements.define('scroll-button', ScrollButton);
window.customElements.define('fnb-footer', FnBFooter);
window.customElements.define('nav-bar', NavBar);
window.customElements.define('fancy-title', FancyTitle);
window.customElements.define('downloads-counter', DownloadsCounter);