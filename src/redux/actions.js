export const SET_NOODLES1 = 'SET_NOODLES1';
export const SET_NOODLES2 = 'SET_NOODLES2';
export const SET_NOODLES3 = 'SET_NOODLES3';

export const setNoodles1 = noodles1 => dispatch => {
    dispatch({
        type: SET_NOODLES1,
        payload: noodles1,
    });
};
export const setNoodles2 = noodles2 => dispatch => {
    dispatch({
        type: SET_NOODLES2,
        payload: noodles2,
    });
};
export const setNoodles3 = noodles3 => dispatch => {
    dispatch({
        type: SET_NOODLES3,
        payload: noodles3,
    });
};
