import logo from './logo.svg';
import './App.css';

//JSX 언어 (.js파일에서 쓰는 html대용품)
// class 대신 className
// 변수넣을 땐 {중괄호} (databinding)
// style 넣을 땐 style = {{스타일명: '값'}}
function App() {

  let post = '강남 우동 맛집';
  //서버에서 가져온 데이터라 가정

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'} }>블로그임</h4>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
