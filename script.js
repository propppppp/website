const menuToggle = document.querySelector('.menu-toggle');
const slideMenu = document.querySelector('.slide-menu');

menuToggle.addEventListener('click', () => {
  slideMenu.classList.toggle('active');
});

const menuLinks = slideMenu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    slideMenu.classList.remove('active');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    slideMenu.classList.remove('active');
  }
});






const slideContainer = document.querySelector('.slides');
const slides = slideContainer.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slideWidth = slides[0].offsetWidth;

let currentIndex = 1;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    scrollToSlide(currentIndex);
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    scrollToSlide(currentIndex);
  }
});

const scrollToSlide = (index) => {
  const offset = slideWidth * index;
  slideContainer.scrollTo({
    left: offset,
    behavior: 'smooth'
  });
};

slideContainer.addEventListener('scroll', () => {
  currentIndex = Math.round(slideContainer.scrollLeft / slideWidth);
  updateSlideVisibility();
});

const updateSlideVisibility = () => {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add('active');
      slide.classList.remove('previous', 'next');
    } else if (index < currentIndex) {
      slide.classList.remove('active', 'next');
      slide.classList.add('previous');
    } else {
      slide.classList.remove('active', 'previous');
      slide.classList.add('next');
    }
  });
};

scrollToSlide(currentIndex);
