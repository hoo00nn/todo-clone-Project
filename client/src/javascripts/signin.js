import Auth from './utils/auth';

const loginBtn = document.querySelector('#login');

loginBtn.addEventListener('click', async (e) => {
  const id = document.querySelector('#username');
  const pw = document.querySelector('#password');
  const result = await Auth.tryLogin(id.value, pw.value);
  
  if (result.status === 'fail') return alert(result.message);
  return window.location.href = '/board.html';
})