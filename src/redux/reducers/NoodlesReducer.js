/* eslint-disable keyword-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
let defaultState = {
    noodles: {
        noodles1: true,
        noodles2: true,
        noodles3: true,
        remain: 3,
    }
}

let NoodlesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_NOODLES':
            // console.log('paypal', state.noodles.remain-1)
            // console.log("thong: ",action.payload);
            let remain=0;
            if(action.payload.noodles1==true){
                remain+=1;
            }
            if(action.payload.noodles2==true){
                remain+=1;
            }
            if(action.payload.noodles3==true){
                remain+=1;
            }
            noodles = {
                ...state.noodles, 
                noodles1: action.payload.noodles1, 
                noodles2:action.payload.noodles2,
                noodles3:action.payload.noodles3,
                remain: remain
            }
            // let countNoodles = { ...state.noodles, noodles1: action.payload, remain: state.noodles.remain - 1 }
            console.log('visa', noodles)
            return { noodles }
            break;
        case 'SET_NOODLES1':
            // console.log('paypal', state.noodles.remain-1)
            noodles = {
                ...state.noodles, noodles1: action.payload, remain: state.noodles.remain - 1
            }
            // let countNoodles = { ...state.noodles, noodles1: action.payload, remain: state.noodles.remain - 1 }
            console.log('visa', noodles)
            return { noodles }
            break;
        case 'SET_NOODLES2':
            noodles = {
                ...state.noodles, noodles2: action.payload, remain: state.noodles.remain - 1
            }
            // let countNoodles = { ...state.noodles, noodles1: action.payload, remain: state.noodles.remain - 1 }
            console.log('visa2', noodles)
            return { noodles }
            break;
        case 'SET_NOODLES3':
            noodles = {
                ...state.noodles, noodles3: action.payload, remain: state.noodles.remain - 1
            }
            // let countNoodles = { ...state.noodles, noodles1: action.payload, remain: state.noodles.remain - 1 }
            console.log('visa3', noodles)
            return { noodles }
            break;
        default: return state
            break;
    }
}
export default NoodlesReducer;