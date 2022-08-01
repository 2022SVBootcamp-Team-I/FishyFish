export function emailValidation (email) {
  let reg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/ // eslint-disable-line
  return reg.test(email);
}