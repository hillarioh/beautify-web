const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const loginUser = (data) => {
  return {
    type: LOGIN,
    data,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

export { loginUser, logoutUser };
