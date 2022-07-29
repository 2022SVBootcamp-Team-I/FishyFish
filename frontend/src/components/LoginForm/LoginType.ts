import {ChangeEvent, MouseEvent} from "react";

export type onChange = ChangeEvent<HTMLInputElement>;
export type onClick = MouseEvent<HTMLButtonElement>;
export interface UserLoginProps {
  username: string,
  password: string
};