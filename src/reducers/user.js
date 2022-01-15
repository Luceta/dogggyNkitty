// toolkit 사용 import { createSlice } from " redux toolkit";

// action Type name

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT = "LOGOUT";
export const REGISTER_USER = "REGISTER_USER";

const initialState = {
  id: "",
  email: "",
  username: "",
  accountname: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state };
    case LOGOUT:
      return { ...state };

    default:
      return { ...state };
  }
};

export default userReducer;
