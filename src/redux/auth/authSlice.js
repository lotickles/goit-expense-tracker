import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./authOperation";
// import { axios } from 'axios';

const initialAuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, _action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(logIn.pending, (state, _action) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(logOut.pending, (state, _action) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isError = true;
        state.isLoggedIn = false;
      });
  },
});
// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import {
//   loginThunk,
//   logoutThunk,
//   refreshThunk,
//   registerThunk,
// } from './operations';

// const initialState = {
//   accessToken: '',
//   refreshToken: '',
//   sid: '',
//   isLoggedIn: false,
//   isRefreshing: false,
//   error: null,
//   isLoading: false,
//   sessionError: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: builder =>
//     builder
//       .addCase(registerThunk.fulfilled, (state, { payload }) => {
//         state.accessToken = payload.accessToken;
//         state.refreshToken = payload.refreshToken;
//         state.sid = payload.sid;
//         state.error = null;
//         state.isLoggedIn = true;
//         state.sessionError = false;
//       })
//       .addCase(loginThunk.fulfilled, (state, { payload }) => {
//         state.accessToken = payload.accessToken;
//         state.refreshToken = payload.refreshToken;
//         state.sid = payload.sid;
//         state.isLoggedIn = true;
//         state.error = null;
//         state.sessionError = false;
//       })
//       .addCase(logoutThunk.fulfilled, state => {
//         return (state = initialState);
//       })
//       .addCase(refreshThunk.pending, state => {
//         state.sessionError = false;
//         state.isRefreshing = true;
//       })
//       .addCase(refreshThunk.fulfilled, (state, { payload }) => {
//         state.sessionError = false;
//         state.accessToken = payload.accessToken;
//         state.refreshToken = payload.refreshToken;
//         state.sid = payload.sid;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshThunk.rejected, state => {
//         state.sessionError = true;
//         state.isRefreshing = false;
//       })
//       .addMatcher(
//         isAnyOf(registerThunk.pending, loginThunk.pending, logoutThunk.pending),
//         (state, { payload }) => {
//           state.sessionError = false;
//           state.isLoading = true;
//           state.error = null;
//         }
//       )
//       .addMatcher(
//         isAnyOf(
//           registerThunk.rejected,
//           loginThunk.rejected,
//           logoutThunk.rejected
//         ),
//         (state, { payload }) => {
//           state.sessionError = false;
//           state.isLoading = false;
//           state.error = payload.error;
//         }
//       ),
// });

// export const authReducer = authSlice.reducer;
