import Auth from './auth';

const User = {
  login: async (id, pw) => {
    return await Auth.tryLogin(id, pw);
  },

  logout: async () => {
    return await Auth.tryLogout();
  }
}

export default User;