import { getCookieToken } from "../storage/handleCookie";

export function isLogin() {
  if (getCookieToken()) {
    return true;
  } else
    return false;
};