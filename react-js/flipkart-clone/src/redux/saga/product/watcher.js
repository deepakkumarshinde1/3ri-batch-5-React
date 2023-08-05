import { takeLatest } from "redux-saga/effects";
import { getCategoryList, getProducts } from "../../ProductSlice";
import { getCategoryHandler, getProductsHandler } from "./handler";

export function* getCategoryWatcher() {
  console.log("watcher");
  yield takeLatest(getCategoryList.type, getCategoryHandler);
}

export function* getProductsWatcher() {
  console.log("watcher");
  yield takeLatest(getProducts.type, getProductsHandler);
}
