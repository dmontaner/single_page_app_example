/**
 * pages/home.js
 *
 * Each page exports a plain object with:
 *   render()  → HTML string    (required)
 *   mount()   → void           (optional – runs after HTML is in DOM)
 *   unmount() → void           (optional – runs before page is removed)
 */
export const homePage = {

  render() {
    return /* html */ `
      <div class="page">
        <h1>🏠 Home</h1>
        <p>Welcome to the single-page app skeleton.</p>
        <p>
          Use the nav links above to switch pages — no full reload happens.
          The URL hash changes (e.g. <code>#/about</code>) and the router
          swaps the content below the nav.
        </p>
        <button id="go-about">Go to About →</button>
      </div>
    `;
  },

  mount(outlet) {
    // Example: attach event listeners after the HTML is in the DOM
    outlet.querySelector('#go-about')
      .addEventListener('click', () => { window.location.hash = '/about'; });
  },

  unmount() {
    // Clean up timers, subscriptions, etc. if needed
  },

};
