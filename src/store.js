import { createStore, applyMiddleware } from './node_modules/redux';
import createSagaMiddleware from './node_modules/redux-saga';
import { fork } from './node_modules/redux-saga/effects';
import "./node_modules/regenerator-runtime/runtime";

import rootReducer from './Redux/Reducer/reducer';
import { watchGetProfileSummary } from './Redux/Saga/saga';

function* rootSaga() {
    yield fork(watchGetProfileSummary);
}

const sagaMidleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMidleware));
sagaMidleware.run(rootSaga);