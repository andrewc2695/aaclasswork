import { signup, login, logout} from "../util/session_api_util"


export const RECEIVE_CURRENT_USER = "REVEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser
    })
};

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER,
    })
};

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_ERRORS,
        errors
    })
}

export const thunkLogin = (formUser) => (dispatch) => login(formUser)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)));

export const thunkSignup = (formUser) => dispatch => signup(formUser)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)));

export const thunkLogout = () => dispatch => logout()
    .then(() => dispatch(logoutCurrentUser()));
    
