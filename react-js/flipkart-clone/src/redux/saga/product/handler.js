import { call, put } from "redux-saga/effects";
import {
  getCategoryService,
  getProductService,
  getProductsService,
} from "./service";
import {
  setCategoryList,
  setProduct,
  setProductList,
} from "../../ProductSlice";

export function* getCategoryHandler() {
  try {
    let { data } = yield call(getCategoryService);
    yield put(setCategoryList(data));
  } catch (error) {
    alert("error");
  }
}

export function* getProductsHandler(action) {
  try {
    let { data } = yield call(getProductsService, action.payload);
    yield put(setProductList(data));
  } catch (error) {
    alert("error");
  }
}

export function* getProductHandler(action) {
  try {
    let { data } = yield call(getProductService, action.payload);
    yield put(setProduct(data));
  } catch (error) {
    alert("error");
  }
}
