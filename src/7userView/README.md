## CH.7 

### Code_1 : LoginControl 컴포넌트

[post]()
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
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

export default LoginControl;
```
**역할**: 유저 인증정보에 따라 환영 메시지, 로그인 버튼을 보여준다. 

**동작구조** : ( (UserGreeting | GuestGreeting) >Greeting ) + (LoginButton | LogoutButton) > \[LoginControll\]

**설명**

```javascript
line 6: this.handleLoginClick.bind(this)
```

위 구문을 수행하는 이유

1. status를 수정할 수 있는 방법은 constructor를 이용하거나 setStatus를  사용하는 방법 뿐이기에, setStatus를 담당해주는 함수 생성.

```javascript
return (<button onClick={props.onClick}>login</button>);
```

2. 위처럼, 메서드 자체를 참조하는 경우 javascript의 동작구조상 바인딩 없이 불가하기 때문. 


### Code_2 MailBox 컴포넌트 : 조건부 렌더링

```javascript
import React from 'react';
import ReactDom from 'react-dom';

function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return(
        <div>
            <h1>Hello!</h1>
            {
                unreadMessages>0 &&
                <h3>You have {unreadMessages} unread messages</h3>
            }
        </div>
    );
}

const messages= ['one','two','three'];

ReactDom.render(<Mailbox unreadMessages={messages}/>, document.getElementById('root'));
```

동작 : 읽지 않은 메시지가 존재하는 경우에만 조건부로 렌더링 수행

```javascript
// Code 2-1
{
    unreadMessages>0 &&
    <h3>You have {unreadMessages} unread messages</h3>
}
```

```javascript
// Code 2-2
    unreadMessages>0?
    (<h3>You have {unreadMessages} unread messages</h3>)
    :  
    (null)       
```

**설명**

* 2-1: unreadMessages>0인 경우, 전체 논리식이 true이므로 JSX리턴하는 문법 제공. 

* 2-2: 삼항연산자 제공(또한, 의도적으로 JSX대신 null을 리턴하는 경우, 렌더링되지 않음.)
