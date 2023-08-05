import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    category: [],
    productList: [],
  },
  reducers: {
    getCategoryList: () => {},
    setCategoryList: (state, action) => {
      let { payload } = action;
      state.category = payload;
    },
    getProducts: () => {},
    setProductList: (state, action) => {
      let { payload } = action;
      state.productList = payload;
    },
  },
});

export const { setCategoryList, getCategoryList, getProducts, setProductList } =
  ProductSlice.actions;
export default ProductSlice;
