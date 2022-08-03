import {configureStore} from "@reduxjs/toolkit";
import registerReducer from "./Register/registerSlice";
import loginReducer from "./Login/loginSlice";
import tokenReducer from "./Auth/tokenSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    authJWToken: tokenReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch