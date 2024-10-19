import { createSlice } from "@reduxjs/toolkit";
import {
  updateUserInfoThunk,
  changeAvatarThunk,
  deleteAvatarThunk,
  getCurrentUserThunk,
} from "./operations";
import { loginThunk, registerThunk } from "../auth/operations.jsx";
import { createTransactionThunk } from "../transactions/operations.jsx";

const initialState = {
  user: {
    name: "",
    email: "",
    currency: "",
    avatarUrl: null,
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(getCurrentUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserInfoThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserInfoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          ...state.user,
          _id: action.payload?._id,
          name: action.payload?.name,
          currency: action.payload?.currency,
        };
      })
      .addCase(updateUserInfoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changeAvatarThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(changeAvatarThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          ...state.user,
          avatarUrl: action.payload?.avatarUrl,
        };
      })
      .addCase(changeAvatarThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteAvatarThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAvatarThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...state.user, avatarUrl: action.payload?.avatarUrl };
      })
      .addCase(deleteAvatarThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createTransactionThunk.fulfilled, (state, { payload }) => {
        state.user.transactionsTotal[payload.type] += payload.sum;
      });
  },
});
export const userReducer = userSlice.reducer;
