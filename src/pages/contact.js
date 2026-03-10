/**
 * pages/contact.js
 *
 * Example of a page that handles its own form logic inside mount().
 */
export const contactPage = {

  render() {
    return /* html */ `
      <div class="page">
        <h1>✉️ Contact</h1>
        <form id="contact-form" novalidate>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="Your message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
        <p id="form-feedback"></p>
      </div>
    `;
  },

  mount(outlet) {
    outlet.querySelector('#contact-form')
      .addEventListener('submit', e => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        outlet.querySelector('#form-feedback').textContent =
          `Thanks, ${data.name}! (demo — nothing was actually sent)`;
      });
  },

};
