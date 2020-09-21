import '../stylesheets/style.css';
import Auth from './utils/auth';

const loginBtn = document.querySelector('#login');

loginBtn.addEventListener('click', async (e) => {
  const id = document.querySelector('#username');
  const pw = document.querySelector('#password');
  const isLogined = await Auth.tryLogin(id.value, pw.value);
  
  if (isLogined.status === 'fail') return alert(isLogined.message);
  return window.location.href = '/board.html';
})