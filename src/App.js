import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, [])
  return (
    <h1>Hello</h1>
  );
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // console.log("i run all the time."); // state가 변할 때마다 매번 실행됨
  const onClickShowing = () => setShowing((prev) => !prev);
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); // keyword가 변화할때만 코드를 실행함. counter가 변화할 때는 실행 x
  useEffect(() => {
    console.log("I run when 'keyword | counter' changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <Button text={"Continue"} />
      {showing ? <Hello /> : null}
      <button onClick={onClickShowing}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;