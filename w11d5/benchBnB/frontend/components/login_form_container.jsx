import { thunkLogin } from "../actions/session_actions";
import SessionForm from "./session_form";
import { connect } from "react-redux";

const mapStatetoProps = (state, ownProps) => {
    return{
        errors: state.errors,
        formType: 'login',
        linkVal: '/signup'
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        processForm: (formUser => dispatch(thunkLogin(formUser))),

    }
};

export default connect(mapStatetoProps, mapDispatchToProps)(SessionForm);