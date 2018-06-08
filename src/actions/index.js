import { AUTH_USER, SIGN_OUT } from './types';

const authData = {
    login: 'Admin',
    pass: '12345'
};

export const userAuth = (login, pass) => dispatch => {
    if(login === authData.login && pass === authData.pass) {
        dispatch({type: AUTH_USER, payload: {isAuth: true, error: ''}})
    } else {
        dispatch({type: AUTH_USER, payload: {error: "Wrong Login or password"}})
    }
};

export const signOut = ( history ) => dispatch => {
    console.log(history);
    // history.push('/');
    dispatch({ type: SIGN_OUT, payload: { isAuth: false }});
};
