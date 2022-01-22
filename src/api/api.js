const BASE_URL = "http://146.56.183.55:5050";
const SIGN_UP = `${BASE_URL}/user`;
const LOGIN = `${BASE_URL}/user/login`;
const EMAIL_VALID = `${BASE_URL}/user/emailvalid`;
const UPLOAD_IMAGE = `${BASE_URL}/image/uploadfile`;
const UPLOAD_PRODUCT = `${BASE_URL}/product`;
const ACCOUNT_VALID = `${BASE_URL}/user/accountnamevalid`;

export const signupAPI = (email, password, username, accountname, intro, image) => {
  const data = {
    user: {
      email,
      password,
      username,
      accountname,
      intro,
      image,
    },
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(SIGN_UP, options);
};

export const checkEmailAPI = (email) => {
  const data = {
    user: {
      email,
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

export const imageUploadAPI = (files) => {
  const formData = new FormData();
  formData.append("image", files[0]);

  const options = {
    method: "POST",
    body: formData,
  };

  return fetch(UPLOAD_IMAGE, options);
};

export const uploadProduct = (product) => {
  const data = {
    product,
  };

  const key = localStorage.getItem("access_token");

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(UPLOAD_PRODUCT, options);
};

export const uploadProfileAPI = (profile) => {
  const key = localStorage.getItem("access_token");
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  };

  return fetch(SIGN_UP, options);
};

export const checkAccountAPI = (accountname) => {
  const data = {
    user: {
      accountname,
    },
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(ACCOUNT_VALID, options);
};
