// import { createSelector } from '@reduxjs/toolkit';

// Define the state slice
export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => {
  return state.auth.isLoggedIn;
};
export const selectEmail = (state) => state.auth.email;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;

// Define a selector for the user's name
// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
// export const selectUser = (state) => state.auth.user;
// export const selectIsRefreshing = (state) => state.auth.isRefreshing;
// export const selectEmail = (state) => state.auth.email;
// export const selectSessionError = (state) => state.auth.sessionError;
