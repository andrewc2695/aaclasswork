import { connect } from "react-redux";
import { thunkSignup } from "../actions/session_actions";
import SessionForm from "./session_form"

const mapStatetoProps = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'signup',
        linkVal: '/login'
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (formUser => dispatch(thunkSignup(formUser))),

    }
};

export default connect(mapStatetoProps, mapDispatchToProps)(SessionForm);