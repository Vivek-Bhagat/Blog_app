/* eslint-disable no-unused-vars */

import { createSlice } from "@reduxjs/toolkit";

// Redux Toolkit: Define initial state
const initialState = {
  status: false,
  userData: null,
};

// Redux Toolkit: Define reducers
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },

    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login,logout } = authSlice.actions;
export default authSlice.reducer;