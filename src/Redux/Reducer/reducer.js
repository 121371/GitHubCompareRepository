import * as actionTypes from '../Action/actionTypes';

const initialState = {
    profileSummaryData: '',
    isFetching: false,
    isError: false,
    error: '',
};

export default (state = initialState, action) => {
    const error = action.error;
    const data = action.data;
    switch(action.type) {
        case actionTypes.FETCH_PROFILE_SUMMARY_START:
            return {...state, isFetching: true}
        case actionTypes.FETCH_PROFILE_SUMMARY_SUCCESS:
            return {...state, profileSummaryData: data, isFetching: false}
        case actionTypes.FETCH_PROFILE_SUMMARY_FAILURE:
            return {...state, isError: true, error}
    }
}
