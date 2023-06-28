import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appConfigSlice";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/user";
import UtilReducer from "./slices/utilsSlice";
export const store = configureStore({
  reducer: {
    app: appReducer,
    products: productReducer,
    user: userReducer,
    util: UtilReducer,
  },
});
