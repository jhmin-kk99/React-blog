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

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
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

  let [따봉, 따봉변경] = useState([0,0,0]);
  //state 변경하는 법, 등호 사용 금지 -> state 변경함수를 사용함. 
  //state변경함수(새로운state)
  //onClick={}안엔 함수넣어야함

 

  //return()안에는 병렬로 태그 2개이상 기입 금지
  //array/object 다룰 때 원본은 보존하는게 좋음
  //state변경함수 특징 -> 기존state == 신규state의 경우 변경안해줌 (자원절약)
  //array/object 담은 변수엔 화살표만 저장됨 ([1,2,3]은 램에 저장되어있음)
  //변수1 & 변수2 화살표가 같으면, 변수1==변수2 비교해도 true나옴
  //array, object는 reference data type임
  
  //let copy = [...글제목]  (괄호 벗겨주세요 -> 화살표 새로 바꿔주세요 -> 괄호를 다시 씌워주세요)
  
  //UI상태 저장
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
 
  let [입력값, 입력값변경] = useState('');
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={
        () => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);

        }
      }>가나다순정렬</button>

      <button onClick={ () => {
        
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);        
        
        }}>글수정</button>

      {/* <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ () => {{ 따봉변경(따봉+1) }} }>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>

      
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={() => {
          {
            modal ? setModal(false):setModal(true)
          }
        }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a,i){
          return (
          //반복문으로 html생성하면 key={html마다 다른숫자} 추가해야함
          <div className='list' key={i}>
            <h4 onClick={() => {
              modal ? setModal(false):setModal(true)
              setTitle(i)
            }}>{ 글제목[i] }</h4> <span onClick={ (e) => {
              // console.log(i)
              // console.log(따봉[i])
               { 
                e.stopPropagation();
                //상위 html로 퍼지는 이벤트버블링을 막고싶으면 e.stopPropagation();
                let copy = [...따봉];
                copy[i] = copy[i]+1;
                따봉변경(copy);
                // console.log(copy)
              }
              } }>👍</span> {따봉[i]}
            <p>2월 17일 발행</p>

            <button onClick={()=>{
              {
               let copy = [...글제목];
               copy.splice(i,1);
               //배열 요소 삭제 (index, 개수)
               글제목변경(copy);
              }
            }}>삭제</button>
          </div>
          
        )
        })
      }
    

    {/* <input>에 뭔가 입력시 코드실행하고 싶으면 onChange/onInput 
    이벤트핸들러 매우 많음, 필요하면 검색해서 쓰면 됨*/}
    <input onChange={(e)=>{
      {
        입력값변경(e.target.value);
        //state변경함수는 늦게처리됨 (비동기처리)
      } 
    }} style={{background : 'lightGray'}}></input>
    <button onClick={()=>{
      {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
        // let copy2 = [...따봉];
        // copy2.push(0);
        // 따봉변경(copy2);
      }
    }} >글발행</button>

    


      {
        // 부모->자식 state전송하는 법
        //1.<자식컴포넌트 작명={state이름}>
        //2.props 파라미터 등록 후 props.작명 사용
        modal == true ? <Modal title={title} color = {'skyblue'} 글제목변경 = {글제목변경}
        글제목={글제목}/> : null
      }
      {/* state 만드는 곳은 state 사용하는 컴포넌트들 중 최상위 컴포넌트 */}
      
      </div>
    
  );


}




//컴포넌트만드는법
        //1. function만들고
        //2. return()안에 html담기
        //3. <함수명></함수명> 또는 </함수명>
//영대문자
//return안에는 하나의 태그에서 하나의 태그로 끝나야함
//return()안에 html 병렬 기입하려면, 큰 div로 감싸면 됨
//의미없는 div 대신 <> </>로 만들면 됨 (fragment)

// 컴포넌트는 언제쓰면 좋은가?
//1. 반복적인 html 축약할 때
//2. 큰 페이지들
//3. 자주 변경되는 것들

//컴포넌트의 단점: state 가져다쓸 때 문제생김
//다른함수에 있는거 가져다써서 그럼

//let(혹은 const) Modal = ()=>{}로 해도됨
//const로 하면 , 실수로 값 변경했을 때 에러를 반환해줌
function Modal(props){
  return(
      <div className='modal' style={{ background : props.color}}>
        <h4>{props.글제목[props.title]}</h4>

        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  )
}

//동적인 UI 만드는 step
//1.html css로 미리 디자인 완성
//2.UI의 현재 상태를 state로 저장
//3.state에 따라 UI가 어떻게 보일지 작성

//html에는 조건문을 쓰기 좀 그럼, 삼항연산자 (ternary operator)으로 대신함



//map 사용법
//[1,2,3].map(function(a, i){
//console.log(a)
//return '123123'  
//})

//1. array 자료 개수만큼 함수안의 코드 실행해줌
//2. 함수의 파라미터는 array안에 있던 자료임
//3. return에 뭐 적으면 array로 담아줌
// i : 반복문이 돌 때마다 1씩 증가하는 정수
export default App;
