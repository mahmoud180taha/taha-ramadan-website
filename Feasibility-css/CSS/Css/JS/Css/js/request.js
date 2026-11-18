const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const pageTransition = document.getElementById("pageTransition");

window.addEventListener("load", () => {
  setTimeout(() => {
    pageTransition.classList.remove("is-entering");
  }, 100);
});

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

document.querySelectorAll("a[data-transition]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const destination = link.getAttribute("href");

    if (!destination || destination.startsWith("#")) {
      return;
    }

    event.preventDefault();
    pageTransition.classList.add("is-leaving");

    setTimeout(() => {
      window.location.href = destination;
    }, 480);
  });
});