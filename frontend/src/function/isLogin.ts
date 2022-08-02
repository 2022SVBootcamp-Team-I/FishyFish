import { getCookieToken } from "./handleCookie";

export function isLogin() {
  if (getCookieToken()) {
    return true;
  } else
    return false;
};