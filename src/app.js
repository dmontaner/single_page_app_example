/**
 * app.js  –  Entry point.
 *
 * This is the only file you need to touch when:
 *   • adding a new page  →  import it and call router.addRoute()
 *   • removing a page    →  delete the import and the addRoute() call
 */

import { Router }        from './router.js';
import { homePage }      from './pages/home.js';
import { aboutPage }     from './pages/about.js';
import { contactPage }   from './pages/contact.js';
import { notFoundPage }  from './pages/notfound.js';

// ── Create the router, pointing at the <main id="app"> outlet ──────────────
const router = new Router('#app');

// ── Register routes ────────────────────────────────────────────────────────
//   router.addRoute( hash-path ,  page-object )
router
  .addRoute('/',        homePage)
  .addRoute('/about',   aboutPage)
  .addRoute('/contact', contactPage)
  .addRoute('*',        notFoundPage);   // must be last — catches everything else

// ── Start ──────────────────────────────────────────────────────────────────
router.init();
