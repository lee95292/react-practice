# react-practice
[\[react.js 공식 Docs\]](https://ko.reactjs.org/docs/handling-events.html) + [\[webpack\]](https://webpack.js.org/guides/installation/), react native 소스코드 저장 및 문서화

### 문서화 방법 :  

1. /src/Chapter/Readme.md 에 각 학습내용 정리
2. 블로그에 시리즈로 내용 정리

## Error

*#1. webpack.config.js의 babel-loader가 jsx를 인식하지 못할 때*

[문제 해결 링크](https://codeday.me/ko/qa/20190306/7812.html)

 Module build failed (from C:/Users/MKLee/git/Jclip-proto/node_modules/babel-loader/lib/index.js):
 
 SyntaxError: C:\Users\MKLee\git\Jclip-proto\src\main\webapp\feapps\main\mainViewApp.js: Unexpected token (6:15)

```
 class MainViewApp extends React.Component{
 
     render(){

         return <div className="main">메인 페이지 테스트</div>
  
                 ^
     }
   }
```

**해결 : babel-preset-env 추가**
**Webpack사용하는 경우 웹팩 **Rules > use케이스에 추가해도 된다.**

---

```
// .babelrc
{
    "presets":["@babel/preset-env","@babel/preset-react"]
}
```


### 나중엔 당연할 수 있지만 지금은 헷갈리는 것들

* CRA 환경에서는 export default [컴포넌트명]을 해주고, index에서 import [컴포넌트명] from ['파일경로'];


### 궁금한것 체크리스트

[ ] 컴포넌트에 render() 함수는 어떤 역할인지 정확하게 정리하기
[ ] CSS를 컴포넌트에 적용하는지, 컴포넌트를 구성하는 HTML에 적용하는지 알아보기

### react,js keyword(예약어) 

* Component - prop, state, render, 