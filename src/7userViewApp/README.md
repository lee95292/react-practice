## CH.7 Code : LoginControl 컴포넌트

[post]()

**역할**: 유저 인증정보에 따라 환영 메시지를 보여준다. 

**동작구조** : User인경우 - UserGreeting, Guest인 경우 - GuestGreeting 컴포넌트를 출력하는 Greeting 컴포넌트를 리턴한다.

이 떄, UserControl 컴포넌트는 isLoggedIn를 status값으로 가지고있어, Greeting컴포넌트를 리턴할 때, isLoggedIn 값을 Greeting에 props로 전달한다.

**특징**

```javascript
line 6: this.handleLoginClick.bind(this)
```

위 구문을 수행하는 이유는 line 25, 27처럼 메서드 자체를 참조하는 경우 javascript의 동작구조상 바인딩 없이 불가하기 때문. 

()까지 붙어 수행하는 구문이 아니라 메서드 자체 참조이기 때문이라는 뜻!