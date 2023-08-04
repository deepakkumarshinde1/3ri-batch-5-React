import { takeLatest } from "redux-saga/effects";
import { getCategoryList } from "../../ProductSlice";
import { getCategoryHandler } from "./handler";

export function* getCategoryWatcher() {
  console.log("watcher");
  yield takeLatest(getCategoryList.type, getCategoryHandler);
}
