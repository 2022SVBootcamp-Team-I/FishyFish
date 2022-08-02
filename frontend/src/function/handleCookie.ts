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

export const getCookieToken = () => {
  return cookies.get("refresh_token");
};

export const removeCookieToken = () => {
  return cookies.remove("refresh_token", {
    sameSite: "strict",
    path: "/"
  });
};