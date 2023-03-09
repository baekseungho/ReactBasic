/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Comment from "./component/Comment";
import CommentList from "./component/CommentList";
import back from "./1.jpg";

function App() {
  return (
    <div className="App">
      {/* {username.map((list, index) => {
        return (
          <div key={index}>
            <Comment name={username[index]} text={usertext[index]} />
          </div>
        );
      })} */}
      {/* <div className="back"></div> */}
      {/* <div style={{ backgroundImage: `url(${back})`, height: "500px" }}></div>
        <img src={process.env.PUBLIC_URL + "2.jpg"} />;
        <div
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/236x/5e/2f/be/5e2fbef92dfde3cad7cc794a9f8b0425.jpg)",
            height: "200px",
          }}
        ></div>
        <img src={back} alt="" /> */}
      <div>
        <CommentList />
      </div>
    </div>
  );
}
export default App;
