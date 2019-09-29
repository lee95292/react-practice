# react-practice
react.js [공식 Docs](https://ko.reactjs.org/docs/handling-events.html) + [webpack](https://webpack.js.org/guides/installation/), react native 소스코드 저장 및 문서화


## Error

### webpack.config.js의 babel-loader가 jsx를 인식하지 못할 때

[링크](https://codeday.me/ko/qa/20190306/7812.html)

 Module build failed (from C:/Users/MKLee/git/Jclip-proto/node_modules/babel-loader/lib/index.js):
 
 SyntaxError: C:\Users\MKLee\git\Jclip-proto\src\main\webapp\feapps\main\mainViewApp.js: Unexpected token (6:15)

  4 | class MainViewApp extends React.Component{
 
  5 |     render(){

  6 |         return <div className="main">메인 페이지 테스트</div>
  
    |                ^
  
  7 |     }
  
  8 | }

**해결 : babel-preset-env 추가**

```
// .babelrc
{
    "presets":["@babel/preset-env","@babel/preset-react"]
}```

