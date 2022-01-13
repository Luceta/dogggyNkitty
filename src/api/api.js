const BASE_URL = "http://146.56.183.55/";
const SIGN_UP = `${BASE_URL}/user`;

const signupAPI = (email, password, username, accountname, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("accountname", accountname);
  data.append("image", image);

  const options = {
    method: "POST",
    body: data,
  };

  return fetch(SIGN_UP, options);
};

export default signupAPI;
