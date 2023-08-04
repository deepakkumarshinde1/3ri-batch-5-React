/**
 * call  ==> call a api
 * put ==> works like dispatch
 * takeEvery ==> if call one 10 time on same time => it hit server 10 time
 * takeLatest ==> if call one 10 time on same time => it only hit  latest call server
 * all ==> set the api call in all
 * */

import { all } from "redux-saga/effects";
import { getCategoryWatcher } from "./product/watcher";

export function* rootSaga() {
  console.log("root");
  let list = [getCategoryWatcher()];
  yield all(list);
}
