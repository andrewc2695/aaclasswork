import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const SessionReducer = (oldState = {id: null}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            newState.id = action.currentUser.id;
            return newState;
        case LOGOUT_CURRENT_USER:
            newState.id = null;
            return newState
        default:
            return oldState;
    }
};

export default SessionReducer;