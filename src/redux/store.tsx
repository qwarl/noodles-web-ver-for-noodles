// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import NoodlesReducer from './reducers/NoodlesReducer';

// const rootReducer = combineReducers({ NoodlesReducer });

// export const Store = createStore(rootReducer, applyMiddleware(thunk));

import { createStore, StoreEnhancer } from "redux";

import reducer from './reducers/index'

export default function configureStore(initialState: any) {
    const store = createStore(reducer, initialState)
    return store;
}