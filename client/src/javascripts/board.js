import '../stylesheets/style.css';
import Auth from './utils/auth';

const boardHeader = document.querySelector('.board__header'); 
const logoutButton = document.querySelector('#logout__button');

boardHeader.addEventListener('click', (e) => {
  const classList = e.target.classList;
  const sideNav = document.querySelector('.header__sidenav');
  
  if (!classList.contains('header__right-menu') && !classList.contains('sidenav__close-btn')) return;
  sideNav.classList.toggle('active');
});

logoutButton.addEventListener('click', async () => {
  const isLogout = await Auth.tryLogout();
  
  if(isLogout.status === 'success') return window.location.href='/';
  return alert(isLogout.message);
})
