const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.innerHTML = open ? 'Close <span>×</span>' : 'Menu <span>＋</span>';
});
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.innerHTML = 'Menu <span>＋</span>';
}));
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const dialog = document.querySelector("#teaserDialog");
document.querySelector("#playTeaser").addEventListener("click", () => dialog.showModal());
document.querySelector("#closeDialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
