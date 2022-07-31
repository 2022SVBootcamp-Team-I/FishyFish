import {ChangeEvent, MouseEvent} from "react";

export type onChange = ChangeEvent<HTMLInputElement>;
export type onClick = MouseEvent<HTMLButtonElement>;
export interface UserRegisterProps {
  email: string,
  password: string,
  password2: string,
  username: string
};