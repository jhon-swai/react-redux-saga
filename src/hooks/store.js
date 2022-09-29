import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './users/reducer';
import userSaga from './users/saga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ userReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(userSaga);

export default store;
