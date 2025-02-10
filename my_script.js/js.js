document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".sentence-text");
  const textToType = "“To fall in love with yourself is the first secret to happiness.“ - Norman";
  
  let index = 0;

  function typeText() {
    if (index < textToType.length) {
      textElement.textContent += textToType.charAt(index);
      index++;
      setTimeout(typeText, 50); // Adjust speed (lower value = faster typing)
    }
  }

  typeText();
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});


// Hero Section Animation Observer
document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".hero-content h1");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          title.classList.add("animate");
        }
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(title);
});

// About Section Pop Animation
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector("#about");
  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("pop-out-active");
        }
      });
    },
    { threshold: 0.3 }
  );
  aboutObserver.observe(aboutSection);
});

// Pop Animation for Images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".pop-image");

  images.forEach((img, index) => {
    setTimeout(() => {
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    }, index * 300); // Staggered effect (300ms delay per image)
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Select the About Me section
  const aboutSection = document.querySelector("#about");

  // Function to apply the animation
  const animateAboutSection = () => {
    aboutSection.classList.add("animate-pop"); // Add animation class
  };

  // Observer to detect when the section is in view
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateAboutSection();
          observer.unobserve(aboutSection); // Trigger animation only once
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(aboutSection);
});