import React, { useState } from "react";

export const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={() => {
        handleLogin(username, password);
        setUsername("");
        setPassword("");
      }}
      className="add-items d-flex login"
    >
      <input
        value={username}
        type="text"
        className="form-control todo-list-input login-item"
        placeholder="Enter User name?"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        value={password}
        type="password"
        className="form-control todo-list-input login-item"
        placeholder="Enter Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button
        type="submit"
        className="add btn btn-primary font-weight-bold todo-list-add-btn login-item"
      >
        Login
      </button>
    </form>
  );
};
