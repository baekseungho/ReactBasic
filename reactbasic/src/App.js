/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  let user = "SeungHo";
  let [count, setCount] = useState(0);
  let [like, setLike] = useState([0, 0, 0]);
  //변수에 들어있는 데이터 html에 넣기
  // JSX 중괄호 문법 사용
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때 Array[ ]
  let [title, setTitle] = useState([
    "DW아카데미 503호",
    "DW아카데미 501호",
    "DW아카데미 203호",
  ]);
  let [myName1, setName1] = useState(["백승호1", "백승호2", "백승호3"]);
  let [myName, setName] = useState(["백승호", "白承昊", "Bai Cheung Hao"]);
  let [bgColor, setBgc] = useState("");
  let changeBg = () => {
    let newBg = bgColor == "white" ? "red" : "white";
    setBgc(newBg);
  };

  const [name2, setName2] = useState(["yejun", "lee", "lala"]);

  // setName2(copy2);

  // map함수가 array의 갯수만큼 return을 반복한다.
  // 매개변수(파라미터)를 만들어주면 함수 파라미터가 array자료 안에 있는 데이터가 된다.
  [1, 2, 3].map(function (num) {
    // return console.log(num);
  });
  let num = [1, 2, 3, 4, 5];
  let newArr = num.map((element) => {
    return element * 3;
  });
  console.log(newArr);
  // let newNum = num.map((num) => num + 1);
  // let newNum1 = num.map((num) => num * 3);
  // console.log(num);
  // console.log(newNum);
  // console.log(newNum1);
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
      {title.map((list, index) => {
        return (
          <div key={index} className="list">
            <h4>{list}</h4>
            {/* <h4>{title[index]}</h4> */}
            <span
              onClick={() => {
                let copy = [...like];
                copy[index] = like[index] + 1;
                setLike(copy);
                console.log(copy);
              }}
            >
              👍 {like[index]}
            </span>
            <p>안녕하세요. 저는 누굴까요?</p>
            <h5>안녕하세요. 저는 {myName1[index]}입니다.</h5>
            <button
              onClick={() => {
                let copy = [...myName];
                // setLike(copy[index]);
                console.log(copy[index]);

                const texts = document.querySelectorAll(".list p");
                texts[
                  index
                ].innerHTML = `안녕하세요. 저는 ${copy[index]}입니다`;
              }}
            >
              이름찾기
            </button>
          </div>
        );
      })}
      {["yejin", "lee", "lala"].map((e) => {
        return e.toUpperCase();
      })}

      {/* <div className="list">
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
      </div> */}
      <button
        onClick={() => {
          let copy = [...myName];
          setName1(copy);
          console.log(copy);
        }}
      >
        이름변경
      </button>
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
      <button
        onClick={() => {
          const copy2 = [...name2];
          copy2.map((e, index) => {
            const change = copy2[index].toUpperCase();
            copy2[index] = change;
            setName2(copy2);
          });
        }}
      >
        변경
      </button>
      {name2}
    </div>
  );
}
export default App;
