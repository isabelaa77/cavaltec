const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

  window.addEventListener('scroll', function() {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 80) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

// Carrusel de servicios
 // Carrusel funcional
const cards = document.querySelectorAll('.card');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;

function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.remove('left', 'active', 'right');
    const total = cards.length;
    const prevIndex = (current - 1 + total) % total;
    const nextIndex = (current + 1) % total;

    if (index === prevIndex) {
      card.classList.add('left');
    } else if (index === current) {
      card.classList.add('active');
    } else if (index === nextIndex) {
      card.classList.add('right');
    }
  });
}

prev.addEventListener('click', () => {
  current = (current - 1 + cards.length) % cards.length;
  updateCarousel();
});

next.addEventListener('click', () => {
  current = (current + 1) % cards.length;
  updateCarousel();
});

updateCarousel();

let startX = 0;
let endX = 0;

const carousel = document.getElementById('carousel');

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (endX < startX - 50) {
    document.querySelector('.next').click(); // Simula clic en el botón siguiente
  } else if (endX > startX + 50) {
    document.querySelector('.prev').click(); // Simula clic en el botón anterior
  }
}
