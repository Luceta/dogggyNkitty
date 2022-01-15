const BASE_URL = "http://146.56.183.55:5050";
const SIGN_UP = `${BASE_URL}/user`;
const LOGIN = `${BASE_URL}/user/login`;
const EMAIL_VALID = `${BASE_URL}/user/emailvalid`;

export const signupAPI = (email, password, username, accountname, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("accountname", accountname);
  data.append("image", image);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };

  return fetch(SIGN_UP, options);
};

export const checkEmailAPI = (email, password) => {
  const data = {
    user: {
      email,
      password,
    },
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(EMAIL_VALID, options);
};

export const loginAPI = (email, password) => {
  const data = {
    user: {
      email,
      password,
    },
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch(LOGIN, options);
};
