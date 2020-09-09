import * as actionTypes from "./actionTypes";

export const fetchProfileSummaryStart = userName => {
  return {
    type: actionTypes.FETCH_PROFILE_SUMMARY_START,
    userName,
  };
};

export const fetchProfileSummarySuccess = (data) => {
  return {
    type: actionTypes.FETCH_PROFILE_SUMMARY_SUCCESS,
    data,
  };
};

export const fetchProfileSummaryFailure = (error) => {
  return {
    type: actionTypes.FETCH_PROFILE_SUMMARY_FAILURE,
    error,
  };
};
