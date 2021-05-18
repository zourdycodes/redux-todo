import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

// const todoLists = [
//   {
//     item: "todo-yee",
//     done: false,
//     // id: (Date.now() + "").slice(-10),
//     id: 23232323232,
//   },
//   {
//     item: "todo-yee",
//     done: true,
//     // id: (Date.now() + "").slice(-10),
//     id: 399283922,
//   },
// ];

function App() {
  const todoLists = useSelector(selectTodoList);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoLists.map((i) => (
            <TodoItem name={i.item} done={i.done} id={i.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
