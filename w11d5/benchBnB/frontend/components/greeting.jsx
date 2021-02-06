import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // debugger
        const currentUser = this.props.currentUser;
        if(currentUser){
            return(
                <div>
                    <h2>Greetings {currentUser.email}</h2>
                    <button onClick={this.props.logout}>Log Out</button>
                </div>
            )
        }else{
            return(
                <div>
                    <Link to='/signup'>SignUp</Link>
                    <br/>
                    <Link to='/login'>Logout</Link>
                </div>
            )
        }
    }
}

export default Greeting;