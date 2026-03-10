/**
 * router.js  –  A minimal hash-based SPA router.
 *
 * USAGE
 * ─────
 *   import { Router } from './router.js';
 *
 *   const router = new Router('#app');          // CSS selector of the outlet
 *
 *   router.addRoute('/',        homePage);      // page objects (see below)
 *   router.addRoute('/about',   aboutPage);
 *   router.addRoute('/contact', contactPage);
 *   router.addRoute('*',        notFoundPage);  // catch-all / 404
 *
 *   router.init();                              // start listening
 *
 *
 * PAGE CONTRACT
 * ─────────────
 * Every "page" must be an object with at least a render() method:
 *
 *   {
 *     render()  → string          HTML to inject into the outlet
 *     mount()   → void  (optional) called after the HTML is in the DOM
 *     unmount() → void  (optional) called before the page is replaced
 *   }
 */

export class Router {
  #routes  = new Map();   // path → page object
  #current = null;        // currently active page object
  #outlet  = null;        // DOM element that holds the page

  constructor(outletSelector = '#app') {
    this.#outlet = document.querySelector(outletSelector);
    if (!this.#outlet) throw new Error(`Router: outlet "${outletSelector}" not found`);
  }

  // ── Register a route ──────────────────────────────────────────────────────
  addRoute(path, page) {
    this.#routes.set(path, page);
    return this;           // allow chaining
  }

  // ── Start the router ──────────────────────────────────────────────────────
  init() {
    window.addEventListener('hashchange', () => this.#resolve());
    this.#resolve();   // render the page for the current URL on first load
  }

  // ── Navigate programmatically ─────────────────────────────────────────────
  navigate(path) {
    window.location.hash = path;
  }

  // ── Internal: match hash → page → render ──────────────────────────────────
  #resolve() {
    // Strip the leading '#' from  e.g.  '#/about'  →  '/about'
    const hash = window.location.hash.slice(1) || '/';

    const page =
      this.#routes.get(hash) ??          // exact match
      this.#routes.get('*');             // fallback / 404

    if (!page) {
      this.#outlet.innerHTML = `<div class="page"><h1>404</h1><p>No route for "${hash}".</p></div>`;
      return;
    }

    // Teardown the previous page
    if (this.#current?.unmount) this.#current.unmount();

    // Inject HTML
    this.#outlet.innerHTML = page.render();
    this.#current = page;

    // Post-render hook (attach event listeners, fetch data, etc.)
    if (page.mount) page.mount(this.#outlet);

    // Highlight the matching nav link
    this.#updateActiveLink(hash);
  }

  // ── Mark the correct <a> as .active ───────────────────────────────────────
  #updateActiveLink(hash) {
    document.querySelectorAll('nav a').forEach(a => {
      const linkPath = new URL(a.href).hash.slice(1) || '/';
      a.classList.toggle('active', linkPath === hash);
    });
  }
}
