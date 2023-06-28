import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfigSlice",
  initialState: {
    isLoading: false,
    isNavFooterOpen: true,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setNavFooter: (state, action) => {
      state.isNavFooterOpen = action.payload;
    },
  },
});

export default appConfigSlice.reducer;

export const { setLoading,setNavFooter } = appConfigSlice.actions;
