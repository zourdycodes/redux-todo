import { Checkbox } from "@material-ui/core";
import React from "react";
import "./styles/TodoItem.css";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

function TodoItem({ name, done, id }) {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todoItem">
      {/* checkbox */}
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleChange}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      {/* name */}
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
}

export default TodoItem;
