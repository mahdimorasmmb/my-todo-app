import React, { useState } from "react";

export const Form = ({ handleTaske }) => {
  const [newTaske, setNewTaske] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleTaske(newTaske);
        setNewTaske("");
      }}
      className="add-items d-flex"
    >
      <input
        value={newTaske}
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
        onChange={(e) => {
          setNewTaske(e.target.value);
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
