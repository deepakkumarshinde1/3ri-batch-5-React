import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    category: [],
  },
  reducers: {
    getCategoryList: () => {},
    setCategoryList: (state, action) => {
      let { payload } = action;
      state.category = payload;
    },
  },
});

export const { setCategoryList, getCategoryList } = ProductSlice.actions;
export default ProductSlice;
