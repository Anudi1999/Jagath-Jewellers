## Jagath Jewellers Website & PWA

This project is a simple, fully responsive website for **Jagath Jewellers** (Badulla), built using **HTML, CSS, and JavaScript**. It also includes basic **PWA (Progressive Web App)** support so it can be installed as a mobile app on supported browsers.

### Features

- **Home page** with hero banner, featured categories (necklaces, earrings, rings, pendants, bangles, and more), and a note about fluctuating gold karat prices in Sri Lanka.
- **About page** describing the shop, craftsmanship, and customized bridal jewellery packages.
- **Contact page** with a working contact form (front-end validation) and embedded map placeholder.
- **Mobile‑first, responsive design** that adapts to phones, tablets, and desktops.
- **Installable PWA** so customers can add the site to their home screen on mobile devices.

### Structure

- `index.html` – Home page
- `about.html` – About page
- `contact.html` – Contact page with form
- `styles.css` – Shared styles for all pages
- `script.js` – Shared JavaScript (navigation, form handling, PWA registration)
- `manifest.webmanifest` – PWA manifest
- `sw.js` – Simple service worker for offline caching
- `package.json` – Minimal metadata for the project

### Running the Project

You can open the HTML files directly in a browser, but to fully use the PWA features (service worker and offline caching), it’s best to serve the site over HTTP using a simple static server.

For example, with Node.js installed:

```bash
npm install -g serve
serve .
```

Then open the shown URL in your browser (on mobile or desktop) to view and install the app.

