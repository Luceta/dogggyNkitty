import { getTokenOK, getTokenFail, setCurrentUser, updateUserInfo } from "../reducers/actions";
import { loginAPI, uploadProfileAPI } from "../api/api";

export const getToken = (email, password) => async (dispatch) => {
  try {
    const response = await loginAPI(email, password);
    const { user } = await response.json();
    const { token } = user;
    if (token) {
      localStorage.setItem("access_token", token);
      dispatch(getTokenOK());
      dispatch(setCurrentUser(user));
    } else {
      dispatch(getTokenFail());
    }
  } catch (error) {
    dispatch(getTokenFail());
  }
};

export const updateProfile = (user) => async (dispatch) => {
  try {
    const data = {
      user: {
        username: user.username,
        accountname: user.accountname,
        intro: user.intro,
        image: user.image,
      },
    };

    const response = await uploadProfileAPI(data);
    await response.json();
    dispatch(updateUserInfo(user));
  } catch (error) {
    console.log(error, "error");
  }
};
