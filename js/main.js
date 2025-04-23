document.addEventListener('DOMContentLoaded', () => {
  // Первый слайдер (например: "Наши ценности")
  new Swiper('.card__container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    speed: 800,
    breakpoints: {
      1200: { slidesPerView: 4 },
      992: { slidesPerView: 3 },
      600: { slidesPerView: 2 },
      576: { slidesPerView: 1 },
      260: { slidesPerView: 1 },
    }
  });

  new Swiper('.custom-card-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1400: { slidesPerView: 'auto' },
      992: { slidesPerView: 'auto' },
      768: { slidesPerView: 2 },
      576: { slidesPerView: 1 },
    }
  });


  equalizeCardHeights();
});

function equalizeCardHeights() {
  const cards = document.querySelectorAll('.custom-card-article');
  let maxHeight = 0;

  cards.forEach(card => {
    card.style.height = 'auto';
  });

  cards.forEach(card => {
    maxHeight = Math.max(maxHeight, card.offsetHeight);
  });


}

