import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

const reducers = combineReducers({
  products: ProductSlice.reducer,
});

export default reducers;
