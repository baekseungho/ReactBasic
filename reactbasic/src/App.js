/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import State from "./component/State";
import Box from "./component/Box";

function App() {
  // State라는거에 반응하기 때문에 react
  // 리액트는 변수 값이 없데이트 됬다고 Ui를 리렌더링하지 않는다.
  // State가 변경 되었을 때만 UI를 리렌더링 한다.

  let num = 0;

  // useState
  // 1. import {useState} fromm 'react'를 데려온다.
  // use State => 리액트에서 제공하는 함수 중 하나 (훅)
  // use State 함수가 무엇을 리턴 하느냐?
  // 아이템이 2개 들어있는 배열(Array)
  // 1. 초기값을 담고 있는 변수
  // 2. state값을 변경할 수 있도록 도와주는 set함수
  // 이 두가지 값을 배열로 리턴한다.
  // state를 변수처럼 사용하면 안되고, 값을 변경할 때는 항상 변경함수를 호출하고
  // 값을 그 안에 집어 넣어야 한다.
  const [count, setCount] = useState(0);
  let increase = () => {
    num = num + 1;
    setCount(count + 1);
    // state값이 업데이트 될 때 마다 function App을 다시 실행 시키면서 변겨오딘 UI를 업데이트
    // 변수는 값을 저장하지 않고 함수가 호출 될 때 마다 초기화 된다.
    console.log("num : " + num, "State : " + count);
  };

  // State의 값 반영이 한 박자씩 늦는 이유
  // State값이 변경되어 함수가 호출 될 때 바로 변경 값을 실행 하는 게 아니라
  // 변경 되어야 하는 set함수들을 싹 모아서 함수가 끝나고나서 한 번에 처리한다. (비동기적)
  // State의 주의할 점 정도로만 알고있도록

  // State는 기존 값을 잃어버리지 않고 기억하고 있다.

  // console.log 두 개 찍히는 이유
  // App.js에 작성한 내용은 index.js를 거쳐서 'root'라는 아이디 값을div에 그려진다.
  // StrictMode
  // 리액트로 개발할 때, 잠재적인 문제가 있는지 검사 해주는 모드
  // StrictMode 스스로 문제점을 찾아주는건 아니지만,
  // 문제가 될 수 있는 함수를 두 번 실행해서 쉽게 문제를 찾을 수 있게 도와주는 역할
  // index.js => index.html 파일과 App.js 파일을 연결해주는 연결 고리
  let [title, setTitle] = useState([1, 2, 3, 4, 5]);
  let [name, setName] = useState([
    "SeungHo",
    "승호",
    "BaiCheungHao",
    "白承昊",
    "캡틴백",
  ]);
  return (
    <div className="App">
      {/* <h1>{count}</h1>
      <button onClick={increase}>+1</button> */}

      {/* <Box num="1" name="SeungHo" />
      <Box num="2" name="승호" />
      <Box num="3" name="BaiCheungHao" />
      <Box num="4" name="白承昊" />
      <Box num="5" name="캡틴백" /> */}
      {title.map((list, index) => {
        return (
          <div key={index}>
            <Box num={title[index]} name={name[index]} />
          </div>
        );
      })}
    </div>
  );
}
export default App;
