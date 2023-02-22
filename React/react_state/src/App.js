import React from "react";
import Header from "./Header/Header";
import "./App.css";

// const Header = ({ counter }) => {
//   return <h2>{counter}</h2>;
// };

function App() {
  // const [counter, setCounter] = useState(0);
  // const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  // const [todos, setTodos] = useState(["hello", "react"]);

  // const clickHandler = () => {
  //   setCounter(counter + 1);
  // };

  // const toggleVisible = () => {
  //   setIsHeaderVisible(!isHeaderVisible);
  // };

  // const changeSmthInTodo = () => {
  //   const newArr = [...todos];
  //   newArr[0] = Math.random();
  //   setTodos(newArr);
  // };

  return (
    <div className="App">
      <h1>My React App</h1>
      <Header />

      {/* {isHeaderVisible && <Header counter={counter} />} */}

      {/* <button onClick={clickHandler}>inc</button>
      <button onClick={toggleVisible}>toggle header</button>
      <button onClick={changeSmthInTodo}>change smth in todo</button>

      <div>{todos[0]}</div>
      <div>{todos[1]}</div>  */}
    </div>
  );
}

export default App;
