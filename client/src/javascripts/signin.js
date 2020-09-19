import '../stylesheets/style.css';
import User from './utils/user';

const loginBtn = document.querySelector('#login');

loginBtn.addEventListener('click', async (e) => {
  const id = document.querySelector('#username');
  const pw = document.querySelector('#password');
  const isLogined = await User.login(id.value, pw.value);
  
  if (isLogined.status === 'fail') return alert(isLogined.message);
  return window.location.href = '/board.html';
})