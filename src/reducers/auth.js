import { GET_TOKEN_OK, GET_TOKEN_FAIL, LOGOUT } from "./types";

const initialState = {
  lobby: {
    isLogin: false,
    status: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_OK: {
      return {
        ...state,
        lobby: {
          ...state.lobby,
          isLogin: true,
          status: false,
        },
      };
    }

    case GET_TOKEN_FAIL: {
      return {
        ...state,
        lobby: {
          ...state.lobby,
          status: true,
        },
      };
    }

    case LOGOUT: {
      return {
        ...state,
        lobby: {
          isLogin: false,
          status: null,
        },
      };
    }

    default:
      return { ...state };
  }
};

export default authReducer;
