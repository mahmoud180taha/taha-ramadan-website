const introScreen = document.getElementById("introScreen");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

window.addEventListener("load", () => {
  setTimeout(() => {
    introScreen.classList.add("hide");
    document.body.style.overflow = "auto";
  }, 3300);
});

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

const socialToggle = document.getElementById("socialToggle");
const socialMenu = document.getElementById("socialMenu");

socialToggle.addEventListener("click", () => {
  socialMenu.classList.toggle("open");
});

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {
  const target = Number(counter.dataset.target);
  const duration = 1800;
  const startTime = performance.now();

  const updateCounter = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const value = Math.floor(progress * target);

    counter.textContent = value.toLocaleString("en-US");

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  };

  requestAnimationFrame(updateCounter);
};

const resultsSection = document.querySelector(".results-section");

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach(animateCounter);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.35 }
);

counterObserver.observe(resultsSection);