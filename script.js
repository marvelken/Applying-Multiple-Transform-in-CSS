// JavaScript - script.js

let isCardFlipped = false;

function toggleCard() {
  const card = document.querySelector('.card');
  isCardFlipped = !isCardFlipped;

  if (isCardFlipped) {
    card.style.transform = 'rotateY(180deg)';
  } else {
    card.style.transform = 'rotateY(0deg)';
  }
}
