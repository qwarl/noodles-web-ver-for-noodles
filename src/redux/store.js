import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import NoodlesReducer from './reducers/NoodlesReducer';

const rootReducer = combineReducers({ NoodlesReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));