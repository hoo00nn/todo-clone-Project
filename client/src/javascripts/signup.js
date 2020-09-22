import '../stylesheets/style.css';
import Auth from './utils/auth';

const signupBtn = document.querySelector('.signup');

signupBtn.addEventListener('click', async () => {
  const id = document.querySelector('#username');
  const pw = document.querySelector('#password');
  const response = await Auth.trySignup(id.value, pw.value);

  if (response.status === 'success') {
    const isLogined = await Auth.tryLogin(id.value, pw.value);
    if (isLogined.status === 'fail') return alert(isLogined.message);
    return window.location.href = '/board.html';
  }
  else alert(response.message);
});