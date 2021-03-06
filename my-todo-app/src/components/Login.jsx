import React, { useState } from "react";

export const Login = ({ handleLogin, handleSignin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
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
        onClick={() => {
          handleLogin(username, password);
        }}
        className="add btn btn-primary font-weight-bold todo-list-add-btn login-item"
      >
        Login
      </button>
      <button
        onClick={() => {
          handleSignin(username, password);
        }}
        className="add btn btn-primary font-weight-bold todo-list-add-btn login-item"
      >
        Sign in
      </button>
    </form>
  );
};
