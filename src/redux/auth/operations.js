import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://goit-expense-tracker.b.goit.study/api/";

// Utility to add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", {
        name,
        email,
        password,
      });
      setAuthHeader(response.data.token);
      return response.data;
      // console.log('response data', response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  "auth/logIn",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", { email, password });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const refreshThunk = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state?.auth?.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { getCurrentUserThunk } from "../user/operations";

// export const expenseApi = axios.create({
//   baseURL: "https://goit-expense-tracker.b.goit.study/api/",
// });

// export const setToken = (token) => {
//   expenseApi.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
// const clearToken = () => {
//   expenseApi.defaults.headers.common.Authorization = "";
// };

// export const registerThunk = createAsyncThunk(
//   "/register",
//   async ({ name, email, password }, thunkApi) => {
//     try {
//       const { data } = await expenseApi.post("/auth/register", {
//         name,
//         email,
//         password,
//       });
//       await thunkApi.dispatch(loginThunk({ email, password }));
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const loginThunk = createAsyncThunk(
//   "login",
//   async (credential, thunkApi) => {
//     try {
//       const { data } = await expenseApi.post("auth/login", credential);
//       setToken(data.accessToken);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const logoutThunk = createAsyncThunk("logout", async (_, thunkApi) => {
//   try {
//     await expenseApi.get("auth/logout");
//     clearToken();
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

// export const refreshThunk = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkApi) => {
//     const refreshData = {
//       refreshToken: thunkApi.getState().auth.refreshToken,
//       sid: thunkApi.getState().auth.sid,
//     };
//     if (!refreshData.refreshToken) {
//       return thunkApi.rejectWithValue("Token is not exist");
//     }
//     try {
//       setToken(refreshData.refreshToken);
//       const { data } = await expenseApi.post("auth/refresh", {
//         sid: refreshData.sid,
//       });
//       setToken(data.accessToken);
//       thunkApi.dispatch(getCurrentUserThunk());
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// https://goit-expense-tracker.b.goit.study/api/
