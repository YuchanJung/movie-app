import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); // array도 state를 직접 수정하지 않음. 항상 func 사용
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    else {
      setToDo("");
      setToDos((currentArray) => {
        const newToDo = "my new todo is " + toDo;
        return [newToDo, ...currentArray];
      }
      );
    }
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos])
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li> // key props 넣어주어야 console 상 오류 나지 않음
        ))}
      </ul>
    </div>
  );
}

export default App;