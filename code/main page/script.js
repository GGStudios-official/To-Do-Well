document.addEventListener("DOMContentLoaded", () => {
  const words = document.querySelectorAll(".word");
  const day = document.getElementById("day");
  const github = document.getElementById("github");
  const toggleBtn = document.getElementById("theme-toggle");
  const downloadHelp = document.getElementById("downloadHelp");
  const subTitle = document.getElementById("Sub-title");
  const download = document.getElementById("download");
  const shadowCards = document.querySelectorAll(".shadow-card");

  // Shadow configuration
  const shadowConfig = {
    sensitivity: 20, // Controls how much the shadow/tilt reacts to mouse movement
    maxPushDepth: 10, // Maximum downward push in pixels
    shadowBlurBase: 20, // Base blur for the shadow
    shadowOffsetBase: 4, // Base offset for the shadow
    transitionSpeed: 0.1, // Transition duration in seconds
  };

  // Enable dark mode by default
  document.body.classList.add("dark");
  toggleBtn.classList.add("active");
  github.src = "githubinverted.png";

  // Animate welcome text word by word
  words.forEach((word, i) => {
    setTimeout(() => {
      word.style.opacity = 1;

      if (i === words.length - 1) {
        downloadHelp.style.opacity = 1;
        download.style.opacity = 1;
        download.classList.add("revealed");

        subTitle.style.opacity = 1;
        setTimeout(() => {
          day.classList.add("highlighted");
        }, 500);
      }
    }, i * 800);
  });

  // GitHub icon bounce/wave loop
  function jumpAndWave() {
    github.classList.add("jump");
    setTimeout(() => {
      github.classList.remove("jump");
      github.classList.add("wave");
    }, 400);
    setTimeout(() => {
      github.classList.remove("wave");
    }, 1000);
  }

  jumpAndWave();
  setInterval(jumpAndWave, 5000);

  // Theme toggle
  toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    toggleBtn.classList.toggle("active");

    github.src = isDark ? "githubinverted.png" : "gitHub.png";
  });

  // Dynamic card elevation and shadow effect for multiple elements
  shadowCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate distance from center for tilt and push effect
      const deltaX = (mouseX - centerX) / shadowConfig.sensitivity;
      const deltaY = (mouseY - centerY) / shadowConfig.sensitivity;

      // Push down effect
      const pushDepth = Math.min(
        Math.max((deltaY + 5) / 10, 0),
        shadowConfig.maxPushDepth
      );
      const tiltX = deltaX / 10;
      const tiltY = deltaY / 10;

      // Apply transform for elevation and push
      card.style.transform = `translateZ(0) rotateX(${tiltY}deg) rotateY(${-tiltX}deg) translateY(${pushDepth}px)`;

      // Dynamic soft shadow based on push depth
      const shadowOffset = shadowConfig.shadowOffsetBase - pushDepth / 2;
      const shadowBlur = shadowConfig.shadowBlurBase + pushDepth * 2;
      card.style.boxShadow = `
        ${deltaX}px ${shadowOffset}px ${shadowBlur}px rgba(0, 0, 0, 0.2),
        ${deltaX * 0.5}px ${shadowOffset * 0.5}px ${
        shadowBlur * 0.5
      }px rgba(0, 0, 0, 0.1)
      `;
    });

    card.addEventListener("mouseleave", () => {
      // Reset to default elevated state
      card.style.transform = `translateZ(0)`;
      card.style.boxShadow = `
        0 ${shadowConfig.shadowOffsetBase}px ${
        shadowConfig.shadowBlurBase
      }px rgba(0, 0, 0, 0.2),
        0 ${shadowConfig.shadowOffsetBase / 2}px ${
        shadowConfig.shadowBlurBase / 2
      }px rgba(0, 0, 0, 0.1)
      `;
    });
  });
});
