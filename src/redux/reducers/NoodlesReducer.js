let defaultState = {
    noodles: {
        noodles1: true,
        noodles2: true,
        noodles3: true,
        remain: 3,
    }
}

let NoodlesReducer = (state = defaultState, action) => {
    switch (action.key) {
        case 'SET_NOODLES1':
            return { ...state, noodles1: action.payload }

            break;
        case 'SET_NOODLES2':
            return { ...state, noodles2: action.payload }
            break;
        case 'SET_NOODLES3':
            return { ...state, noodles3: action.payload }
            break;
        default:return state
            break;
    }
}
export default NoodlesReducer;