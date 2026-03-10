/**
 * pages/notfound.js  –  Catch-all 404 page.
 * Register this with  router.addRoute('*', notFoundPage)
 */
export const notFoundPage = {

  render() {
    return /* html */ `
      <div class="page">
        <h1>404 – Page not found</h1>
        <p>The route <code>${window.location.hash}</code> doesn't exist.</p>
        <a href="#/">← Back to Home</a>
      </div>
    `;
  },

};
