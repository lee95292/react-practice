## CH6. Code : Event

React에서 Event를 작성하는 경우, Button이나 a태그 등에 onclick 메서드로 등록하게 된다.

이 경우, 메서드를 호출(Call)하는 것이 아니기 때문에, 메서드 자체를 등록해주어야 한다. 아래 코드를 보자

**예제 1. 기본 Event App**

```javascript
//eventApp.js
import React from 'react';

function ActionLink(props){
    function handleClick(e){
        e.preventDefault();
        console.log('The Link was clicked');
    }
    return (
        <a href="#" onClick={handleClick}>click link</a>
    );
}

export default ActionLink;
```

( e.preventDefault의 역할은, 링크로 이동하는 동작을 방지하는 것이다. )

return 구문에서, a태그 click시 handleClick을 호출하는 JSX를 반환하고 있다. 
위 코드는 정상적으로 작동한다.

**예제 2. Toggle App**

```javascript
import React from 'react';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={isToggleOn:true};
        
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => (
            {isToggleOn: !state.isToggleOn}
            ));
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn?'ON':'OFF'}
            </button>
        );
    }
}

export default Toggle;
```

