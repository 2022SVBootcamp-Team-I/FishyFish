import {ChangeEvent, MouseEvent} from "react";

export type onChange = ChangeEvent<HTMLInputElement>;
export type onClick = MouseEvent<HTMLButtonElement>;
export interface UserProps {
  email: string,
  password: string,
  username: string
};