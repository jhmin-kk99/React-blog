/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//JSX 언어 (.js파일에서 쓰는 html대용품)
// class 대신 className
// 변수넣을 땐 {중괄호} (databinding)
// style 넣을 땐 style = {{스타일명: '값'}}
function App() {

  let post = '강남 우동 맛집';
  //서버에서 가져온 데이터라 가정

  let [글제목, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  // 1. import {useState}
  // 2. useState(보관할 자료)
  // 3. let[작명, 작명]
  // 4. a : useState내용, b: state변경 도와주는함수
  // Destructuring 문법
  // let num = [1, 2];
  // let [a, c] = [1, 2];
  // -> a = num[0], c = num[1]; 
  // state는 내용이 변경되면, html이 자동 재렌더링 됨
  // 자주변경될 것 같은 데이터들에 유용함
  // 1. 변경할 일이 없는 데이터들, 굳이 html에 표기가 필요없는
  // 데이터들은 그냥 변수에 저장해도 됨

  let [따봉, 따봉변경] = useState(0);
  //state 변경하는 법, 등호 사용 금지 -> state 변경함수를 사용함. 
  //state변경함수(새로운state)
  //onClick={}안엔 함수넣어야함

 

  //return()안에는 병렬로 태그 2개이상 기입 금지
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={ () => { {b(['여자코트 추천', '강남 우동맛집', '파이썬 독학'])} }}></button>

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ () => {{ 따봉변경(따봉+1) }} }>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <h4>{ post }</h4>
    </div>
  );


}

export default App;
