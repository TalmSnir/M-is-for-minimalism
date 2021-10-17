const menuBtn = document.querySelector('.header_menu_btn');
const headerNav = document.querySelector('.header_nav');
if (document.title === 'home') {
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
  const gridPictures = [...document.querySelectorAll('.grid_item_image')];
  const gridImages = gridPictures.map(picture => picture.querySelector('img'));
  gridImages.forEach((img, id) => {
    img.style.opacity = 0;
    img.style.transition =
      'transform 500ms ease-in-out, opacity 300ms ease 100ms';
    img.style.transform =
      id % 2 === 0 ? 'translateX(-100%)' : 'translateX(100%)';
  });
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const target = entry.target.querySelector('img');

        if (entry.isIntersecting) {
          target.style.transform = 'translateX(0)';
          target.style.opacity = 1;
        }
      });
    },
    { root: null, rootMargin: '0px', threshold: 0.2 }
  );
  gridPictures.forEach(picture => observer.observe(picture));
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

  sliderForwardBtn.addEventListener('click', () => {
    interval ? clearInterval(interval) : null;
    nextSlide();
  });
  sliderBackwardBtn.addEventListener('click', () => {
    interval ? clearInterval(interval) : null;
    prevSlide();
  });
}

function toggleHeaderNav() {
  headerNav.classList.toggle('show');
}
function closeHeaderNav(e) {
  e.target.matches('a') ? headerNav.classList.remove('show') : null;
}
menuBtn.addEventListener('click', toggleHeaderNav);
headerNav.addEventListener('click', closeHeaderNav);

// !TODO :
// [] add form validation
// [] change font -sizes-queries
// [] change select and date inputs

if (document.title === 'purchase') {
  const form = document.querySelector('form');

  function handleFormSubmit(e) {
    e.preventDefault();
  }
  form.addEventListener('submit', handleFormSubmit);
}
