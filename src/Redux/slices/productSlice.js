import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../Utils/axios/axios";
import { setLoading } from "./appConfigSlice";
import "./product.css";

export const getAllProducts = createAsyncThunk(
  "/api/v1/auth/products",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      let link = `/api/v1/products`;
      const response = await axiosClient.get(link);
      return response.data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const getProductDetail = createAsyncThunk(
  "/api/v1/product/:id",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.get(`/api/v1/product/${body.id}`);
      return response.data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const getAdminProducts = createAsyncThunk(
  "/api/v1/admin/products",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.get("/api/v1/products");
      return response.data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//create Product
export const createProduct = createAsyncThunk(
  "/api/v1/product/admin/new",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const { data } = await axiosClient.post(
        "/api/v1/admin/product/new",
        body
      );
      console.log("This is created Product", data);
      return data;
    } catch (error) {
      return error;
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//Delete Product
export const deleteProduct = createAsyncThunk(
  "/api/v1/product/admin/:id",
  async (body, thunkAPI) => {
    try {
      const { data } = await axiosClient.delete(
        `/api/v1/admin/product/${body}`
      );
      console.log("This is Deleted Product", data);
      return data;
    } catch (error) {
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    success: false,
    message: "",
    error: false,
    isDeleted: false,
    products: [],
    product: {},
  },

  reducers: {
    //Clear Error State
    resetStatusError: (state) => {
      state.error = "";
      state.success = false;
      state.message = "";
      state.isDeleted = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.products = action.payload.result;
        }
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        if (action.payload?.statusCode === 200) {
          state.success = true;
          state.message = "Create Succesfully ";
        } else {
          state.error = action.payload?.message;
        }
      })
      .addCase(getAdminProducts.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.products = action.payload.result;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.isDeleted = true;
        } else {
          state.isDeleted = false;
          state.error = action.payload?.message;
        }
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.product = action.payload.result;
        } else {
          state.error = action.payload?.message;
        }
      });
  },
});

export const productsReducer = productSlice.reducer;
export const { resetStatusError } = productSlice.actions;
export default productsReducer;
