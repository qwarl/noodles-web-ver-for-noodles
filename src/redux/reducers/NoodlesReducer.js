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
            console.log('visa', noodles)
            return { noodles }
            break;
        case 'SET_NOODLES3':
            noodles = {
                ...state.noodles, noodles3: action.payload, remain: state.noodles.remain - 1
            }
            // let countNoodles = { ...state.noodles, noodles1: action.payload, remain: state.noodles.remain - 1 }
            console.log('visa', noodles)
            return { noodles }
            break;
        default: return state
            break;
    }
}
export default NoodlesReducer;