(() => {
  const board_header = document.querySelector('.board__header');

  board_header.addEventListener('click', (e) => {
    const classList = e.target.classList;
    const sideNav = document.querySelector('.header__sidenav');
    
    if (!classList.contains('header__right') && !classList.contains('sidenav__close-btn')) return;
    sideNav.classList.toggle('active');
  })
})();