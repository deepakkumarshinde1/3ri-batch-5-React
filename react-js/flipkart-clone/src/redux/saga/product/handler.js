import { call, put } from "redux-saga/effects";
import { getCategoryService, getProductsService } from "./service";
import { setCategoryList, setProductList } from "../../ProductSlice";

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
    console.log(action);
    let { data } = yield call(getProductsService, action.payload);
    console.log(data);
    yield put(setProductList(data));
  } catch (error) {
    alert("error");
  }
}
