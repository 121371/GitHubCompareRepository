import { createStore, applyMiddleware } from './node_modules/redux';
import createSagaMiddleware from './node_modules/redux-saga';
import { fork } from 'redux-saga/effects';
import "regenerator-runtime/runtime";

import rootReducer from './Redux/Reducer/reducer';
import { watchGetProfileSummary } from './Redux/Saga/saga';

function* rootSaga() {
    yield fork(watchGetProfileSummary);
}

const sagaMidleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMidleware));
sagaMidleware.run(rootSaga);