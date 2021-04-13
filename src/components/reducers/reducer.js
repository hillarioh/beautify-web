import { createStore } from "redux";

const defaultState = {
  user: "client",
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return Object.assign({}, state, {
        authenticated: true,
        user: action.data,
      });
    case "LOGOUT":
      return Object.assign({}, state, {
        authenticated: false,
      });
    default:
      return state;
  }
};

const store = createStore(authReducer);

export { store };
