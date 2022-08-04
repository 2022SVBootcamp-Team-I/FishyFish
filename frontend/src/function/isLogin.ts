import { getCookieAccessToken } from "./handleCookie";

export function isLogin() {
  if (getCookieAccessToken()) {
    return true;
  } else
    return false;
};