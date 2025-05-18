document.addEventListener("DOMContentLoaded", () => {
  const words = document.querySelectorAll(".word");
  const sun = document.getElementById("sun-icon");
  const day = document.getElementById("day");
  const github = document.getElementById("github");
  const toggleBtn = document.getElementById("theme-toggle");

  // Animate welcome text word by word
  words.forEach((word, i) => {
    setTimeout(() => {
      word.style.opacity = 1;
    }, i * 500);
  });

  // Sun animation: diagonal collide with 'day'
  setTimeout(() => {
    sun.style.opacity = 1;
    sun.style.transform = "translate(calc(-50% + 80px), 120px) scale(1) rotate(45deg)";
  }, 1500);

  // Highlight day text and hide sun after collision
  setTimeout(() => {
    day.classList.add("highlighted");
    sun.style.opacity = 0;
  }, 3000);

  // GitHub cat dance loop
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

  jumpAndWave(); // initial
  setInterval(jumpAndWave, 5000);

  // Stylish Theme toggle
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.classList.toggle("active");

    // Change GitHub icon based on theme
    github.src = document.body.classList.contains("dark") ? "githubinverted.png" : "GitHub.png";
  });
});
