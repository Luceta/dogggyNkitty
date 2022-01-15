import { getTokenOK, getTokenFail, setCurrentUser } from "../reducers/actions";
import { loginAPI } from "../api/api";

const getToken = (email, password) => async (dispatch) => {
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

export default getToken;
