import React from "react";

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
                    <button>SignUp</button>
                </div>
            )
        }
    }
}

export default Greeting;