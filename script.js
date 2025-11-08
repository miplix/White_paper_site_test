document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("[data-toggle-nav]");
  const navLinks = document.querySelector("[data-nav-links]");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.getAttribute("data-open") === "true";
      navLinks.setAttribute("data-open", String(!isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.setAttribute("data-open", "false");
      });
    });
  }

  const faq = document.querySelector("[data-faq]");
  if (faq) {
    faq.addEventListener("toggle", (event) => {
      const target = event.target;
      if (target.tagName === "DETAILS" && target.open) {
        faq.querySelectorAll("details").forEach((item) => {
          if (item !== target) {
            item.open = false;
          }
        });
      }
    });
  }
});
