for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum ')[i].addEventListener('click', handleClick);
}

document.addEventListener('keydown', (e) => {
  handleSound(e.key);

  handleAnimation(e.key);
});

function handleClick() {
  let clickedDrum = this.innerHTML;

  handleSound(clickedDrum);

  handleAnimation(clickedDrum);
}

function handleSound(key) {
  switch (key) {
    case 'w':
      let crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      let kickBass = new Audio('./sounds/kick-bass.mp3');
      kickBass.play();
      break;
    case 's':
      let snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;
    case 'd':
      let tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'j':
      let tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'k':
      let tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'l':
      let tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log('Wrong character!');
  }
}

function handleAnimation(key) {
  let element = document.querySelector('.' + key);
  element.classList.add('pressed');

  setTimeout(() => {
    element.classList.remove('pressed');
  }, 150);
}
