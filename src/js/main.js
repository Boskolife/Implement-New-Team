import WOW from './wow';

var wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 1,
  mobile: true,
  live: true,
  scrollContainer: null,
  resetAnimation: true,
});
wow.init();
function burgerInit() {
  const burger = document.querySelector('.header_burger');
  const headerContent = document.querySelector('.header_content_burger');

  burger.addEventListener('click', () => {
    headerContent.classList.toggle('show');
    burger.classList.toggle('active');
    document.body.classList.toggle('lock');
  });
}

burgerInit();
