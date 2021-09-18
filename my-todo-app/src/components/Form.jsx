import React, { useReducer, useState } from "react";
import taskeReducer from "../redocers/taskeReducer";

export const Form = ({ handleTaske }) => {
  // const [newTaske, setNewTaske] = useState("");
  const [task, dispatch] = useReducer(taskeReducer, "");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleTaske(task);
        dispatch({ type: "add", payload: "" });
      }}
      className="add-items d-flex"
    >
      <input
        value={task}
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
        onChange={(e) => {
          dispatch({ type: "add", payload: e.target.value });
        }}
      />
      <button
        type="submit"
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
      >
        Add
      </button>
    </form>
  );
};
