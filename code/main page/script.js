const github = document.getElementById('github');

function jumpAndWave() {
  github.classList.add('jump');

  setTimeout(() => {
    github.classList.remove('jump');
    github.classList.add('wave');
  }, 400); // after jump

  setTimeout(() => {
    github.classList.remove('wave');
  }, 1000); // jump + wave = 1s
}

jumpAndWave();
setInterval(jumpAndWave, 5000);

document.addEventListener('DOMContentLoaded', () => {
  // Animate GitHub icon every 3 seconds
  const github = document.getElementById('github');
  setInterval(() => {
    github.classList.add('jump');
    setTimeout(() => github.classList.remove('jump'), 400);

    setTimeout(() => {
      github.classList.add('wave');
      setTimeout(() => github.classList.remove('wave'), 600);
    }, 500);
  }, 3000);

  // Theme toggle button logic
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Swap GitHub icon based on current theme
    if (document.body.classList.contains('dark')) {
      github.src = 'githubinverted.png';  // Dark mode image
    } else {
      github.src = 'GitHub.png';          // Light mode image
    }
  });
});
