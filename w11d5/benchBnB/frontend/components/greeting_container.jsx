import { connect } from "react-redux"
import { thunkLogout } from "../actions/session_actions"


const mapStatetoProps = (state) => {
    return{
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout: dispatch(thunkLogout)
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Greeting);