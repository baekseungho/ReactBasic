import React from "react";
// import "./Comment.css";
import logo from "./images/user.png";

const styles = {
  wrapper: {
    width: "800px",
    border: "2px solid #333",
    height: "150px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    margin: "15px",
    fontSize: "24px",
    position: "relative",
  },
  user: {
    width: "100px",
    height: "100px",
    margin: "20px",
  },
  button: {
    width: "50px",
    height: "50px",
    position: "absolute",
    right: "25px",
    cursor: "pointer",
  },
};

const Comment = (props) => {
  return (
    <div className="wrapper" style={styles.wrapper}>
      <div className="img-box">
        <img src="user.png" className="user" alt="logo" style={styles.user} />
      </div>
      <div className="content-container">
        <h3>{props.name}</h3>
        <p>{props.text}</p>
      </div>
      <button
        onClick={() => {
          props.onClick(props.index);
        }}
        style={styles.button}
      >
        {props.button}
      </button>
    </div>
  );
};

export default Comment;
