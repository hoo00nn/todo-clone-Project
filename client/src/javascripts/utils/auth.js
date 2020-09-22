import request from './request-api';

const Auth = {
  tryLogin: async (username, password) => {
    const response = request(
      'POST',
      '/api/user/signin',
      { username : username, password : password});

    return response;
  },

  tryLogout: async () => {
    const response = request(
      'POST',
     '/api/user/logout');

    return response;
  }
}

export default Auth;