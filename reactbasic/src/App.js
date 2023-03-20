/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Comment from "./component/Comment";
import CommentList from "./component/CommentList";
import back from "./1.jpg";
import RockPaperScissors from "./component/RockPaperScissors";

const choice = {
  scissors: {
    name: "Scissors",
    img: "https://img.segye.com/content/image/2017/07/04/20170704514679.jpg",
  },
  rock: {
    name: "Rock",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24096bd6-5618-4ef1-90dc-62705654a973/de58xf2-a105c109-81a7-4da9-8363-c94ba8c641be.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0MDk2YmQ2LTU2MTgtNGVmMS05MGRjLTYyNzA1NjU0YTk3M1wvZGU1OHhmMi1hMTA1YzEwOS04MWE3LTRkYTktODM2My1jOTRiYThjNjQxYmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TAnLK5AniQmGnfJCHESDYGbErvbcvKSX2eThhVpEyUI",
  },
  paper: {
    name: "Paper",
    img: "https://image.made-in-china.com/155f0j00ndTaAGuYHDob/Jumbo-Roll-Price-Cheap-Toilet-Tissue-Jumbo-Roll-Paper.jpg",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    console.log(userChoice, "선택됨!");
    setUserSelect(choice[userChoice]);

    // randomChoice()함수를 실행했을 때 결과값
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgment(choice[userChoice], computerChoice));
  };

  const judgment = (user, computer) => {
    // 게임 로직에 대해서 생각 해보기.
    // 어떻게 user, computer 두 값을 비교할건지?
    if (user.name === computer.name) {
      return "TIE";
    } else if (user.name === "Rock")
      return computer.name === "Paper" ? "LOSE" : "WIN";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "WIN" : "LOSE";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "WIN" : "LOSE";
  };

  const randomChoice = () => {
    // 랜덤에서 우리가 가져올 수 있는 값은 숫자
    // 이 값을 데이터랑 어떻게 연결시킬지 고민
    // 배열의 인덱스 번호를 랜덤으로 선택되게 구현

    // 객체에서 인덱스를 번호를 사용하려면 Array로 만들어야 한다.
    // 객체의 key값을 뽑아서 Array로 만들어주는 함수 Object.keys()
    let itemArray = Object.keys(choice);

    // 0부터 1사이에 있는 랜덤한 값을 반환한다.
    // Math.floor 소수점 아래를 버리는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);

    let final = itemArray[randomItem];
    return choice[final];
  };
  return (
    <div className="App">
      <div className="boxList">
        {/* play함수한테 매개변수로 값을 전달한다
        리액트에서는 play() UI를 그려줄 때 해당 함수를 실행 시킨다"
        onClick시 실행되게 하고싶다면 콜백함수 형태로 전달해둬야한다 */}
        <RockPaperScissors title={"You"} item={userSelect} result={result} />
        <RockPaperScissors
          title={"Com"}
          item={computerSelect}
          result={result}
        />
      </div>
      <div className="btnList">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}
export default App;
