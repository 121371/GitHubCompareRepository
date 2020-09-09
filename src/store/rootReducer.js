import combineReducer from './node_modules/redux';
import getGithubProfileSummaryReducer from '../Redux/Reducer/reducer';

export default combineReducer({getGithubProfileSummaryReducer: getGithubProfileSummaryReducer})