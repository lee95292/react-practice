//import React from 'react';

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick=this.handleLoginClick.bind(this);
        this.handleLogoutClick=this.handleLogoutClick.bind(this);
        this.state={isLoggedIn:false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn:true})
    }

    handleLogoutClick(){
        this.setState({isLoggedIn:false})
    }

    render(){
        const isLoggedIn=this.state.isLoggedIn;
        let button;

        if(isLoggedIn){
            button = <LogoutButton onclick={this.handleLogoutClick}/>;
        }else{
            button=  <LoginButton onclick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

function UserGreeting(props){
    return <h1>Welcome</h1>;
}

function GuestGreeting(props){
    return <h1>Please sign up</h1>;
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }else{
        return <GuestGreeting />;  
    }
}

function LoginButton(props){
    return (<button onClick={props.onClick}>login</button>);
}

function LogoutButton(props){
    return ( <button onClick={props.onClick}>logout</button>)
}

ReactDOM.render(<LoginControl />,document.getElementById('root'));