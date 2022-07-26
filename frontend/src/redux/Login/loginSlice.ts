import { createSlice } from "@reduxjs/toolkit"

export interface LoginState {
  email: string,
  password: string,
}

const initialState: LoginState = {
  email: "",
  password: "",
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    }
  }
})

export const { userLogin } = loginSlice.actions;
export default loginSlice.reducer;