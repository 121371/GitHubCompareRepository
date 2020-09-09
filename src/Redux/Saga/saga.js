import * as actionTypes from "../Action/actionTypes";
import * as actions from "../Action/action";
import { GITHUB_USERS_API_URL } from "../../API/index";
import { all, takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* loadProfileSummary({ userName }) {
  try {
    const data = yield axios.get(`${GITHUB_USERS_API_URL}/${userName}`);
    if (data && data.data) {
      yield put(actions.fetchProfileSummarySuccess(data.data));
    } else {
      yield put(actions.fetchProfileSummaryFailure("error occured"));
    }
  } catch (error) {
    yield put(actions.fetchProfileSummaryFailure(error));
  }
}

export function* watchGetProfileSummary() {
  yield all([
    takeLatest(actionTypes.FETCH_PROFILE_SUMMARY_START, loadProfileSummary),
  ]);
}
