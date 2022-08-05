import { createSlice } from "@reduxjs/toolkit"

export interface LoginState {
  email: string,
}

const initialState: LoginState = {
  email: "",
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    USER_LOGIN: (state, action) => {
      state.email = action.payload.email;
    },
    USER_LOGOUT: (state) => {
      state.email = "";
    }
  }
})

export const { USER_LOGIN, USER_LOGOUT } = loginSlice.actions;
export default loginSlice.reducer;