import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            email: "",
            password: ""
        })
    }

    handleChange(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    render(){
        let linkVal = "";
        let linkText = ""
        if(this.props.formType === 'signup'){
            linkVal = '/login'
            linkText = 'Login Instead'
        }else{
            linkVal = '/signup'
            linkText = 'Signup Instead'
        }
        return(
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                    <input type="text" onChange={this.handleChange("email")} value={this.state.email} />
                    </label>
                    <label>Password
                    <input type="password" onChange={this.handleChange("password")} value={this.state.password} />
                    </label>
                    <button type="submit">{this.props.formType}</button>
                </form>
                <Link to={linkVal}>{linkText}</Link>
            </div>
        )
    }
}

export default SessionForm;
