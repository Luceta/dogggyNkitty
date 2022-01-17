import { GET_TOKEN_OK, GET_TOKEN_FAIL, LOGOUT } from "./types";

const initialState = {
  lobby: {
    isLogin: false,
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
        },
      };
    }

    case GET_TOKEN_FAIL: {
      return {
        ...state,
        lobby: {
          ...state.lobby,
          isLogin: false,
        },
      };
    }

    case LOGOUT: {
      return {
        ...state,
        lobby: {
          isLogin: false,
        },
      };
    }

    default:
      return { ...state };
  }
};

export default authReducer;
