import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setRefreshToken = (refreshToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 1);

  return cookies.set("refresh_token", refreshToken, {
    sameSite: 'strict',
    path: "/",
    expires: new Date(expireDate)
  });
};

export const setAccessToken = (accessToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 1);

  return cookies.set("access", accessToken, {
    sameSite: 'strict',
    path: "/",
    expires: new Date(expireDate)
  });
};

export const getCookieRefeshToken = () => {
  return cookies.get("refresh_token");
};

export const getCookieAccessToken = () => {
  return cookies.get("access");
};

export const removeCookieRefreshToken = () => {
  return cookies.remove("refresh_token", {
    sameSite: "strict",
    path: "/"
  });
};

export const removeCookieAccessToken = () => {
  return cookies.remove("access", {
    sameSite: "strict",
    path: "/"
  });
};