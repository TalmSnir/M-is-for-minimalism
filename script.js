const slides = [...document.querySelectorAll('.slide')];
const sliderForwardBtn = document.querySelector(
  '.slider_control.slider_controls_forward'
);
const sliderBackwardBtn = document.querySelector(
  '.slider_control.slider_controls_back  '
);
const sliderPositionCircles = [
  ...document.querySelectorAll('.slider_position>span'),
];
const menuBtn = document.querySelector('.header_menu_btn');
const headerNav = document.querySelector('.header_nav');

let i = 0;
const interval = setInterval(() => {
  nextSlide();
}, 2000);

function nextSlide() {
  slides[i].classList.remove('active');
  sliderPositionCircles[i].classList.remove('active');
  i = (i + 1) % slides.length;
  slides[i].classList.add('active');
  sliderPositionCircles[i].classList.add('active');
}

function prevSlide() {
  slides[i].classList.remove('active');
  sliderPositionCircles[i].classList.remove('active');
  i = (i - 1 + slides.length) % slides.length;
  slides[i].classList.add('active');

  sliderPositionCircles[i].classList.add('active');
}

function toggleHeaderNav() {
  headerNav.classList.toggle('show');
}
function closeHeaderNav(e) {
  e.target.matches('a') ? headerNav.classList.remove('show') : null;
}
menuBtn.addEventListener('click', toggleHeaderNav);
headerNav.addEventListener('click', closeHeaderNav);
sliderForwardBtn.addEventListener('click', () => {
  interval ? clearInterval(interval) : null;
  nextSlide();
});
sliderBackwardBtn.addEventListener('click', () => {
  interval ? clearInterval(interval) : null;
  prevSlide();
});
