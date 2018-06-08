import { AUTH_USER, SIGN_OUT } from '../actions/types';

const defaultState = {
    isAuth: false,
    error: ''
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case AUTH_USER:
            return action.payload;
        case SIGN_OUT:
            return action.payload;
        default:
            return state;
    }
}
