// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("is-open");
    siteNav.classList.toggle("is-open", isOpen);
  });

  // Close nav when clicking a link (mobile)
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navToggle.classList.contains("is-open")) {
        navToggle.classList.remove("is-open");
        siteNav.classList.remove("is-open");
      }
    });
  });
}

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

// Contact form validation (front-end only)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const successMessage = document.getElementById("formSuccess");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    const fields = [
      { id: "name", message: "Please enter your name." },
      { id: "email", message: "Please enter a valid email address." },
      { id: "phone", message: "Please enter a valid phone number." },
      { id: "message", message: "Please enter a short message." },
    ];

    fields.forEach(({ id, message }) => {
      const field = document.getElementById(id);
      const group = field?.closest(".form-group");
      const errorEl = document.querySelector(`.error-message[data-for="${id}"]`);

      if (!field || !group || !errorEl) return;

      let fieldValid = field.value.trim().length > 0;

      if (id === "email" && fieldValid) {
        fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
      }

      if (id === "phone" && fieldValid) {
        // Basic Sri Lanka phone pattern (+94 or 0)
        fieldValid = /^(\+94|0)\d{9}$/.test(field.value.replace(/\s/g, ""));
      }

      if (!fieldValid) {
        isValid = false;
        group.classList.add("has-error");
        errorEl.textContent = message;
      } else {
        group.classList.remove("has-error");
        errorEl.textContent = "";
      }
    });

    if (!isValid) {
      if (successMessage) {
        successMessage.hidden = true;
      }
      return;
    }

    // For this static site we only show a success message.
    contactForm.reset();
    if (successMessage) {
      successMessage.hidden = false;
    }
  });
}

// Register service worker for PWA support
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error("Service worker registration failed:", err);
      });
  });
}

