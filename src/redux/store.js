// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import NoodlesReducer from './reducers/NoodlesReducer';

// const rootReducer = combineReducers({ NoodlesReducer });

// export const Store = createStore(rootReducer, applyMiddleware(thunk));

import { createStore } from "redux";

import reducer from './reducers'

export default function configureStore(initialState){
    const store= createStore(reducer, initialState)
    return store;
}