# react-practice
* [\[react.js 공식 Docs\]](https://ko.reactjs.org/docs/handling-events.html) + [\[webpack\] 공식 Docs](https://webpack.js.org/guides/installation/), react native 소스코드 저장 및 문서화
* [react-training project](https://github.com/ReactTraining) 분석 및 예제 활용코드 작성

### 문서화 방법 :  

1. /src/Chapter/Readme.md 에 각 학습내용 정리 / 소스코드 분석하고 문서화
2. 1번에 기록한 내용 익혀서 블로그에 시리즈로 내용 정리

### 개념이 잘 정리된 링크

* [컴포넌트의 특성과 구성 메서드 정리](https://ko.reactjs.org/docs/react-component.html)
* 
### Error

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

```
// .babelrc
{
    "presets":["@babel/preset-env","@babel/preset-react"]
}
```

---


### 나중엔 당연할 수 있지만 지금은 헷갈리는 것들

* CRA 환경에서는 export default [컴포넌트명]을 해주고, index에서 import [컴포넌트명] from ['파일경로'];


### 궁금한것 체크리스트

- [ ] 가상DOM과 브라우저 DOM 연관관계와 렌더링과정 설명하는 링크 찾고 요약하기

- [x] 컴포넌트에 render() 함수는 어떤 역할인지 정확하게 설명하기
* 컴포넌트에서 구현해야 하는 유일한 메서드
* state와 props를 활용해, **React Element, JSX, null, (Boolean,String,Number), 배열, Fragment**를 반환함
* 반환된 결과를 통해 렌더링을 수행합니다.
* [React Docs: render()](https://ko.reactjs.org/docs/react-component.html#render)

- [ ] CSS를 컴포넌트에 적용하는지, 컴포넌트를 구성하는 HTML에 적용하는지 알아보기

