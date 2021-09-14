import React, { useState } from "react";

export const Form = ({ handleTaske }) => {
  const [newTaske, setNewTaske] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleTaske(newTaske, date, time);
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
      <input
        value={date}
        type="date"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <input
        value={time}
        type="time"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
        onChange={(e) => {
          setTime(e.target.value);
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
