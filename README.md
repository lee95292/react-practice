# react-practice
* [\[react.js 공식 Docs\]](https://ko.reactjs.org/docs/handling-events.html) + [\[webpack\] 공식 Docs](https://webpack.js.org/guides/installation/), react native 소스코드 저장 및 문서화
* [react-training project](https://github.com/ReactTraining) 분석 및 예제 활용코드 작성
* reactjs에서 사용하는, javascript 몰랐던 문법 정리
## 문서화 방법 :  

1. /src/Chapter/Readme.md 에 각 학습내용 정리 / 소스코드 분석하고 문서화
2. 1번에 기록한 내용 익혀서 블로그에 시리즈로 내용 정리

## 개념이 잘 정리된 링크

* [컴포넌트의 특성과 구성 메서드 정리](https://ko.reactjs.org/docs/react-component.html)
* 
## Error

### E01 *. webpack.config.js의 babel-loader가 jsx를 인식하지 못할 때*

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

## E02 *bundle file이 로드되었으나 정상적으로 렌더링을 수행하지 않을 때*

public/index.html, public/main.bundle.js가 존재하는 상황.  
public/index.html에 srcipt의 경로로, main.bundle.js(상대경로 같으므로) 입력해주었는데,  
**전송만 되고 컴포넌트를 로드하지 않는 상황이었음**

**해결 : main.bundle.js의 전체 경로인 /public/main.bundle.js 를 script의 src로 입력, 전송,로드가 모두 수행되었다. **

---

## 나중엔 당연할 수 있지만 지금은 헷갈리는 것들


## javascript 문법

* [export](https://beomy.tistory.com/22) 파일이나 모듈 안의 함수,객체를 외부로 참조가능하도록 함. ES6에 정의된 API

## 궁금한것 체크리스트

- [ ] 가상DOM과 브라우저 DOM 연관관계와 렌더링과정 설명하는 링크 찾고 요약하기

- [x] 컴포넌트에 render() 함수는 어떤 역할인지 정확하게 설명하기
* 컴포넌트에서 구현해야 하는 유일한 메서드
* state와 props를 활용해, **React Element, JSX, null, (Boolean,String,Number), 배열, Fragment**를 반환함
* 반환된 결과를 통해 렌더링을 수행합니다.
* [React Docs: render()](https://ko.reactjs.org/docs/react-component.html#render)

- [ ] CSS를 컴포넌트에 적용하는지, 컴포넌트를 구성하는 HTML에 적용하는지 알아보기

- [ ] import from xxx에서, 파일의 확장자 다 적는경우와 그렇지 않은 경우는 무언인지 (jsx 확장자를 기입하지 않았더니 module not found 뜨는 이유)
