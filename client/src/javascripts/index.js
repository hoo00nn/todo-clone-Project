const checkLogin = async (data) => {
  const response = await fetch('http://localhost:8081/api/signin', {
    method : 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username : data.username, password : data.password })
  });
  return await response.json();
}

const test = document.querySelector('.test');

test.addEventListener('click', async (e) => {
  e.preventDefault();
  const data = {}
  const form = document.querySelectorAll('.login__form input');

  form.forEach(v => data[v.getAttribute('name')] = v.value);
  
  const aaaa = await checkLogin(data);
})