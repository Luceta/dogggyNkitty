import { UPDATE_USER, SET_CURRENT_USER, RESET_CURRENT_USER } from "./types";

const initialState = {
  id: "",
  email: "",
  image: "",
  username: "",
  accountname: "",
  intro: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER: {
      const { email, accountname, image, intro, username, _id: id } = action.payload;

      return {
        ...state,
        id,
        email,
        image,
        username,
        accountname,
        intro,
      };
    }

    case SET_CURRENT_USER: {
      const { email, accountname, image, intro, username, _id: id } = action.payload;

      return {
        ...state,
        id,
        email,
        image,
        username,
        accountname,
        intro,
      };
    }

    case RESET_CURRENT_USER: {
      return {
        ...state,
        id: "",
        email: "",
        image: "",
        username: "",
        accountname: "",
        intro: "",
      };
    }
    default:
      return { ...state };
  }
};

export default userReducer;
