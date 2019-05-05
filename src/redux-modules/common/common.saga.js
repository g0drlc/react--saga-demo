import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import { history } from "../../history/history";

import { login } from "../services/login.service";
import { commonConstants } from "../../constants/common.constants";

function* appLogin(action) {
  try {
    debugger;
    const response = yield call(login, action.model, "token");
    debugger;
    yield put({ type: commonConstants.lOGIN_SUCCESS, data: response.data });
    history.push("dashboard");
  } catch (error) {
    yield put({ type: commonConstants.ERROR, error });
  }
}

function* watchAppLogin() {
  yield all([takeEvery(commonConstants.LOGIN_REQUEST, appLogin)]);
}

export default [watchAppLogin];
