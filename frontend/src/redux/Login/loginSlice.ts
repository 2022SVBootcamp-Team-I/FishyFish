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
    userLogin: (state, action) => {
      state.email = action.payload.email;
    }
  }
})

export const { userLogin } = loginSlice.actions;
export default loginSlice.reducer;