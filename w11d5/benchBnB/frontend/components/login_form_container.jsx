const mapStatetoProps = (state, ownProps) => {
    return{
        errors: state.errors,
        formType: 'login'
    }
}