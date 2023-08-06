import { takeLatest } from "redux-saga/effects";
import { getCategoryList, getProduct, getProducts } from "../../ProductSlice";
import {
  getCategoryHandler,
  getProductHandler,
  getProductsHandler,
} from "./handler";

export function* getCategoryWatcher() {
  console.log("watcher");
  yield takeLatest(getCategoryList.type, getCategoryHandler);
}

export function* getProductsWatcher() {
  console.log("watcher");
  yield takeLatest(getProducts.type, getProductsHandler);
}

export function* getProductWatcher() {
  console.log("watcher");
  yield takeLatest(getProduct.type, getProductHandler);
}
