import React from "react";
import Comment from "./Comment";
import { useState } from "react";
const save = [
  {
    name: "백승호1",
    text: "안녕하세요. 백승호 입니다.",
  },
  {
    name: "백승호2",
    text: "こんにちは、白承昊です",
  },
  {
    name: "백승호3",
    text: "你好，我是 白承昊",
  },
  {
    name: "백승호4",
    text: "Hello My name is Beak SeungHo",
  },
];
function CommentList() {
  const [comments, setComments] = useState(save);
  const styles = {
    button: {
      width: "150px",
      height: "40px",
      marginLeft: "15px",
      marginBottom: "5px",
      fontSize: "20px",
    },
    input: {
      width: "150px",
      height: "30px",
      marginLeft: "15px",
    },
  };

  //Input 입력받아서 Add
  const [inputs, setInputs] = useState({ name: "", text: "" });
  const { name, text } = inputs;

  const onCreate = () => {
    const user = {
      name,
      text,
    };
    setComments([user, ...comments]);
    setInputs({
      name: "",
      text: "",
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // ADD2 teacher
  const [name1, setName] = useState("");
  const [content1, setContent] = useState("");

  const addComment = () => {
    const add = { name: name1, text: content1 };
    setComments([...comments, add]);
    setName("");
    setContent("");
  };

  //Reset
  function reset() {
    const copy = [...save];
    setComments(copy);
  }

  //객체 remove
  function removeThis(index) {
    const copy = [...comments];
    copy.splice(index, 1);
    setComments(copy);
    // copy.length === 1 ? reset() : copy.splice(index, 1);
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
      <div style={{ position: "absolute", right: "130px", top: "30px" }}>
        <button style={styles.button} onClick={reset}>
          Reset
        </button>
        <br></br>
        <input
          value={name}
          name="name"
          placeholder="이름을 입력하세요"
          onChange={onChange}
          style={styles.input}
        />
        <input
          value={text}
          name="text"
          placeholder="문구를 입력하세요"
          onChange={onChange}
          style={styles.input}
        />
        <button style={styles.button} onClick={onCreate}>
          On Add
        </button>
        <br></br>
        {/* onChange 이벤트는 input 요소에서 값이 변경될 때 발생
            그 때 발생한 이벤트를 매개변수 e */}
        <input
          style={styles.input}
          placeholder="이름을 입력하세요"
          value={name1}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="문구를 입력하세요"
          value={content1}
          onChange={(e) => setContent(e.target.value)}
        />
        <button style={styles.button} onClick={addComment}>
          Under Add
        </button>
      </div>
    </div>
  );
}

export default CommentList;
