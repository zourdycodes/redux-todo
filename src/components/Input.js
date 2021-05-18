import React, { useState } from "react";
import "./styles/Input.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodo = () => {
    console.log(`adding: ${input}`);

    dispatch(
      saveTodo({
        item: input,
        done: false,
        // id: (Date.now() + "").slice(-10),
        id: Date.now(),
      })
    );
  };

  return (
    <div className="input">
      <input
        className="input__text"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        // onClick={(e) => (e.value = "")}
      />
      <button className="input__button" onClick={addTodo}>
        Add!
      </button>
    </div>
  );
}

export default Input;
