import { call, put } from "redux-saga/effects";
import { getCategoryService } from "./service";
import { setCategoryList } from "../../ProductSlice";

export function* getCategoryHandler() {
  console.log("handler");
  let { data } = yield call(getCategoryService);
  yield put(setCategoryList(data));
}
