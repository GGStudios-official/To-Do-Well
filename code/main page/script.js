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