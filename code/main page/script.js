document.addEventListener("DOMContentLoaded", () => {
  const words = document.querySelectorAll(".word");
  const day = document.getElementById("day");
  const github = document.getElementById("github");
  const toggleBtn = document.getElementById("theme-toggle");
  const downloadHelp = document.getElementById("downloadHelp");
  const subTitle = document.getElementById("Sub-title");
  const download = document.getElementById("download");

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
});
