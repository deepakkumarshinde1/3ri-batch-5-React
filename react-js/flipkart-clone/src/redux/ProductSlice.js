import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    category: [],
    productList: [],
    product: null,
    cart: [],
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
    getProduct: (state) => {
      state.product = null;
    },
    setProduct: (state, action) => {
      let { payload } = action;
      state.product = payload;
    },
    addToCart: (state, action) => {
      let isFound = state.cart.find((prod) => {
        return prod.id === state.product.id;
      });
      if (isFound === undefined) {
        state.cart.push({ ...state.product, qty: 1 });
      }
    },
  },
});

export const {
  getProduct,
  setProduct,
  setCategoryList,
  getCategoryList,
  getProducts,
  setProductList,
  addToCart,
} = ProductSlice.actions;
export default ProductSlice;
