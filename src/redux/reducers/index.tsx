import { combineReducers } from "redux";

import NoodlesReducer from './NoodlesReducer'

let reducers =combineReducers({
    NoodlesReducer: NoodlesReducer,
})

const rootReducer = (state:any, action:any ) => {
    
    return reducers(state, action);
}

export default rootReducer;