const Auth = {
  tryLogin: async (username, password) => {
    const response = await fetch(
      'http://localhost:8081/api/user/signin',
      {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username : username, password : password })
      });
    return await response.json();
  },

  tryLogout: async () => {
    const response = await fetch(
      'http://localhost:8081/api/user/logout',
      {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
    return await response.json();
  }
}

export default Auth;