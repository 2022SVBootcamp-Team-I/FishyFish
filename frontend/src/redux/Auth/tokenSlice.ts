import { createSlice } from "@reduxjs/toolkit";

export interface authToken {
  authenticated: boolean,
  accessToken: null | string,
  expireTime: null | number
}

const initialState: authToken = {
  authenticated: false,
  accessToken: null,
  expireTime: null
}

export const tokenSlice = createSlice({
  name: 'authJWToken',
  initialState,
  reducers: {
    SET_TOKEN: (state, action) => {
      state.authenticated = true;
      state.accessToken = action.payload;
      state.expireTime = new Date().getTime() + 600000
    },
    DELETE_TOKEN: (state) => {
      state.authenticated = false;
      state.accessToken = null;
      state.expireTime = null;
    }
  }
})

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;
export default tokenSlice.reducer;