import React from "react";

const RockPaperScissors = (props) => {
  let result;
  if (props.title === "Com" && props.result !== "TIE" && props.result !== "") {
    result = props.result === "WIN" ? "LOSE" : "WIN";
  } else if (
    props.title === "You" &&
    props.result !== "TIE" &&
    props.result !== ""
  ) {
    result = props.result === "LOSE" ? "LOSE" : "WIN";
  } else {
    result = "TIE";
  }

  return (
    <div
      className={
        result == "TIE" ? "tie box" : result == "WIN" ? "win box" : "lose box"
      }
    >
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      {/* 해결 방법 : 조건부 렌더링 
          유저가 버튼을 클릭했을 때 useState값이 들어오고,
          값이 변경되면서 item이 img를 그려야 하는데,
          초기값이 null이라 img를 보여주지 못하고 에러 발생!
          => 조건부 렌더링으로 값이 null 아닐때만 실행되게 한다.
          리액트 컴포넌트는 UI를 리턴할 때 
          보여주고자 하는 값이 없다면 에러를 일으킨다.
          item 값이 null 아니라면 우항의 값을 렌더링 한다.
          item값이 null이라면 false를 리턴하니까 
          우항이 실행되지 않는다.(렌더링X)*/}
      <img src={props.item && props.item.img}></img>
      <h2>{result}</h2>
    </div>
  );
};

export default RockPaperScissors;
