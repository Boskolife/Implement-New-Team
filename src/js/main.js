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
