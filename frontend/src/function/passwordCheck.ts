export function passwordEngCheck (password) {
  let reg = /(?=.*?[a-z])(?=.*?[A-Z])/;
  return reg.test(password);
}

export function passwordNumSpcCheck (password) {
  let reg = /(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  return reg.test(password);
}

export function passwordLengthCheck (password) {
  let reg = /^.{8,16}$/;
  return reg.test(password);
}