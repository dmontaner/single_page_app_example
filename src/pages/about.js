/**
 * pages/about.js
 */
export const aboutPage = {

  render() {
    return /* html */ `
      <div class="page">
        <h1>ℹ️ About</h1>
        <p>This is the About page.</p>
        <p>
          Add your content here. The <code>render()</code> method returns an
          HTML string; the router injects it into <code>#app</code>.
        </p>
      </div>
    `;
  },

  // No mount / unmount needed for a purely static page — just omit them.

};
