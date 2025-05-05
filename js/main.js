document
  .getElementById("mobile-menu-toggle")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

document.querySelectorAll(".mlm-accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".mlm-accordion-icon");
    const isOpen = !content.classList.contains("hidden");

    // Close all
    document
      .querySelectorAll(".mlm-accordion-content")
      .forEach((c) => c.classList.add("hidden"));
    document
      .querySelectorAll(".mlm-accordion-icon")
      .forEach((i) => (i.textContent = "+"));

    // Toggle current
    if (!isOpen) {
      content.classList.remove("hidden");
      icon.textContent = "−";
    }
  });
});
let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add("hide-header");
  } else {
    // Scrolling up
    header.classList.remove("hide-header");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
