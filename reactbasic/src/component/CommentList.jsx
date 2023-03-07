import React from "react";
import Comment from "./Comment";
import { useState } from "react";

function CommentList() {
  const [comments, setComments] = useState([
    {
      name: "백승호1",
      text: "안녕하세요. 백승호 입니다.",
      button: "X",
    },
    {
      name: "백승호2",
      text: "오하요 와따시와 백승호 데스",
      button: "X",
    },
    {
      name: "백승호3",
      text: "다쟈하오 워슈셤머 바이쳥하오",
      button: "X",
    },
  ]);

  function removeThis(index) {
    const copy = [...comments];
    copy.splice(index, 1);
    setComments(copy);
  }

  return (
    <div>
      {comments.map((text, index) => {
        return (
          <Comment
            key={index}
            name={text.name}
            text={text.text}
            button={text.button}
            index={index}
            onClick={removeThis}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
