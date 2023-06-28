import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../Utils/axios/axios";
import { setLoading } from "./appConfigSlice";

//Get Session Link
export const getSessionLink = createAsyncThunk(
  "/api/v1/utils/sessionlink",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get("/api/v1/sessionlink");
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

//Create/Update Session Link
export const createSessionLink = createAsyncThunk(
  "/api/v1/admin/sessionLink/create",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post(
        "/api/v1/util/sessionlink/new",
        body
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//Get Form Link
export const getFormLink = createAsyncThunk(
  "/api/v1/utils/sessionlink",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get("/api/v1/util/formlink");
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

//Create/Update Session Link
export const createFormLink = createAsyncThunk(
  "/api/v1/admin/formlink/new",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post(
        "/api/v1/util/formlink/new",
        body
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

// Settings Slice
const utilSLice = createSlice({
  name: "utils",
  initialState: {
    error: "",
    success: false,
  },
  reducers: {
    setStatusResponse: (state, action) => {
      state.success = action.payload;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFormLink.fulfilled, (state, action) => {
        if (action.payload.statusCode == 201) {
          state.success = true;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(createSessionLink.fulfilled, (state, action) => {
        if (action.payload?.statusCode == 201) {
          state.success = true;
        } else {
          state.error = action.payload.message;
        }
      });
  },
});

export default utilSLice.reducer;
export const { setStatusResponse } = utilSLice.actions;
