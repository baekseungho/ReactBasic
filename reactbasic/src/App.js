/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  let user = "SeungHo";
  let [count, setCount] = useState(0);
  //변수에 들어있는 데이터 html에 넣기
  // JSX 중괄호 문법 사용
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때 Array[ ]
  let [title, setTitle] = useState([
    "DW아카데미 503호",
    "DW아카데미 501호",
    "DW아카데미 203호",
  ]);
  let [bgColor, setBgc] = useState("");
  let changeBg = () => {
    let newBg = bgColor == "white" ? "red" : "white";
    setBgc(newBg);
  };
  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Hello, {user} !</h1>
      <p>This is a React App</p>

      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click Me
        </button>
        <h1>클릭시 + {count}</h1>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <span
          onClick={() => {
            setCount(count - 1);
          }}
        >
          💣
        </span>
        <p>안녕하세요. 저는 백승호 입니다.</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <span
          onClick={() => {
            setCount(count - 1);
          }}
        >
          💣
        </span>
        <p>안녕하세요. 저는 백승호 입니다.</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <span
          onClick={() => {
            setCount(count - 1);
          }}
        >
          💣
        </span>
        <p>안녕하세요. 저는 백승호 입니다.</p>
      </div>
      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "리액트 너무 재밌어요!";
          console.log(copy);
          setTitle(copy);
        }}
      >
        1번글제목 변경
      </button>
      <button
        onClick={() => {
          let copy = [...title];
          copy[1] = "리액트 너무 어려워요!";
          setTitle(copy);
        }}
      >
        2번글제목 변경
      </button>
      <button
        onClick={() => {
          let copy = [...title];
          copy[2] = "리액트 너무 리액트!";
          setTitle(copy);
        }}
      >
        3번글제목 변경
      </button>
      <button
        onClick={() => {
          let copy = [...title];
          copy = copy.sort();
          setTitle(copy);
        }}
      >
        제목정렬버튼
      </button>
      <button
        onClick={() => {
          // setBgc(bgColor == "red" ? "white" : "red");
          changeBg();
        }}
      >
        배경색 변경
      </button>
    </div>
  );
}
export default App;
