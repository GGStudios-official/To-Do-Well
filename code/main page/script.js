document.addEventListener("DOMContentLoaded", () => {
  const words = document.querySelectorAll(".word");
  const day = document.getElementById("day");
  const github = document.getElementById("github");
  const toggleBtn = document.getElementById("theme-toggle");
  const subTitle1 = document.getElementById("Sub-title1");
  const subTitle2 = document.getElementById("Sub-title2");

  // Animate welcome text word by word
  words.forEach((word, i) => {
    setTimeout(() => {
      word.style.opacity = 1;

      // After the last word fades in, apply shimmer to "day"
      if (i === words.length - 1) {
        subTitle1.style.opacity = 100; // or whatever effect you want
        subTitle2.style.opacity = 100;
        setTimeout(() => {
          day.classList.add("highlighted");
        }, 500); // small delay after final word
      }
    }, i * 800); // slower for better visual effect
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
    document.body.classList.toggle("dark");
    toggleBtn.classList.toggle("active");
    github.src = document.body.classList.contains("dark") ? "githubinverted.png" : "GitHub.png";
  });
});
